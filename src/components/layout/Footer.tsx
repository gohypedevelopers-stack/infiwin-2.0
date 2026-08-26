import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-12 lg:pt-16 pb-12 lg:pb-16 md:pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-10 text-left">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start text-left">
            <Link to="/" className="block -ml-3.5 md:-mt-4 lg:-mt-6 mb-2">
              <img loading="lazy" src="https://i.postimg.cc/0Q7DD7KK/H-Logo-V-BG.png"
                alt="INFIWIN"
                className="h-24 md:h-28 max-w-full object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/40 text-[10px] md:text-sm font-light leading-relaxed max-w-xs mb-6">
              Premium architectural glass and slide & turn frameless balcony structures designed for Indian climatic conditions.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 text-left">
            <div className="text-xs md:text-sm uppercase tracking-widest text-white font-bold mb-4">6 Product Lines</div>
            <ul className="space-y-4 text-white/60 text-[12px] md:text-sm">
              <li><Link to="/gallery/product/slide-turn" className="hover:text-white transition-colors">Slide & Turn® System</Link></li>
              <li><Link to="/gallery/product/telescopic-sliders" className="hover:text-white transition-colors">Telescopic Slider</Link></li>
              <li><Link to="/gallery/product/synchronized-systems" className="hover:text-white transition-colors">Centre Open System</Link></li>
              <li><Link to="/gallery/product/foldable-doors-(bi-fold)" className="hover:text-white transition-colors">Bi-fold Enclosures</Link></li>
              <li><Link to="/gallery/product/sliding-windows-doors?variant=2-track" className="hover:text-white transition-colors">2 Track Slider</Link></li>
              <li><Link to="/gallery/product/sliding-windows-doors?variant=3-track" className="hover:text-white transition-colors">3 Track Slider</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 text-left">
            <div className="text-xs md:text-sm uppercase tracking-widest text-white font-bold mb-4">Space Usages</div>
            <ul className="space-y-4 text-white/60 text-[12px] md:text-sm">
              <li><Link to="/gallery/application/balcony" className="hover:text-white transition-colors">Balcony Glass</Link></li>
              <li><Link to="/gallery/application/office-space" className="hover:text-white transition-colors">Office Glass Partitions</Link></li>
              <li><Link to="/gallery/application/commercial" className="hover:text-white transition-colors">Commercial Facades</Link></li>
              <li><Link to="/gallery/application/terrace" className="hover:text-white transition-colors">Terrace & Gardens</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 text-left">
            <div className="text-xs md:text-sm uppercase tracking-widest text-white font-bold mb-4">Contact Info</div>
            <ul className="space-y-4 text-white/60 text-[12px] md:text-sm font-light mb-8">
              <li>Corporate Office: <br />H 195, Sector 63, Noida, UP - 201309</li>
              <li><a href="mailto:connect@infiwindow.com" className="hover:text-white transition-colors">connect@infiwindow.com</a></li>

              <li><a href="tel:+919136004100" className="hover:text-white transition-colors">+91 91360 04100</a></li>
            </ul>
            <div className="flex gap-4 items-center flex-wrap -ml-2">
              <img src="/footer stickers/9001-removebg-preview.png" alt="ISO 9001" className="h-12 object-contain" />
              <img src="/footer stickers/ISO-45001-Certification.png" alt="ISO 45001" className="h-12 object-contain" />
              <img src="/footer stickers/images.png" alt="Certification" className="h-12 object-contain" />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-between items-center border-t border-white/5 pt-10 gap-y-4 text-[9px] uppercase tracking-widest text-white/30 font-medium">
          <p>© 2026 Infiwin Glazing Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
