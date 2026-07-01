import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Adjust scroll threshold based on presence of marquee
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact us", href: "/contact" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faq" },
  ];

  const isHome = location.pathname === "/";
  // The nav starts below the marquee. If scrolled, we might want to dock it to the top.
  const navBackground = isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : (!isHome ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm");
  const textColor = isScrolled || !isHome ? "text-slate-700 md:hover:text-black" : "text-white/90 md:hover:text-white";
  const logoColor = isScrolled || !isHome ? "text-black" : "text-white";
  const buttonClass = isScrolled || !isHome ? "bg-black text-white md:hover:bg-slate-800" : "bg-white text-black md:hover:bg-slate-100";

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-6 pointer-events-none">
      {/* Main Navigation */}
      <nav className={`mx-auto max-w-7xl rounded-full transition-all duration-300 pointer-events-auto ${navBackground}`}>
        <div className="px-6 py-3 md:py-4 flex justify-between items-center text-sm relative">
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-2 inline-flex">
              <span className={`font-display text-2xl font-bold tracking-tighter transition-colors ${logoColor}`}>INFIWIN</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors uppercase tracking-[0.2em] text-[10px] ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <button className={`hidden md:block px-8 py-3 rounded-sm uppercase tracking-[0.2em] text-[10px] transition-all ${buttonClass}`}>
              Get Free Quote
            </button>
            
            {/* Mobile Toggle */}
            <button
              className={`md:hidden ${logoColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mx-auto w-full max-w-[calc(100vw-2rem)] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <div className="p-6 flex flex-col gap-2">
                <div className="flex flex-col">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-slate-600 font-medium uppercase tracking-widest text-xs h-12 flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-slate-100">
                  <button className="bg-black text-white px-5 h-12 rounded-sm uppercase tracking-widest text-xs font-bold w-full">
                    Request Design Quote
                  </button>
                  <a href="tel:+917337074370" className="border border-slate-200 text-slate-800 px-5 h-12 rounded-sm uppercase tracking-widest text-xs font-bold w-full flex items-center justify-center">
                    Call
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sticky Bottom Mobile CTA Bar (High-Visibility Viewport Lock) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white rounded-full overflow-hidden flex shadow-2xl pointer-events-auto border border-slate-100">
        <a 
          href="tel:+917337074370" 
          className="flex-[0.8] flex justify-center items-center gap-2 h-14 text-xs font-semibold text-slate-700 border-r border-slate-100 active:bg-slate-50"
        >
          <Phone size={16} /> 
        </a>
        <a 
          href="https://wa.me/917337074370" 
          target="_blank"
          rel="noreferrer"
          className="flex-[0.8] flex justify-center items-center gap-2 h-14 text-xs font-semibold text-green-600 active:bg-slate-50"
        >
          <MessageCircle size={16} /> 
        </a>
        <a 
          href="#quote" 
          className="flex-[1.5] flex justify-center items-center gap-2 h-14 text-[10px] font-bold bg-black text-white uppercase tracking-widest"
        >
          Get Quote <ArrowRight size={14} />
        </a>
      </div>
    </header>
  );
};
