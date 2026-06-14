import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import PartnersCarousel from "./components/PartnersCarousel";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <div className="w-full">
      <HeroSection />
      <PartnersCarousel />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}