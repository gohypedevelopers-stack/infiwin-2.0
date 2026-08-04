import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Target, 
  Shield,
  Globe
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "01", num: "1", title: "The Beginning", desc: "Started as a small architectural hardware supplier, laying the foundation for excellence." },
    { year: "02", num: "2", title: "Pioneering S&T", desc: "Introduced our signature Slide & Turn® frameless balcony systems to the domestic market." },
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
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img loading="lazy" 
            src="/gallery/Systems/Slide%20&%20Turn/slide-turn-5.webp" 
            alt="About Infiwin Background" 
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">The Infiwin Story</p>
          <h1 className="text-4xl md:text-7xl font-serif mb-4">Redefining Views</h1>
          <p className="text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Crafting India's Premier Frameless Glass Solutions Aligned with Global Standards of Architectural Excellence.
          </p>
        </div>
      </section>

      {/* Beyond Boundaries Section */}
      <section className="py-12 lg:py-16 px-6 bg-white">
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
              src="/balcony-5.webp" 
              alt="Balcony View" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* A Decade of Excellence Section */}
      <section className="py-16 lg:py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs font-bold text-luxury-gold uppercase tracking-[0.3em] mb-4"
            >
              Milestones of Growth
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 font-light leading-relaxed max-w-2xl mx-auto text-lg"
            >
              From architectural hardware suppliers to pioneers of automated luxury frameless glazing solutions in India.
            </motion.p>
          </div>
          
          <div ref={timelineRef} className="max-w-5xl mx-auto relative pb-10">
            {/* Vertical Line Background */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-luxury-gold/30 to-transparent md:-translate-x-1/2"></div>
            
            {/* Active Line (Animated) */}
            <motion.div 
              className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-luxury-gold md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(212,175,55,0.6)] z-10"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
            
            <div className="space-y-12 md:space-y-24 relative z-20">
              {milestones.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div 
                    key={i} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    
                    {/* Timeline Dot */}
                    <motion.div 
                      variants={{
                        hidden: { backgroundColor: "#f8fafc", scale: 1 }, // slate-50
                        visible: { backgroundColor: "#c5a059", scale: 1.1, transition: { duration: 0.4 } } // luxury-gold
                      }}
                      className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full border-[3px] border-luxury-gold -translate-x-1/2 shadow-[0_0_10px_rgba(197,160,89,0.5)] z-30"
                    ></motion.div>
                    
                    {/* Content Card */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: isEven ? -40 : 40, y: 10 },
                        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }
                      }}
                      className={`w-full md:w-1/2 flex flex-col pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:items-start md:text-left'}`}
                    >
                      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-luxury-gold/30 transition-colors w-full group relative overflow-hidden text-left md:text-inherit">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110"></div>
                        
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-luxury-gold text-xl md:text-2xl font-bold font-serif">{m.year}</span>
                          <span className="w-8 md:w-12 h-[1px] bg-luxury-gold/50"></span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">{m.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">{m.desc}</p>
                      </div>
                    </motion.div>
                    
                    {/* Empty Space for layout */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Infiwin Difference Section -> What Sets us apart */}
      <section className="py-12 lg:py-16 px-6 bg-white">
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
      <section className="py-12 lg:py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">The Future of Living Spaces</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Vision</h2>
          <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our mission is simple: To expand your functional living space while providing absolute protection. We manufacture, deliver, and install India's most advanced Slide & Turn® glass systems, motorized vertical barriers, and smart structural roofs. By blending high-luxury minimalist designs with rugged, heavy-gauge materials, we turn underutilized balconies, terraces, and commercial spaces into pristine, year-round sanctuaries.
          </p>
        </div>
      </section>

      {/* Engineering the Future Section */}
      <section className="py-12 lg:py-16 px-6 bg-slate-900 text-white relative rounded-t-[3rem] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Let's Connect</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready to Transform Your Space?</h2>
          <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Our experts are ready to assist you in designing the perfect frameless glass solution.
          </p>
          <Link to="/contact" className="inline-block bg-luxury-gold text-white px-8 py-3 rounded-lg font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-colors shadow-lg shadow-black/10">
            Consult With Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
