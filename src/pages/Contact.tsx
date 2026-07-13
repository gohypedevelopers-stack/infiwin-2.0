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
} from "lucide-react";

// ─── Countdown helpers ────────────────────────────────────────────────────────
const TOTAL_SECONDS = 24 * 60 * 60; // 24 hours
const LS_KEY = "infiwin_inquiry_deadline";

function formatTime(seconds: number) {
  const s = Math.max(0, seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return {
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(sec).padStart(2, "0"),
  };
}

// ─── Flip digit – dark variant (popup + inline) ───────────────────────────────
function FlipDigit({
  value,
  label,
  size = "lg",
}: {
  value: string;
  label: string;
  size?: "sm" | "lg";
}) {
  const prevRef = useRef(value);
  const changed = prevRef.current !== value;
  useEffect(() => {
    prevRef.current = value;
  });

  const box =
    size === "lg"
      ? "w-16 h-16 sm:w-20 sm:h-20"
      : "w-12 h-12 sm:w-14 sm:h-14";
  const text =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : "text-xl sm:text-2xl";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`relative ${box}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] rounded-xl border border-luxury-gold/30 flex items-center justify-center shadow-lg shadow-luxury-gold/10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={changed ? { rotateX: -90, opacity: 0 } : false}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center rounded-xl"
          >
            <span className={`${text} font-mono font-bold text-white tracking-tight`}>
              {value}
            </span>
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-luxury-gold/20 pointer-events-none" />
      </div>
      <span className="text-[8px] uppercase tracking-widest text-white/40 font-semibold">
        {label}
      </span>
    </div>
  );
}

// ─── Inline timer banner (shown on contact page after popup is closed) ────────
function InlineTimerBanner({
  remaining,
  onDismiss,
}: {
  remaining: number;
  onDismiss: () => void;
}) {
  const { hours, minutes, seconds } = formatTime(remaining);
  const pct = (remaining / TOTAL_SECONDS) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ type: "spring", damping: 20, stiffness: 260 }}
      className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-luxury-gold/20 shadow-2xl shadow-luxury-gold/10 p-6 sm:p-8"
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
        <motion.div
          className="h-full bg-luxury-gold rounded-full"
          style={{ width: `${pct}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Dismiss */}
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/30 hover:text-white/60 transition-all"
      >
        <X size={12} />
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center flex-shrink-0">
          <Hourglass size={16} className="text-luxury-gold" />
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-semibold">
            Inquiry Submitted ✓
          </p>
          <p className="text-white/50 text-xs font-light mt-0.5">
            We'll revert within 24 hours
          </p>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex items-center justify-center gap-3">
        <FlipDigit value={hours} label="Hours" size="sm" />
        <span className="text-xl font-mono text-luxury-gold/50 mb-4">:</span>
        <FlipDigit value={minutes} label="Mins" size="sm" />
        <span className="text-xl font-mono text-luxury-gold/50 mb-4">:</span>
        <FlipDigit value={seconds} label="Secs" size="sm" />
      </div>

      {/* CTA */}
      <a
        href="/products"
        className="mt-5 w-full flex items-center justify-center gap-2 bg-luxury-gold/10 hover:bg-luxury-gold/20 border border-luxury-gold/20 text-luxury-gold rounded-xl py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all group"
      >
        Explore Products
        
      </a>
    </motion.div>
  );
}

// ─── Success popup ────────────────────────────────────────────────────────────
function SuccessPopup({
  remaining,
  onClose,
}: {
  remaining: number;
  onClose: () => void;
}) {
  const { hours, minutes, seconds } = formatTime(remaining);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
    >
      {/* Blurred overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="relative w-full max-w-md bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Gold glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-luxury-gold rounded-b-full blur-sm" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
        >
          <X size={14} />
        </button>

        <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center gap-6">
          {/* Animated check */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", damping: 15, stiffness: 300 }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center">
              <CheckCircle className="text-luxury-gold w-10 h-10" strokeWidth={1.5} />
            </div>
            <motion.div
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-luxury-gold/40"
            />
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-luxury-gold/30"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-2"
          >
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em]">
              Inquiry Submitted
            </p>
            <h2 className="text-2xl font-serif text-white leading-tight">
              Your inquiry has been
              <br />
              successfully submitted!
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed mt-1">
              Our team will review your request and revert back to you within{" "}
              <span className="text-white font-medium">24 hours</span>.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="w-full"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              <Timer size={12} className="text-luxury-gold/70" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                Expected response in
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FlipDigit value={hours} label="Hours" />
              <span className="text-2xl font-mono text-luxury-gold/60 mb-4">:</span>
              <FlipDigit value={minutes} label="Mins" />
              <span className="text-2xl font-mono text-luxury-gold/60 mb-4">:</span>
              <FlipDigit value={seconds} label="Secs" />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Note: timer stays on page */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/30 text-[10px] italic"
          >
            The countdown will remain visible on this page after you close this.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="w-full flex flex-col gap-3"
          >
            <a
              href="/products"
              className="w-full bg-luxury-gold text-white py-4 rounded-lg flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-yellow-600 transition-all group"
            >
              Get Started — Explore Products
              
            </a>
            <button
              onClick={onClose}
              className="w-full text-white/30 hover:text-white/60 text-xs py-2 transition-colors"
            >
              Close — timer stays on the page
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
  const [length, setLength] = useState(10);
  const [height, setHeight] = useState(10);
  const [estimate, setEstimate] = useState<number | null>(null);

  // ── Helpers ─────────────────────────────────────────────────────────────────
  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid phone number.";
    if (!form.message.trim()) errs.message = "Please enter a message.";
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
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img loading="lazy"  loading="lazy"
            src="/farmhouse_hero.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Start Your Project</h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to our architectural specialists to discuss requirements and receive a
            comprehensive proposal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* ── Left Column ─────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-16">

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold flex-shrink-0 border border-luxury-gold/20">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Call Us
                  </h4>
                  <p className="text-slate-500 font-light text-sm">+91 73370 74370</p>
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
                    Corporate Office: H 195, Sector 63, Noida, Uttar Pradesh - 201309
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
                    Mon - Sat: 9:00 - 18:00
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* ── Inline Timer Banner (after popup is closed) ────────────────── */}
            <AnimatePresence>
              {showBanner && !showPopup && remaining !== null && (
                <InlineTimerBanner
                  remaining={remaining}
                  onDismiss={() => setShowBanner(false)}
                />
              )}
            </AnimatePresence>

            {/* Inquiry Form */}
            <div className="bg-[#fafafa] p-10 rounded-sm">
              <h3 className="text-2xl font-serif text-slate-900 mb-8">INQUIRY FORM</h3>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.name
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
                      className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-400"
                          : "border-slate-200 focus:border-luxury-gold"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[10px] text-red-500">{errors.phone}</p>
                    )}
                  </div>
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
                    className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-red-400"
                        : "border-slate-200 focus:border-luxury-gold"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[10px] text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-all mt-4 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-none"
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
              </form>
            </div>
          </div>

          {/* ── Right Column ──────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-10">

            {/* Cost Estimator */}
            <div className="bg-[#0a0a0a] text-white p-10 md:p-14 rounded-sm shadow-2xl shadow-black/10">
              <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">
                Immediate Tool
              </p>
              <h3 className="text-3xl font-serif mb-4">Cost Estimator</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-10 max-w-sm">
                Get a quick, approximate cost for your project based on standard rates of
                ₹1800/sqft.
              </p>

              <div className="flex gap-6 mb-8">
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                    Length (ft)
                  </label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => {
                      setLength(Number(e.target.value));
                      setEstimate(null);
                    }}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                    Height (ft)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => {
                      setHeight(Number(e.target.value));
                      setEstimate(null);
                    }}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={() => setEstimate(length * height * 1800)}
                className="w-full bg-luxury-gold text-white py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Calculate Estimate
              </button>

              <AnimatePresence>
                {estimate !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="mt-6 p-5 rounded-sm bg-[#1a1a1a] border border-luxury-gold/20 flex justify-between items-center"
                  >
                    <span className="text-white/50 text-xs uppercase tracking-widest">
                      Approx. Cost
                    </span>
                    <span className="text-luxury-gold text-xl font-serif font-semibold">
                      ₹{estimate.toLocaleString("en-IN")}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Global Presence */}
            <div className="rounded-sm flex flex-col h-full justify-end overflow-hidden relative min-h-[400px] shadow-xl shadow-black/5">
              <img loading="lazy" src="/premium_global_presence.png" 
                alt="Premium Global Presence" 
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* Subtle dark gradient at the bottom so the text card pops nicely */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent z-0 pointer-events-none" />
              
              <div className="p-8 lg:p-10 relative z-10 w-full mt-auto">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-sm border border-white/20 shadow-2xl">
                  <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Global Presence
                  </h4>
                  <p className="text-slate-600 text-sm font-light">
                    Serving clients across GCC, India, and Southeast Asia.
                  </p>
                </div>
              </div>
            </div>
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
