import React from "react";
import { FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";


interface FooterProps {
    setPage: React.Dispatch<React.SetStateAction<string | undefined>>
    page: string | undefined
}

const Footer: React.FC<FooterProps> = ({ setPage, page }) => {




    return (
        <footer className="w-full py-4 min-w-[300px] ">
            <div className={`max-w-6xl mx-auto  flex space-y-2 flex-col lg:${page ? "flex-col" : "flex-row"} justify-between items-center text-gray-500 text-sm`}>
                {/* Left - Logo & Copyright */}
                {/* <div></div> */}
                <div className={`flex flex-col lg:${page ? "flex-col" : "flex-row"} items-center space-y-2 pb-2  lg:space-x-4 mb-4 sm:mb-0`}>

                    <h1
                        className="mx-auto pr-4 lg:mx-0 text-[26px] tracking-[-0.29px]  text-black font-extrabold  hover:opacity-80">Oblivion<span className="text-[#B50B90]">.</span></h1>

                    <p className="text-[#151439]/40  text-sm leading-[26px] text-[16px] ">
                        Copyright to @ Oblivion LLC
                    </p>

                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-8">

                    {/* Center - Links */}
                    <div className="flex flex-col  lg:flex-row space-x-6 lg:space-x-2 mb-4 sm:mb-0  gap-2  lg:gap-0">
                        <button onClick={() => {

                            setPage("privacy")
                        }} className="hover:underline text-[#151439]/40 min-w-[104px] text-sm leading-[26px] text-[16px] text-center w-full">
                            Privacy Policy
                        </button>



                        <button onClick={() => setPage("terms")} className="hover:underline min-w-[175px] text-[#151439]/40  text-sm leading-[26px] text-[16px] text-center w-full">
                            Terms & Conditions
                        </button>
                        <button onClick={() => setPage("contact")} className="hover:underline min-w-[80px] text-[#151439]/40  text-sm leading-[26px] text-[16px] text-center w-full">
                            Contact Us
                        </button>


                    </div>

                    {/* Right - Social Icons */}
                    <div className="flex space-x-4 py-2">
                        <a href="#" className="hover:text-gray-700"><FaTwitter size={20} color="#151439" style={{ opacity: .4 }} /></a>
                        <a href="#" className="hover:text-gray-700"><FaSquareFacebook size={20} color="#151439" style={{ opacity: .4 }} /></a>
                        <a href="#" className="hover:text-gray-700"><FaGooglePlusG size={24} color="#151439" style={{ opacity: .4 }} /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
