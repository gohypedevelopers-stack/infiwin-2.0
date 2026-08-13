import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Dash, ChatSquareText, ChevronRight, BoxSeam, Tools, ShieldCheck, Envelope } from "react-bootstrap-icons";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: React.ReactNode;
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
        <span className={`text-xl font-serif transition-colors ${isOpen ? 'text-luxury-gold' : 'text-slate-900 group-hover:text-luxury-gold'}`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'bg-luxury-gold border-luxury-gold text-white' : 'border-slate-200 text-slate-400 group-hover:border-luxury-gold group-hover:text-luxury-gold'}`}>
          {isOpen ? <Dash size={16} /> : <Plus size={16} />}
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
  const sections: FAQSection[] = [
    {
      title: "Product & Systems",
      icon: <BoxSeam />,
      items: [
        {
          question: "How is Slide&Turn different from regular slider?",
          answer: "Conventional Sliders Panels only slide horizontally; only half the window can open, while in Frameless Slide & Turn, Panels slide to stack neatly, and each can swing inward for full opening and easy cleaning. Conventional Sliders comes with bulky frames, clutters the view while S&T gives uninterrupted panoramic view."
        },
        {
          question: "Is uPVC or regular aluminum slider a better option?",
          answer: "uPVC or aluminum sliders are convention methods to enclose areas, they come with bulky frames and limit the opening to half. Sliders are simpler in design and hardware, making them more affordable, Slide & Turn is the aspirational upgrade—offering elegance, performance, and exclusivity."
        },
        {
          question: "How do Bi-fold systems compare to sliding doors?",
          answer: "Bi-fold systems allow for a bigger clear opening, stacking panels to one or both sides. Sliding doors, while maintaining larger glass panes for unobstructed views even when closed, typically allow for a 50-66% opening. Bi-folds are ideal for maximum airflow, whereas sliders are preferred for minimalist aesthetic and large panoramic views."
        },
        {
          question: "Can I customize the glass tint or opacity?",
          answer: "Yes, we offer a range of options including clear, extra-clear, tinted (grey, bronze, green), reflective, and frosted/sandblasted finishes. We also provide smart-glass technology that can switch from transparent to opaque at the touch of a button."
        },
        {
          question: "What is the standard base price for installation of Slide & Turn® glass?",
          answer: "Our pricing for premium architectural systems depends on the specific project requirements. It incorporates elite tempered structural safety glass, premium heavy-gauge aluminum support rails, customization and baseline engineering fitting charges. Please request a quote to get an accurate estimate. Freight and government taxes are determined additionally based on shipping distance."
        },
        {
          question: "How do Full Length versus Half Length variants differ?",
          answer: "Full Length structures span continuously from the floor straight up to the ceiling line. Half Length systems are designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn® sliding panes operate seamlessly above it."
        },
        {
          question: "What type of glass is used in fabrication?",
          answer: "We use toughened glass of 8MM & 10 MM thickness that are extremely robust. This glass is structurally rated to withstand massive high-altitude wind pressure loads and is impact-resistant for complete home safety."
        },
        {
          question: "Does it stop rain, dust and pigeons?",
          answer: "Yes. Closed, the panels seal the balcony against rain, dust buildup and birds, and cut outside noise substantially. Open, they stack away and the balcony is open air again. You choose, day by day."
        }
      ]
    },
    {
      title: "Installation",
      icon: <Tools />,
      items: [
        {
          question: "What does 'White-Glove' installation include?",
          answer: "Our specialized teams handle everything from detailed site surveys and structural laser measurements to final assembly. We ensure structural alignment within 5 mm."
        },
        {
          question: "How long does a typical installation take?",
          answer: "A standard residential balcony enclosure or partition typically takes 1-2 days of on-site work. Larger commercial projects or complex structural facades are scheduled according to project-specific timelines defined during the engineering phase."
        }
      ]
    },
    {
      title: "Technical & Safety",
      icon: <ShieldCheck />,
      items: [
        {
          question: "Are the systems certified for high-wind areas?",
          answer: "Absolutely. Our systems are certified for exceeding standard architectural requirements for high-rise balconies. We conduct rigorous stress-testing in our labs for both static load and dynamic impact."
        },
        {
          question: "Is frameless glass safe for a home?",
          answer: "Yes, the system is specially designed for exterior use to protect from strong winds, dust and weather. Frameless Slide & Turn systems use premium hardware, profiles designed for Highrise apartments. It comes with 3 years warrantee on hardware & 10 years on profile for complete peace of mind."
        }
      ]
    },
    {
      title: "Maintenance & Warranty",
      icon: <Envelope />,
      items: [
        {
          question: "What is the warranty period for INFIWIN Slide & Turn systems?",
          answer: "We provide a 10-year structural warranty on aluminum profiles and a 3 year warranty on specialized hardware and moving parts. This reflects our confidence in the materials and engineering precision of our systems."
        },
        {
          question: "How should I clean and maintain the glass?",
          answer: "We recommend cleaning with a soft cloth and PH-neutral glass cleaner. Avoid abrasive pads or harsh chemical solvents. Its very easy to clean Slide and Turn, when open every panel turns inside and just wipe the glass with a soft cloth and keep the track clear. You can clean both sides from inside your balcony. No hanging outside, no ladders."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img loading="lazy"
            src="/gallery/Systems/Slide%20&%20Turn/Slide & Turn (3).jpg.jpeg"
            alt="FAQ Background"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Expertise, Defined</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif mb-4 whitespace-nowrap">Spatial Knowledge</h1>
          <p className="mt-4 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
            Explore our guide to premium architectural glass systems.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {sections.map((section, idx) => (
              <div key={idx} id={section.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl text-luxury-gold">{section.icon}</span>
                  <h3 className="text-3xl font-serif text-slate-900 border-b border-luxury-gold/20 pb-2 flex-grow">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <FAQAccordian key={i} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-6 py-12 lg:py-16 bg-slate-900 text-white rounded-t-[3rem] mt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-luxury-gold flex items-center justify-center mb-8">
            <ChatSquareText className="text-white" size={32} />
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
              className="bg-white text-black px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2 group shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon size={16} className="text-[#25D366] group-hover:text-white transition-colors" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
