import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CeramicCoatings from './components/CeramicCoatings';
import BookCTA from './components/BookCTA';
import ServiceAreas from './components/ServiceAreas';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Helmet>
        <title>Extreme Clean Auto Detailing | Mobile Detailing Macomb & Oakland County MI</title>
        <meta name="description" content="Premium mobile auto detailing in Macomb & Oakland County, Michigan. Professional exterior/interior detailing, paint correction, and ceramic coatings — delivered to your driveway. Call 586-481-2121 for a free quote." />
        <link rel="canonical" href="https://extremecleanauto.com/" />
      </Helmet>
      <Hero />
      <About />
      <ServiceAreas />
      <Reviews />
      <Services />
      <CeramicCoatings />
      <BookCTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#080808] text-white overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ceramic-coating" element={<CeramicCoatingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
