import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mb-10 bg-white  font-[500] text-[14px] leading-[22px] text-black/70 tracking-[0px] ">


            <header className="mb-6">
                <h1
                    style={{ fontFamily: 'Wix Madefor Display' }}
                    className="text-[26px] tracking-[-0.29px]  text-black/70 font-extrabold text-center">Oblivion<span className="text-[#B50B90]">.</span></h1>
                <h2
                    style={{ fontFamily: 'Wix Madefor Display' }}
                    className="text-[38px]  leading-[70px] tracking-[-1px]  text-black font-[800] text-center">Privacy Policy</h2>
                <div className='mt-5' >
                    <p>Oblivion LLC</p>
                    <p>1309 Coffeen Avenue, STE 1200</p>
                    <p>Sheridan, WY 82801</p>
                    <p>Effective Date: 24 March 2025</p>
                </div>
            </header>

            <div className="space-y-6">
                <section>
                    <h3 className=" text-lg  font-[700]">1. Introduction</h3>
                    <p>This Privacy Policy explains how Oblivion LLC ("we", "us", "our") collects, uses, and protects your information when you use our website.</p>
                </section>

                <section>
                    <h3 className="font-[700] ">2. Information We Collect</h3>
                    <p>We collect the following information when you contact us through our website:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Message content</li>
                        <li>IP address (when an email is sent)</li>
                    </ul>
                    <p className="mt-3">Additionally, we use Google Analytics to track website traffic, which may collect anonymized data such as device type, browser type, and interaction with our website.</p>
                </section>

                <section>
                    <h3 className="text-lg  font-[700]">3. How We Use Your Information</h3>
                    <p>We use the collected information to:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Respond to your inquiries, complaints, or suggestions</li>
                        <li>Improve our website and services</li>
                        <li>Ensure website security and prevent fraudulent activity</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg  font-[700]">4. Data Sharing</h3>
                    <p>We do not sell, rent, or trade your personal information. However, we may disclose information if required by law or to protect our legal rights.</p>
                </section>

                <section>
                    <h3 className="text-lg  font-[700]">5. Data Security</h3>
                    <p>We implement reasonable security measures to protect your information. However, no online transmission is completely secure, and we cannot guarantee absolute security.</p>
                </section>

                <section>
                    <h3 className="text-lg  font-[700]">6. Cookies and Tracking Technologies</h3>
                    <p>We use Google Analytics, which may place cookies on your device to collect anonymized website usage data. You can manage cookie preferences through your browser settings.</p>
                </section>

                <section>
                    <h3 className="text-lg  font-[700]">7. Your Rights</h3>
                    <p>You may contact us via our contact form to request access, correction, or deletion of your personal information, subject to legal limitations.</p>
                </section>

                <section>
                    <h3 className="text-lg  font-[700]">8. Changes to This Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>
                </section>


                <section>
                    <p>For any questions regarding this Privacy Policy, please contact us via the contact form.</p>
                </section>

            </div>
        </div>
    );
};

export default PrivacyPolicy;