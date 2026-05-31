import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import { TeamSection } from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <CarouselSection />
        <StatsSection />
        <TeamSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
