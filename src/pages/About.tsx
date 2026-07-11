import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  Target, 
  Shield,
  Globe
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "01", num: "1", title: "The Beginning", desc: "Started as a small architectural hardware supplier, laying the foundation for excellence." },
    { year: "02", num: "2", title: "Pioneering S&T", desc: "Introduced our signature Slide & Turn frameless balcony systems to the domestic market." },
    { year: "03", num: "3", title: "Commercial Expansion", desc: "Expanded operations to cover large-scale commercial facades and hotel projects." },
    { year: "04", num: "4", title: "Automated Luxury", desc: "Launched motorized guillotine systems and bioclimatic pergolas." }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img loading="lazy" 
            src="/synchronized_banner.jpg" 
            alt="About Infiwin Background" 
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">The Infiwin Story</p>
          <h1 className="text-4xl md:text-7xl font-serif mb-4">Redefining Views</h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Crafting India's Premier Frameless Glass Solutions Aligned with Global Standards of Architectural Excellence.
          </p>
        </div>
      </section>

      {/* Beyond Boundaries Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                The concept of Infiwin was born out of a clear structural gap in modern Indian architecture. Standard balconies, patios, and terraces across high-rise residential projects and commercial hubs in cities like Delhi NCR, Noida, Mumbai, and Bangalore frequently sit unused.
              </p>
              <p>
                At Infiwin, we believe that your connection to the outside world should never be obstructed by bulky metal frames, nor should it be compromised by extreme weather.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <img loading="lazy" 
              src="https://i.postimg.cc/zB29WQw6/Chat-GPT-Image-Jul-8-2026-05-39-21-PM.png" 
              alt="Balcony View" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* A Decade of Excellence Section */}
      <section className="py-32 px-6 bg-slate-50 text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Milestones of growth</p>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">Journey</h2>
            <p className="text-slate-600 font-light leading-relaxed max-w-3xl mx-auto text-lg">
              Our journey from architectural hardware suppliers to pioneers of automated luxury frameless glazing solutions in India.
            </p>
          </div>
          
          <div ref={timelineRef} className="max-w-5xl mx-auto relative">
            {/* Vertical Line Inactive */}
            <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-gold/20 md:-translate-x-1/2"></div>
            {/* Vertical Line Active */}
            <motion.div 
              className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-luxury-gold md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
            
            <div className="space-y-32 md:space-y-0">
              {milestones.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div 
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "2000px 0px -40% 0px" }}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row md:h-[400px]`}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      variants={{
                        hidden: { backgroundColor: "#e2e8f0", boxShadow: "0px 0px 0px rgba(212,175,55,0)" },
                        visible: { backgroundColor: "#d4af37", boxShadow: "0px 0px 20px rgba(212,175,55,0.6)", transition: { duration: 0.4 } }
                      }}
                      className="absolute left-[2rem] md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-20 outline outline-4 outline-slate-50"
                    >
                    </motion.div>

                    {/* Content Half */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center pl-12 md:pl-0 ${isEven ? 'md:pr-24 md:items-end md:text-right' : 'md:pl-24 md:items-start md:text-left'} relative`}>
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
                        }}
                        className="relative z-10"
                      >
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-luxury-gold text-lg font-bold tracking-widest">{m.year}</span>
                          <span className="hidden md:block w-12 h-[1px] bg-luxury-gold/50"></span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6">{m.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base max-w-md">{m.desc}</p>
                      </motion.div>
                    </div>
                    
                    {/* Empty Half */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Infiwin Difference Section -> What Sets us apart */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">The Foundational Principles</p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">What Sets us apart</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Innovation First</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Continually testing new technologies—such as our smart-sensor Bioclimatic Pergolas and motorized Walking Motor Systems—to stay at the forefront of automated luxury glazing.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Uncompromising Integrity</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Providing honest, transparent quotes with zero hidden charges. All our baseline estimations are calculated using a uniform, area-based cost formulation at ₹1,800/sq.ft.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Client-Centric Customization</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Working closely with architects, interior designers, and estate managers to bring custom spatial visions to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">The Future of Living Spaces</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Vision</h2>
          <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our mission is simple: To expand your functional living space while providing absolute protection. We manufacture, deliver, and install India's most advanced Slide & Turn glass systems, motorized vertical barriers, and smart structural roofs. By blending high-luxury minimalist designs with rugged, heavy-gauge materials, we turn underutilized balconies, terraces, and commercial spaces into pristine, year-round sanctuaries.
          </p>
        </div>
      </section>

      {/* Engineering the Future Section */}
      <section className="py-32 px-6 bg-slate-900 text-white relative rounded-t-[3rem] overflow-hidden">
        {/* Background Overlay or Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
            alt="Office Glass" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Let's Connect</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready to Transform Your Space?</h2>
          <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Our experts are ready to assist you in designing the perfect frameless glass solution.
          </p>
          <button className="bg-luxury-gold text-white px-8 py-3 rounded-lg font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-colors shadow-lg shadow-black/10">
            Consult With Our Experts
          </button>
        </div>
      </section>
    </div>
  );
}
