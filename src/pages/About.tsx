import { motion } from "motion/react";
import { 
  History, 
  Settings, 
  Truck, 
  Lightbulb, 
  ShieldCheck, 
  Leaf,
  Linkedin,
  Twitter,
  ArrowRight
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "1984", title: "The First Atelier", desc: "A small glass workshop in Germany focused on artisanal restorations." },
    { year: "1998", title: "Architectural Breakthrough", desc: "First major commercial project in Berlin, setting new standards for facades." },
    { year: "2010", title: "Global Expansion", desc: "Opening nodes in Singapore and Chicago to serve the international market." },
    { year: "2018", title: "Sustainable Innovation", desc: "Launching solar-integrated glass line to meet modern energy demands." },
    { year: "2024", title: "Precision Redefined", desc: "Introduction of the 20mm interlock, the slimmest in the industry." }
  ];

  const process = [
    { 
      title: "Precision Engineering", 
      icon: <Settings size={32} />, 
      desc: "Every project starts with a rigorous technical analysis. We utilize advanced parametric modeling to ensure structural integrity and thermal efficiency." 
    },
    { 
      title: "Custom Fabrication", 
      icon: <History size={32} />, 
      desc: "In our climate-controlled facility, we transform raw materials into precision-cut components using automated water-jet and CNC technologies." 
    },
    { 
      title: "White-Glove Installation", 
      icon: <Truck size={32} />, 
      desc: "Our specialized teams handle the final assembly with surgical precision, ensuring seamless transitions and flawless finishes on site." 
    }
  ];

  const team = [
    { name: "Marcus Vance", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Elena Rossi", role: "Director of Design", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Simon Chen", role: "Chief Engineer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Miller", role: "Sustainability Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Precision in Every Pane</h1>
            <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-tight italic mb-8">Crafting <br /> <span className="not-italic">Clarity</span></h2>
            <p className="max-w-2xl text-slate-500 font-light text-lg leading-relaxed mb-10">
              Redefining boundaries through the medium of light, clarity, and structural innovation. From our roots as a German atelier to a global architectural benchmark.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-[1px] bg-slate-200"></div>
        <div className="absolute top-1/2 right-0 w-64 h-[1px] bg-slate-200"></div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-6">Our Legacy</h3>
            <h4 className="text-4xl font-serif italic text-slate-900 mb-8 max-w-md">From a Boutique Atelier to an Industry Standard</h4>
            <div className="space-y-6 text-slate-500 font-light leading-relaxed">
              <p>
                INFIWIN began as a specialized glass atelier in 1984, focused on artisanal restorations and bespoke residential partitions. We weren't looking to revolutionize the industry; we were looking to perfect it.
              </p>
              <p>
                Three decades later, that commitment to microscopic precision has propelled us to the forefront of architectural glazing. Today, we handle complex commercial facades and high-performance structural systems across three continents.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518005020251-58296d195a62?auto=format&fit=crop&q=80&w=800" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-[0.3em] mb-4">Milestones</h3>
            <h4 className="text-5xl font-serif italic">Our Evolution</h4>
          </div>

          <div className="relative">
            {/* Horizontal Line (Desktop) / Vertical Line (Mobile) */}
            <div className="hidden lg:block absolute top-[2.1rem] left-0 w-full h-[1px] bg-white/10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
               {milestones.map((m, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="relative"
                 >
                   <div className="w-4 h-4 bg-luxury-gold rounded-full mb-8 relative z-10 mx-auto lg:mx-0"></div>
                   <p className="text-luxury-gold font-bold text-sm mb-2">{m.year}</p>
                   <h5 className="text-lg font-serif italic mb-4">{m.title}</h5>
                   <p className="text-white/40 text-sm font-light leading-relaxed">{m.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Our Method</h3>
             <h4 className="text-4xl font-serif italic text-slate-900">Surgical Precision</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 border border-slate-100 rounded-sm hover:border-luxury-gold/30 hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <div className="text-luxury-gold mb-8">{step.icon}</div>
                <h5 className="text-2xl font-serif italic mb-6">{step.title}</h5>
                <p className="text-slate-500 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                 <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Philosophy</h3>
                 <h4 className="text-5xl font-serif text-slate-900 leading-tight">Architecture as a <br /> <span className="italic">Silent Partner</span></h4>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Lightbulb size={24} />, title: "Architectural Transparency", desc: "Maximizing visual flow while maintaining thermal and acoustic isolation. We strive for the invisible wall." },
                  { icon: <ShieldCheck size={24} />, title: "Material Purity", desc: "Sourcing only low-iron glass and premium alloys to prevent color distortion and ensure longevity." },
                  { icon: <Leaf size={24} />, title: "Sustainable Design", desc: "Engineering solutions that reduce energy reliance through passive solar management." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                     <div className="text-luxury-gold">{item.icon}</div>
                     <h5 className="text-lg font-medium">{item.title}</h5>
                     <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Leadership</h3>
            <h4 className="text-5xl font-serif text-slate-900">Led by Visionaries</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-sm overflow-hidden mb-6 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors">
                        <Linkedin size={18} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors">
                        <Twitter size={18} />
                     </a>
                  </div>
                </div>
                <h5 className="text-xl font-medium mb-1">{member.name}</h5>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="px-6 py-24 bg-slate-900 text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
           <h3 className="text-4xl font-serif italic mb-8">Join Our Mission</h3>
           <p className="text-white/50 font-light mb-10 leading-relaxed text-lg">
             We are always seeking visionaries, craftsmen, and engineers who share our obsession with transparency and precision. Explore a career with INFIWIN.
           </p>
           <button className="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-white transition-all flex items-center gap-2 mx-auto">
             View Openings <ArrowRight size={16} />
           </button>
        </div>
      </section>
    </div>
  );
}
