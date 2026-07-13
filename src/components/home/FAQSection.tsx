import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is the standard base price for installation of Slide & Turn glass?",
      answer: "Our baseline starting price for premium architectural systems is approximately ₹1,800/sq.ft. This calculation incorporates elite double-tempered structural safety glass, premium heavy-gauge aluminum support rails, customized weatherproof locking rubber seals, and baseline engineering fitting charges. Freight and government taxes are determined additionally based on shipping distance."
    },
    {
      question: "How do Full Length versus Half Length variants differ?",
      answer: "Full Length structures span continuously from the floor straight up to the concrete ceiling line. Half Length systems are designed to begin either at the top boundary of an existing protective balcony metal/concrete railing, or alternatively feature a pre-installed bottom glass panel acting as a rigid structural railing while the Slide & Turn sliding panes operate seamlessly above it."
    },
    {
      question: "Are frameless glass structures totally waterproof during heavy monsoon seasons?",
      answer: "Yes! Infiwin systems feature inter-pane H-profiles containing customized translucent polymer seals designed to block intense windblown rain completely. Our design profiles feature integrated lower drain holes that successfully transport any minor moisture out towards the exterior facade."
    },
    {
      question: "What type of glass is used in fabrication?",
      answer: "We use high-grade 10mm or 12mm double-tempered structural glass sheets that are extremely robust. This glass is structurally rated to withstand massive high-altitude wind pressure loads and is impact-resistant for complete home safety."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-16 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Common Queries</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-500 font-light text-lg">
            Everything you need to know about Infiwin product specifications, warranties, and structural calculations.
          </p>
        </div>

        <div className="space-y-4 animate-on-scroll">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-luxury-gold shadow-md' : 'border-slate-200'}`}
            >
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left px-6 py-6 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <h3 className={`font-medium pr-8 ${openIndex === idx ? 'text-luxury-gold' : 'text-slate-900'}`}>
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'transform rotate-180 text-luxury-gold' : 'text-slate-400'}`} 
                  size={20}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-500 font-light leading-relaxed border-t border-slate-100 mt-2 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Redirect to full FAQ page */}
        <div className="text-center mt-12">
          <Link 
            to="/faq" 
            className="inline-flex items-center gap-2 bg-black hover:bg-luxury-gold text-white px-8 py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All FAQs
            
          </Link>
        </div>
      </div>
    </section>
  );
};
