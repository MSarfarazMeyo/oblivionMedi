import React from 'react';
import Legacy from '../assets/Lagacy.png';
import Lopo from '../assets/lopo.png';
import Verbyo from '../assets/Verbyo.png';

interface Product {
  image: string;
  name: string;
  description: string;
  cta: string;
}

interface compProps {
  setPage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ProductsSection: React.FC<compProps> = ({ setPage }) => {
  const products: Product[] = [
    {
      image: Verbyo,
      name: 'Verbyo',
      description:
        'The first organic distribution social media app, where people can earn extra money by posting cool stuff on their social media profiles.',
      cta: 'Contact Us',
    },
    {
      image: Legacy,
      name: 'Digital Legacy',
      description:
        'Pass your personality, appearance, knowledge, ideas, and memories to your beloved ones, fostering a continuous interaction with your being.',
      cta: 'Contact Us',
    },
    {
      image: Lopo,
      name: 'LopoApp',
      description:
        'Join the content creation contests and win amazing prizes, offered by the advertisers. Easy to join, easy to create, easy to win.',
      cta: 'Contact Us',
    },
  ];

  return (
    <section className=" py-0 lg:py-20 max-w-6xl flex flex-col ">
      <div className="w-[321px] mx-auto lg:w-full lg:mx-0 mb-16 ">
        <h2 className=" text-[28px]  lg:text-[32px] leading-[52px] tracking-[-0.4px]  text-black font-extrabold mb-4 text-center lg:text-left ">
          Our Digital Products<span className="text-[#B50B90]">.</span>
        </h2>

        <p className="text-[16px] leading-[26px] text-[#151439]/80 font-normal w-[300px] mx-auto lg:mx-0 lg:w-[80%] text-center lg:text-left">
          At Oblivion, we take pride in creating innovative smart digital
          products. If you're using one of our products and need further
          assistance beyond our support team, you can{' '}
          <strong className="text-gray-900">
            submit an appeal, file a complaint, or offer a suggestion here
          </strong>
          . Simply select the app and press "Contact" to reach out.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-16 lg:gap-6 lg:gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full max-w-[284px] bg-white rounded-lg duration-300 flex flex-col  mb-6 lg:mb-0"
          >
            {/* Product Image */}
            <div className="mb-4 h-[110px] w-[153px] flex items-center justify-center bg-[#F6F6F6] rounded-lg self-center lg:self-start">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[80px] max-w-[80px] object-contain"
              />
            </div>

            {/* Product Name */}

            <h3 className="text-[22px] leading-[32px]  font-medium text-[#1E0E62] mb-3 text-center lg:text-left">
              {product.name}
            </h3>

            {/* Product Description */}
            <p className="text-[#151439]/40 w-full mx-auto text-sm leading-[26px] mb-4 text-[16px] text-center lg:text-left">
              {product.description}
            </p>

            {/* Contact Button */}
            <div className="flex lg:justify-start justify-center">
              <button
                onClick={() => setPage('contactUs')}
                className="bg-white text-[#1E0E62] border-2 border-[#EBEAED] hover:bg-[#2563eb] hover:text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 w-[140px]   text-[18px] leading-[26px]  font-medium text-[#1E0E62"
              >
                {product.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
