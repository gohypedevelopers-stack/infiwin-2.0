import { useState, MouseEvent, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Eye, ArrowRight } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { productsList } from '../data/productData';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { BestSellerSection } from '../components/home/BestSellerSection';
import { FrameColorSection } from '../components/home/FrameColorSection';

const PRODUCT_BADGES: Record<string, string[]> = {
  "slide-turn": [
    "100% OPENING POTENTIAL",
    "TOUGHENED SAFETY GLASS",
    "ULTRA-SMOOTH TRACKS",
    "NO VERTICAL FRAMES"
  ],
  "guillotine-glass-system": [
    "MOTORIZED OPERATION",
    "WIND & WEATHER BARRIER",
    "THERMALLY EFFICIENT",
    "SMART HOME INTEGRATION"
  ],
  "telescopic-sliders": [
    "SPACE SAVING PATH",
    "TELESCOPIC MOVEMENT",
    "ULTRA-SLIM PROFILES",
    "CUSTOM TRACK LAYOUTS"
  ],
  "synchronized-systems": [
    "SIMULTANEOUS SLIDING",
    "SOFT CLOSE SYSTEM",
    "NO UNDER-FLOOR GUIDE",
    "PRECISE DYNAMICS"
  ],
  "top-hang-bi-fold": [
    "TOP-HUNG MECHANISM",
    "NO THRESHOLD LAYOUT",
    "SEAMLESS ROOM DIVIDER",
    "HEAVY-DUTY WHEELS"
  ],
  "sliding-windows-doors": [
    "MULTI-TRACK OPTIONS",
    "BUG MESH COMPATIBLE",
    "DOUBLE GLAZED OPTIONS",
    "SOUND REDUCTION"
  ],
  "openable-windows-doors": [
    "WEATHER TIGHT SEAL",
    "MULTI-LOCK SECURITY",
    "THERMAL BREAK OPTION",
    "SOUND PROOFING"
  ],
  "foldable-doors-(bi-fold)": [
    "EXPANSIVE OPENABLE SPAN",
    "WEATHER INSULATION",
    "STAINLESS STEEL TRACKS",
    "SECURE LOCKING"
  ],
  "bathroom-encloser": [
    "CUSTOM FIT",
    "WATERPROOF SEALS",
    "SOLID BRASS FITTINGS",
    "FRAMELESS AESTHETIC"
  ],
  "sliding-encloser": [
    "SPACE-SAVING SLIDER",
    "TEMPERED SAFETY GLASS",
    "ANTI-CALCIUM GLASS",
    "SMOOTH ROLLERS"
  ],
  "openable-door": [
    "TEMPERED SAFETY GLASS",
    "HEAVY DUTY HINGES",
    "WATERTIGHT SHOWER DOOR",
    "MINIMAL PROFILE"
  ],
  "fixed-partition": [
    "MINIMAL DESIGN",
    "SOLID U-CHANNEL FIT",
    "TEMPERED SAFETY GLASS",
    "HIGH STABILITY"
  ]
};

const DEFAULT_BADGES = [
  "PREMIUM AESTHETICS",
  "STRUCTURAL INTEGRITY",
  "WEATHER RESISTANT",
  "EXPERT INSTALLATION"
];

interface GalleryDetailProps {
  type?: 'product' | 'application';
}

export default function GalleryDetail({ type }: GalleryDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const variant = searchParams.get('variant');

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Determine if application based on prop or fallback url parsing
  const resolvedType = type || (location.pathname.includes('/application/') ? 'application' : 'product');
  const isApplication = resolvedType === 'application';

  // Normalize the id to handle minor typos or URL formatting differences (e.g., 'farm hou-e', 'farmhouse')
  let normalizedId = id;
  if (id) {
    const cleanId = id.toLowerCase().replace(/[\s\-_()]+/g, '');
    if (cleanId === 'farmhouse' || cleanId === 'farmhoue') {
      normalizedId = 'farm-house';
    } else if (cleanId === 'slideturn' || cleanId === 'balcony' || cleanId === 'guillotineglasssystem') {
      if (isApplication && (cleanId === 'balcony' || cleanId === 'slideturn')) {
        normalizedId = 'balcony';
      } else if (cleanId === 'guillotineglasssystem') {
        normalizedId = 'guillotine-glass-system';
      } else {
        normalizedId = 'slide-turn';
      }
    } else if (cleanId === 'officespace' || cleanId === 'fixedpartition' || cleanId === 'officepace') {
      if (cleanId === 'fixedpartition') {
        normalizedId = 'fixed-partition';
      } else {
        normalizedId = 'office-space';
      }
    } else if (cleanId === 'telescopicsliders' || cleanId === 'intpartition' || cleanId === 'interiorpartition') {
      if (isApplication && (cleanId === 'intpartition' || cleanId === 'interiorpartition' || cleanId === 'telescopicsliders')) {
        normalizedId = 'int-partition';
      } else {
        normalizedId = 'telescopic-sliders';
      }
    } else if (cleanId === 'synchronizedsystems') {
      normalizedId = 'synchronized-systems';
    } else if (cleanId === 'tophangbifold') {
      normalizedId = 'top-hang-bi-fold';
    } else if (cleanId === 'slidingwindowsdoors') {
      normalizedId = 'sliding-windows-doors';
    } else if (cleanId === 'bathroomencloser' || cleanId === '90degreeencloser') {
      normalizedId = 'bathroom-encloser';
    } else if (cleanId === 'slidingenclouser' || cleanId === 'slidingencloser') {
      normalizedId = 'sliding-encloser';
    } else if (cleanId === 'openabledoor') {
      normalizedId = 'openable-door';
    } else if (cleanId === 'openablewindowsdoors') {
      normalizedId = 'openable-windows-doors';
    } else if (cleanId === 'foldabledoorsbifold') {
      normalizedId = 'foldable-doors-(bi-fold)';
    }
  }

  const rawData = normalizedId ? galleryData[normalizedId] : null;
  
  let filteredImages = rawData?.images || [];
  if (normalizedId === 'sliding-windows-doors' && variant === '2-track') {
    filteredImages = filteredImages.filter(img => img.includes('2_track'));
  } else if (normalizedId === 'sliding-windows-doors' && variant === '3-track') {
    filteredImages = filteredImages.filter(img => img.includes('3_track'));
  }
  
  const data = rawData ? { ...rawData, images: filteredImages } : null;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Compute related products
  const currentProduct = productsList.find(p => p.title.toLowerCase().replace(/[\s&.]+/g, '-') === normalizedId);
  const sameCategoryProducts = productsList.filter(p => p.category === currentProduct?.category && p.title !== currentProduct?.title);
  const otherProducts = productsList.filter(p => p.title !== currentProduct?.title && !sameCategoryProducts.includes(p));
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 4);

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (data && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % data.images.length);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (data && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + data.images.length) % data.images.length);
    }
  };

  const isUnapproved = isApplication && (normalizedId === 'exterior' || normalizedId === 'garden' || normalizedId === 'int-partition');

  if (isUnapproved) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center">
        <div className="bg-white p-12 rounded-xl shadow-lg border border-red-100 max-w-lg w-full">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <X size={32} />
          </div>
          <h1 className="text-3xl font-serif text-slate-900 mb-4">Not Approved Yet</h1>
          <p className="text-slate-500 font-light mb-8">The images and details for this application area have not been approved for public display.</p>
          <button onClick={() => navigate(-1)} className="text-luxury-gold hover:text-slate-900 transition-colors uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-2 mx-auto cursor-pointer border-none bg-transparent">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-slate-900 mb-4">Gallery Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-luxury-gold hover:underline bg-transparent border-none cursor-pointer">Return to Previous Page</button>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section - Split Layout */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-2 pb-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          {data.images.length > 0 ? (
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <img loading="lazy" 
                src={data.images[0]} 
                alt={`${data.title} Cover`} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-slate-200 rounded-sm flex items-center justify-center">
              <span className="text-slate-400">No cover image</span>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <button onClick={() => navigate(-1)} className="hidden md:inline-flex items-center text-luxury-gold hover:text-slate-900 transition-colors mb-6 text-sm uppercase tracking-widest cursor-pointer bg-transparent border-none p-0 self-start md:self-start">
            <ArrowLeft size={16} className="mr-2" /> Back
          </button>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">{data.title}</h1>
          <p className="text-lg font-light text-slate-600 leading-relaxed max-w-xl text-center md:text-left">
            {data.description}
          </p>
          
          {/* Key Product Badges */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mt-8 mb-8 w-full max-w-md md:max-w-none">
            {(PRODUCT_BADGES[normalizedId || ""] || DEFAULT_BADGES).map((badge, idx) => (
              <div key={idx} className="bg-white border border-slate-200 px-2 py-1.5 rounded-sm flex items-center gap-2 shadow-sm w-full md:w-auto justify-center md:justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0"></div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold text-slate-600 text-center md:text-left">{badge}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
            <Link
              to="/contact"
              className="bg-black hover:bg-slate-800 text-white px-6 py-3.5 rounded-lg font-semibold uppercase tracking-widest text-[10px] sm:text-xs transition-colors shadow-md text-center inline-flex items-center justify-center cursor-pointer border-none"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/917337074370?text=Hi Infiwin, I am interested in getting the ${data.title} system. Please share more details and a quote.`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-lg font-semibold uppercase tracking-widest text-[10px] sm:text-xs transition-colors shadow-md text-center inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={16} /> Chat via WhatsApp
            </a>
          </div>

          <button onClick={() => navigate(-1)} className="inline-flex md:hidden items-center text-luxury-gold hover:text-slate-900 transition-colors text-sm uppercase tracking-widest cursor-pointer bg-transparent border-none">
            <ArrowLeft size={16} className="mr-2" /> Back
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-16 bg-white border-y border-slate-100 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-2">Project Showcase</h3>
              <h2 className="text-3xl font-serif text-slate-900">Explore {data.title} Installations</h2>
            </div>
            {data.images.length > 0 && (
              <button
                onClick={() => setSelectedImageIndex(0)}
                className="bg-luxury-gold hover:bg-slate-950 text-white px-5 py-2.5 rounded-lg font-medium uppercase tracking-wider text-xs transition-colors shadow flex items-center gap-2 cursor-pointer border-none self-center sm:self-auto"
              >
                <Eye size={14} />
                View All Images
              </button>
            )}
          </div>
          
          {normalizedId === 'sliding-windows-doors' && (
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-8">
              <button
                onClick={() => setSearchParams({}, { replace: true })}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-colors cursor-pointer border-none ${!variant ? 'bg-luxury-gold text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                All
              </button>
              <button
                onClick={() => setSearchParams({ variant: '2-track' }, { replace: true })}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-colors cursor-pointer border-none ${variant === '2-track' ? 'bg-luxury-gold text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                2 Track Slider
              </button>
              <button
                onClick={() => setSearchParams({ variant: '3-track' }, { replace: true })}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-colors cursor-pointer border-none ${variant === '3-track' ? 'bg-luxury-gold text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                3 Track Slider
              </button>
            </div>
          )}

          {data.images.length === 0 ? (
            <div className="text-center text-slate-500 py-12">No images found for this category.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {data.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 5) * 0.1 }}
                  className="overflow-hidden rounded-xl border border-slate-200/50 shadow-md hover:shadow-xl transition-shadow cursor-pointer aspect-[4/3]"
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img loading="lazy"
                    src={img}
                    alt={`${data.title} ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Slide & Turn Specific Sections */}
      {normalizedId === 'slide-turn' && (
        <>
          <BestSellerSection />
          <FrameColorSection />
        </>
      )}

      {/* You Might Also Like */}
      {relatedProducts.length > 0 && (
        <section className="px-6 py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center md:text-left">
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-3">Related Systems</h3>
              <h2 className="text-3xl font-serif text-slate-900">You Might Also Like</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, idx) => (
                <motion.div
                  key={`${p.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <Link to={`/gallery/product/${p.title.toLowerCase().replace(/[\s&.]+/g, '-')}`} className="group cursor-pointer block">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4 shadow-md transition-shadow hover:shadow-xl relative">
                      <img loading="lazy"
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-sm">
                        {p.category}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 px-1">
                      <h5 className="text-lg font-serif group-hover:text-luxury-gold transition-colors">{p.title}</h5>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-luxury-gold transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="px-6 py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Ready to bring your vision to life?</h2>
          <p className="text-slate-300 font-light mb-10 text-lg">
            Contact our engineering experts today to discuss how our {data.title} systems can elevate your next architectural project.
          </p>
          <button className="bg-luxury-gold hover:bg-slate-950 text-white px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-xs transition-colors shadow-md border-none cursor-pointer">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && data && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full hover:bg-black/80"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={data.images[selectedImageIndex]}
              alt={`${data.title} fullscreen`}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full hover:bg-black/80"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
