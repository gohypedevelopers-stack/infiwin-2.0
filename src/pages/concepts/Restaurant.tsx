import React from "react";
import ConceptDetailPage, { ConceptDetailData } from "../ConceptDetailPage";

const DATA: ConceptDetailData = {
  id: "restaurant",
  title: "Restaurant",
  subtitle: "Elevate dining experiences with glass environments that blur the boundary between interior luxury and the open air.",
  tagline: "Hospitality Concept",
  description:
    "Our Restaurant concept harnesses the power of movable glass walls to create infinitely adaptable dining spaces. During mild weather, fold back entire walls to create an alfresco atmosphere. As conditions change, close them in seconds — without ever losing the panoramic views. Combined with our acoustic glazing, ambient lighting integration, and precision hardware, the result is a dining room that becomes your most powerful brand statement.",
  heroImg: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png",
  videoPlaceholder: "/concepts_videos/restaurant.mp4",
  features: [
    { icon: "🍽️", title: "Fully Operable Walls", description: "Bi-fold and slide-and-turn systems allow walls to disappear entirely, merging indoor and outdoor dining." },
    { icon: "🌬️", title: "Natural Ventilation", description: "Intelligent opening configurations enable cross-ventilation while maintaining structural elegance." },
    { icon: "🔇", title: "Acoustic Control", description: "Laminated acoustic glass keeps the ambient noise at a perfect conversational level when closed." },
    { icon: "✨", title: "Ambient Integration", description: "Slim-profile frames integrate discreetly with in-built LED channels and concealed track lighting." },
    { icon: "🌧️", title: "All-Weather Operation", description: "High-performance seals and weather-resistant hardware ensure smooth operation in rain, wind, and heat." },
    { icon: "🎨", title: "Custom Finishes", description: "Bronze, anthracite, warm gold and white frame finishes match any interior design palette." },
  ],
  stats: [
    { value: "360°", label: "Panoramic Views" },
    { value: "8s", label: "Full Open / Close" },
    { value: "IP65", label: "Weather Rating" },
    { value: "∞", label: "Configuration Options" },
  ],
  gallery: [
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_16_49%20PM.png", caption: "Open-air dining mode — bi-fold walls fully retracted" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png", caption: "Enclosed dining — floor-to-ceiling glass panorama" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png", caption: "Terrace setting — seamless indoor-outdoor transition" },
    { img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_30_38%20PM.png", caption: "Evening ambience — warm-light integration through slim frames" },
  ],
  highlights: [
    "Zero visible threshold — fully flush floor tracks available",
    "Single-panel widths up to 1200 mm for unobstructed sightlines",
    "HACCP-compliant seals for commercial kitchen interfaces",
    "Motorised optional variants for remote operation",
    "Compliant with hospitality fire-egress regulations",
    "Dedicated installation team with restaurant fit-out experience",
  ],
  related: [
    { id: "facade", title: "Façade", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2001_10_02%20PM.png", href: "/concepts/facade" },
    { id: "pool-side-bar", title: "Pool Side Bar", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_20_57%20PM.png", href: "/concepts/pool-side-bar" },
  ],
};

export default function Restaurant() {
  return <ConceptDetailPage data={DATA} />;
}
