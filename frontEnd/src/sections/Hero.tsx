import React from 'react';
import HeroImage from '../assets/HeroImage.png';

const Hero: React.FC = () => {
  return (
    <section className=" py-12 lg:py-0  flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0   lg:h-[700px]">
      <div className="flex flex-col justify-center items-center lg:items-start  gap-4 lg:gap-0 text-left">
        <h2
          style={{ fontFamily: 'Wix Madefor Display' }}
          className="Wix Madefor Display text-[40px] leading-[45px] tracking-[-1px]  text-black font-extrabold mb-6 max-w-[300px] lg:max-w-none"
        >
          Marketing.
          <br />
          Innovation.
          <br />
          Exclusivity.
        </h2>

        <p className="text-[16px] leading-[28px] text-[#0D0D23]/80 font-medium max-w-[314px] lg:max-w-[570px] text-center lg:text-left">
          We craft smart social media campaigns, design cutting-edge digital
          products, and build high-performing apps and websites. As a private
          agency, we collaborate exclusively with clients who align with our
          vision, because great work comes from the right partnerships.
        </p>
      </div>

      <div className=" w-[310px] h-[405px] mx-auto lg:w-[480px]   lg:mx-0 lg:h-[90%]">
        <img
          src={HeroImage}
          alt="Top Right Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
