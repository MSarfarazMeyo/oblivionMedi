import React, { useState, FormEvent, useEffect } from 'react';
// Notice: We don't use the react-google-recaptcha package for Enterprise implementation
// import ReCAPTCHA from 'react-google-recaptcha';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  product: string;
  name: string;
  message: string;
}

const ContactPage: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const [formData, setFormData] = useState<FormData>({
    email: '',
    product: '',
    name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [clientIp, setClientIp] = useState<string>('');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA Enterprise script
  useEffect(() => {
    const loadRecaptchaScript = () => {
      // Create script element for reCAPTCHA Enterprise
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);

      // Add script to document
      document.head.appendChild(script);

      return () => {
        // Cleanup script when component unmounts
        document.head.removeChild(script);
      };
    };

    if (open) {
      return loadRecaptchaScript();
    }
  }, [RECAPTCHA_SITE_KEY, open]);

  // Execute reCAPTCHA when form is about to be submitted
  const executeRecaptcha = async (): Promise<string> => {
    if (recaptchaLoaded && window.grecaptcha) {
      try {
        const token = await new Promise<string>((resolve, reject) => {
          window.grecaptcha.enterprise.ready(() => {
            window.grecaptcha.enterprise
              .execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact_form' })
              .then(resolve)
              .catch(reject);
          });
        });
        return token;
      } catch (error) {
        console.error('reCAPTCHA error:', error);
        throw new Error('Failed to execute reCAPTCHA verification');
      }
    } else {
      throw new Error('reCAPTCHA not loaded');
    }
  };

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setClientIp(data.ip);
      } catch (error) {
        console.error("Couldn't fetch IP:", error);
      }
    };

    fetchIp();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear messages when user starts typing again
    setSubmitError(null);
    setSubmitSuccess(null);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      // Execute reCAPTCHA and get token just before submission
      const token = await executeRecaptcha();

      const response = await fetch(`${API_URL}/api/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ip: clientIp,
          recaptchaToken: token,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      // Set success message
      setSubmitSuccess(
        'Message sent successfully! We will get back to you soon.'
      );

      // Reset form after successful submission
      setFormData({
        email: '',
        product: '',
        name: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Error sending message';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[rgba(0,0,0,0.5)]">
      {/* Backdrop */}

      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl relative z-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            &times;
          </button>
          <header>
            <h1
              style={{ fontFamily: 'Wix Madefor Display' }}
              className="text-[26px] tracking-[-0.29px]  text-black/70 font-extrabold text-center"
            >
              Oblivion<span className="text-[#B50B90]">.</span>
            </h1>

            <h2
              style={{ fontFamily: 'Wix Madefor Display' }}
              className="text-[38px]  leading-[70px] tracking-[-1px]  text-black font-[800] text-center"
            >
              Write Us
            </h2>
            <p className="text-gray-600 text-sm text-center lg:text-left  lg:mb-0">
              If you're using one of our products and need further assistance
              beyond our support team, you can submit an appeal, file a
              complaint, or offer a suggestion here. Simply fill out the form
              below and we'll get back to you in maximum 48 hours.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6 ">
            {/* Form fields remain the same */}
            <div>
              <label
                htmlFor="email"
                className="block  text-[#1E0E62] uppercase my-1 lg:my-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full px-3 py-2 border-1 border-[#EBEAED]/70 rounded-md  focus:outline-none focus:ring-1  focus:ring-[#1E0E62]/10"
              />
            </div>

            <div>
              <label
                htmlFor="product"
                className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]"
              >
                PRODUCT
              </label>
              <select
                id="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-1 border-[#EBEAED] rounded-md  focus:outline-none focus:ring-1 focus:ring-[#1E0E62]/10"
              >
                <option value="">Choose the product</option>
                <option value="Verbyo">Verbyo</option>
                <option value="Digital Legacy">Digital Legacy</option>
                <option value="LopoApp">LopoApp</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]"
              >
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-3 py-2 border-1 border-[#EBEAED] rounded-md  focus:outline-none focus:ring-1 focus:ring-[#1E0E62]/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]"
              >
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Please enter your message in the box below. Providing as many details as possible about your issue will help us investigate it more efficiently..."
                required
                className="w-full px-3 py-2 border-1 border-[#EBEAED] rounded-md  focus:outline-none focus:ring-1 focus:ring-[#1E0E62]/10"
              />
            </div>

            {/* No visible reCAPTCHA widget for Enterprise version */}
            {/* Enterprise reCAPTCHA runs silently in the background */}

            {submitError && (
              <div className="text-red-500 text-sm text-center">
                {submitError}
              </div>
            )}

            {submitSuccess && (
              <div className="text-green-500 text-sm text-center">
                {submitSuccess}
              </div>
            )}

            <div className="mx-auto w-full flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full lg:w-[120px] bg-[#B50B90] text-white py-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E0E62]/10 ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-purple-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Add TypeScript interface for the global grecaptcha object
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string }
        ) => Promise<string>;
      };
    };
  }
}

export default ContactPage;
