import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      review: "The Infiwin Slide & Turn system transformed our 12th-floor balcony in Delhi completely. We get absolute protection from heavy monsoon wind gusts and heavy dust while enjoying a 100% frameless visual landscape. Excellent execution team!",
      name: "Rajesh Devgn",
      subtitle: "DLF Phase 5 Resident"
    },
    {
      review: "Our office glass partitions look incredibly sleek. We chose the Centre Open system. Not only is the architectural glass high-grade, but the acoustic isolation is also fantastic during important executive board calls.",
      name: "Aman Kapoor",
      subtitle: "VP, Capital Commercial Hub"
    },
    {
      review: "Unbelievable execution. The cost estimator was accurate and the on-ground installers took extreme safety measures to finish the railing fixed glass + Slide & Turn setup in under 5 hours. Outstanding engineering standard.",
      name: "Sneha Mehta",
      subtitle: "Villa Owner, Pune"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Owner Reviews</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">What Our Premium Clients Say</h2>
          <p className="text-slate-500 font-light text-lg">
            We have successfully completed installations spanning major residential developments in Mumbai, Delhi, Bangalore and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-slate-100">
            <Quote size={48} className="text-luxury-gold/20 absolute top-8 left-8" />
            
            <div className="relative z-10 text-center px-4">
              <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed mb-10">
                "{testimonials[currentIndex].review}"
              </p>
              
              <div>
                <h4 className="text-lg font-medium text-slate-900">{testimonials[currentIndex].name}</h4>
                <p className="text-luxury-gold text-sm font-semibold tracking-wider uppercase mt-1">
                  {testimonials[currentIndex].subtitle}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${currentIndex === idx ? "w-8 bg-luxury-gold" : "w-2 bg-slate-200"}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
