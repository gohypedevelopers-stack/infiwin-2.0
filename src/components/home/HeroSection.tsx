import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const CAROUSEL_IMAGES = [
  "/st_hero.png",
  "/office_hero.jpg",
  "/farmhouse_hero.png"
];

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function AnimatedNumber({ value, duration = 2500, prefix = "", suffix = "", delay = 1200 }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let timeoutId: number;
    let animationFrameId: number;

    const startAnimation = () => {
      const startTime = performance.now();

      const updateNumber = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        setCurrent(Math.floor(easeProgress * (end - start) + start));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateNumber);
        }
      };

      animationFrameId = requestAnimationFrame(updateNumber);
    };

    timeoutId = window.setTimeout(startAnimation, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, delay]);

  const formatted = current.toLocaleString("en-IN");

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
}

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] lg:h-screen lg:min-h-[650px] bg-slate-950 flex flex-col justify-between pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${CAROUSEL_IMAGES[currentImageIndex]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Soft luxury gradient overlay */}
      <div className="absolute inset-0 z-0 bg-slate-950/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-slate-950/85 lg:via-slate-900/50 lg:to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center lg:items-start lg:text-left my-auto">
        <motion.div
          className="max-w-3xl flex flex-col items-center lg:items-start w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
        >

          {/* Pre-Header Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8"
          >
            {/* Small decorative circle */}
            <div className="w-1.5 h-1.5 rounded-full border border-luxury-gold animate-pulse"></div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              Frameless Glazing Redefined
            </span>
          </motion.div>

          {/* Primary Foundational Heading */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl flex flex-col items-center lg:items-start"
          >
            <span className="uppercase tracking-widest mb-1 font-light whitespace-nowrap">Breathtaking Views,</span>
            <span className="text-luxury-gold italic font-normal tracking-wide whitespace-nowrap">Uncompromised Protection</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-slate-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed mb-6 md:mb-8"
          >
            Infiwin manufactures premier Slide & Turn frameless glass balcony enclosures.<br />Extend your home space with architectural glass walls.
          </motion.p>

          {/* Primary Call-to-Action Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-2 w-full sm:w-auto"
          >
            <Link
              to="/#estimator"
              className="bg-luxury-gold hover:bg-white hover:text-slate-900 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md font-medium text-xs uppercase tracking-wider flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Calculator size={14} />
              Calculate Cost Instantly
            </Link>
            <Link
              to="/products"
              className="bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-xs uppercase tracking-wider flex items-center gap-2 group w-full sm:w-auto justify-center sm:justify-start"
            >
              Explore Products
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform sm:w-3.5 sm:h-3.5" />
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Trust Stats & Slide Previews - Bottom Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full z-30 px-6 border-t border-white/10 pt-6 mt-6 lg:mt-8 mb-4 lg:mb-0"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">

          {/* Stats - Left aligned in desktop, bottom in mobile */}
          <div className="flex flex-row flex-nowrap gap-4 sm:gap-12 lg:gap-16 text-left w-full lg:w-auto overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {/* Stat 1 */}
            <div className="flex flex-col items-start min-w-[100px] sm:min-w-0">
              <span className="text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold">Starting Price</span>
              <span className="text-lg sm:text-2xl md:text-3xl font-display font-light text-white tracking-wide whitespace-nowrap">
                <AnimatedNumber value={1800} prefix="₹" /> <span className="text-[10px] text-white">/ Sq.ft</span>
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-start min-w-[100px] sm:min-w-0">
              <span className="text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold">Rain & Wind</span>
              <span className="text-lg sm:text-2xl md:text-3xl font-display font-light text-white tracking-wide whitespace-nowrap">
                <AnimatedNumber value={100} suffix="%" /> Tight
              </span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-start min-w-[100px] sm:min-w-0">
              <span className="text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold">Warranty</span>
              <span className="text-lg sm:text-2xl md:text-3xl font-display font-light text-white tracking-wide whitespace-nowrap">
                <AnimatedNumber value={10} suffix="+" /> Yrs
              </span>
            </div>
          </div>

          {/* Slide Previews - Right aligned in desktop, top in mobile */}
          <div className="flex gap-2 sm:gap-3 self-end lg:self-auto w-full lg:w-auto justify-end">
            {CAROUSEL_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentImageIndex === idx
                    ? "border-luxury-gold scale-105 shadow-lg"
                    : "border-white/20 hover:border-white/50 hover:scale-102"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Slide ${idx + 1} Preview`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay to dim inactive thumbnails */}
                {currentImageIndex !== idx && (
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors"></div>
                )}
              </button>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Marquee at the Bottom of Hero */}
      <div className="absolute bottom-0 left-0 bg-luxury-gold text-white text-xs py-2 w-full overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap shrink-0"
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-8 text-white font-bold tracking-wider">
              Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
