import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hourglass, X, CheckCircle2, Timer, ArrowRight, Sparkles } from "lucide-react";

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
  theme = "light",
}: {
  value: string;
  label: string;
  size?: "sm" | "lg";
  theme?: "light" | "dark";
}) {
  const prevRef = useRef(value);
  const changed = prevRef.current !== value;
  useEffect(() => {
    prevRef.current = value;
  });

  const box =
    size === "lg"
      ? "w-16 h-18 sm:w-20 sm:h-22"
      : "w-12 h-14 sm:w-14 sm:h-16";
  const text =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : "text-xl sm:text-2xl";

  const bgStyles =
    theme === "light"
      ? "bg-gradient-to-b from-amber-50/90 via-white to-amber-50/40 border border-amber-300/80 shadow-md"
      : "bg-gradient-to-b from-[#1c1917] via-[#12100e] to-[#0a0a0a] border border-amber-500/25 shadow-2xl";

  const textStyles =
    theme === "light"
      ? "text-slate-900 font-mono font-bold"
      : "text-amber-200 font-mono font-bold drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]";

  const labelStyles =
    theme === "light"
      ? "text-amber-900/80 font-bold"
      : "text-amber-400/60 font-medium";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${box} rounded-xl overflow-hidden ${bgStyles}`}>
        {/* Inner top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={changed ? { rotateX: -90, opacity: 0 } : false}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className={`${text} ${textStyles} tracking-tight`}>
              {value}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Center horizontal split line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
      </div>
      <span className={`text-[9px] uppercase tracking-[0.2em] ${labelStyles} font-sans`}>
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
      className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#141414] to-[#090909] border border-amber-500/30 shadow-2xl shadow-amber-500/10 p-6 sm:p-8"
    >
      {/* Top metallic bar */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
          style={{ width: `${pct}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Dismiss */}
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all cursor-pointer"
      >
        <X size={13} />
      </button>

      {/* Header */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/5 border border-amber-400/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/10">
          <Hourglass size={18} className="text-amber-400 animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
            <span>Inquiry Submitted</span>
            <span className="text-emerald-400">✓</span>
          </p>
          <p className="text-white/60 text-xs font-light mt-0.5">
            Guaranteed response within 24 hours
          </p>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex items-center justify-center gap-3 my-2">
        <FlipDigit value={hours} label="Hours" size="sm" theme="dark" />
        <span className="text-xl font-mono text-amber-400/60 mb-5 animate-pulse">:</span>
        <FlipDigit value={minutes} label="Mins" size="sm" theme="dark" />
        <span className="text-xl font-mono text-amber-400/60 mb-5 animate-pulse">:</span>
        <FlipDigit value={seconds} label="Secs" size="sm" theme="dark" />
      </div>

      {/* CTA */}
      <a
        href="/products"
        className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 hover:from-amber-500/25 hover:via-amber-400/30 hover:to-amber-500/25 border border-amber-400/30 text-amber-300 rounded-lg py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all group"
      >
        <span>Explore Products</span>
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Soft Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      />

      {/* White Modal Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 22, stiffness: 320 }}
        className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-amber-300/70 my-auto"
      >
        {/* Top Shimmer Line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 z-20" />

        {/* Ambient Backlight Aura */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all z-20 cursor-pointer shadow-sm"
        >
          <X size={15} />
        </button>

        <div className="px-8 sm:px-12 pt-10 pb-8 flex flex-col items-center text-center gap-7 relative z-10">
          
          {/* Animated Gold Check Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.12, type: "spring", damping: 14, stiffness: 280 }}
            className="relative"
          >
            <div className="w-22 h-22 rounded-full bg-gradient-to-br from-amber-100 via-amber-50 to-white border border-amber-300 flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.25)] backdrop-blur-sm">
              <CheckCircle2 className="text-amber-600 w-11 h-11 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" strokeWidth={1.5} />
            </div>

            {/* Concentric Pulsing Rings */}
            <motion.div
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-amber-400/40 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-amber-400/25 pointer-events-none"
            />
          </motion.div>

          {/* Heading and Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="flex flex-col items-center gap-2.5"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] uppercase font-bold tracking-[0.25em]">
              <Sparkles size={11} className="text-amber-600" />
              <span>Inquiry Submitted</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 leading-snug tracking-wide font-normal mt-1">
              Your inquiry has been
              <br />
              <span className="italic text-amber-700">successfully submitted!</span>
            </h2>

            <p className="text-slate-600 text-sm font-light leading-relaxed max-w-sm mt-1">
              Our engineering specialists will review your requirements and revert back to you within{" "}
              <span className="text-amber-800 font-semibold">24 hours</span>.
            </p>
          </motion.div>

          {/* Luxury Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

          {/* Timer Section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="w-full flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/80">
              <Timer size={13} className="text-amber-600 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-900 font-bold">
                Expected Response In
              </span>
            </div>

            <div className="flex items-center justify-center gap-3.5 sm:gap-5">
              <FlipDigit value={hours} label="Hours" size="lg" theme="light" />
              <span className="text-2xl sm:text-3xl font-mono text-amber-500 mb-6 animate-pulse">:</span>
              <FlipDigit value={minutes} label="Mins" size="lg" theme="light" />
              <span className="text-2xl sm:text-3xl font-mono text-amber-500 mb-6 animate-pulse">:</span>
              <FlipDigit value={seconds} label="Secs" size="lg" theme="light" />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

          {/* Footnote note */}
          {!isHomepage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="text-slate-400 text-[11px] font-light italic -mt-2"
            >
              The countdown will remain visible on this page after you close this.
            </motion.p>
          )}
          {isHomepage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="text-slate-400 text-[11px] font-light italic -mt-2"
            >
              You can check your active countdown at any time on the Contact page.
            </motion.p>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="w-full flex flex-col gap-3 mt-1"
          >
            <a
              href="/products"
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-[#b89328] via-[#d4af37] to-[#b89328] text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:brightness-105 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 border-none"
            >
              <span>Get Started — Explore Products</span>
              <ArrowRight size={14} />
            </a>

            <button
              onClick={onClose}
              className="w-full text-slate-400 hover:text-slate-700 text-xs font-medium py-2 transition-colors cursor-pointer border-none bg-transparent"
            >
              Close Window
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
