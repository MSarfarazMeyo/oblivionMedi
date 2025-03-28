import React from 'react';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mb-10 bg-white  font-[500] text-[14px] leading-[22px] text-black/70 tracking-[0px] ">


            <header className="mb-6">
                <h1
                    style={{ fontFamily: 'Wix Madefor Display' }}
                    className="text-[26px] tracking-[-0.29px]  text-black/70 font-extrabold text-center">Oblivion<span className="text-[#B50B90]">.</span></h1>
                <h2
                    style={{ fontFamily: 'Wix Madefor Display' }}
                    className="text-[32px] lg:text-[38px]  leading-[70px] tracking-[-1px]  text-black font-[800] text-center">Terms & Conditions</h2>
                <div className='mt-5' >
                    <p>Oblivion LLC</p>
                    <p>1309 Coffeen Avenue, STE 1200</p>
                    <p>Sheridan, WY 82801</p>
                    <p>Effective Date: 24 March 2025</p>
                </div>
            </header>

            <div className="space-y-6">
                <section>
                    <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
                    <p>Welcome to the official website of Oblivion LLC ("we", "us", "our"). By accessing and using our website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our website.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">2. Website Use</h3>
                    <p>This website is for informational and presentation purposes only. Users can browse our digital products and send inquiries, complaints, or suggestions regarding our services. There are no features requiring user sign-up or login.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">3. User Communication</h3>
                    <p>Users have the option to contact us via email. When sending a message, users must provide:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Message details</li>
                    </ul>
                    <p className="mt-3">By submitting a message, you agree that we may use the provided information to respond to your inquiry. We collect and log the user's IP address when an email is sent for security and troubleshooting purposes.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">4. Data Collection & Privacy</h3>
                    <p>We use Google Analytics to monitor website traffic and improve user experience. By using our website, you consent to the collection of anonymous traffic data. Additionally, when users send us an email, we record the IP address for security reasons. For more information, please refer to our Privacy Policy.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">5. Intellectual Property</h3>
                    <p>All content on this website, including text, graphics, logos, and images, is owned by or licensed to Oblivion LLC. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">6. Limitation of Liability</h3>
                    <p>We make no warranties regarding the accuracy, reliability, or completeness of the content on this website. We shall not be liable for any direct, indirect, or consequential damages arising from the use of our website.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">7. External Links</h3>
                    <p>Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any external sites.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">8. Modifications to Terms</h3>
                    <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. It is the user's responsibility to review these terms periodically.</p>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-3">9. Governing Law</h3>
                    <p>These Terms and Conditions are governed by the laws of the State of Wyoming, USA. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Wyoming.</p>
                </section>

                <section>

                    <p>For any questions or concerns regarding these Terms and Conditions, please contact us using the form.</p>
                </section>


            </div>
        </div>
    );
};

export default TermsAndConditions;