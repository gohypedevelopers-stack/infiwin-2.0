import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  CheckCircle,
  X,
  Timer,
  ArrowRight,
  Hourglass,
  Upload,
} from "lucide-react";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

import {
  TOTAL_SECONDS,
  LS_KEY,
  InlineTimerBanner,
  SuccessPopup,
} from "../components/SuccessPopup.tsx";

// ─── Main Contact page ────────────────────────────────────────────────────────
export default function Contact() {
  // ── Form state ──────────────────────────────────────────────────────────────
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // ── Countdown / popup state ─────────────────────────────────────────────────
  // remaining === null  → no inquiry submitted yet
  // remaining >= 0      → counting down
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
  const [showBanner, setShowBanner] = useState(false);

  // Tick every second while we have a countdown
  useEffect(() => {
    if (remaining === null) return;
    if (remaining <= 0) {
      setRemaining(null);
      setShowBanner(false);
      try { localStorage.removeItem(LS_KEY); } catch { /* ignore */ }
      return;
    }
    const id = setInterval(() => {
      setRemaining((s) => (s !== null && s > 0 ? s - 1 : null));
    }, 1000);
    return () => clearInterval(id);
  }, [remaining]);

  // Show banner whenever there's an active countdown (even on page reload)
  useEffect(() => {
    if (remaining !== null && remaining > 0) setShowBanner(true);
  }, []);

  // ── Cost estimator state ────────────────────────────────────────────────────
  const [length, setLength] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [mobileStep, setMobileStep] = useState(1);
  const [estimate, setEstimate] = useState<number | null>(null);

  // ── Helpers ─────────────────────────────────────────────────────────────────
  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid phone number.";
    if (!(form as any).city?.trim()) errs.city = "City is required.";
    if (!form.message.trim()) errs.message = "Please enter a message.";
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
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    // Simulate API / replace with EmailJS / fetch call
    await new Promise((r) => setTimeout(r, 1400));

    // Start the 24-hour countdown
    const deadline = Date.now() + TOTAL_SECONDS * 1000;
    try { localStorage.setItem(LS_KEY, String(deadline)); } catch { /* ignore */ }
    setRemaining(TOTAL_SECONDS);
    setShowBanner(true);
    setShowPopup(true);
    setLoading(false);
    setForm({ name: "", phone: "", subject: "General Inquiry", message: "" });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleClosePopup() {
    setShowPopup(false);
    // banner is already set to true — timer stays visible on page
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Success Popup ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showPopup && remaining !== null && (
          <SuccessPopup remaining={remaining} onClose={handleClosePopup} />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[600px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16 overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            loading="lazy"
            src="/gallery/Systems/Slide%20&%20Turn/Slide & Turn (4).jpg.jpeg"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Centred text content */}
        <div className="relative z-10 text-center text-white px-6 mt-12">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em]">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-2 leading-tight max-w-4xl mx-auto">
            Start Your Project
          </h1>
          <p className="text-[11px] md:text-[16px] font-light text-slate-200 max-w-4xl mx-auto leading-relaxed text-center text-balance">
            Reach out to our specialists today to discuss your project. From initial design consultation to seamless installation, our dedicated team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 flex flex-col gap-16">
        {/* Contact Info & Global Presence Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Contact Info Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                  Call Us
                </h4>
                <p className="text-slate-500 font-light text-sm">+91 91360 04100</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                  Email
                </h4>
                <p className="text-slate-500 font-light text-sm">hi@infiwindow.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                  Headquarters
                </h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  H 195, Sector 63, Noida, UP - 201309
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                  Working Hours
                </h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Mon - Sat: 10:00 - 19:00
                </p>
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="rounded-sm flex flex-col justify-end overflow-hidden relative min-h-[300px] shadow-xl shadow-black/5 h-full">
            <img loading="lazy" src="/pan_india_presence.png"
              alt="Premium Pan India Presence"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent z-0 pointer-events-none" />

            <div className="p-8 relative z-10 w-full mt-auto">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-sm border border-white/20 shadow-2xl inline-block">
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                  Services Provided Pan India
                </h4>
                <p className="text-slate-600 text-sm font-light">
                  Serving clients across all major cities and regions in India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Inline Timer Banner ── */}
        <AnimatePresence>
          {showBanner && !showPopup && remaining !== null && (
            <InlineTimerBanner
              remaining={remaining}
              onDismiss={() => setShowBanner(false)}
            />
          )}
        </AnimatePresence>

        {/* Forms Side-by-Side */}
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

            <form onSubmit={(e) => { e.preventDefault(); alert("Quote request submitted"); }} className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
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
                      onChange={(e) => {
                        setLength(e.target.value ? Number(e.target.value) : "");
                        if (errors.dimensions) setErrors(prev => ({ ...prev, dimensions: "" }));
                      }}
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
                      onChange={(e) => {
                        setHeight(e.target.value ? Number(e.target.value) : "");
                        if (errors.dimensions) setErrors(prev => ({ ...prev, dimensions: "" }));
                      }}
                      className={`w-full bg-[#1a1a1a] border rounded-sm px-4 py-3 text-white focus:outline-none transition-colors ${errors.dimensions && (height === "" || height < 5) ? "border-red-500" : "border-white/10 focus:border-luxury-gold"}`}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                    Upload Site Pic (Optional)
                  </label>
                  <label className="flex items-center justify-center gap-2 w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white cursor-pointer hover:bg-white/5 transition-colors">
                    <Upload size={16} />
                    <span className="text-sm font-light">Choose File</span>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
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
                    form="inquiry-form"
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
                    href={`https://wa.me/919136004100?text=${encodeURIComponent(`Hi Infiwin, I am reaching out from your official website for a custom quote based on my dimensions. Length: ${length}ft, Height: ${height}ft`)}`}
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
            <form id="inquiry-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 lg:gap-8 flex-1 justify-between">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  {/* Name */}
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.name
                        ? "border-red-400"
                        : "border-slate-200 focus:border-luxury-gold"
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
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.phone
                        ? "border-red-400"
                        : "border-slate-200 focus:border-luxury-gold"
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[10px] text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                  {/* City */}
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={(form as any).city || ""}
                      onChange={handleChange}
                      placeholder="New Delhi"
                      className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"}`}
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
                    className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none ${errors.message
                      ? "border-red-400"
                      : "border-slate-200 focus:border-luxury-gold"
                      }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[10px] text-red-500">{errors.message}</p>
                  )}
                </div>
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
                className="hidden lg:flex w-full bg-black text-white py-4 rounded-lg items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-all mt-6 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-none"
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
                  if (!(form as any).city?.trim()) errs.city = "City is required.";
                  if (Object.keys(errs).length) {
                    setErrors((prev) => ({...prev, ...errs}));
                    return;
                  }
                  setErrors((prev) => ({...prev, name: "", phone: "", city: ""}));
                  setMobileStep(2);
                }}
                className="flex lg:hidden w-full bg-black text-white py-4 rounded-lg items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-all mt-6 cursor-pointer border-none"
              >
                Next <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

      </section>

      {/* Full Width Map Section */}
      <section className="w-full h-[400px] border-t border-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.080819071319!2d77.37780917613706!3d28.627339784315406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3e8827a2b7%3A0x4e26c22a34fd6e52!2sInfiWindow!5e0!3m2!1sen!2sin!4v1783504063318!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </div>
  );
}
