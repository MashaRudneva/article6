import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import AboutSection from "@/components/sections/About";
import UpdatesSection from "@/components/sections/Updates";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <UpdatesSection />
      <ContactSection />
    </>
  );
}
