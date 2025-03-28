import React from "react";

const About: React.FC = () => {
    return (
        <section className=" py-14 lg:py-20  max-w-6xl mx-auto">



            <h2 className="w-[300px] mx-auto lg:mx-0 lg:w-ful text-[32px] leading-[52px] tracking-[-0.4px]  text-black font-extrabold mb-4 text-center lg:text-left ">
                About Us<span className="text-[#B50B90]">.</span>
            </h2>

            {/* Content - Row on lg, Column on sm */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-6  mx-auto">
                {/* Left - Main Text */}
                <p className=" text-[16px] leading-[24px] text-[#1E0E62] font-medium  mx-auto lg:mx-0 max-w-[306px] lg:max-w-[50%]  text-center lg:text-left">
                    We craft smart social media campaigns, design cutting-edge digital products,
                    and build high-performing apps and websites. As a private agency, we collaborate
                    exclusively with clients who align with our vision, because great work comes
                    from the right partnerships.
                </p>

                {/* Right - Side Text */}
                <p className="text-[14px] leading-[26px] tracking-[2px] font-bold text-[#151439]/80 uppercase mx-auto lg:mx-0 text-center lg:text-left max-w-[280px]">
                    A HIGH-QUALITY SOLUTION<br />
                    FOR THOSE WHO WANT A<br />
                    RELIABLE SOCIAL MEDIA<br />
                    PARTNER
                </p>
            </div>
        </section>

    );
};

export default About;
