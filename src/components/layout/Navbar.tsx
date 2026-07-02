import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConceptsOpen, setIsConceptsOpen] = useState(false);
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
    { name: "Concepts", href: "/concepts" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "Concepts", href: "/concepts" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location.pathname === "/";
  // The nav starts below the marquee. If scrolled, we might want to dock it to the top.
  const navBackground = isScrolled || !isHome ? "bg-white shadow-lg" : "bg-transparent";
  const textColor = isScrolled || !isHome ? "text-black md:hover:text-black/70 font-bold" : "text-white/90 md:hover:text-white";
  const logoColor = isScrolled || !isHome ? "text-black" : "text-white";
  const buttonClass = isScrolled || !isHome ? "bg-black text-white md:hover:bg-luxury-gold shadow-md" : "bg-white text-black md:hover:bg-slate-200 shadow-md";

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 pointer-events-auto border-b border-transparent ${isScrolled ? "border-slate-100" : ""} ${navBackground}`}>
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center text-sm relative py-1.5 md:py-2">
          <div>
            <Link to="/" className="flex items-center gap-2 inline-flex group">
              <img
                src="https://i.postimg.cc/0Q7DD7KK/H-Logo-V-BG.png"
                alt="INFIWIN"
                className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 origin-left scale-100 group-hover:opacity-80 ${(!isScrolled && isHome) ? "brightness-0 invert" : ""}`}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-center items-center gap-8 font-medium">
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

          <div className="flex justify-end items-center gap-8">
            <Link
              to="/contact"
              className={`hidden md:flex items-center justify-center px-8 py-3.5 rounded-none uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300 ${buttonClass}`}
            >
              REQUEST QUOTE
            </Link>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden ${logoColor}`}
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
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 mx-auto w-full max-w-[calc(100vw-2rem)] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
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
                  <Link
                    to="/contact"
                    className="bg-black text-white px-5 h-12 rounded-sm uppercase tracking-widest text-xs font-bold w-full flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Design Quote
                  </Link>
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
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white border border-slate-100 rounded-full p-2 flex items-center justify-between shadow-2xl pointer-events-auto">
        <a
          href="tel:+917337074370"
          className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center active:bg-slate-800 shrink-0"
          aria-label="Call Us"
        >
          <Phone size={18} />
        </a>
        <a
          href="https://wa.me/917337074370"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center active:bg-green-600 shrink-0 mx-2"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} className="fill-white/10" />
        </a>
        <Link
          to="/contact"
          className="flex-grow h-12 rounded-full bg-luxury-gold text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:bg-yellow-700"
        >
          Get Quote <ArrowRight size={12} />
        </Link>
      </div>
    </header>
  );
};
