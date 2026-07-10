import { useState, useEffect } from "react";
import { ArrowRight, Box, LayoutDashboard, Building2, PanelTop, Warehouse, LayoutTemplate, Briefcase, Trees } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const ApplicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleReset = () => {
      setActiveFilter(null);
    };
    window.addEventListener("reset-application-filter", handleReset);
    return () => window.removeEventListener("reset-application-filter", handleReset);
  }, []);

  const applications = [
    { id: "balcony", title: "Balcony", description: "Unobstructed frameless premium safety glazing barriers.", icon: LayoutTemplate, recommendedProductIds: ["slide-turn"] },
    { id: "int-partition", title: "Int. Partition", description: "Sleek separation zones for functional multi-use spaces.", icon: LayoutDashboard, recommendedProductIds: ["telescopic-sliders"] },
    { id: "commercial", title: "Commercial", description: "High durability storefront facades & internal partition grids.", icon: Building2, recommendedProductIds: ["slide-turn", "guillotine-glass"] },
    { id: "exterior", title: "Exterior", description: "Rigid wind resistance profile constructs for elevations.", icon: PanelTop, recommendedProductIds: ["slide-turn", "sliding-windows-doors", "sliding-windows-doors-3"] },
    { id: "terrace", title: "Terrace", description: "Convert open terraces into delightful year-round glass lounges.", icon: Box, recommendedProductIds: ["slide-turn"] },
    { id: "farm-house", title: "Farm House", description: "Connect beautiful country landscaping with spacious interiors.", icon: Warehouse, recommendedProductIds: ["sliding-windows-doors", "sliding-windows-doors-3"] },
    { id: "office-space", title: "Office Space", description: "Acoustically isolated conference cubes & manager cabins.", icon: Briefcase, recommendedProductIds: ["telescopic-sliders", "synchronized-systems"] },
    { id: "garden", title: "Garden", description: "Sleek verandas merging beautiful greenery with indoor thermal comfort.", icon: Trees, recommendedProductIds: ["slide-turn"] },
  ];

  const handleAppClick = (app: typeof applications[0]) => {
    setActiveFilter(app.title);

    // Dispatch event to highlight products and show banner in ProductsGridSection
    window.dispatchEvent(new CustomEvent("highlight-products", {
      detail: { filterName: app.title, productIds: app.recommendedProductIds }
    }));

    // Smooth scroll to the products grid
    const productsGrid = document.getElementById("products-grid");
    if (productsGrid) {
      const y = productsGrid.getBoundingClientRect().top + window.scrollY - 100; // offset for header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Interactive Recommendation</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Explore Recommended Usages</h2>
          <p className="text-slate-500 font-light text-lg">
            Tap on an application below to immediately highlight the exact glass system variant recommended for that architectural space.
          </p>
        </div>

        {/* 8-Application Mobile Grid Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => handleAppClick(app)}
              className={`p-6 text-center flex flex-col items-center justify-start border bg-white rounded-xl transition-all duration-300 group cursor-pointer ${activeFilter === app.title
                ? "border-luxury-gold shadow-md"
                : "border-slate-100 hover:border-luxury-gold/50 hover:shadow-sm"
                }`}
            >
              <div className="mb-4 flex justify-center">
                <app.icon size={36} strokeWidth={1.5} className={`transition-colors ${activeFilter === app.title ? "text-luxury-gold" : "text-slate-400 group-hover:text-luxury-gold"}`} />
              </div>
              <h3 className={`text-lg font-medium mb-2 w-full transition-colors ${activeFilter === app.title ? "text-luxury-gold" : "text-slate-900 group-hover:text-luxury-gold"}`}>
                {app.title}
              </h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2 w-full">
                {app.description}
              </p>
            </button>
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
