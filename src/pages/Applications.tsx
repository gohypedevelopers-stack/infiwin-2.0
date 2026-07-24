import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { galleryData } from "../data/galleryData";
import {
  ArrowRight,
  Building2,
  Layout,
  Briefcase,
  ShoppingBag,
  Home,
  Trees,
  Map,
  LayoutTemplate,
  LayoutDashboard,
  PanelTop,
  Box,
  Warehouse
} from "lucide-react";

export default function Applications() {
  const getAppImg = (title: string, fallbackImg: string) => {
    const id = title.toLowerCase().replace(/[\\s&.]+/g, '-');
    if (galleryData[id] && galleryData[id].images.length > 0) {
      return galleryData[id].images[0];
    }
    return fallbackImg;
  };

  const featuredApps = [
    { title: "Balcony", description: "Unobstructed frameless premium safety glazing barriers.", icon: LayoutTemplate, img: galleryData["balcony"]?.images[0] || "https://i.postimg.cc/1tm1yGXW/Chat-GPT-Image-Jun-29-2026-12-04-16-PM.png" },
    { title: "Int. Partition", description: "Sleek separation zones for functional multi-use spaces.", icon: LayoutDashboard, img: galleryData["int-partition"]?.images[0] || "https://i.postimg.cc/QxWwG4S3/Chat-GPT-Image-Jun-29-2026-12-06-24-PM.png" },
    { title: "Commercial", description: "High durability storefront facades & internal partition grids.", icon: Building2, img: galleryData["commercial"]?.images[0] || "https://i.postimg.cc/YS8yfJ2Q/Chat-GPT-Image-Jun-29-2026-12-07-47-PM.png" },
    { title: "Exterior", description: "Rigid wind resistance profile constructs for elevations.", icon: PanelTop, img: galleryData["exterior"]?.images[0] || "https://i.postimg.cc/59Hbympn/Chat-GPT-Image-Jun-29-2026-12-11-13-PM.png" },
    { title: "Terrace", description: "Convert open terraces into delightful year-round glass lounges.", icon: Box, img: galleryData["terrace"]?.images[0] || "https://i.postimg.cc/DwhTC3Fn/Chat-GPT-Image-Jun-29-2026-12-12-32-PM.png" },
    { title: "Farm House", description: "Connect beautiful country landscaping with spacious interiors.", icon: Warehouse, img: galleryData["farm-house"]?.images[0] || "https://i.postimg.cc/4ycD5BSR/Chat-GPT-Image-Jun-29-2026-12-17-17-PM.png" },
    { title: "Office Space", description: "Acoustically isolated conference cubes & manager cabins.", icon: Briefcase, img: galleryData["office-space"]?.images[0] || "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" },
    { title: "Garden", description: "Sleek verandas merging beautiful greenery with indoor thermal comfort.", icon: Trees, img: galleryData["garden"]?.images[0] || "https://i.postimg.cc/g2sfNwN0/Chat-GPT-Image-Jun-29-2026-12-23-17-PM.png" }
  ];

  const usageAreas = [
    { name: "Balcony", icon: <Layout />, desc: "Transform your balcony into a year-round living space." },
    { name: "Interior Partition", icon: <Map />, desc: "Elegant space division without losing light." },
    { name: "Office Space", icon: <Briefcase />, desc: "Sophisticated transparency for workspaces." },
    { name: "Commercial", icon: <ShoppingBag />, desc: "Performance solutions for retail property." },
    { name: "Exterior", icon: <Building2 />, desc: "Durable glass systems for grand facades." },
    { name: "Terrace Garden", icon: <Trees />, desc: "Lush greenery meets architectural glass." },
    { name: "Farm House", icon: <Home />, desc: "Rural luxury glass for expansive estates." }
  ];

  const suggestedSystems = [
    { title: "Infi SET Slide & Turn", type: "Premium Series", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { title: "Telescopic Slider", type: "Architectural Series", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=600" },
    { title: "Bi-fold System", type: "Panoramic Series", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-12 lg:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/gallery/Systems/Slide%20&%20Turn/Slide & Turn.jpg.jpeg"
            alt="Applications Background"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Architectural Harmony</p>
          <h1 className="text-4xl md:text-7xl font-serif mb-4">Spatial Fluidity</h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore how INFIWIN systems integrate into diverse environments, creating seamless transitions between nature and architecture.
          </p>
        </div>
      </section>

      {/* Featured Applications */}
      <section className="px-6 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.3em] mb-4">Explore Scenarios</p>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Application Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredApps.map((app, idx) => {
              return (
                <div
                  key={idx}
                >
                  <Link to={`/gallery/application/${app.title.toLowerCase().replace(/[\s&.]+/g, '-')}`} className="group cursor-pointer block relative">
                    <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 relative shadow-md transition-shadow hover:shadow-xl">
                      <img loading="lazy"
                        src={app.img}
                        alt={app.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center z-0">
                        <app.icon size={32} strokeWidth={1.5} className="text-luxury-gold mb-4" />
                        <h4 className="text-xl font-serif text-slate-900 mb-2">{app.title}</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{app.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <h5 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{app.title}</h5>

                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Designs Section */}
      <section className="relative w-full bg-white py-12 lg:py-16 overflow-hidden border-t border-slate-100">

        {/* Floating texts */}
        <div className="absolute left-6 bottom-60 -rotate-90 origin-left transform z-10 hidden lg:block">
          <span className="text-xs tracking-[0.4em] text-slate-500 uppercase font-bold">#reclaimyourspace</span>
        </div>
        <div className="absolute right-6 top-40 rotate-90 origin-right transform z-10 hidden lg:block">
          <span className="text-xs tracking-[0.2em] text-slate-500 font-light lowercase">www.infiwindow.com</span>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Configurations</h3>
            <h4 className="text-5xl font-serif text-slate-900">Shapes</h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* LEFT SIDE: Text Boxes */}
            <div className="flex flex-col order-2 lg:order-1">

              <div className="flex flex-col space-y-6">
                {[
                  {
                    label: "Design Type",
                    title: "Single Panel Design",
                    desc: "A single panel of frameless glass that slides or pivots to open, providing a sleek and modern look with unobstructed views."
                  },
                  {
                    label: "Design Type",
                    title: "Multiple Panel Design",
                    desc: "This design consists of multiple panels of frameless glass that slide or fold together, providing a wider opening and more flexibility in terms of how the space can be used."
                  },
                  {
                    label: "Design Type",
                    title: "Corner Design",
                    desc: "This design features frameless glass panels that meet at a corner, creating a seamless and visually striking effect. It can be a great choice for spaces that require an open and airy feel."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white border border-slate-100 rounded-sm hover:border-luxury-gold transition-colors text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-3">{item.label}</p>
                    <p className="text-xl font-serif mb-1 text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Diagrams */}
            <div className="flex flex-col items-center justify-center w-full h-full relative order-1 lg:order-2">
              <img loading="lazy"
                src="https://i.postimg.cc/dtstjGZ6/Chat-GPT-Image-Jul-1-2026-04-58-48-PM.png"
                alt="System Configuration Diagrams"
                className="w-full h-auto object-contain max-w-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-12 lg:py-16 bg-luxury-gold/5 border-t border-luxury-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-4xl font-serif mb-8 text-slate-900">Envision INFIWIN in Your Space</h4>
          <p className="text-slate-600 font-light mb-10 leading-relaxed text-lg max-w-3xl mx-auto">
            Discover how our frameless systems adapt perfectly to any architectural requirement, from luxury residential balconies to expansive commercial storefronts.
          </p>
          <Link to="/contact" className="bg-black text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-luxury-gold transition-colors shadow-lg inline-flex items-center gap-3 mx-auto">
            <span>Contact Us</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
