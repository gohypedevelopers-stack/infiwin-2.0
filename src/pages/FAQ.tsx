import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Search, MessageSquare, ChevronRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: string;
  items: FAQItem[];
}

const FAQAccordian = ({ item }: { item: FAQItem; key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0 group">
      <button 
        className="w-full py-6 flex justify-between items-center text-left transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-luxury-gold' : 'text-slate-900 group-hover:text-luxury-gold'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'bg-luxury-gold border-luxury-gold text-white' : 'border-slate-200 text-slate-400 group-hover:border-luxury-gold group-hover:text-luxury-gold'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-slate-500 font-light leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const sections: FAQSection[] = [
    {
      title: "Product & Systems",
      icon: "📦",
      items: [
        {
          question: "What defines the INFIWIN 2 Track Slider system?",
          answer: "Our 2 Track Sliders feature precision-engineered stainless steel rollers and minimalist 20mm sightlines. Designed for seamless transitions, they support panel weights up to 400kg while maintaining effortless motion. The system is built with high-grade architectural aluminum and ultra-clear low-iron glass."
        },
        {
          question: "How do Bi-fold systems compare to sliding doors?",
          answer: "Bi-fold systems allow for a 100% clear opening, stacking panels to one or both sides. Sliding doors, while maintaining larger glass panes for unobstructed views even when closed, typically allow for a 50-66% opening. Bi-folds are ideal for maximum airflow, whereas sliders are preferred for minimalist aesthetic and large panoramic views."
        },
        {
          question: "Can I customize the glass tint or opacity?",
          answer: "Yes, we offer a range of options including clear, extra-clear, tinted (grey, bronze, green), reflective, and frosted/sandblasted finishes. We also provide smart-glass technology that can switch from transparent to opaque at the touch of a button."
        }
      ]
    },
    {
      title: "Installation",
      icon: "🛠️",
      items: [
        {
          question: "What does 'White-Glove' installation include?",
          answer: "Our specialized teams handle everything from detailed site surveys and structural laser measurements to final assembly and micro-polishing. We ensure structural alignment within 1mm tolerances and use proprietary elastic sealants for maximum acoustic isolation and longevity. Our teams are trained in noise-minimization and dust-control protocols during site work."
        },
        {
          question: "How long does a typical installation take?",
          answer: "A standard residential balcony enclosure or partition typically takes 1-2 days of on-site work. Larger commercial projects or complex structural facades are scheduled according to project-specific timelines defined during the engineering phase."
        }
      ]
    },
    {
      title: "Technical & Safety",
      icon: "🛡️",
      items: [
        {
          question: "Are the systems certified for high-wind areas?",
          answer: "Absolutely. Our systems are certified for Category 5 hurricane pressures, exceeding standard architectural requirements for high-rise balconies. We conduct rigorous stress-testing in our labs for both static load and dynamic impact."
        },
        {
          question: "What safety standards does your glass follow?",
          answer: "All panels are tempered and heat-soaked according to EN 14179-1 standards to eliminate spontaneous breakage risks. For overhead or high-security applications, we use SGP (SentryGlas Plus) or PVB interlayers for superior structural integrity even if the glass is compromised."
        }
      ]
    },
    {
      title: "Maintenance & Warranty",
      icon: "✉️",
      items: [
        {
          question: "What is the warranty period for INFIWIN systems?",
          answer: "We provide a 10-year structural warranty on all glass and aluminum components, and a 5-year warranty on specialized hardware and moving parts. This reflects our confidence in the materials and engineering precision of our systems."
        },
        {
          question: "How should I clean and maintain the glass?",
          answer: "We recommend cleaning with a soft cloth and PH-neutral glass cleaner. Avoid abrasive pads or harsh chemical solvents. Applying our proprietary hydrophobic coating once every two years will ensure the self-cleaning properties and clarity are maintained."
        }
      ]
    }
  ];

  const filteredSections = sections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Expertise, Defined</h1>
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight italic mb-8">Spatial <span className="not-italic">Knowledge</span></h2>
            <p className="text-slate-500 font-light text-lg mb-12">
              Explore our comprehensive guide to architectural glass systems, structural integrity, and premium installation standards.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search technical topics..." 
                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 outline-none focus:border-luxury-gold transition-colors text-sm font-light"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {filteredSections.length > 0 ? (
            <div className="space-y-20">
              {filteredSections.map((section, idx) => (
                <div key={idx} id={section.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex items-center gap-3 mb-8">
                     <span className="text-2xl">{section.icon}</span>
                     <h3 className="text-2xl font-serif italic text-slate-900 border-b border-luxury-gold/20 pb-2 flex-grow">{section.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, i) => (
                      <FAQAccordian key={i} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
               <p className="text-slate-400 font-serif italic text-2xl">No topics matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-6 py-20 bg-slate-900 text-white rounded-t-[3rem] mt-20">
         <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-luxury-gold flex items-center justify-center mb-8">
               <MessageSquare className="text-white" size={32} />
            </div>
            <h4 className="text-3xl font-serif italic mb-6">Still have questions?</h4>
            <p className="text-white/50 font-light mb-10 leading-relaxed">
               Our architectural consultants are available for complex technical queries and structural assessments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-white transition-all flex items-center gap-2">
                  Technical Support <ChevronRight size={16} />
               </button>
               <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                  Contact Sales
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
