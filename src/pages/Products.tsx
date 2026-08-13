import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { galleryData } from "../data/galleryData";
import { productsList } from "../data/productData";
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
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (location.state && typeof location.state === "object" && "filter" in location.state) {
      setActiveFilter(location.state.filter as string);
    }
  }, [location.state]);

  const products = productsList;

  const categories = ["All", "Balcony System", "Internal Partition", "Doors & Windows", "Bathroom"];
  const filteredProducts = activeFilter === "All" ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[50vh] md:h-[600px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/gallery/Systems/Slide%20&%20Turn/Slide & Turn (1).jpg.jpeg"
            alt="Products Background"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 mt-12">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em]">Structural Excellence</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-2 leading-tight max-w-4xl mx-auto">Precision Engineered</h1>
          <p className="text-[11px] md:text-[16px] font-light text-slate-200 max-w-4xl mx-auto leading-relaxed text-center text-balance">
            Experience our precision-engineered frameless glass structures. Our innovative Slide & Turn systems transform spaces with seamless elegance and functionality.
          </p>
        </div>
      </section>

      {/* Signature Range */}
      <section className="px-6 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="text-center md:text-left">
              <h5 className="text-sm font-medium text-slate-400 uppercase mb-4">Signature Range</h5>
              <h4 className="text-3xl md:text-4xl font-serif text-slate-900">Highly Engineered Systems</h4>
            </div>

            <div className="flex overflow-x-auto md:flex-wrap gap-2 md:gap-4 items-center justify-start md:justify-start pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1 -mx-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 md:px-6 md:py-2 rounded-sm text-xs md:text-sm tracking-wide transition-all duration-300 whitespace-nowrap shrink-0 ${activeFilter === cat
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
            {filteredProducts.map((p) => (
              <div key={p.title}>
                <Link to={`/gallery/product/${p.title.toLowerCase().replace(/®/g, '').replace(/[\s&.]+/g, '-')}`} className="group cursor-pointer block">
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
                  <div className="flex justify-center md:justify-between items-center mt-6 text-center md:text-left">
                    <h5 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{p.title}</h5>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Tech Specs */}
      <section className="px-6 py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Heading */}
          <div className="mb-6 text-center lg:hidden">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Technical Data</h3>
            <h4 className="text-3xl md:text-5xl font-serif text-slate-900">Engineering Specifications</h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="order-2 lg:order-1">
              {/* Desktop Heading */}
              <div className="mb-12 text-left hidden lg:block">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Technical Data</h3>
                <h4 className="text-3xl md:text-5xl font-serif text-slate-900">Engineering Specifications</h4>
              </div>

              <div className="grid grid-cols-2 gap-6">
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
                  <div key={i} className="p-4 md:p-6 border border-slate-100 rounded-sm hover:border-luxury-gold transition-colors text-center sm:text-left">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2 md:mb-3">{stat.label}</p>
                    <p className="text-base md:text-xl font-serif mb-1 text-slate-900">{stat.value}</p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-light">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-full min-h-[400px] lg:min-h-0 rounded-sm overflow-hidden shadow-2xl mt-0 lg:mt-9 order-1 lg:order-2">
              <img loading="lazy"
                src="/engineering-specs.webp"
                alt="Engineering Specifications"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2"><ShieldCheck size={24} /> <span className="text-xs font-bold uppercase tracking-widest">RC2 Security Certified</span></div>
            <div className="flex items-center gap-2"><Activity size={24} /> <span className="text-xs font-bold uppercase tracking-widest">600 Pa Watertight Rated</span></div>
            <div className="flex items-center gap-2"><Settings size={24} /> <span className="text-xs font-bold uppercase tracking-widest">Architectural Grade</span></div>
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section px-6 py-12 lg:py-16 bg-luxury-gold/5 border-y border-luxury-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-serif mb-3">Ready to upgrade your space?</h4>
          <p className="text-slate-600 font-light mb-5 leading-relaxed">
            Our consultants are ready to provide a detailed technical assessment and quote for your project.
          </p>
          <Link to="/contact" className="cta-btn inline-block bg-black hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs transition-colors shadow-md border-none cursor-pointer">
            Request a Technical Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
