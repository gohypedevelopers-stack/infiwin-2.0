import { HeroSection } from "../components/home/HeroSection";
import { BenefitsSection } from "../components/home/BenefitsSection";
import { BestSellerSection } from "../components/home/BestSellerSection";
import { FrameColorSection } from "../components/home/FrameColorSection";
import { ProductsGridSection } from "../components/home/ProductsGridSection";
import { ApplicationsSection } from "../components/home/ApplicationsSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { EstimatorSection } from "../components/home/EstimatorSection";
import { LeadFormSection } from "../components/home/LeadFormSection";
import { FAQSection } from "../components/home/FAQSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitsSection />
      <BestSellerSection />
      <FrameColorSection />
      <ProductsGridSection />
      <ApplicationsSection />
      <TestimonialsSection />

      {/* Sections 9 & 10: Estimator & Lead Form */}
      <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.2] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-8">
            <EstimatorSection />
            <LeadFormSection />
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
