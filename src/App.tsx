import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import RentToOwn from "./components/RentToOwn";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Locations from "./components/Locations";
import InvestmentOptions from "./components/InvestmentOptions";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showWhatsapp, setShowWhatsapp] = useState(false); // State for WhatsApp icon visibility
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay

    // Event listener for scroll
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust this value as needed
        setShowWhatsapp(true);
      } else {
        setShowWhatsapp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <section className="loader">
        <div>
          <div>
            <span className="one h6"></span>
            <span className="two h3"></span>
          </div>
        </div>
        <div>
          <div>
            <span className="one h1"></span>
          </div>
        </div>
        <div>
          <div>
            <span className="two h2"></span>
          </div>
        </div>
        <div>
          <div>
            <span className="one h4"></span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero scrollToContact={scrollToContact} />
      <About />
      <FeaturedProperties scrollToContact={scrollToContact} />
      <RentToOwn scrollToContact={scrollToContact} />
      <Gallery />
      <Events />
      <Locations />
      <InvestmentOptions />
      <Projects scrollToContact={scrollToContact} />
      <FAQ />
      <Team />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />

      {/* WhatsApp Floating Button */}
      {showWhatsapp && (
        <a
          href="https://wa.me/27792758821"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        >
          <FaWhatsapp size={32} />
        </a>
      )}
    </div>
  );
}

export default App;
