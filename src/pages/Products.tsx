import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { galleryData } from "../data/galleryData";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Settings,
  ShieldCheck,
  Activity,
  Maximize2,
  Ruler,
  MoveVertical,
  MoveHorizontal,
  Lock,
  Shield
} from "lucide-react";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const getProductImg = (title: string, fallbackImg: string) => {
    const id = title.toLowerCase().replace(/[\\s&.]+/g, '-');
    if (galleryData[id] && galleryData[id].images.length > 0) {
      return galleryData[id].images[0];
    }
    return fallbackImg;
  };

  const products = [
    { title: "Slide & Turn", category: "Balcony System", img: getProductImg("Slide & Turn", "/slide_turn.png") },
    { title: "Guillotine Glass System", category: "Balcony System", img: getProductImg("Guillotine Glass System", "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_50_39%20PM.png") },
    { title: "Telescopic Sliders", category: "Internal Partition", img: getProductImg("Telescopic Sliders", "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_15_29%20PM.png") },
    { title: "Synchronized Systems", category: "Internal Partition", img: getProductImg("Synchronized Systems", "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_29_01%20PM.png") },
    { title: "Top Hang Bi Fold", category: "Internal Partition", img: getProductImg("Top Hang Bi Fold", "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_27_22%20PM.png") },
    { title: "Sliding Windows & Doors", category: "Doors & Windows", img: getProductImg("Sliding Windows & Doors", "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_25_52%20PM.png") },
    { title: "Openable Windows & Doors", category: "Doors & Windows", img: getProductImg("Openable Windows & Doors", "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_30_38%20PM.png") },
    { title: "Foldable Doors (Bi Fold)", category: "Doors & Windows", img: getProductImg("Foldable Doors (Bi Fold)", "/foldable_doors.png") },
    { title: "90 Degree Encloser", category: "Bathroom", img: getProductImg("90 Degree Encloser", "/ninety_degree.png") },
    { title: "Sliding Enclouser", category: "Bathroom", img: getProductImg("Sliding Enclouser", "/sliding_enclosure.png") },
    { title: "Openable Door", category: "Bathroom", img: getProductImg("Openable Door", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80") },
    { title: "Fixed Partition", category: "Bathroom", img: getProductImg("Fixed Partition", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80") }
  ];

  const categories = ["All", "Balcony System", "Internal Partition", "Doors & Windows", "Bathroom"];
  const filteredProducts = activeFilter === "All" ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80"
            alt="Products Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Structural Excellence</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Precision Engineered</h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of precision-engineered glass systems. Our collection defines the boundaries of transparency and structural innovation.
          </p>
        </div>
      </section>

      {/* Signature Range */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Signature Range</h3>
              <h4 className="text-4xl font-serif text-slate-900">Highly Engineered Systems</h4>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-sm text-sm tracking-wide transition-all duration-300 ${activeFilter === cat
                    ? "bg-luxury-gold text-white font-medium shadow-md"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={`${p.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <Link to={`/gallery/${p.title.toLowerCase().replace(/[\\s&.]+/g, '-')}`} className="group cursor-pointer block">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 shadow-md transition-shadow hover:shadow-xl relative">
                    <img loading="lazy"
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm">
                      {p.category}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <h5 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{p.title}</h5>
                    <ArrowRight size={20} className="text-slate-300 group-hover:text-luxury-gold transform translate-x-0 group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Tech Specs */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
            <div>
              <div className="mb-12">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Technical Data</h3>
                <h4 className="text-5xl font-serif text-slate-900">Engineering Specifications</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Glass Type", value: "Toughened Glass", desc: "Premium Quality" },
                  { label: "Glass Thickness", value: "8mm & 10mm", desc: "Structural Grade" },
                  { label: "Panel Width", value: "600mm to 850mm", desc: "Flexible Sizing" },
                  { label: "Panel Height", value: "Up to 2700mm", desc: "Floor to Ceiling" },
                  { label: "Fix Section", value: "55x55mm", desc: "Top & Bottom Rail" },
                  { label: "Sliding Section", value: "60x32mm", desc: "Sliding Glass" },
                  { label: "Mechanism", value: "Slide and Turn", desc: "Smooth Operation" },
                  { label: "Profile", value: "Aluminium", desc: "Durable Frame" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 border border-slate-100 rounded-sm hover:border-luxury-gold transition-colors">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-3">{stat.label}</p>
                    <p className="text-xl font-serif mb-1 text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-light">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-full min-h-[400px] lg:min-h-0 rounded-sm overflow-hidden shadow-2xl mt-8 lg:mt-9">
              <img loading="lazy"
                src="https://i.postimg.cc/HkDbBZHF/Chat-GPT-Image-Jul-1-2026-04-27-26-PM.png"
                alt="Engineering Specifications"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2"><ShieldCheck size={24} /> <span className="text-xs font-bold uppercase tracking-widest">RC2 Security Certified</span></div>
            <div className="flex items-center gap-2"><Activity size={24} /> <span className="text-xs font-bold uppercase tracking-widest">600 Pa Watertight Rated</span></div>
            <div className="flex items-center gap-2"><Settings size={24} /> <span className="text-xs font-bold uppercase tracking-widest">Architectural Grade</span></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-luxury-gold/5 border-y border-luxury-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-serif mb-8">Ready to upgrade your space?</h4>
          <p className="text-slate-600 font-light mb-10 leading-relaxed">
            Our consultants are ready to provide a detailed technical assessment and quote for your project.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors">
            Request a Technical Quote
          </button>
        </div>
      </section>
    </div>
  );
}
