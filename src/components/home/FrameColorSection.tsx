import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const frameColors = [
  { id: "white", name: "Arctic White", hex: "#f1f1f1", img: "/arctic_white_clean.png", desc: "A timeless, clean finish that brightens any balcony. Arctic White pairs effortlessly with modern minimalist interiors and light-toned exteriors." },
  { id: "rose", name: "Rose Bronze", hex: "#cfa89f", img: "/rose_bronze_clean.png", desc: "A warm, sophisticated tone that adds a touch of subtle luxury and contemporary elegance to your living space." },
  { id: "gold", name: "Champagne Gold", hex: "#cfb57a", img: "/champagne_gold_clean.png", desc: "A premium brushed finish that exudes opulence. Perfect for high-end architectural integrations." },
  { id: "dark", name: "Charcoal Grey", hex: "#5a5a5a", img: "/charcoal_grey_clean.png", desc: "A bold, industrial look that provides striking contrast and matches perfectly with modern concrete or dark-wood aesthetics." }
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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mobileCenter = isMobile ? "center" as const : "left" as const;
  const mobileFlexCenter = isMobile ? "center" : "flex-start";

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-8 h-[1px] bg-luxury-gold"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">
                Slide & Turn System - Available Frame Finishes
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-light">Choose Your Frame Colour</h2>

            <p className="text-slate-500 font-light text-[15px] leading-loose mb-10 text-center lg:text-left">
              Our signature Slide & Turn system glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either corner — offering 100% opening potential. Now available in four premium powder-coated aluminium finishes.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-white border border-slate-100 px-3 py-1.5 rounded-sm flex items-center gap-2 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500">{badge}</span>
                </div>
              ))}
            </div>

            {/* Mobile Image Gallery */}
            <div className="flex flex-col items-center lg:hidden w-full mb-8">
              <div className="w-full relative bg-[#fafafa] rounded-sm p-12 mb-6 border border-black/5 min-h-[300px] xs:min-h-[400px] flex items-center justify-center">
                <motion.img
                  key={selectedColor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={selectedColor.img}
                  alt={`${selectedColor.name} Frame`}
                  className="w-full h-auto object-contain rounded-sm shadow-none mix-blend-multiply absolute inset-4 max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]"
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

            <div className="mb-10 w-full flex flex-col items-center lg:items-start">
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

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/gallery/product/slide-turn"
                className="bg-transparent text-slate-900 border border-slate-900 px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-center"
              >
                Explore All Finishes <ArrowRight size={14} />
              </Link>
              <Link 
                to="/contact"
                className="bg-white text-slate-500 border border-slate-200 px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-pointer text-center"
              >
                Get A Quote
              </Link>
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-full relative bg-[#fafafa] rounded-sm p-12 mb-6 border border-black/5 min-h-[400px] flex items-center justify-center">
              <motion.img
                key={selectedColor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={selectedColor.img}
                alt={`${selectedColor.name} Frame`}
                className="w-full h-auto object-contain rounded-sm shadow-none mix-blend-multiply absolute inset-4 max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]"
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
