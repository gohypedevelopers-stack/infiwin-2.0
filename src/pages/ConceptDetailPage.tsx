import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Play, CheckCircle, ChevronRight } from "lucide-react";

export interface ConceptFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ConceptStat {
  value: string;
  label: string;
}

export interface ConceptGalleryItem {
  img: string;
  caption: string;
}

export interface RelatedConcept {
  id: string;
  title: string;
  img: string;
  href: string;
}

export interface ConceptDetailData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImg: string;
  videoPlaceholder?: string;
  features: ConceptFeature[];
  stats: ConceptStat[];
  gallery: ConceptGalleryItem[];
  highlights: string[];
  related: RelatedConcept[];
  accentColor?: string;
}

interface ConceptDetailPageProps {
  data: ConceptDetailData;
}

export default function ConceptDetailPage({ data }: ConceptDetailPageProps) {
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  const handlePrev = () =>
    setActiveGalleryIdx((i) => (i === 0 ? data.gallery.length - 1 : i - 1));
  const handleNext = () =>
    setActiveGalleryIdx((i) => (i === data.gallery.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden pt-24">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImg}
            alt={data.title}
            className="w-full h-full object-cover scale-105"
            style={{ filter: "brightness(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-10 left-6 md:left-12 z-20"
        >
          <Link
            to="/concepts"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-luxury-gold transition-colors"
          >
            <ArrowLeft size={14} />
            All Concepts
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pb-20 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-5 block"
          >
            {data.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-5xl md:text-8xl uppercase font-serif leading-[0.9] mb-6 tracking-tight"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed font-light"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center px-4 first:pl-0 last:pr-0"
              >
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO + HIGHLIGHTS ──────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-5 block">
              Overview
            </span>
            <h2 className="text-4xl font-serif uppercase mb-8 leading-tight">
              What Makes This<br />
              <span className="text-luxury-gold">Concept Special</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed font-light mb-10">
              {data.description}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-luxury-gold text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Enquire Now
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {data.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-sm border border-white/5 bg-white/5 hover:border-luxury-gold/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-luxury-gold/15 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold transition-colors duration-300">
                  <CheckCircle className="w-3 h-3 text-luxury-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-white/80 text-sm font-medium leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ANIMATED VIDEO ───────────────────────────────────── */}
      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-12"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-4 block">
              Animated Showcase
            </span>
            <h2 className="text-3xl md:text-5xl font-serif uppercase">
              See It Come To Life
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-video bg-black/60 rounded-sm border border-white/10 overflow-hidden relative shadow-[0_0_80px_rgba(212,175,55,0.08)] group"
          >
            {data.videoPlaceholder ? (
              <video
                src={data.videoPlaceholder}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-transparent to-luxury-gold/5" />
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 40px)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-20 h-20 rounded-full border-2 border-luxury-gold/50 flex items-center justify-center mb-6 bg-luxury-gold/10 backdrop-blur-sm"
                  >
                    <Play className="w-10 h-10 text-luxury-gold translate-x-0.5" />
                  </motion.div>
                  <p className="text-sm font-bold tracking-widest uppercase text-white/40">
                    Animated Video — Coming Soon
                  </p>
                  <p className="text-xs text-white/25 mt-2 tracking-wider">
                    3D Concept Walkthrough · {data.title}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-4 block">
              Why Choose This
            </span>
            <h2 className="text-3xl md:text-5xl font-serif uppercase">
              Key Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-sm border border-white/5 bg-white/5 hover:border-luxury-gold/50 hover:bg-luxury-gold/5 transition-all duration-500 cursor-default"
              >
                <div className="text-4xl mb-6">{feat.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 uppercase tracking-wide">{feat.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY CAROUSEL ─────────────────────────────────── */}
      {data.gallery.length > 0 && (
        <section className="py-24 bg-white/5 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-4 block">
                Visual Gallery
              </span>
              <h2 className="text-3xl md:text-5xl font-serif uppercase">
                Concept Gallery
              </h2>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGalleryIdx}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[16/9] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative"
                >
                  <img
                    src={data.gallery[activeGalleryIdx].img}
                    alt={data.gallery[activeGalleryIdx].caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium tracking-wide">
                      {data.gallery[activeGalleryIdx].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-luxury-gold hover:bg-luxury-gold/20 transition-all duration-300 backdrop-blur-sm"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-luxury-gold hover:bg-luxury-gold/20 transition-all duration-300 backdrop-blur-sm"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex gap-3 mt-5 overflow-x-auto no-scrollbar pb-1">
              {data.gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGalleryIdx(i)}
                  className={`shrink-0 w-24 h-16 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                    i === activeGalleryIdx
                      ? "border-luxury-gold scale-105"
                      : "border-white/15 opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED CONCEPTS ─────────────────────────────────── */}
      {data.related.length > 0 && (
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12 flex-wrap gap-4"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-4 block">
                  Explore More
                </span>
                <h2 className="text-3xl font-serif uppercase">Related Concepts</h2>
              </div>
              <Link
                to="/concepts"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-luxury-gold transition-colors"
              >
                View All <ChevronRight size={14} />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {data.related.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={rel.href} className="group block">
                    <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 mb-5">
                      <img
                        src={rel.img}
                        alt={rel.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-luxury-gold text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-sm flex items-center gap-2">
                          View Concept <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold uppercase tracking-widest text-white group-hover:text-luxury-gold transition-colors">
                      {rel.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[900px] mx-auto px-6 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold mb-6 block">
              Ready To Begin?
            </span>
            <h2 className="text-4xl md:text-7xl font-serif uppercase leading-tight mb-8">
              Bring This <span className="text-luxury-gold">Concept</span><br />To Life
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
              Work with our design team to realize this vision for your space. Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-luxury-gold text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 group"
              >
                Start a Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
