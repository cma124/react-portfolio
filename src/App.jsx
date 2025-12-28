import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import PortfolioSection from "./sections/PortfolioSection";
import CertificateSection from "./sections/CertificateSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <CertificateSection />
      <ContactSection />
      <FooterSection />
      <ToastContainer position="top-right" theme="dark" />
    </main>
  );
};

export default App;
