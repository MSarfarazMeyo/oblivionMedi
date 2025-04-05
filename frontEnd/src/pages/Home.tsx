import About from '../sections/About';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import ProductsSection from '../sections/Products';
import Services from '../sections/Services';
import { useEffect, useState } from 'react';
import ContactPage from './Contact';
import TermsPage from './Terms';
import PrivacyPage from './Privacy';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../sections/Navbar';

const Home = () => {
  const [page, setPage] = useState<string | undefined>();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  useEffect(() => {
    if (path === 'terms&conditions' || path === 'privacyPloicy') {
      setPage(path || undefined);
    } else {
      setPage(undefined);
    }
  }, [location]);

  useEffect(() => {
    if (
      page &&
      page !== 'contactUs' &&
      page !== 'about' &&
      page !== 'products' &&
      page !== 'services'
    ) {
      navigate(`/${page}`);
    }
  }, [page]);

  // Show main content if no page is selected or if page is contactUs
  const showMainContent = !page || page === 'contactUs';

  return (
    <div className="max-w-6xl mx-auto pb-8 py-6 px-2">
      {/* Always show Navbar when showing main content */}
      {showMainContent && <Navbar setPage={setPage} page={page} />}

      {/* Show Contact modal as overlay when page is contactUs */}
      {page === 'contactUs' && (
        <ContactPage
          open={true}
          onClose={() => {
            if (path === 'terms&conditions' || path === 'privacyPloicy') {
              setPage(path || undefined);
            } else {
              setPage(undefined);
            }
          }}
        />
      )}

      {/* Show Terms and Privacy pages only when they are selected */}
      {page === 'terms&conditions' && <Navbar setPage={setPage} page={page} />}
      {page === 'terms&conditions' && <TermsPage />}

      {page === 'privacyPloicy' && <Navbar setPage={setPage} page={page} />}
      {page === 'privacyPloicy' && <PrivacyPage />}

      {/* Show main content sections when showing main content */}
      {showMainContent && (
        <>
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="products">
            <ProductsSection setPage={setPage} />
          </div>
        </>
      )}

      {/* Always show Footer except when in contactUs mode */}
      {
        <div>
          <Footer setPage={setPage} page={page} />
        </div>
      }
    </div>
  );
};

export default Home;
