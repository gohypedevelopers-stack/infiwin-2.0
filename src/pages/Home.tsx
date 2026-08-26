import { useState } from "react";
import { HeroSection } from "../components/home/HeroSection";
import { BenefitsSection } from "../components/home/BenefitsSection";
import { BestSellerSection } from "../components/home/BestSellerSection";
import { FrameColorSection } from "../components/home/FrameColorSection";
import { ProductsGridSection } from "../components/home/ProductsGridSection";
import { ApplicationsSection } from "../components/home/ApplicationsSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { ContactForms } from "../components/home/ContactForms.tsx";
import { FAQSection } from "../components/home/FAQSection";
import { HomeVideoIntroOverlay } from "../components/home/HomeVideoIntroOverlay";

export default function Home() {
  const [showIntroVideo, setShowIntroVideo] = useState(() => {
    try {
      return !sessionStorage.getItem("infiwin_intro_shown");
    } catch {
      return false;
    }
  });

  const handleCloseIntro = () => {
    try {
      sessionStorage.setItem("infiwin_intro_shown", "true");
    } catch {
      // ignore
    }
    setShowIntroVideo(false);
  };

  return (
    <div className="w-full">
      {/* Upper Layer Video Overlay (shown only once on first website open) */}
      <HomeVideoIntroOverlay
        isOpen={showIntroVideo}
        onClose={handleCloseIntro}
      />

      <HeroSection />
      <BenefitsSection />
      <BestSellerSection />
      <FrameColorSection />
      <ProductsGridSection />
      <ApplicationsSection />
      <TestimonialsSection />

      {/* Sections 9 & 10: Contact Forms (Quote & Inquiry) */}
      <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200" id="estimator">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.2] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ContactForms />
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
