import React from "react";
import ConceptDetailPage, { ConceptDetailData } from "../ConceptDetailPage";

const DATA: ConceptDetailData = {
  id: "facade",
  title: "Façade",
  subtitle: "Transform building exteriors into iconic architectural statements with our precision-engineered glass façade systems.",
  tagline: "Architectural Concept",
  description:
    "Our Façade concept reimagines the exterior envelope of modern buildings as a dynamic interplay of glass, light and structure. From panoramic curtain walls to bespoke cladding solutions, every panel is engineered for maximum thermal efficiency, acoustic performance, and visual drama. The result is a building that evolves with daylight — revealing depth, texture and transparency from every angle.",
  heroImg: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png",
  videoPlaceholder: "/concepts_videos/facade.mp4",
  features: [
    { icon: "🏗️", title: "Curtain Wall Systems", description: "Floor-to-ceiling glass panels create seamless, column-free exteriors that flood interiors with natural light." },
    { icon: "🌡️", title: "Thermal Performance", description: "Double and triple-glazed units with low-E coatings dramatically reduce heat gain and energy consumption." },
    { icon: "🔊", title: "Acoustic Insulation", description: "Laminated glass with acoustic interlayers provides superior noise reduction in urban environments." },
    { icon: "💎", title: "Premium Aesthetics", description: "Anodised aluminium frames in custom RAL colours complement every architectural style." },
    { icon: "⚡", title: "Structural Integrity", description: "Wind-load engineered profiles and structural silicone bonding ensure decades of reliable performance." },
    { icon: "🌿", title: "Sustainable Design", description: "Recyclable aluminium frames paired with high-performance glass contribute to LEED and green-building certifications." },
  ],
  stats: [
    { value: "40%", label: "Energy Savings" },
    { value: "54dB", label: "Noise Reduction" },
    { value: "25yr", label: "Design Life" },
    { value: "RAL+", label: "Colour Options" },
  ],
  gallery: [
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png", caption: "Glass façade concept — full elevation view" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png", caption: "Corner curtain wall detail — structural silicone bonding" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png", caption: "Interior view — maximising natural daylight penetration" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_15_29%20PM.png", caption: "Night-time façade illumination concept" },
  ],
  highlights: [
    "Customisable panel sizes up to 3.6 m × 6 m",
    "Available in opaque, translucent, or fully transparent glass",
    "Compatible with external solar shading and brise-soleil",
    "BIM-ready specifications for seamless integration",
    "On-site fabrication support and project management",
    "Compliant with international building codes and fire standards",
  ],
  related: [
    { id: "restaurant", title: "Restaurant", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png", href: "/concepts/restaurant" },
    { id: "pool-side-bar", title: "Pool Side Bar", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png", href: "/concepts/pool-side-bar" },
  ],
};

export default function Facade() {
  return <ConceptDetailPage data={DATA} />;
}
