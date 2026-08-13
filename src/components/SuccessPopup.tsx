import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hourglass, X, CheckCircle, Timer } from "lucide-react";

export const TOTAL_SECONDS = 24 * 60 * 60; // 24 hours
export const LS_KEY = "infiwin_inquiry_deadline";

export function formatTime(seconds: number) {
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

export function FlipDigit({
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] rounded-lg border border-luxury-gold/30 flex items-center justify-center shadow-lg shadow-luxury-gold/10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={changed ? { rotateX: -90, opacity: 0 } : false}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center rounded-lg"
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

export function InlineTimerBanner({
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
      className="relative overflow-hidden rounded-lg bg-[#0a0a0a] border border-luxury-gold/20 shadow-2xl shadow-luxury-gold/10 p-6 sm:p-8"
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
        className="mt-5 w-full flex items-center justify-center gap-2 bg-luxury-gold/10 hover:bg-luxury-gold/20 border border-luxury-gold/20 text-luxury-gold rounded-lg py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all group"
      >
        Explore Products
      </a>
    </motion.div>
  );
}

export function SuccessPopup({
  remaining,
  onClose,
  isHomepage = false,
}: {
  remaining: number;
  onClose: () => void;
  isHomepage?: boolean;
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
        className="relative w-full max-w-md bg-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Gold glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-luxury-gold rounded-b-full blur-sm" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all z-10 cursor-pointer"
        >
          <X size={14} />
        </button>

        <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center gap-6 relative z-0">
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
              className="absolute inset-0 rounded-full border border-luxury-gold/40 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-luxury-gold/30 pointer-events-none"
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
          {!isHomepage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/30 text-[10px] italic"
            >
              The countdown will remain visible on this page after you close this.
            </motion.p>
          )}
          {isHomepage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/30 text-[10px] italic"
            >
              You can check the timer progress at any time on the Contact page.
            </motion.p>
          )}

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
              className="w-full text-white/30 hover:text-white/60 text-xs py-2 transition-colors cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
