import { ArrowRight, Box, LayoutDashboard, Building2, PanelTop, Warehouse, LayoutTemplate, Briefcase, Trees } from "lucide-react";
import { Link } from "react-router-dom";

export const ApplicationsSection = () => {
  const applications = [
    { id: "balcony", title: "Balcony", description: "Unobstructed frameless premium safety glazing barriers.", icon: LayoutTemplate },
    { id: "int-partition", title: "Int. Partition", description: "Sleek separation zones for functional multi-use spaces.", icon: LayoutDashboard },
    { id: "commercial", title: "Commercial", description: "High durability storefront facades & internal partition grids.", icon: Building2 },
    { id: "exterior", title: "Exterior", description: "Rigid wind resistance profile constructs for elevations.", icon: PanelTop },
    { id: "terrace", title: "Terrace", description: "Convert open terraces into delightful year-round glass lounges.", icon: Box },
    { id: "farm-house", title: "Farm House", description: "Connect beautiful country landscaping with spacious interiors.", icon: Warehouse },
    { id: "office-space", title: "Office Space", description: "Acoustically isolated conference cubes & manager cabins.", icon: Briefcase },
    { id: "garden", title: "Garden", description: "Sleek verandas merging beautiful greenery with indoor thermal comfort.", icon: Trees },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Interactive Recommendation</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Explore Recommended Usages</h2>
          <p className="text-slate-500 font-light text-lg">
            Tap on an application below to view beautiful project galleries and installations recommended for that architectural space.
          </p>
        </div>

        {/* 8-Application Mobile Grid Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {applications.map((app) => (
            <Link
              key={app.id}
              to={`/gallery/application/${app.id}`}
              className="p-6 text-center flex flex-col items-center justify-start border border-slate-100 bg-white hover:border-luxury-gold/50 hover:shadow-sm rounded-xl transition-all duration-300 group"
            >
              <div className="mb-4 text-slate-400 flex justify-center">
                <app.icon size={36} strokeWidth={1.5} className="group-hover:text-luxury-gold transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-2 w-full text-slate-900 group-hover:text-luxury-gold transition-colors">
                {app.title}
              </h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2 w-full">
                {app.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/#estimator"
            className="group flex items-center justify-center gap-3 bg-black hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-all shadow-lg font-medium tracking-wider uppercase text-xs cursor-pointer border-none"
          >
            Get Custom Enclosure Quote For Your Space
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
