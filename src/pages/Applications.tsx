import { motion } from "motion/react";
import { Link } from "react-router-dom";
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
  const featuredApps = [
    { title: "Balcony", description: "Unobstructed frameless premium safety glazing barriers.", icon: LayoutTemplate, img: "https://i.postimg.cc/1tm1yGXW/Chat-GPT-Image-Jun-29-2026-12-04-16-PM.png" },
    { title: "Int. Partition", description: "Sleek separation zones for functional multi-use spaces.", icon: LayoutDashboard, img: "https://i.postimg.cc/QxWwG4S3/Chat-GPT-Image-Jun-29-2026-12-06-24-PM.png" },
    { title: "Commercial", description: "High durability storefront facades & internal partition grids.", icon: Building2, img: "https://i.postimg.cc/YS8yfJ2Q/Chat-GPT-Image-Jun-29-2026-12-07-47-PM.png" },
    { title: "Exterior", description: "Rigid wind resistance profile constructs for elevations.", icon: PanelTop, img: "https://i.postimg.cc/59Hbympn/Chat-GPT-Image-Jun-29-2026-12-11-13-PM.png" },
    { title: "Terrace", description: "Convert open terraces into delightful year-round glass lounges.", icon: Box, img: "https://i.postimg.cc/DwhTC3Fn/Chat-GPT-Image-Jun-29-2026-12-12-32-PM.png" },
    { title: "Farm House", description: "Connect beautiful country landscaping with spacious interiors.", icon: Warehouse, img: "https://i.postimg.cc/4ycD5BSR/Chat-GPT-Image-Jun-29-2026-12-17-17-PM.png" },
    { title: "Office Space", description: "Acoustically isolated conference cubes & manager cabins.", icon: Briefcase, img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" },
    { title: "Garden", description: "Sleek verandas merging beautiful greenery with indoor thermal comfort.", icon: Trees, img: "https://i.postimg.cc/g2sfNwN0/Chat-GPT-Image-Jun-29-2026-12-23-17-PM.png" }
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
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black/80 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" 
            alt="Applications Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="text-center text-white px-6">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Architectural Harmony</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Spatial Fluidity</h1>
          <p className="mt-8 text-lg md:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore how INFIWIN systems integrate into diverse environments, creating seamless transitions between nature and architecture.
          </p>
        </div>
      </section>

      {/* Featured Applications */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.3em] mb-4">Explore Scenarios</p>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Application Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredApps.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 relative shadow-md transition-shadow hover:shadow-xl">
                  <img loading="lazy"
                    src={app.img}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <app.icon size={32} strokeWidth={1.5} className="text-luxury-gold mb-4" />
                    <h4 className="text-xl font-serif text-slate-900 mb-2">{app.title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{app.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-1">
                  <h5 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">{app.title}</h5>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-luxury-gold transform translate-x-0 group-hover:translate-x-2 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
