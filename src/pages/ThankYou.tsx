import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-slate-50 px-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 max-w-xl text-center">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
          Request Received
        </h1>
        
        <p className="text-slate-600 font-light text-lg mb-10 leading-relaxed">
          Thank you for your inquiry. Your custom estimation metrics have been logged successfully. An Infiwin executive will contact you shortly to confirm logistics and provide expert architectural assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/"
            className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors flex items-center justify-center"
          >
            Return to Homepage
          </Link>
          <Link 
            to="/products"
            className="w-full sm:w-auto bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            Explore Catalog <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
