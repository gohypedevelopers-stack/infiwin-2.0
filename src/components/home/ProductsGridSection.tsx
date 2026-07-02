import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductsGridSection = () => {
  const products = [
    {
      title: "Slide & Turn System",
      subtitle: "Balcony Enclosure",
      description: "Perfect view maximization with foldaway tracking system layout.",
      tag: "Best Seller",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    },
    {
      title: "Telescopic Slider System",
      subtitle: "Super Smooth Gliding",
      description: "Overlapping glazed sheets for continuous uninterrupted tracks.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
    },
    {
      title: "Centre Open System",
      subtitle: "Split-fold Symmetrical",
      description: "Panels partition left and right symmetrically to retain optimal balances.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
    },
    {
      title: "Bi-fold Glass System",
      subtitle: "Premium Partition",
      description: "Sleek folding structure for rapid internal partition transition zones.",
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80",
    },
    {
      title: "2 Track Slider",
      subtitle: "Doors & Windows",
      description: "Classic, cost-effective structural system layout with premium hardware profiles.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    },
    {
      title: "3 Track Slider",
      subtitle: "Doors & Windows",
      description: "Wider spans of clear structural views integrating bug mesh slider capability.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
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
            <div key={idx} className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
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
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{product.subtitle}</p>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{product.title}</h3>
                
                {/* 1-line benefit */}
                <p className="text-slate-500 font-light text-sm line-clamp-2 flex-grow mb-8">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                  <Link to={`/products`} className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-black transition-colors flex items-center gap-1">
                    Variants
                  </Link>
                  <Link to="/#estimator" className="text-xs font-semibold uppercase tracking-wider bg-black text-white px-5 py-2 rounded-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
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
