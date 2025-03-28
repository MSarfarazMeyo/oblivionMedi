import React from "react";
import { FaCode, FaRegStar, FaRegKeyboard, FaRegUser, FaGripfire, FaPenNib } from "react-icons/fa6";

import MobileImage from "../assets/HEROIPhoneX.png"; // Update path
import ServiceCard from "../components/ServiceCard";

const Services: React.FC = () => {
    return (
        <section className=" py-10 lg:py-20 max-w-6xl flex flex-col ">

            <div className="w-[300px] mx-auto lg:w-full lg:mx-0 mb-16 ">
                <h2 className=" text-[32px] leading-[52px] tracking-[-0.4px]  text-black font-extrabold mb-4 text-center lg:text-left ">
                    Our Services<span className="text-[#B50B90]">.</span>
                </h2>

                <p className="text-[18px] leading-[26px] text-[#151439]/80 font-normal w-[300px] mx-auto lg:mx-0 lg:w-[80%] text-center lg:text-left">
                    From powerful social media campaigns to cutting-edge digital product development, we create strategies that drive engagement, growth, and innovation. Whether it's crafting viral content, managing paid ads, or building next-gen apps and websites, we deliver results—on our terms.                </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row  items-center ">


                {/* Left - Mobile Image */}
                <div className="lg:w-[397px] lg:h-[760px]  w-[300px] lg:h-[560px]  flex  justify-center">
                    <img
                        src={MobileImage}
                        alt="Mobile"
                        className="w-full h-full object-cover rounded-xl "
                    />
                </div>

                {/* Right - Services Grid with space between rows */}
                <div className="flex flex flex-col py-16 gap-8 lg:gap-0 justify-between pl-0 lg:pl-12 h-full lg:h-[760px]">
                    <div className="flex flex-col gap-8  lg:grid lg:grid-cols-2 lg:gap-x-16">
                        <ServiceCard
                            icon={<FaCode size={24} className="text-[1E0E62]" />}
                            title="Digital Product Building"
                            description="We bring ideas to life by developing high-quality apps, websites, and digital tools tailored to your brand’s needs."
                        />
                        <ServiceCard
                            icon={<FaRegKeyboard size={24} className="text-[1E0E62]" />}
                            title="Data-Driven Performance Analytics"
                            description="We track key metrics and provide actionable insights to refine your strategy and enhance ROI."
                        />
                    </div>
                    <div className="flex flex-col gap-8  lg:grid lg:grid-cols-2 lg:gap-x-16 ">

                        <ServiceCard
                            icon={<FaRegStar size={24} color="#1E0E62" />}
                            title="Paid Advertising & Growth Campaigns"
                            description="We design and optimize targeted ad campaigns to maximize reach, drive conversions, and scale your business efficiently."
                        />
                        <ServiceCard
                            icon={<FaRegUser size={24} color="#1E0E62" />}
                            title="Social Media Management"
                            description="From content scheduling to community engagement, we handle your social presence with precision and strategy."
                        />
                    </div>
                    <div className="flex flex-col gap-8  lg:grid lg:grid-cols-2 lg:gap-x-16">

                        <ServiceCard
                            icon={<FaGripfire size={24} color="#1E0E62" />}
                            title="Viral & Trend Marketing"
                            description="We leverage trends and creative storytelling to craft campaigns that capture attention and go viral."
                        />
                        <ServiceCard
                            icon={<FaPenNib size={24} color="#1E0E62" />}
                            title="Strategic Content Creation"
                            description="We craft engaging, high-impact content tailored to your audience, ensuring your brand stays relevant and memorable."
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;
