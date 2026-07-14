import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export const BestSellerSection = () => {
  const [activeVariant, setActiveVariant] = useState<"full" | "half">("full");

  return (
    <section id="variants" className="py-12 lg:py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Column */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <div className="mb-4 inline-block order-1">
              <span className="bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                Most Popular - Infi S&T
              </span>
            </div>

            <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold mb-2 order-2">
              BALCONY ENCLOSURE CATEGORY
            </p>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 order-3">Slide & Turn System</h3>

            <p className="text-white/70 font-light text-lg mb-10 leading-relaxed max-w-xl text-center lg:text-left order-6 lg:order-4">
              Our iconic signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.
            </p>

            {/* Mobile Visual Presentation */}
            <div className="lg:hidden relative h-[400px] sm:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800 mb-10 order-4">
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeVariant === "full" ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: "url('https://i.postimg.cc/dVH7W7yK/Chat-GPT-Image-Jul-14-2026-01-17-46-PM.png')" }}
              />
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeVariant === "half" ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: "url('/slide_turn_banner.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Interactive Variant UI */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg mb-10 w-full lg:w-auto order-5">
              <p className="text-sm font-medium mb-4 text-white/90">Interactive Variant Check:</p>
              <div className="flex flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveVariant("full")}
                  className={`flex-1 py-2 px-1 sm:py-3 sm:px-4 text-[10px] sm:text-sm font-medium transition-all rounded-sm border ${activeVariant === "full"
                    ? "bg-white text-slate-900 border-white"
                    : "bg-transparent text-white/70 border-white/20 hover:border-white/50"
                    }`}
                >
                  Full Length Option
                </button>
                <button
                  onClick={() => setActiveVariant("half")}
                  className={`flex-1 py-2 px-1 sm:py-3 sm:px-4 text-[10px] sm:text-sm font-medium transition-all rounded-sm border ${activeVariant === "half"
                    ? "bg-white text-slate-900 border-white"
                    : "bg-transparent text-white/70 border-white/20 hover:border-white/50"
                    }`}
                >
                  Half Length Option
                </button>
              </div>
              <div className="mt-4 text-white/60 text-sm font-light">
                {activeVariant === "full"
                  ? "From floor to ceiling coverage structure providing maximum visual span."
                  : (
                    <div className="flex flex-col gap-2">
                      <p> From railing top to ceiling (use as window) fixed system.</p>
                    </div>
                  )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start order-7">
              <Link
                to="/products"
                state={{ filter: "Balcony System" }}
                className="flex items-center justify-center gap-2 bg-luxury-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition-all font-medium text-xs uppercase tracking-wider cursor-pointer border-none"
              >
                Inspect Custom Variants

              </Link>
              <Link
                to="/#estimator"
                className="flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-all font-medium text-xs uppercase tracking-wider cursor-pointer"
              >
                Calculate Approximate Quote
                <Calculator size={14} />
              </Link>
            </div>
          </div>

          {/* Visual Presentation */}
          <div className="hidden lg:block relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeVariant === "full" ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: "url('https://i.postimg.cc/dVH7W7yK/Chat-GPT-Image-Jul-14-2026-01-17-46-PM.png')" }}
            />
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeVariant === "half" ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: "url('/slide_turn_banner.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
