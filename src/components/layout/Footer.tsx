import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-left">
            <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-white block mb-6">INFIWIN</Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Crafting transparency since 2008. The global benchmark for high-performance glass systems and architectural enclosures.
            </p>
          </div>
          
          <div className="text-left">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Products</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Balcony Enclosure</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Partition Systems</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sliding Doors</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Structural Glass</Link></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Company</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Find a Dealer</Link></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Newsletter</h5>
            <p className="text-white/40 text-xs mb-6 font-light">Join for architectural inspiration.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/20 px-4 py-3 text-xs outline-none focus:border-luxury-gold w-full text-white"
              />
              <button className="bg-white px-4 text-black"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-[10px] uppercase tracking-widest text-white/30 font-medium">
          <p>© 2026 INFIWIN SYSTEMS. PRECISION CRAFTED ENCLOSURES.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
