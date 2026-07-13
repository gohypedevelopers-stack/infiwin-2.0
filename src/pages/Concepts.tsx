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
  CheckCircle,
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
    video: "https://ik.imagekit.io/6tktrblyvs/doorspital/Facade.mp4",
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
    title: "Restaurant Terrace",
    subtitle: "Hospitality Concept",
    tagline: "Adaptable Dining Environments",
    desc: "Our Restaurant concept harnesses the power of movable glass walls to create infinitely adaptable dining spaces. During mild weather, fold back entire walls to create an alfresco atmosphere. As conditions change, close them in seconds without losing the panoramic view.",
    img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png",
    video: "https://ik.imagekit.io/6tktrblyvs/doorspital/Terrece%20Large.mp4",
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
    video: "https://ik.imagekit.io/6tktrblyvs/doorspital/Pool.mp4",
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
  {
    id: "glass-slab",
    title: "Structural Glass",
    subtitle: "Material Concept",
    tagline: "Unmatched Structural Integrity",
    desc: "Witness the sheer strength of our structural glass slabs. Engineered to support massive loads while maintaining perfect optical clarity, these slabs form the foundation of our premium walkable skylights, glass floors, and heavy-duty structural elements.",
    img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png",
    video: "https://ik.imagekit.io/6tktrblyvs/doorspital/glass%20slab%20animation.mp4",
    stats: [
      { value: "5x", label: "Stronger" },
      { value: "99%", label: "Clarity" },
      { value: "ISO", label: "Certified" },
    ],
    highlights: [
      "Multi-layered laminated safety glass",
      "Scratch-resistant top surface",
      "Engineered for extreme structural loads",
    ],
    href: "/concepts",
  },
  {
    id: "shatter-animation",
    title: "Safety Glazing",
    subtitle: "Safety Concept",
    tagline: "Advanced Impact Resistance",
    desc: "Safety is our absolute priority. This shatter animation demonstrates how our advanced laminated glazing systems react to extreme impact—holding together to prevent dangerous shards and maintaining a secure barrier even under immense stress.",
    img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png",
    video: "https://ik.imagekit.io/6tktrblyvs/doorspital/infiwin%20shatter%20animation.mp4",
    stats: [
      { value: "100%", label: "Shatterproof" },
      { value: "SGCC", label: "Approved" },
      { value: "Zero", label: "Spalling" },
    ],
    highlights: [
      "Advanced PVB and SGP interlayers",
      "Maintains barrier integrity even when broken",
      "Protects against severe weather and impact",
    ],
    href: "/concepts",
  }
];

const VolumeControl = ({ videoId }: { videoId: string }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <button
      onClick={() => {
        const vid = document.getElementById(videoId) as HTMLVideoElement;
        if (vid) {
          const newMutedState = !vid.muted;
          vid.muted = newMutedState;
          if (!newMutedState) {
            vid.volume = 1.0;
          }
          vid.play().catch(() => {});
          setIsMuted(newMutedState);
        }
      }}
      className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:border-luxury-gold/50 transition-colors cursor-pointer"
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
    </button>
  );
};

const LazyVideo = ({ id, src, className }: { id: string; src: string; className: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      id={id}
      src={src}
      loop
      muted
      playsInline
      preload="none"
      className={className}
      onError={(e) => {
        (e.target as HTMLVideoElement).style.display = "none";
      }}
    />
  );
};

export default function Concepts() {


  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img loading="lazy"
            src="/bifold_banner.jpg"
            alt="Concepts Background"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">
            Design Visions
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Animated Architectural Concepts
          </h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Witness our high-end glass systems come to life. Discover how our luxury glazing merges structural boundaries, custom-fit for world-class design planners.
          </p>
        </div>
      </section>

      {/* ── SHOWCASE SECTION ────────────────────────────────────────── */}
      <section className="w-full">
        {CONCEPTS.map((concept, idx) => {
          const isEven = idx % 2 === 0;

          // Apply contrasting background (Restaurant gets light gray, others get white)
          const rowBg = idx === 1 ? "bg-[#fafafa]" : "bg-white";

          return (
            <div key={concept.id} className={`${rowBg} py-24 border-b border-slate-100 last:border-0`}>
              <div
                className={`max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Video Player Side */}
                <div className="w-full lg:w-1/2 relative shrink-0">
                  <div
                    className="w-full aspect-video bg-black/60 rounded-sm border border-slate-200/60 overflow-hidden relative shadow-lg group flex flex-col justify-center items-center"
                  >
                    <LazyVideo
                      id={`video-${concept.id}`}
                      src={concept.video}
                      className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-[1.01] transition-transform duration-700"
                    />

                    {/* Glass Backdrop Poster & Fallback Frame */}
                    <div className="absolute inset-0 z-[-1] pointer-events-none">
                      <img loading="lazy" src={concept.img}
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
                      <VolumeControl videoId={`video-${concept.id}`} />
                    </div>

                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-black/75 backdrop-blur-sm text-[9px] font-bold text-luxury-gold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-sm border border-white/5 shadow-md">
                        {concept.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description & Technical highlights Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start pt-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-bold mb-3 block">
                      {concept.tagline}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                      {concept.title}
                    </h2>
                    <p className="text-slate-600 font-light leading-relaxed mb-8 text-sm md:text-base">
                      {concept.desc}
                    </p>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-4 border-y border-slate-200/60 py-6 mb-8">
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
                          <span className="text-xs text-slate-600 font-light">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-luxury-gold/5 flex items-center gap-2 group"
                      >
                        Enquire about {concept.title}
                        <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── BOTTOM CTA SECTION ────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[#fafafa] border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <Layers className="text-luxury-gold mx-auto mb-6 w-12 h-12 opacity-80" strokeWidth={1} />
          <h4 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Explore Custom Visuals</h4>
          <p className="text-slate-600 font-light mb-8 max-w-xl mx-auto leading-relaxed text-sm">
            We work alongside elite architects and hospitality groups to create custom visual layouts.
            Get in touch to receive technical CAD drawings and customized quote estimates for your projects.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-luxury-gold hover:bg-slate-950 text-white px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs transition-colors shadow-md border-none cursor-pointer"
          >
            Request CAD & Price Sheet
          </Link>
        </div>
      </section>
    </div>
  );
}
