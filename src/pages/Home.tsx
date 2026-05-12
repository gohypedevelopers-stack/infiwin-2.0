import { motion } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight, 
  Wind, 
  Maximize2,
  Zap
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-white/80 font-medium uppercase tracking-[0.3em] text-xs mb-6 block">
            Perfection is a
          </span>
          <h1 className="text-7xl md:text-9xl font-serif text-white leading-none mb-8 italic">
            State <br /> 
            <span className="not-italic">of Mind</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed">
            Our expert team brings your vision to life, transforming interiors into environments that inspire and impress.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors flex items-center gap-2">
              Explore Our Shop <ArrowRight size={16} />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
              Find out more
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4">
        <span className="[writing-mode:vertical-rl] text-white/40 uppercase tracking-[0.5em] text-[10px]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
};

const DesignGrid = () => {
  const designs = [
    {
      title: "Serra Niche",
      desc: "Serene Mediterranean design.",
      img: "https://images.unsplash.com/photo-1600607687940-4e7a6a4d872c?auto=format&fit=crop&q=80&w=1000",
      city: "Tuscany, 2024"
    },
    {
      title: "Azure Loft",
      desc: "Panoramic city views.",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
      city: "Dubai, 2025"
    },
    {
      title: "Villa Sereno",
      desc: "Seamless indoor-outdoor living.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      city: "London, 2025"
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Timeless Designs</h2>
            <h3 className="text-5xl font-serif italic text-slate-900">Iconic Spaces</h3>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
            View All Projects <ChevronRight size={16} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {designs.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/80 text-white px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-sm">
                    {item.city}
                  </span>
                </div>
              </div>
              <h4 className="text-2xl font-serif italic mb-2 group-hover:text-luxury-gold transition-colors">{item.title}</h4>
              <p className="text-slate-500 font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const specs = [
    {
      title: "Laminated Acoustic Glass",
      desc: "Superior sound insulation for urban tranquility. Engineered to block external disturbances while maintaining pure clarity.",
      features: ["Reduces noise by 45dB", "PVB Interlayer safety", "Shatter-proof tech"],
      img: "https://images.unsplash.com/photo-1518005020251-58296d195a62?auto=format&fit=crop&q=80&w=800",
      icon: <Wind className="text-luxury-gold" />
    },
    {
      title: "Low-E Thermal Coating",
      desc: "Heat-reflective system for maximum energy efficiency. Keeps interiors cool in summer and warm in winter.",
      features: ["U-Value as low as 1.0", "90% UV protection", "30% energy saving"],
      img: "https://images.unsplash.com/photo-1533038590840-1cde6b66b7c6?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="text-luxury-gold" />
    },
    {
      title: "Ultra-Clear Glazing",
      desc: "Maximum transparency for unbounded views. Iron-free glass that eliminates the green tint of standard glazing.",
      features: ["98% Light transmission", "Iron-free high clarity", "Structural load certified"],
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      icon: <Maximize2 className="text-luxury-gold" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Precision Craftsmanship</h2>
          <h3 className="text-5xl font-serif text-slate-900">Technical Excellence</h3>
        </div>

        <div className="space-y-24">
          {specs.map((spec, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 rounded-sm overflow-hidden shadow-2xl"
              >
                <img 
                  src={spec.img} 
                  alt={spec.title} 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="mb-6">{spec.icon}</div>
                <h4 className="text-3xl font-serif mb-4 italic">{spec.title}</h4>
                <p className="text-slate-500 mb-8 text-lg font-light leading-relaxed">{spec.desc}</p>
                <ul className="space-y-4">
                  {spec.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const products = [
    { title: "Telescopic System", category: "Slim panoramic frames", img: "https://images.unsplash.com/photo-1512918766775-d56aebb25bd1?auto=format&fit=crop&q=80&w=800" },
    { title: "Bi-fold Solution", category: "Infinite views", img: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=800" },
    { title: "Slim-line Sliding", category: "Minimal frames", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800" },
    { title: "Pivot Doors", category: "Architectural entry", img: "https://images.unsplash.com/photo-1583333222241-11910cf9ca0a?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="products" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Future Engineering</h2>
          <h3 className="text-5xl font-serif text-slate-900 mb-8">Our Glass Systems</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-4 rounded-sm border border-slate-100 group transition-all hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-medium mb-1 group-hover:text-luxury-gold transition-colors">{p.title}</h4>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">{p.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="pt-0"> {/* pt-0 because hero handles its own overflow and transparency at top */}
      <Hero />
      <DesignGrid />
      <Features />
      <ProductShowcase />
    </div>
  );
}
