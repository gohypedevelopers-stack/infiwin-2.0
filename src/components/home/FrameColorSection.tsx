import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const frameColors = [
  { id: "white", name: "White", hex: "#e8e9e4", img: "/frame/white.webp", desc: "A clean, bright finish that pairs effortlessly with modern and minimalist interiors." },
  { id: "black", name: "Black", hex: "#18181a", img: "/frame/black.webp", desc: "A timeless, bold look that provides striking contrast and modern sophistication." },
  { id: "anodic-brown", name: "Anodic Brown", hex: "#463a35", img: "/frame/anadic%20brown.webp", desc: "A rich, dark earthy tone offering a subtle architectural elegance." },
  { id: "soft-silver", name: "Soft Silver", hex: "#b6b6b5", img: "/frame/soft%20silver.webp", desc: "A sleek metallic finish providing a contemporary, high-end feel." },
  { id: "sucho-grey", name: "Sucho Grey", hex: "#374140", img: "/frame/sucho%20grey.webp", desc: "A versatile slate tone that bridges the gap between bold darks and lighter neutrals." },
  { id: "champaign-brown", name: "Champaign Brown", hex: "#8d7966", img: "/frame/champaign%20brown.webp", desc: "A warm, sophisticated tone that adds a touch of subtle luxury to your living space." }
];

const badges = [
  "100% OPENING POTENTIAL",
  "TOUGHENED SAFETY GLASS",
  "ULTRA-SMOOTH TRACKS",
  "NO VERTICAL FRAMES"
];

export const FrameColorSection = () => {
  const [selectedColor, setSelectedColor] = useState(frameColors[0]);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  const touchStartX = useRef<number | null>(null);

  const currentIndex = frameColors.findIndex(c => c.id === selectedColor.id);

  const handleSwipe = (deltaX: number) => {
    if (deltaX > 50) {
      // Swipe left → next
      const next = (currentIndex + 1) % frameColors.length;
      setSelectedColor(frameColors[next]);
    } else if (deltaX < -50) {
      // Swipe right → prev
      const prev = (currentIndex - 1 + frameColors.length) % frameColors.length;
      setSelectedColor(frameColors[prev]);
    }
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mobileCenter = isMobile ? "center" as const : "left" as const;
  const mobileFlexCenter = isMobile ? "center" : "flex-start";

  return (
    <section className="py-12 lg:py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 order-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold text-center lg:text-left">
                Slide & Turn System - Available Frame Finishes
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-light order-2 w-full">Choose Your Frame Colour</h2>

            <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0 order-5 lg:order-3">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-white border border-slate-100 px-1.5 py-2 sm:px-3 sm:py-1.5 rounded-sm flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 shadow-sm text-center lg:text-left justify-center lg:justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0 hidden sm:block"></div>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-black leading-tight">{badge}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 font-light text-[15px] leading-loose mb-10 text-center lg:text-left order-6 lg:order-4 w-full">
              Our signature Slide & Turn system glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either corner — offering 100% opening potential. Now available in four premium powder-coated aluminium finishes.
            </p>

            {/* Mobile Image Gallery */}
            <div className="flex flex-col items-center lg:hidden w-full mb-8 order-3 lg:order-5">
              <div
                className="w-full relative bg-[#fafafa] rounded-sm p-2 mb-6 border border-black/5 h-[300px] xs:h-[400px] flex items-center justify-center overflow-hidden select-none"
                onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                  if (touchStartX.current !== null) {
                    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
                    handleSwipe(deltaX);
                    touchStartX.current = null;
                  }
                }}
              >
                <motion.img
                  key={selectedColor.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  src={selectedColor.img}
                  alt={`${selectedColor.name} Frame`}
                  className="w-full h-full object-contain rounded-sm shadow-none mix-blend-multiply pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {frameColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`h-2.5 rounded-full transition-all duration-300 border border-black/10 shadow-sm ${
                      selectedColor.id === color.id ? "w-8" : "w-2.5 opacity-60 hover:opacity-100 hover:w-4"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`View ${color.name} image`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-10 w-full flex flex-col items-center lg:items-start order-4 lg:order-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 text-center lg:text-left">Select Colour</p>

              <div className="flex gap-4 mb-6 justify-center lg:justify-start">
                {frameColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 ${selectedColor.id === color.id ? 'ring-2 ring-luxury-gold ring-offset-4 scale-110' : 'hover:scale-110 border border-slate-200 shadow-sm'}`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>

              <div className="bg-[#fafafa] p-8 rounded-sm border border-black/5 shadow-none min-h-[120px] w-full" style={{ textAlign: mobileCenter }}>
                <motion.div
                  key={selectedColor.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3" style={{ justifyContent: mobileFlexCenter }}>
                    <div className="w-4 h-4 rounded-full border border-slate-200" style={{ backgroundColor: selectedColor.hex }}></div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">{selectedColor.name}</h4>
                  </div>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    {selectedColor.desc}
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-row w-full items-center justify-center lg:justify-start gap-2 sm:gap-4 order-7">
              <Link 
                to="/gallery/product/slide-turn"
                className="flex-1 bg-transparent text-slate-900 border border-slate-900 px-2 sm:px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-[9px] sm:text-xs hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                Explore All Finishes 
              </Link>
              <Link 
                to="/contact"
                className="flex-1 bg-white text-slate-500 border border-slate-200 px-2 sm:px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-[9px] sm:text-xs hover:border-luxury-gold hover:text-luxury-gold transition-colors flex items-center justify-center cursor-pointer text-center"
              >
                Get A Quote
              </Link>
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-full relative bg-[#fafafa] rounded-sm p-2 mb-6 border border-black/5 h-[400px] xl:h-[500px] flex items-center justify-center overflow-hidden">
              <motion.img
                key={selectedColor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={selectedColor.img}
                alt={`${selectedColor.name} Frame`}
                className="w-full h-full object-contain rounded-sm shadow-none mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {frameColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className={`h-2.5 rounded-full transition-all duration-300 border border-black/10 shadow-sm ${
                    selectedColor.id === color.id ? "w-8" : "w-2.5 opacity-60 hover:opacity-100 hover:w-4"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`View ${color.name} image`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
