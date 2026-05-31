import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import CarouselSection from "@/components/CarouselSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <CarouselSection />
        <FeaturesSection />
        <AudienceSection />
        <ProcessSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
