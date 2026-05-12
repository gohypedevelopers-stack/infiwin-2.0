import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // For homepage, we might want transparent at top. For others, maybe always glass.
  const isHome = location.pathname === "/";
  const navBackground = isScrolled || !isHome ? "glass-morphism py-4 shadow-sm" : "bg-transparent py-6";
  const textColor = isScrolled || !isHome ? "text-slate-600 hover:text-black" : "text-white/80 hover:text-white";
  const logoColor = isScrolled || !isHome ? "text-black" : "text-white";
  const buttonClass = isScrolled || !isHome ? "bg-black text-white hover:bg-slate-800" : "bg-white text-black hover:bg-slate-100";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-display text-2xl font-bold tracking-tighter transition-colors ${logoColor}`}>INFIWIN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`transition-colors uppercase tracking-widest text-[11px] ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
          <button className={`px-5 py-2 rounded-full uppercase tracking-tighter text-[11px] font-bold transition-all ${buttonClass}`}>
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${logoColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-slate-600 font-medium uppercase tracking-widest text-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-black text-white px-5 py-3 rounded-xl uppercase tracking-tighter text-xs font-bold w-full">
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};
