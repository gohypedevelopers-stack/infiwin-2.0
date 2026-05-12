import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Globe, 
  Clock,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const offices = [
    {
      title: "Technical Atelier",
      location: "Stuttgart, Germany",
      type: "R&D Hub",
      details: "Precision engineering and structural testing facility."
    },
    {
      title: "Global Logistics",
      location: "Singapore",
      type: "Distribution Node",
      details: "APAC distribution and supply chain management."
    },
    {
      title: "Global Headquarters",
      location: "Chicago, IL",
      type: "Executive Office",
      details: "420 Sterling Plaza, Architectural District, Suite 1800."
    }
  ];

  const departments = [
    {
      title: "Technical Support",
      desc: "Immediate engineering consultation for structural glazing and installation specifications.",
      icon: <Globe size={24} />
    },
    {
      title: "Sales & Partnering",
      desc: "Strategic partnerships for large-scale developments and regional distribution inquiries.",
      icon: <Clock size={24} />
    },
    {
      title: "Press Inquiries",
      desc: "Media kits, case study requests, and exhibition booking for architectural events.",
      icon: <MessageSquare size={24} />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 bg-slate-50 border-b border-slate-100 italic">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Architecture of Connection</h1>
            <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-tight italic mb-8">
              Build <br /> <span className="not-italic">Transparency</span>
            </h2>
            <p className="max-w-2xl text-slate-500 font-light text-lg leading-relaxed">
              Collaborate with INFIWIN to bring clarity and structural beauty to your next architectural landmark. We're ready for the most demanding challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {departments.map((dept, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 border border-slate-100 rounded-sm hover:border-luxury-gold transition-all"
              >
                <div className="text-luxury-gold mb-6">{dept.icon}</div>
                <h3 className="text-xl font-medium mb-4">{dept.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">{dept.desc}</p>
                <button className="text-[10px] uppercase font-bold tracking-widest text-slate-900 flex items-center gap-2 hover:text-luxury-gold transition-colors">
                  Contact Department <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info */}
      <section className="px-6 py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-sm font-medium text-white/40 uppercase tracking-[0.3em] mb-4">Get in Touch</h3>
              <h4 className="text-5xl font-serif mb-12 italic">Let's start the <br /> <span className="not-italic">Conversation</span></h4>
              
              <form className="space-y-8 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                    <input type="text" className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-luxury-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Company</label>
                    <input type="text" className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-luxury-gold transition-colors" placeholder="Architectural Firm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                  <input type="email" className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-luxury-gold transition-colors" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Subject</label>
                  <select className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-luxury-gold transition-colors appearance-none">
                    <option className="bg-slate-900">Custom Architectural Quote</option>
                    <option className="bg-slate-900">Technical Consultation</option>
                    <option className="bg-slate-900">Partnership Inquiry</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Project Details</label>
                  <textarea rows={4} className="bg-white/5 border border-white/20 p-6 outline-none focus:border-luxury-gold transition-colors rounded-sm" placeholder="Tell us about the scope of your vision..." />
                </div>
                <button className="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-white transition-all">
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-12">
               <div className="p-10 bg-white/5 border border-white/10 rounded-sm">
                  <h5 className="text-sm font-bold uppercase tracking-widest text-luxury-gold mb-8 italic">Direct Communication</h5>
                  <div className="space-y-8">
                     <div className="flex gap-6 items-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-luxury-gold">
                           <Phone size={20} />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Today</p>
                           <p className="text-xl font-medium">+1 (555) LUX-GLAS</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-center">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-luxury-gold">
                           <Mail size={20} />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</p>
                           <p className="text-xl font-medium">solutions@infiwin.systems</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative aspect-video rounded-sm overflow-hidden grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 cursor-crosshair shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                    alt="Office" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                     <MapPin size={16} className="text-luxury-gold" />
                     <span className="text-xs font-bold uppercase tracking-widest">HQ CHICAGO, ILLINOIS</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nodes of Innovation */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Nodes of Innovation</h3>
            <h4 className="text-5xl font-serif text-slate-900">Global Presence</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <div key={i} className="p-12 bg-slate-50 border border-slate-100 rounded-sm group transition-all hover:bg-white hover:shadow-xl">
                 <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-4">{office.type}</p>
                 <h5 className="text-2xl font-serif italic mb-2 group-hover:text-black transition-colors">{office.title}</h5>
                 <p className="text-sm text-slate-900 font-medium mb-6">{office.location}</p>
                 <p className="text-sm text-slate-500 font-light leading-relaxed">{office.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
