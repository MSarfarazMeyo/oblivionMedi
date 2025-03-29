import About from "../sections/About";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import ProductsSection from "../sections/Products";
import Services from "../sections/Services";
import HeroImage from "../assets/HeroImage.png";
import { useEffect, useState } from "react";
import ContactPage from "./Contact";
import TermsPage from "./Terms";
import PrivacyPage from "./Privacy";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar";




const Home = () => {
    const [page, setPage] = useState<string | undefined>();
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        const path = location.pathname.replace("/", "");
        if (path === 'contactUs' || path === 'terms&conditions' || path === 'privacyPloicy') {
            setPage(path || undefined);
        }

        else {
            setPage(undefined);
        }

    }, [location]);




    useEffect(() => {
        if (page) {
            navigate(`/${page}`);

        }
    }, [page]);

    return (
        <div className="max-w-6xl mx-auto pb-8 py-6  px-2">
            <Navbar setPage={setPage} page={page} />


            {!page && <Hero />}

            {!page && <div className="lg:absolute lg:top-0 lg:right-0 w-[310px] h-[405px] mx-auto lg:w-[25%] xl:w-[30%]  lg:mx-0 lg:h-[810px]">

                <img src={HeroImage} alt="Top Right Image" className="w-full h-full object-cover" />
            </div>}



            {page === "contactUs" && <ContactPage />}
            {page === "terms&conditions" && <TermsPage />}
            {page === "privacyPloicy" && <PrivacyPage />}



            {!page && <div id="about"><About /></div>
            }           {!page && <div id="services"><Services /></div>}
            {!page && <div id="products"><ProductsSection setPage={setPage} /></div>}
            <div ><Footer setPage={setPage} page={page} /></div>
        </div>
    );
};

export default Home;
