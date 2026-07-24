import { Eye, CloudRain, Lock, ChevronLeft, ChevronRight, Wind, CloudFog, Bird } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const BenefitsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const benefits = [
    {
      icon: <Eye className="text-luxury-gold w-[18px] h-[18px]" />,
      title: "Unobstructed Panoramic Views",
      description: "No vertical frames between glass structures ensures completely transparent viewports, expanding visual horizons and natural luxury lighting levels instantly.",
    },
    {
      icon: <CloudRain className="text-luxury-gold w-[18px] h-[18px]" />,
      title: "Protection Against weather",
      description: "Blocks dust, windstorms, flying debris, and intense monsoon rains. Fully customized rubber profiles keep balconies immaculate through extreme climates.",
    },
    {
      icon: <Lock className="text-luxury-gold w-[18px] h-[18px]" />,
      title: "Full Opening",
      description: "Effortlessly slide and stack all glass panels to one side to create a 100% clear, unobstructed opening. This seamless transition maximizes natural ventilation, frees up floor space, and beautifully merges your indoor and outdoor living areas.",
    },
  ];

  // Auto-play effect: changes slide every 5 seconds, resets when activeIdx changes manually
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIdx, benefits.length]);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section className="pt-8 pb-16 lg:py-12 lg:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Core Advantages</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">The Premium 'Slide & Turn' Edge</h2>
          <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto">
            Discover why modern homeowners and commercial spaces are replacing conventional iron grills with custom frameless folding structures.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug lg:whitespace-nowrap">{benefit.title}</h3>
                </div>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet View - Carousel */}
        <div className="lg:hidden flex flex-col items-center w-full max-w-md mx-auto">
          <div className="relative w-full overflow-hidden bg-slate-50 border border-slate-100 px-14 py-8 sm:px-16 sm:py-10 min-h-[280px] flex flex-col justify-between">

            {/* Left navigation arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-slate-700 p-2 rounded-full border border-slate-200 shadow-md transition-colors cursor-pointer z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-start text-left w-full h-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    {benefits[activeIdx].icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{benefits[activeIdx].title}</h3>
                </div>
                <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed pl-1">
                  {benefits[activeIdx].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right navigation arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-slate-700 p-2 rounded-full border border-slate-200 shadow-md transition-colors cursor-pointer z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-6">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIdx === idx ? "w-6 bg-luxury-gold" : "w-1.5 bg-slate-300"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Protection Against Section */}
        <div className="hidden mt-20 border-t border-slate-100 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-slate-900">Protection Against</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24">
            <div className="flex flex-col items-center gap-3">
              <CloudFog className="w-8 h-8 text-luxury-gold" />
              <span className="text-slate-800 font-medium">Dust</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Wind className="w-8 h-8 text-luxury-gold" />
              <span className="text-slate-800 font-medium">Wind</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CloudRain className="w-8 h-8 text-luxury-gold" />
              <span className="text-slate-800 font-medium">Rain</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Bird className="w-8 h-8 text-luxury-gold" />
              <span className="text-slate-800 font-medium">Birds</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
