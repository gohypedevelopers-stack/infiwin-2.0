import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

export const ProductFeatureSection = () => {
  const [activeVariant, setActiveVariant] = useState("full");

  return (
    <section className="py-12 lg:py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 rounded-sm overflow-hidden relative shadow-none border border-black/5 h-[280px]"
            >
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80" 
                alt="Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full flex items-center gap-1 shadow-md">
                <Star size={10} className="fill-white" /> MOST POPULAR
              </div>
            </motion.div>
            
            {/* Top Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 rounded-sm overflow-hidden shadow-none border border-black/5 h-[280px]"
            >
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                alt="Living Space" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Bottom Full Width */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-2 rounded-sm overflow-hidden shadow-none border border-black/5 h-[304px]"
            >
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" 
                alt="Balcony View" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Header — centered on mobile, left on desktop */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-[1px] bg-luxury-gold"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">
                  Balcony Enclosure Category
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-light">Slide & Turn System</h2>
              <p className="text-slate-500 font-light text-[15px] leading-loose mb-10">
                Our iconic signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.
              </p>
            </div>

            {/* Interactive Variant Box */}
            <div className="bg-[#fafafa] rounded-sm p-8 border border-black/5 mb-10 shadow-none">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-4">Interactive Variant Check</p>
              
              <div className="flex bg-white p-1 rounded-sm border border-slate-100 mb-4 shadow-inner">
                <button 
                  onClick={() => setActiveVariant("full")}
                  className={`flex-1 py-3 text-[10px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 ${activeVariant === "full" ? "bg-slate-900 text-white shadow-none" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  Full Length Option
                </button>
                <button 
                  onClick={() => setActiveVariant("half")}
                  className={`flex-1 py-3 text-[10px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 ${activeVariant === "half" ? "bg-slate-900 text-white shadow-none" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  Half Length Option
                </button>
              </div>

              <div className="bg-white p-6 rounded-sm border border-black/5 shadow-none min-h-[140px] transition-all duration-300 mt-6">
                {activeVariant === "full" ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">Full Length Option</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      Floor to ceiling coverage structure. Spans continuously from the floor straight up to the concrete ceiling line, creating a stunning, seamless floor to ceiling glazed sun room style with direct outdoor views.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">Half Length Option</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      Installed above existing railings or parapet walls. Perfect for retaining your current balcony structure while adding the protection and versatility of premium slide and turn glazing.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link to="/products" className="bg-transparent text-slate-900 border border-slate-900 px-8 py-3 rounded-lg uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-3">
                Inspect Custom Variants 
              </Link>
              <Link to="/#estimator" className="bg-white text-slate-500 border border-slate-200 px-8 py-3 rounded-lg uppercase tracking-[0.2em] text-[10px] hover:border-luxury-gold hover:text-luxury-gold transition-colors flex items-center justify-center">
                Calculate Approximate Quote
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
