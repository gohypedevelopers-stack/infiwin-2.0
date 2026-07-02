import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Layers,
  Sparkles,
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface ConceptItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  desc: string;
  img: string;
  video: string;
  stats: { value: string; label: string }[];
  highlights: string[];
  href: string;
}

const CONCEPTS: ConceptItem[] = [
  {
    id: "facade",
    title: "Façade",
    subtitle: "Architectural Concept",
    tagline: "High-Performance Curtain Walls",
    desc: "Our Façade concept reimagines the exterior envelope of modern buildings as a dynamic interplay of glass, light, and structure. From panoramic curtain walls to bespoke cladding solutions, every panel is engineered for maximum thermal efficiency, acoustic performance, and visual drama.",
    img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png",
    video: "/concepts_videos/facade.mp4",
    stats: [
      { value: "40%", label: "Energy Savings" },
      { value: "54dB", label: "Noise Reduction" },
      { value: "25yr", label: "Design Life" },
    ],
    highlights: [
      "Customizable panel sizes up to 3.6m × 6m",
      "Thermal-break aluminum frames prevent drafts",
      "Compatible with external solar shading & automation",
    ],
    href: "/concepts/facade",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    subtitle: "Hospitality Concept",
    tagline: "Adaptable Dining Environments",
    desc: "Our Restaurant concept harnesses the power of movable glass walls to create infinitely adaptable dining spaces. During mild weather, fold back entire walls to create an alfresco atmosphere. As conditions change, close them in seconds without losing the panoramic view.",
    img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png",
    video: "/concepts_videos/restaurant.mp4",
    stats: [
      { value: "360°", label: "Panoramic Views" },
      { value: "8s", label: "Full Retraction" },
      { value: "IP65", label: "Weather Rating" },
    ],
    highlights: [
      "Zero visible threshold — fully flush floor tracks",
      "Concealed hinge lines & soundproof insulation",
      "Custom anodized finishes matching interior branding",
    ],
    href: "/concepts/restaurant",
  },
  {
    id: "pool-side-bar",
    title: "Pool Side Bar",
    subtitle: "Leisure Concept",
    tagline: "Marine-Grade Leisure Glazing",
    desc: "The Pool Side Bar concept blends luxurious outdoor living with the practicality of weather-protected glass enclosures. Our systems are engineered for salt-air coastal environments, UV-resistant throughout, and designed to complement infinity pools, rooftop lounges, and resort decks.",
    img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png",
    video: "/concepts_videos/pool-side-bar.mp4",
    stats: [
      { value: "5★", label: "Resort Grade" },
      { value: "IP67", label: "Water Protection" },
      { value: "316", label: "Marine Stainless" },
    ],
    highlights: [
      "Pass-through sliding service counter integration",
      "Corrosion-resistant marine anodized coating",
      "Impact-resistant safety glazing for wet zones",
    ],
    href: "/concepts/pool-side-bar",
  },
];

export default function Concepts() {
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    facade: true,
    restaurant: true,
    "pool-side-bar": true,
  });

  const toggleMute = (id: string) => {
    setMutedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-black/80 pt-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Concepts Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold text-[9px] uppercase tracking-[0.25em] mb-6">
            <Sparkles size={10} /> Design Visions
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Animated Architectural Concepts
          </h1>
          <p className="text-base md:text-lg font-light text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Witness our high-end glass systems come to life. Discover how our luxury glazing merges structural boundaries, custom-fit for world-class design planners.
          </p>
        </div>
      </section>

      {/* ── SHOWCASE SECTION ────────────────────────────────────────── */}
      <section className="px-6 py-12 max-w-7xl mx-auto space-y-32">
        {CONCEPTS.map((concept, idx) => {
          const isMuted = mutedStates[concept.id];
          const isEven = idx % 2 === 0;

          return (
            <div
              key={concept.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Video Player Side */}
              <div className="w-full lg:w-1/2 relative shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full aspect-video bg-black/60 rounded-sm border border-white/10 overflow-hidden relative shadow-[0_0_40px_rgba(212,175,55,0.08)] group flex flex-col justify-center items-center"
                >
                  <video
                    src={concept.video}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-[1.01] transition-transform duration-700"
                    onError={(e) => {
                      // Hides element if video fails/does not exist yet, showing fallback poster
                      (e.target as HTMLVideoElement).style.display = "none";
                    }}
                  />

                  {/* Glass Backdrop Poster & Fallback Frame */}
                  <div className="absolute inset-0 z-[-1] pointer-events-none">
                    <img
                      src={concept.img}
                      alt={concept.title}
                      className="w-full h-full object-cover filter brightness-[0.35]"
                    />
                  </div>

                  {/* Fallback Overlay if Video file isn't loaded */}
                  <div className="video-fallback absolute inset-0 z-0 bg-[#0a0a0a]/40 backdrop-blur-sm pointer-events-none flex flex-col items-center justify-center text-center p-6 opacity-0 group-has-[[style*='display: none']]:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full border-2 border-luxury-gold/50 flex items-center justify-center mb-4 bg-luxury-gold/15 animate-pulse">
                      <Play className="w-8 h-8 text-luxury-gold translate-x-0.5" />
                    </div>
                    <span className="text-[10px] font-bold text-luxury-gold/80 uppercase tracking-widest">
                      Showcase Video Coming Soon
                    </span>
                    <span className="text-[9px] text-white/30 tracking-wider mt-1">
                      (Place your mp4 file in public/concepts_videos/{concept.id}.mp4)
                    </span>
                  </div>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                  {/* Interactive Controls Overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Mute Button */}
                    <button
                      onClick={() => toggleMute(concept.id)}
                      className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:border-luxury-gold/50 transition-colors cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/75 backdrop-blur-sm text-[9px] font-bold text-luxury-gold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-sm border border-white/5 shadow-md">
                      {concept.subtitle}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Description & Technical highlights Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-bold mb-3 block">
                    {concept.tagline}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif uppercase text-white mb-6 leading-tight">
                    {concept.title}
                  </h2>
                  <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm md:text-base">
                    {concept.desc}
                  </p>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6 mb-8">
                    {concept.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-left">
                        <p className="text-xl font-bold text-luxury-gold">{stat.value}</p>
                        <p className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Checklist Highlights */}
                  <div className="space-y-3 mb-8">
                    {concept.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-3">
                        <CheckCircle size={14} className="text-luxury-gold shrink-0" />
                        <span className="text-xs text-slate-300 font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-yellow-600 transition-colors shadow-lg shadow-luxury-gold/5 flex items-center gap-2 group"
                    >
                      Enquire about {concept.title}
                      <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to={concept.href}
                      className="border border-white/10 hover:border-luxury-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all"
                    >
                      Full Details
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── BOTTOM CTA SECTION ────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Layers className="text-luxury-gold mx-auto mb-6 w-12 h-12 opacity-80" strokeWidth={1} />
          <h4 className="text-3xl md:text-4xl font-serif mb-6">Explore Custom Visuals</h4>
          <p className="text-slate-400 font-light mb-8 max-w-xl mx-auto leading-relaxed text-sm">
            We work alongside elite architects and hospitality groups to create custom visual layouts.
            Get in touch to receive technical CAD drawings and customized quote estimates for your projects.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-luxury-gold text-white px-10 py-4 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-yellow-600 transition-colors"
          >
            Request CAD & Price Sheet
          </Link>
        </div>
      </section>
    </div>
  );
}
