import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Search, MessageSquare, ChevronRight, MessageCircle } from "lucide-react";

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
        },
        {
          question: "What is the standard base price for installation of Slide & Turn glass?",
          answer: "Our baseline starting price for premium architectural systems is approximately ₹1,800/sq.ft. This calculation incorporates elite double-tempered structural safety glass, premium heavy-gauge aluminum support rails, customized weatherproof locking rubber seals, and baseline engineering fitting charges. Freight and government taxes are determined additionally based on shipping distance."
        },
        {
          question: "How do Full Length versus Half Length variants differ?",
          answer: "Full Length structures span continuously from the floor straight up to the concrete ceiling line. Half Length systems are designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn sliding panes operate seamlessly above it."
        },
        {
          question: "What type of glass is used in fabrication?",
          answer: "We use high-grade 10mm or 12mm double-tempered structural glass sheets that are extremely robust. This glass is structurally rated to withstand massive high-altitude wind pressure loads and is impact-resistant for complete home safety."
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
        },
        {
          question: "Are frameless glass structures totally waterproof during heavy monsoon seasons?",
          answer: "Yes! Infiwin systems feature inter-pane H-profiles containing customized translucent polymer seals designed to block intense windblown rain completely. Our design profiles feature integrated lower drain holes that successfully transport any minor moisture out towards the exterior facade."
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <img loading="lazy" 
            src="/arch-sketch.png" 
            alt="FAQ Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="text-center text-white px-6 w-full max-w-4xl mx-auto">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Expertise, Defined</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif mb-4 whitespace-nowrap">Spatial Knowledge</h1>
          <p className="mt-4 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
            Explore our comprehensive guide to architectural glass systems, structural integrity, and premium installation standards.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input
              type="text"
              placeholder="Search technical topics..."
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-300 outline-none focus:border-luxury-gold transition-colors text-sm font-light"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
                    <h3 className="text-2xl font-serif text-slate-900 border-b border-luxury-gold/20 pb-2 flex-grow">{section.title}</h3>
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
              <p className="text-slate-400 font-serif text-2xl">No topics matching your search.</p>
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
          <h4 className="text-3xl font-serif mb-6">Still have questions?</h4>
          <p className="text-white/50 font-light mb-10 leading-relaxed">
            Our architectural consultants are available for complex technical queries and structural assessments.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/917337074370"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2 group shadow-md hover:shadow-lg"
            >
              <MessageCircle size={16} className="text-[#25D366] group-hover:text-white transition-colors" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
