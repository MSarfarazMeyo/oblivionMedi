import React, { JSX } from 'react';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center w-[300px]">
      <div className="text-2xl">{icon}</div>
      <h4 className="text-[17px] leading-[28px] text-[#1E0E62] font-medium mt-4 whitespace-nowrap">
        {title}
      </h4>

      <p className="text-[16px] leading-[26px] text-[#151439]/80 font-normal mt-2">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
