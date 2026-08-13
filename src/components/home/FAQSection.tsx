import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FAQSection = () => {
  const faqs = [
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
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-luxury-gold shadow-md' : 'border-slate-200'}`}
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
