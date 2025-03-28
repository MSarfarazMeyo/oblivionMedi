import React, { useState, FormEvent, useEffect } from 'react';

interface FormData {
    email: string;
    product: string;
    name: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [formData, setFormData] = useState<FormData>({
        email: '',
        product: '',
        name: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);


    const [clientIp, setClientIp] = useState<string>('');

    console.log("clientIp", clientIp);


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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const submitForm = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch(`${API_URL}/api/email/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, ip: clientIp })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send message');
            }

            alert('Message sent successfully!');
            // Reset form after successful submission
            setFormData({
                email: '',
                product: '',
                name: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Error sending message';
            setSubmitError(errorMessage);
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        submitForm(formData);
    };

    return (
        <div className="min-h-screen bg-white flex justify-center px-4 py-8 font-[500] text-[14px] leading-[22px] text-black/70 tracking-[0px]">
            <div className="w-full max-w-xl">


                <header className="mb-6">
                    <h1
                        style={{ fontFamily: 'Wix Madefor Display' }}
                        className="text-[26px] tracking-[-0.29px]  text-black/70 font-extrabold text-center">Oblivion<span className="text-[#B50B90]">.</span></h1>
                    <h2
                        style={{ fontFamily: 'Wix Madefor Display' }}
                        className="text-[38px]  leading-[70px] tracking-[-1px]  text-black font-[800] text-center">Write Us</h2>
                    <p className="text-gray-600 text-sm text-center lg:text-left  lg:mb-0">
                        If you're using one of our products and need further assistance beyond our support
                        team, you can submit an appeal, file a complaint, or offer a suggestion here.
                        Simply fill out the form below and we'll get back to you in maximum 48 hours.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-6 ">
                    <div>
                        <label htmlFor="email" className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]">
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


                        <label htmlFor="product" className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]">
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

                        <label htmlFor="name" className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]">
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


                        <label htmlFor="name" className="block  text-[#1E0E62] uppercase mb-1 lg:mb-2 font-[700] text-[14px] leading-[26px]  tracking-[2px]">
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

                    {submitError && (
                        <div className="text-red-500 text-sm text-center">
                            {submitError}
                        </div>
                    )}

                    <div className='mx-auto w-full flex justify-center'>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full lg:w-[120px] bg-[#B50B90] text-white py-4 rounded-full hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 cursor-pointer focus:ring-[#1E0E62]/10 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;