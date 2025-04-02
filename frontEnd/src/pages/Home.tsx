import About from "../sections/About";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import ProductsSection from "../sections/Products";
import Services from "../sections/Services";
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
    const path = location.pathname.replace("/", "");



    useEffect(() => {
        if (path === 'terms&conditions' || path === 'privacyPloicy') {
            setPage(path || undefined);
        }

        else {
            setPage(undefined);
        }

    }, [location]);




    useEffect(() => {


        if (page && page !== "contactUs") {
            navigate(`/${page}`);

        }
    }, [page]);

    return (
        <div className="max-w-6xl mx-auto pb-8 py-6  px-2">
            {page !== "contactUs" && <Navbar setPage={setPage} page={page} />}


            {!page && <Hero />}





            {page === "contactUs" && <ContactPage open={page === "contactUs"} onClose={() => {
                if (path === 'terms&conditions' || path === 'privacyPloicy') {
                    setPage(path || undefined);
                }

                else {
                    setPage(undefined);
                }
            }} />}
            {page === "terms&conditions" && <TermsPage />}
            {page === "privacyPloicy" && <PrivacyPage />}



            {!page && <div id="about"><About /></div>
            }           {!page && <div id="services"><Services /></div>}
            {!page && <div id="products"><ProductsSection setPage={setPage} /></div>}
            {page !== "contactUs" && <div ><Footer setPage={setPage} page={page} /></div>}
        </div>
    );
};

export default Home;
