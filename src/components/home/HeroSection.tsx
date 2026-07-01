import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background with slight parallax/zoom feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        {/* Soft luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          {/* Pre-Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-white font-medium">Frameless Glazing Redefined</span>
          </div>

          {/* Primary Foundational Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg">
            Breathtaking Views, <br />
            <span className="font-light opacity-90">Uncompromised Protection</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-lg text-white/80 font-light max-w-xl mb-10 leading-relaxed">
            Infiwin manufactures premier Slide & Turn frameless glass balcony enclosures. Extend your home space with architectural glass walls.
          </p>

          {/* Primary Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Link 
              to="#estimator"
              className="group flex items-center justify-center gap-3 bg-luxury-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-sm transition-all shadow-lg hover:shadow-xl font-medium text-sm tracking-wide"
            >
              <Calculator size={18} />
              Calculate Cost Instantly
            </Link>
            <Link 
              to="/products"
              className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm transition-all font-medium text-sm tracking-wide"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators / Live Proof Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/20 w-full">
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Starting Price / Sq.ft</p>
              <p className="text-3xl font-display font-light text-white">₹1,800</p>
            </div>
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Rain & Wind Tight</p>
              <p className="text-3xl font-display font-light text-white">100%</p>
            </div>
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Warranty Covered</p>
              <p className="text-3xl font-display font-light text-white">10+ Yrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee at the Bottom of Hero */}
      <div className="absolute bottom-0 left-0 bg-luxury-gold text-white text-xs py-2 w-full text-center whitespace-nowrap z-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="inline-block"
        >
          Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft! &nbsp; &nbsp; &nbsp; &nbsp;
          Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!
        </motion.div>
      </div>
    </section>
  );
};
