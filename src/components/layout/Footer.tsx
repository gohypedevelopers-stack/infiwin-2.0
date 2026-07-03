import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-20 pb-20 md:pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-10 text-left">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start text-left">
            <Link to="/" className="block -ml-3 mb-3">
              <img
                src="https://i.postimg.cc/0Q7DD7KK/H-Logo-V-BG.png"
                alt="INFIWIN"
                className="h-14 md:h-18 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Premium architectural glass and slide & turn frameless balcony structures designed for Indian climatic conditions.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 text-left">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">6 Product Lines</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/products#folding" className="hover:text-white transition-colors">Slide & Turn System</Link></li>
              <li><Link to="/products#sliding" className="hover:text-white transition-colors">Telescopic Slider</Link></li>
              <li><Link to="/products#centre-open" className="hover:text-white transition-colors">Centre Open System</Link></li>
              <li><Link to="/products#bifold" className="hover:text-white transition-colors">Bi-fold Enclosures</Link></li>
              <li><Link to="/products#sliding-2track" className="hover:text-white transition-colors">2 Track Slider</Link></li>
              <li><Link to="/products#sliding-3track" className="hover:text-white transition-colors">3 Track Slider</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 text-left">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Space Usages</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/applications#balcony" className="hover:text-white transition-colors">Balcony Glass</Link></li>
              <li><Link to="/applications#office" className="hover:text-white transition-colors">Office Glass Partitions</Link></li>
              <li><Link to="/applications#commercial" className="hover:text-white transition-colors">Commercial Facades</Link></li>
              <li><Link to="/applications#terrace" className="hover:text-white transition-colors">Terrace & Gardens</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 text-left">
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Contact Info</h5>
            <ul className="space-y-4 text-white/60 text-sm font-light">
              <li>Corporate Office: <br />H 195, Sector 63, Noida, UP - 201309</li>
              <li><a href="mailto:hi@infiwindow.com" className="hover:text-white transition-colors">hi@infiwindow.com</a></li>
              <li><a href="tel:+917337074370" className="hover:text-white transition-colors">+91 73370 74370</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-between items-center border-t border-white/5 pt-10 gap-y-4 text-[9px] uppercase tracking-widest text-white/30 font-medium">
          <p>© 2026 Infiwin Glazing Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
