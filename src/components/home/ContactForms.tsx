import React, { useState, useEffect } from "react";
import { Upload, Send, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { TOTAL_SECONDS, LS_KEY, SuccessPopup } from "../SuccessPopup.tsx";

export const ContactForms = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", height: "", length: "", subject: "General Inquiry", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [mobileStep, setMobileStep] = useState(1);

  const [length, setLength] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");

  // ── Countdown / popup state ─────────────────────────────────────────────────
  const [remaining, setRemaining] = useState<number | null>(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored) {
        const deadline = parseInt(stored, 10);
        const diff = Math.floor((deadline - Date.now()) / 1000);
        return diff > 0 ? diff : null;
      }
    } catch { /* ignore */ }
    return null;
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (remaining === null) return;
    if (remaining <= 0) {
      setRemaining(null);
      try { localStorage.removeItem(LS_KEY); } catch { /* ignore */ }
      return;
    }
    const timer = setInterval(() => {
      setRemaining((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [remaining]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.city.trim()) errs.city = "City is required.";
    
    if (length === "" || height === "") {
      errs.dimensions = "Please provide the dimensions (Length & Height) of your space.";
    } else {
      let dimError = "";
      if (typeof length === 'number' && length < 6) {
        dimError += "Length must be at least 6 ft. ";
      }
      if (typeof height === 'number' && height < 5) {
        dimError += "Height must be at least 5 ft.";
      }
      if (dimError) errs.dimensions = dimError.trim();
    }
    
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const deadline = Date.now() + TOTAL_SECONDS * 1000;
      try { localStorage.setItem(LS_KEY, String(deadline)); } catch { /* ignore */ }
      setRemaining(TOTAL_SECONDS);
      setShowPopup(true);
      setLoading(false);
      setForm({ name: "", phone: "", city: "", height: "", length: "", subject: "General Inquiry", message: "" });
      setLength("");
      setHeight("");
    }, 1000);
  };

  return (
    <>
      {/* ── Success Popup ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showPopup && remaining !== null && (
          <SuccessPopup remaining={remaining} onClose={() => setShowPopup(false)} isHomepage={true} />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch rounded-xl overflow-hidden shadow-2xl bg-white border border-slate-100">
      {/* Request a Quote (Dark Box) */}
      <div className={`bg-[#0a0a0a] text-white p-10 md:p-14 ${mobileStep === 1 ? 'hidden lg:flex' : 'flex'} flex-col h-full`}>
        <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">
          Custom Quote
        </p>
        <h3 className="text-3xl font-serif mb-4">Provide Dimensions</h3>
        <p className="text-white/60 font-light text-sm leading-relaxed mb-10 max-w-sm">
          Provide your specific dimensions so our engineering team can accurately design your custom quote.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert("Quote request submitted"); }} className="space-y-6">
          <div className="flex gap-6 mb-2">
            <div className="flex-1">
              <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                Length (ft)
              </label>
              <input
                type="number"
                min="6"
                placeholder="Min 6"
                value={length}
                onChange={(e) => setLength(e.target.value ? Number(e.target.value) : "")}
                className={`w-full bg-[#1a1a1a] border rounded-sm px-4 py-3 text-white focus:outline-none transition-colors ${errors.dimensions && (length === "" || length < 6) ? "border-red-500" : "border-white/10 focus:border-luxury-gold"}`}
              />
            </div>
            <div className="flex-1">
              <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                Height (ft)
              </label>
              <input
                type="number"
                min="5"
                placeholder="Min 5"
                value={height}
                onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : "")}
                className={`w-full bg-[#1a1a1a] border rounded-sm px-4 py-3 text-white focus:outline-none transition-colors ${errors.dimensions && (height === "" || height < 5) ? "border-red-500" : "border-white/10 focus:border-luxury-gold"}`}
              />
            </div>
          </div>

          <div>
            <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
              Upload Site Pic (Optional)
            </label>
            <label className="flex items-center justify-center gap-2 w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white cursor-pointer hover:bg-white/5 transition-colors">
              <Upload size={16} />
              <span className="text-sm font-light">Choose File</span>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <div className="flex lg:hidden flex-col gap-4 mb-8">
              {errors.dimensions && (
                <div className="bg-red-500/10 text-red-400 p-4 rounded-md text-sm border border-red-500/20 flex items-start gap-2 text-left">
                  <span className="shrink-0 mt-0.5">⚠️</span>
                  <p>{errors.dimensions}</p>
                </div>
              )}
              <button
                type="submit"
                form="home-inquiry-form"
                disabled={loading}
                className="w-full bg-white text-black py-4 rounded-lg flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-none"
              >
                 {loading ? "Sending..." : <>Submit Inquiry <Send size={14} /></>}
              </button>
              <button
                type="button"
                onClick={() => setMobileStep(1)}
                className="text-white/40 text-xs font-bold tracking-widest uppercase hover:text-white"
              >
                 ← Back to Details
              </button>
            </div>

            <div className="hidden lg:block">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 relative">
                <span className="bg-[#0a0a0a] px-4 relative z-10">OR CHAT DIRECTLY</span>
                <span className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-0"></span>
              </p>

              <a
                href={`https://wa.me/917337074370?text=Hi Infiwin, I am interested in getting a custom quote based on my dimensions. Length: ${length}ft, Height: ${height}ft`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold sm:font-bold tracking-wide sm:tracking-wider uppercase text-[11px] sm:text-sm transition-colors shadow-lg cursor-pointer"
              >
                <WhatsAppIcon size={16} /> Get Instant Price via WhatsApp
              </a>
            </div>
          </div>
        </form>
      </div>

      {/* Inquiry Form (Light Box) */}
      <div className={`bg-white p-6 lg:p-14 ${mobileStep === 2 ? 'hidden lg:flex' : 'flex'} flex-col h-full`}>
        <h3 className="text-xl lg:text-2xl font-serif text-slate-900 mb-6 lg:mb-8">REQUEST A QUOTE</h3>
        <form id="home-inquiry-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 lg:gap-8 flex-1 justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Name */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.name ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                  }`}
              />
              {errors.name && (
                <p className="mt-1 text-[10px] text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91"
                className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.phone ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                  }`}
              />
              {errors.phone && (
                <p className="mt-1 text-[10px] text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                placeholder="New Delhi"
                className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                  }`}
              />
              {errors.city && (
                <p className="mt-1 text-[10px] text-red-500">{errors.city}</p>
              )}
            </div>
            
            {/* Subject */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Subject
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-slate-200 pb-3 text-sm text-slate-900 focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer"
              >
                <option>General Inquiry</option>
                <option>Product Information</option>
                <option>Request a Quote</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={3}
              className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                }`}
            />
          </div>

          {errors.dimensions && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm border border-red-100 flex items-start gap-2">
              <span className="shrink-0 mt-0.5">⚠️</span>
              <p>{errors.dimensions}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="hidden lg:flex w-full bg-black text-white py-4 rounded-lg items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-all mt-4 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-none"
          >
            {loading ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending…
              </>
            ) : (
              <>
                Send Message <Send size={14} />
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={(e) => {
              const errs: Record<string, string> = {};
              if (!form.name.trim()) errs.name = "Full name is required.";
              if (!form.phone.trim()) errs.phone = "Phone number is required.";
              if (!form.city.trim()) errs.city = "City is required.";
              if (Object.keys(errs).length) {
                setErrors((prev) => ({...prev, ...errs}));
                return;
              }
              setErrors((prev) => ({...prev, name: "", phone: "", city: ""}));
              setMobileStep(2);
            }}
            className="flex lg:hidden w-full bg-black text-white py-4 rounded-lg items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-all mt-4 cursor-pointer border-none"
          >
            Next <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </div>
    </>
  );
};
