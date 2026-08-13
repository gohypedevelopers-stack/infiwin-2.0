import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Maximize,
  Move,
  LayoutGrid
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2021", num: "1", title: "The Beginning", desc: "Launched India’s first Slide & Turn™ frameless glass window system." },
    { year: "2022", num: "2", title: "90° Turnable", desc: "Introduced the 90° turn able Slide & Turn Glass Window System." },
    {
      year: "2023",
      num: "3",
      title: "Design Flexibility",
      desc: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Expanded design flexibility for angular and arch-shaped enclosures,</li>
          <li>extended portfolio with conventional aluminium window systems,</li>
          <li>and successfully completed 200+ installations.</li>
        </ul>
      )
    },
    { year: "2024", num: "4", title: "Nationwide Presence", desc: "Strengthened nationwide presence with 300+ installations across 18 cities." },
    {
      year: "2025",
      num: "5",
      title: "Expanded Portfolio",
      desc: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Widened the product range by adding shower cubicles,</li>
          <li>crossed 500+ installations across 23 cities</li>
        </ul>
      )
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[600px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img loading="lazy"
            src="/gallery/Systems/Slide%20&%20Turn/slide-turn-5.webp"
            alt="About Infiwin Background"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 mt-12">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em]">About Infi Window System</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-2 leading-tight max-w-4xl mx-auto">Redefining Modern Living</h1>
          <p className="text-[11px] md:text-[16px] font-light text-slate-200 max-w-4xl mx-auto leading-relaxed text-center text-balance">
            Infi Window System is India’s first company to indigenously develop the Slide & Turn™ frameless glass window system, pioneering innovation under the premium brand name INFIWIN. We specialize in the design, sales, production, and installation of frameless balcony facades and terrace glazing solutions, offering cutting-edge systems that transform spaces with elegance and functionality.
          </p>
        </div>
      </section>

      {/* How Our Journey Began Section */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">How Our Journey Began</h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed text-justify">
              <p>
                Our story started with a simple yet powerful thought: modern Indian homes deserve world-class infrastructure solutions without compromise.

              </p>
              <p>
                What began as a spark of curiosity soon evolved into a mission—to reclaim spaces for people by blending design innovation with everyday functionality.
              </p>
              <p>
                We saw balconies, terraces, and large openings being underutilized due to conventional window systems. We envisioned a solution that would open up spaces fully, offer panoramic views, and bring global design standards to Indian homes.
              </p>
              <p>
                That vision gave birth to INFIWIN, a home-grown innovation that redefined how glass doors and windows could function.
              </p>
              <p>
                From the first prototype to today’s premium installations, our journey has been fueled by innovation, persistence, and a belief that Indian engineering can set global benchmarks.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <img loading="lazy"
              src="/balcony-5.webp"
              alt="Balcony View"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Innovation in Motion Section */}
      <section className="py-16 lg:py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Premium Systems</p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">INFIWIN – Innovation in Motion</h2>
            <p className="text-slate-600 font-light leading-relaxed max-w-3xl mx-auto text-lg mb-12">
              INFIWIN is a premium foldable glass door and window system designed for both exterior and interior applications. Our expertise lies in large-size glass doors, windows, and movable glass walls, complemented by premium aluminum fabrication and in-house installation services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-4xl lg:max-w-none mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 md:p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-luxury-gold/30 transition-colors duration-500 text-left flex flex-row items-start gap-5"
            >
              <div className="w-12 h-12 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center bg-luxury-gold/5 shrink-0">
                <Maximize size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-2">Panoramic Design</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Full-length views without vertical frames.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 md:p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-luxury-gold/30 transition-colors duration-500 text-left flex flex-row items-start gap-5"
            >
              <div className="w-12 h-12 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center bg-luxury-gold/5 shrink-0">
                <Move size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-2">Flexible Utility</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Complete opening of balconies, terraces, penthouses, villas, or large spaces of any shape or size.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-5 md:p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-luxury-gold/30 transition-colors duration-500 text-left flex flex-row items-start gap-5"
            >
              <div className="w-12 h-12 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center bg-luxury-gold/5 shrink-0">
                <LayoutGrid size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-2">Space Efficiency</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Movable glass walls that maximize usability compared to conventional doors and windows.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 lg:py-24 px-6 bg-white relative overflow-hidden">
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
                        hidden: { backgroundColor: "#ffffff", scale: 1 },
                        visible: { backgroundColor: "#c5a059", scale: 1.1, transition: { duration: 0.4 } }
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
                      <div className="bg-slate-50 p-6 md:p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-luxury-gold/30 transition-colors w-full group relative overflow-hidden text-left md:text-inherit">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110"></div>

                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-luxury-gold text-2xl md:text-3xl font-bold font-serif">{m.year}</span>
                          <span className="w-8 md:w-12 h-[1px] bg-luxury-gold/50"></span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">{m.title}</h3>
                        <div className="text-slate-500 font-light leading-relaxed text-sm md:text-base">{m.desc}</div>
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

      {/* Commitment & Vision Section */}
      <section className="py-20 lg:py-32 px-6 bg-[#0a0f1c] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 relative z-10 items-center">
          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center w-full text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className="w-12 h-[1px] bg-luxury-gold"></span>
              <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em]">Our Values</p>
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif mb-8 leading-tight">Our Commitment</h2>
            <div className="space-y-6 text-slate-300 font-light text-lg md:text-xl leading-relaxed">
              <p>
                At Infi Window System, innovation is in our DNA.
              </p>
              <p>
                We continuously design systems that meet the needs of modern Indian lifestyles while matching global standards  Our mission is to deliver solutions that inspire, simplify, and <br></br>endure—combining safety, durability, and elegance. We aspire to set new benchmarks in convenience, sustainability, and design excellence, ensuring accessibility for Indian buyers.
              </p>

            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 md:p-12 lg:p-14 rounded-lg border border-white/10 shadow-2xl relative overflow-hidden group hover:border-luxury-gold/30 transition-colors duration-500 w-full mx-auto lg:mx-0 text-center md:text-left"
          >
            {/* Hover Glow Effect */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-luxury-gold/10 rounded-full blur-[80px] group-hover:bg-luxury-gold/20 transition-all duration-700 -mr-20 -mt-20"></div>

            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6 relative z-10">Looking Ahead</p>
            <h2 className="text-[26px] min-[400px]:text-3xl md:text-4xl xl:text-5xl whitespace-nowrap font-serif mb-6 md:mb-8 relative z-10 text-white group-hover:text-luxury-gold/90 transition-colors duration-500">Vision Beyond Windows</h2>

            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed mb-8 md:mb-10 relative z-10">
              Infi Window System aspires to become a household name for cutting-edge methods and creative solutions that meet the evolving needs of modern life. With a forward-looking spirit, we aim to redefine living spaces in India by blending innovation, elegance, and accessibility at par with global standards.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 relative z-10 w-full">
              <div className="inline-flex items-center justify-center bg-luxury-gold/10 px-5 md:px-6 py-3 md:py-4 rounded-lg border border-luxury-gold/30 w-full sm:w-auto">
                <span className="text-luxury-gold text-xs md:text-sm font-medium tracking-wide text-center">Awarded ISO 9001, 45001, CE</span>
              </div>
              <div className="px-2 sm:px-4 py-2 border-l border-white/20">
                <span className="text-sm text-slate-400 font-medium tracking-wider uppercase text-[10px]">Recognized Startup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-12 lg:py-16 px-6 bg-slate-50 text-slate-900 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-2">Let's Connect</p>
          <h2 className="!text-[17.5px] md:!text-5xl font-serif mb-4 leading-tight">Ready to Transform Your Space?</h2>
          <p className="text-slate-600 font-light !text-[12px] md:!text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
            Our experts are ready to assist you in designing the perfect frameless glass solution.
          </p>
          <Link to="/contact" className="cta-btn inline-block bg-luxury-gold hover:bg-slate-950 text-white px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs transition-colors shadow-md border-none cursor-pointer">
            Consult With Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
