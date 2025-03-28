import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
    setPage: React.Dispatch<React.SetStateAction<string | undefined>>
    page: string | undefined
}

const Navbar: React.FC<NavbarProps> = ({ setPage, page }) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (path: string, id?: string) => {
        setMenuOpen(false)
        setPage(undefined);
        navigate(path);

        if (id) {
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="flex items-center justify-between  relative w-[314px] lg:w-full  mx-auto lg:mx-0 ">
            <button
                className="lg:hidden text-gray-600 text-2xl cursor-pointer "
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <FiMenu />
            </button>

            <h1
                style={{ fontFamily: 'Wix Madefor Display', display: page ? 'none' : 'block' }}
                onClick={() => {
                    navigate('/home');
                    setPage(undefined)
                }} className={`mx-auto lg:mx-0 text-[26px] tracking-[-0.29px] text-black font-extrabold cursor-pointer hover:opacity-80 
                    ${page ? 'hidden' : 'block'} lg:block`}
            >Oblivion<span className="text-[#B50B90]">.</span></h1>




            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 text-gray-500 mx-auto">
                <button onClick={() => handleNavigation('/about', 'about')} className="cursor-pointer">About</button>
                <button onClick={() => handleNavigation('/products', 'products')} className="cursor-pointer">Our Products</button>
                <button onClick={() => handleNavigation('/services', 'services')} className="cursor-pointer">Services</button>
                <button onClick={() => {
                    setMenuOpen(false)

                    setPage('contact')
                }} className="cursor-pointer">Contact</button>
            </div>



            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-3 lg:hidden z-50">
                    <button onClick={() => handleNavigation('/about', 'about')} className="cursor-pointer">About</button>
                    <button onClick={() => handleNavigation('/products', 'products')} className="cursor-pointer">Our Products</button>
                    <button onClick={() => handleNavigation('/services', 'services')} className="cursor-pointer">Services</button>
                    <button onClick={() => {
                        setMenuOpen(false)

                        setPage('contact')
                    }} className="cursor-pointer">Contact</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;