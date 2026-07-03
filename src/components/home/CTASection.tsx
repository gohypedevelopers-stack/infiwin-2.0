import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img loading="lazy"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
          alt="Modern luxury home"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
            Start Your Transformation
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 font-light leading-tight">
            Ready to elevate your <br />
            <span>architectural space?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Speak directly with our engineering and design experts to find the perfect frameless glass system for your balcony, terrace, or interior partition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-luxury-gold hover:bg-white text-black px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs transition-colors shadow-md flex items-center justify-center gap-3 border-none cursor-pointer">
              Request Free Consultation <ArrowRight size={14} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs hover:bg-white/10 transition-colors flex items-center justify-center gap-3 cursor-pointer">
              <Phone size={14} /> +91 98765 43210
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
