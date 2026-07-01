import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Globe
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Start Your Project</h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to our architectural specialists to discuss requirements and receive a comprehensive proposal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">Call Us</h4>
                  <p className="text-slate-500 font-light text-sm">+91 73370 74370</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">Email</h4>
                  <p className="text-slate-500 font-light text-sm">hi@infiwindow.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">Headquarters</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    Corporate Office: H 195, Sector 63, Noida, Uttar Pradesh - 201309
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">Working Hours</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    Mon - Sat: 9:00 - 18:00<br/>
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-[#fafafa] p-10 rounded-sm">
              <h3 className="text-2xl font-serif text-slate-900 mb-8">INQUIRY FORM</h3>
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-slate-200 pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-luxury-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Phone Number</label>
                    <input type="text" placeholder="+91" className="w-full bg-transparent border-b border-slate-200 pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-luxury-gold transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Subject</label>
                  <select className="w-full bg-transparent border-b border-slate-200 pb-3 text-sm text-slate-900 focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Request a Quote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Message</label>
                  <textarea placeholder="How can we help you?" rows={3} className="w-full bg-transparent border-b border-slate-200 pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-luxury-gold transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-black text-white py-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors mt-4">
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            
            {/* Cost Estimator */}
            <div className="bg-[#0a0a0a] text-white p-10 md:p-14 rounded-sm shadow-2xl shadow-black/10">
              <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Immediate Tool</p>
              <h3 className="text-3xl font-serif mb-4">Cost Estimator</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-10 max-w-sm">
                Get a quick, approximate cost for your project based on standard rates of ₹1800/sqft.
              </p>

              <div className="flex gap-6 mb-8">
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">Length (ft)</label>
                  <input type="number" defaultValue="10" className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">Height (ft)</label>
                  <input type="number" defaultValue="10" className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
              </div>

              <button className="w-full bg-luxury-gold text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-yellow-600 transition-colors">
                Calculate Estimate
              </button>
            </div>

            {/* Global Presence */}
            <div className="bg-[#fafafa] p-10 rounded-sm flex flex-col h-full justify-between">
              <div className="flex-1 flex items-center justify-center py-10">
                {/* Globe Illustration Placeholder */}
                <div className="relative w-48 h-48 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-200 shadow-xl shadow-luxury-gold/5">
                  <div className="absolute w-full h-full border border-slate-200 rounded-full scale-110"></div>
                  <div className="absolute w-full h-full border border-slate-200 rounded-full scale-150"></div>
                  <div className="w-24 h-24 rounded-full bg-luxury-gold/10 absolute blur-xl"></div>
                  <Globe className="text-luxury-gold w-20 h-20 opacity-40" strokeWidth={1} />
                  
                  {/* Pointers */}
                  <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
                  <div className="absolute top-[60%] right-[30%] w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
                  <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
                  
                  <div className="absolute bottom-[20%] left-[45%] w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                    <MapPin size={14} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-sm border border-black/5 mt-auto">
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">Global Presence</h4>
                <p className="text-slate-500 text-sm font-light">Serving clients across GCC, India, and Southeast Asia.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
