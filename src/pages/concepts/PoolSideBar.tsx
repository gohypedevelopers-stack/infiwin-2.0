import React from "react";
import ConceptDetailPage, { ConceptDetailData } from "../ConceptDetailPage";

const DATA: ConceptDetailData = {
  id: "pool-side-bar",
  title: "Pool Side Bar",
  subtitle: "Create resort-calibre poolside experiences with glass systems designed for luxury, leisure and the elements.",
  tagline: "Leisure Concept",
  description:
    "The Pool Side Bar concept blends luxurious outdoor living with the practicality of weather-protected glass enclosures. Our systems are engineered for salt-air coastal environments, UV-resistant throughout, and designed to complement infinity pools, rooftop lounges, and five-star resort bars alike. Retract the glass to feel the breeze; close it when the weather turns — all without interrupting the atmosphere.",
  heroImg: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png",
  videoPlaceholder: "/concepts_videos/pool-side-bar.mp4",
  features: [
    { icon: "🌊", title: "Marine-Grade Hardware", description: "316 stainless steel components and anodised aluminium resist corrosion in pool-chemical and salt-air environments." },
    { icon: "☀️", title: "UV-Resistant Glazing", description: "High-performance solar-control glass prevents fading of interiors and reduces glare around reflective pool surfaces." },
    { icon: "🍹", title: "Bar Counter Integration", description: "Pass-through configurations allow drinks to be served through the glass panel aperture — no need to open the full wall." },
    { icon: "🛡️", title: "Safety Glazing", description: "Toughened and laminated glass panels exceed pool-surround safety standards to protect guests from impact." },
    { icon: "🌙", title: "Night-Mode Ambience", description: "Integrated LED strip channels in aluminium profiles create dramatic under-glass illumination after dark." },
    { icon: "🔧", title: "Easy Maintenance", description: "Tool-free panel removal for deep cleaning and quick hardware inspection — essential for commercial pool venues." },
  ],
  stats: [
    { value: "5★", label: "Resort Grade" },
    { value: "IP67", label: "Water Protection" },
    { value: "−10°C", label: "Min Operating Temp" },
    { value: "200+", label: "Installations" },
  ],
  gallery: [
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png", caption: "Infinity pool bar — glass wall fully open to poolside" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_52_36%20PM.png", caption: "Night ambience — LED-integrated frames illuminate the pool deck" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_30_38%20PM.png", caption: "Rooftop bar setting — panoramic city skyline view" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_27_22%20PM.png", caption: "Pass-through bar counter detail — open service aperture" },
  ],
  highlights: [
    "Rated for wind loads up to 1.8 kPa in exposed locations",
    "Salt-spray tested to 500 hours (ISO 9227)",
    "Pass-through service window configurations available",
    "Frameless glass options for unobstructed pool views",
    "Compatible with automated blind and solar shading systems",
    "Available in frameless, slim-frame and thermally-broken profiles",
  ],
  related: [
    { id: "facade", title: "Façade", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png", href: "/concepts/facade" },
    { id: "restaurant", title: "Restaurant", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png", href: "/concepts/restaurant" },
  ],
};

export default function PoolSideBar() {
  return <ConceptDetailPage data={DATA} />;
}
