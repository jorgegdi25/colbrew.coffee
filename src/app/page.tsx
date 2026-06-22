import { TopNavBar } from "@/components/TopNavBar";
import { HeroSection } from "@/components/HeroSection";
import { OriginsSection } from "@/components/OriginsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ProcessBar } from "@/components/ProcessBar";
import { NewsSection } from "@/components/NewsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <PillarsSection />
        <OriginsSection />
        <ProcessBar />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
