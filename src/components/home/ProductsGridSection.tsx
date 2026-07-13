import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const ProductsGridSection = () => {
  const navigate = useNavigate();
  const [highlightedIds, setHighlightedIds] = useState<string[] | null>(null);
  const [filterName, setFilterName] = useState<string | null>(null);

  useEffect(() => {
    const handleHighlight = (e: CustomEvent<{ filterName: string | null; productIds: string[] | null }>) => {
      setFilterName(e.detail?.filterName || null);
      setHighlightedIds(e.detail?.productIds || null);
    };
    window.addEventListener("highlight-products", handleHighlight as EventListener);
    return () => window.removeEventListener("highlight-products", handleHighlight as EventListener);
  }, []);

  const handleReset = () => {
    setFilterName(null);
    setHighlightedIds(null);
    
    // Also reset ApplicationsSection active state
    window.dispatchEvent(new CustomEvent("reset-application-filter"));
  };

  const products = [
    {
      id: "slide-turn",
      category: "Balcony System",
      title: "Slide & Turn System",
      subtitle: "Balcony Enclosure",
      description: "Perfect view maximization with foldaway tracking system layout.",
      tag: "Best Seller",
      image: "/slide_turn_banner.png",
    },
    {
      id: "telescopic-sliders",
      category: "Internal Partition",
      title: "Telescopic Slider System",
      subtitle: "Super Smooth Gliding",
      description: "Overlapping glazed sheets for continuous uninterrupted tracks.",
      image: "/gallery/Systems/Telescopic%20Sliders/Telescopic%20Sliders_page_1.png",
    },
    {
      id: "openable-windows-doors",
      category: "Internal Partition",
      title: "Centre Open System",
      subtitle: "Split-fold Symmetrical",
      description: "Panels partition left and right symmetrically to retain optimal balances.",
      image: "/centre_open.png",
    },
    {
      id: "foldable-doors-(bi-fold)",
      category: "Doors & Windows",
      title: "Bi-fold Glass System",
      subtitle: "Premium Partition",
      description: "Sleek folding structure for rapid internal partition transition zones.",
      image: "/bifold_glass.png",
    },
    {
      id: "sliding-windows-doors",
      category: "Doors & Windows",
      title: "2 Track Slider",
      subtitle: "Doors & Windows",
      description: "Classic, cost-effective structural system layout with premium hardware profiles.",
      image: "/gallery/Systems/Sliding%20Windows%20&%20Doors/2_track_slider_door_2_1783583929100.png",
    },
    {
      id: "sliding-windows-doors",
      category: "Doors & Windows",
      title: "3 Track Slider",
      subtitle: "Doors & Windows",
      description: "Wider spans of clear structural views integrating bug mesh slider capability.",
      image: "/gallery/Systems/Sliding%20Windows%20&%20Doors/3_track_slider_door_4_1783585629355.png",
    },
  ];

  const firstHighlightedIndex = highlightedIds 
    ? products.findIndex(p => highlightedIds.includes(p.id))
    : -1;

  const showTopMessage = filterName && firstHighlightedIndex < 3;
  const showBottomMessage = filterName && firstHighlightedIndex >= 3;

  const filterMessage = (
    <div className={`flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-xl border border-slate-200 shadow-sm ${showTopMessage ? 'mb-10' : 'mt-10'}`}>
      <p className="text-slate-700 font-medium text-sm mb-4 sm:mb-0">
        Displaying product recommendations suitable for: <span className="text-luxury-gold font-bold">{filterName}</span>
      </p>
      <button 
        onClick={handleReset}
        className="text-xs uppercase tracking-wider font-semibold text-slate-500 hover:text-slate-900 transition-colors border border-slate-300 rounded-lg px-4 py-2 bg-slate-50 hover:bg-slate-100"
      >
        Show all systems
      </button>
    </div>
  );

  return (
    <section id="products-grid" className="py-12 lg:py-16 bg-luxury-bg relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Explore All Architectural Glass Offerings</h2>
          <p className="text-slate-500 font-light text-lg">
            Select from our major structural builds for standard window heights, door frames, or interior partition boundaries.
          </p>
        </div>

        {/* Active Interactive Filter Status Messages */}
        {showTopMessage && filterMessage}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const isDimmed = highlightedIds !== null && !highlightedIds.includes(product.id);
            return (
              <div 
                key={idx} 
                data-product-id={product.id}
                onClick={() => {
                  let url = `/gallery/product/${product.id}`;
                  if (product.title === "2 Track Slider") url += "?variant=2-track";
                  else if (product.title === "3 Track Slider") url += "?variant=3-track";
                  navigate(url);
                }} 
                className={`group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer ${
                  isDimmed ? "opacity-40 grayscale scale-[0.98]" : "opacity-100 grayscale-0 scale-100"
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img loading="lazy" src={product.image} 
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-luxury-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                </div>
                
                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow text-center md:text-left">
                  <p className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{product.subtitle}</p>
                  <h3 className="text-xl font-medium text-slate-900 mb-4">{product.title}</h3>
                  
                  {/* 1-line benefit */}
                  <p className="text-slate-500 font-light text-sm line-clamp-2 flex-grow mb-8">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                    <Link 
                      to={product.id === "slide-turn" ? "/gallery/product/slide-turn#variants" : "/products"}
                      state={product.id === "slide-turn" ? undefined : { filter: product.category }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1 hover:text-luxury-gold transition-colors cursor-pointer"
                    >
                      Variants
                    </Link>
                    <Link 
                      to="/#estimator" 
                      onClick={(e) => e.stopPropagation()} 
                      className="text-xs font-semibold uppercase tracking-wider bg-black text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors"
                    >
                      Get Price 
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {showBottomMessage && filterMessage}
      </div>
    </section>
  );
};
