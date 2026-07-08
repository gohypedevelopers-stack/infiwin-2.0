import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const ProductsGridSection = () => {
  const navigate = useNavigate();
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
      image: "/gallery/Systems/Telescopic%20Sliders/ChatGPT%20Image%20Jul%206,%202026,%2011_51_55%20AM.png",
    },
    {
      id: "synchronized-systems",
      category: "Internal Partition",
      title: "Centre Open System",
      subtitle: "Split-fold Symmetrical",
      description: "Panels partition left and right symmetrically to retain optimal balances.",
      image: "/centre_open.png",
    },
    {
      id: "top-hang-bi-fold",
      category: "Internal Partition",
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
      image: "/two_track_slider.png",
    },
    {
      id: "sliding-windows-doors",
      category: "Doors & Windows",
      title: "3 Track Slider",
      subtitle: "Doors & Windows",
      description: "Wider spans of clear structural views integrating bug mesh slider capability.",
      image: "/three_track_slider.png",
    },
  ];

  return (
    <section className="py-24 bg-luxury-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Explore All Architectural Glass Offerings</h2>
          <p className="text-slate-500 font-light text-lg">
            Select from our 6 major structural builds for standard window heights, door frames, or interior partition boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(`/gallery/product/${product.id}`)} 
              className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
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
                    to="/products"
                    state={{ filter: product.category }}
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
                    Get Price <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
