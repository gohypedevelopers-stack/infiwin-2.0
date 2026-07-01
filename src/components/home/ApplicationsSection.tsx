import { useState } from "react";
import { ArrowRight, RotateCcw, Box, LayoutDashboard, Building2, PanelTop, Warehouse, LayoutTemplate, Briefcase, Trees } from "lucide-react";
import { Link } from "react-router-dom";

export const ApplicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const applications = [
    { id: "balcony", title: "Balcony", description: "Unobstructed frameless premium safety glazing barriers.", icon: LayoutTemplate },
    { id: "partition", title: "Int. Partition", description: "Sleek separation zones for functional multi-use spaces.", icon: LayoutDashboard },
    { id: "commercial", title: "Commercial", description: "High durability storefront facades & internal partition grids.", icon: Building2 },
    { id: "exterior", title: "Exterior", description: "Rigid wind resistance profile constructs for elevations.", icon: PanelTop },
    { id: "terrace", title: "Terrace", description: "Convert open terraces into delightful year-round glass lounges.", icon: Box },
    { id: "farmhouse", title: "Farm House", description: "Connect beautiful country landscaping with spacious interiors.", icon: Warehouse },
    { id: "office", title: "Office Space", description: "Acoustically isolated conference cubes & manager cabins.", icon: Briefcase },
    { id: "garden", title: "Garden", description: "Sleek verandas merging beautiful greenery with indoor thermal comfort.", icon: Trees },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Interactive Recommendation</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Explore Recommended Usages</h2>
          <p className="text-slate-500 font-light text-lg">
            Tap on an application below to immediately highlight the exact glass system variant recommended for that architectural space.
          </p>
        </div>

        {/* Interactive Filter Status */}
        <div className="min-h-[60px] flex items-center justify-center mb-8">
          {activeFilter ? (
            <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full text-sm">
              <span className="text-slate-700">
                Displaying product recommendations suitable for: <strong className="text-slate-900">{applications.find(a => a.id === activeFilter)?.title}</strong>
              </span>
              <button 
                onClick={() => setActiveFilter(null)}
                className="flex items-center gap-1 text-slate-500 hover:text-red-500 transition-colors ml-4 text-xs font-semibold uppercase tracking-wider"
              >
                <RotateCcw size={14} /> Show all systems
              </button>
            </div>
          ) : (
            <div className="text-sm text-slate-400 font-light italic">Select an application to filter recommended systems...</div>
          )}
        </div>

        {/* 8-Application Mobile Grid Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveFilter(app.id)}
              className={`p-6 text-left border rounded-xl transition-all duration-300 ${
                activeFilter === app.id 
                  ? "border-luxury-gold bg-yellow-50/50 shadow-md transform -translate-y-1" 
                  : "border-slate-100 bg-white hover:border-luxury-gold/50 hover:shadow-sm"
              }`}
            >
              <div className="mb-4 text-slate-400">
                <app.icon size={36} strokeWidth={1.5} className={activeFilter === app.id ? "text-luxury-gold" : ""} />
              </div>
              <h3 className={`text-lg font-medium mb-2 ${activeFilter === app.id ? "text-luxury-gold" : "text-slate-900"}`}>
                {app.title}
              </h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2">
                {app.description}
              </p>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="#estimator"
            className="group flex items-center justify-center gap-3 bg-black hover:bg-slate-800 text-white px-10 py-5 rounded-sm transition-all shadow-lg font-medium tracking-wider uppercase text-sm"
          >
            Get Custom Enclosure Quote For Your Space
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
