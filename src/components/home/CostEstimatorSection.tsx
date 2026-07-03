import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { motion } from "motion/react";

export const CostEstimatorSection = () => {
  const [length, setLength] = useState(10);
  const [height, setHeight] = useState(10);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const textAlign = isMobile ? "center" as const : "left" as const;

  const basePrice = 1800;
  const area = length * height;
  const totalCost = area * basePrice;

  return (
    <section className="py-32 bg-[#111111] px-6" id="estimator">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Left Card - Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-sm p-8 md:p-10 border border-white/10 flex flex-col shadow-none"
          style={{ textAlign }}
        >
          {/* Header */}
          <div className="estimator-header">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-6">
              Instant Pricing Guide
            </h4>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 font-light">
              On-Page System Cost Estimator
            </h3>
            <p className="text-white/50 text-[15px] font-light leading-loose mb-12">
              Enter your customized window/balcony dimensions below. Our system instantly runs the correct calculations using the official formula metric.
            </p>
          </div>

          <div className="space-y-8 mb-10 flex-grow">
            {/* Length Slider */}
            <div>
              <div className="flex justify-between items-center mb-4 gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/70 font-bold flex items-center gap-2 min-w-0 leading-tight">
                  <span className="w-4 h-[1px] bg-white/30 shrink-0"></span> Length of Balcony / Window (ft)
                </label>
                <span className="text-luxury-gold font-bold text-sm shrink-0 whitespace-nowrap">{length} ft</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
              />
              <div className="flex justify-between text-[10px] text-white/30 mt-2">
                <span>Min 5 ft</span>
                <span>Max 50 ft</span>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between items-center mb-4 gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/70 font-bold flex items-center gap-2 min-w-0 leading-tight">
                  <span className="w-4 h-[1px] bg-white/30 shrink-0"></span> Height of Balcony / Window (ft)
                </label>
                <span className="text-luxury-gold font-bold text-sm shrink-0 whitespace-nowrap">{height} ft</span>
              </div>
              <input
                type="range"
                min="5"
                max="12"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
              />
              <div className="flex justify-between text-[10px] text-white/30 mt-2">
                <span>Min 5 ft</span>
                <span>Max 12 ft</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] p-8 rounded-sm border border-white/5">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Calculated Area</p>
                <p className="text-white font-bold">{area} sq.ft.</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Base Unit Price</p>
                <p className="text-white font-bold">₹{basePrice.toLocaleString()} / sq.ft</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Your Approximate Cost:</p>
              <h4 className="text-5xl font-serif text-luxury-gold font-light">₹{totalCost.toLocaleString()}</h4>
              <p className="text-[8px] text-white/30 mt-4 leading-relaxed">
                Logistics Disclaimer Note: Installation Charges, 18% GST and extra structural extrusions required over basic 10 ft physical height averages.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Card - Lead Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-sm p-8 md:p-10 flex flex-col shadow-none border border-black/5"
          style={{ textAlign }}
        >
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 font-light">
              Lock-In Your Deal Price
            </h3>
            <p className="text-slate-500 text-[15px] font-light leading-loose">
              Fill out this quick 3-field layout to request our premium catalog along with architectural assistance.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-2 block">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Rajesh Sharma"
                className="w-full border-b border-slate-200 pb-2 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-2 block">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 99999 99999"
                className="w-full border-b border-slate-200 pb-2 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent"
              />
            </div>
            <div>
              <label className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-2 block">Your Location City</label>
              <input
                type="text"
                placeholder="e.g. Noida, Delhi, Gurgaon"
                className="w-full border-b border-slate-200 pb-2 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-luxury-gold transition-colors bg-transparent"
              />
            </div>
          </form>

          <div className="mt-10">
            <button className="w-full bg-black text-white py-3.5 rounded-lg uppercase tracking-wide sm:tracking-wider text-[11px] sm:text-xs font-semibold sm:font-bold hover:bg-luxury-gold transition-colors flex items-center justify-center gap-3 mb-6 shadow-none cursor-pointer border-none">
              <Phone size={14} /> Request Quote &amp; Call Back
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] bg-slate-100 flex-1"></div>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Or Chat Directly</span>
              <div className="h-[1px] bg-slate-100 flex-1"></div>
            </div>

            <button className="w-full bg-transparent text-[#25D366] border border-[#25D366] py-3.5 rounded-lg uppercase tracking-wide sm:tracking-wider text-[11px] sm:text-xs font-semibold sm:font-bold hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-3 shadow-none cursor-pointer">
              <WhatsAppIcon size={14} /> Get Instant Price Via Whatsapp
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
