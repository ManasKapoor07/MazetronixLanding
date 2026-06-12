import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import PartnersCarousel from "./components/PartnersCarousel";
import ServicesSection from "./components/ServicesSection";

export default function App() {
  return (
    <div className="w-full">
      <HeroSection />
      <PartnersCarousel />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}