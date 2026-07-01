import { Quote } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    content: "The Infiwin Slide & Turn system transformed our 12th-floor balcony in Delhi completely. We get absolute protection from heavy monsoon wind gusts and heavy dust while enjoying a 100% frameless visual landscape. Excellent execution team!",
    author: "Rajesh Devgn",
    role: "DLF PHASE 5 RESIDENT",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Our office glass partitions look incredibly sleek. We chose the Centre Open system. Not only is the architectural glass high-grade, but the acoustic isolation is also fantastic during important executive board calls.",
    author: "Aman Kapoor",
    role: "VP, CAPITAL COMMERCIAL HUB",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Unbelievable execution. The cost estimator was accurate and the on-ground installers took extreme safety measures to finish the railing fixed glass + Slide & Turn setup in under 5 hours. Outstanding engineering standard.",
    author: "Sneha Mehta",
    role: "VILLA OWNER, PUNE",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export const ReviewsSection = () => {
  return (
    <section className="py-32 bg-[#fafafa] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Owner Reviews</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-light">What Our Premium Clients Say</h3>
          <p className="text-slate-500 font-light text-[15px] max-w-2xl leading-loose mb-10">
            We have successfully completed installations spanning major residential developments in Mumbai, Delhi, Bangalore and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-sm shadow-none border border-black/5 flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-luxury-gold/40 mb-6" fill="currentColor" />
                <p className="text-slate-600 font-light text-[15px] leading-loose mb-10">
                  {review.content}
                </p>
              </div>
              
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <img loading="lazy" 
                  src={review.avatar} 
                  alt={review.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">{review.author}</h4>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 mt-1">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
