import { useState, MouseEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryData } from '../data/galleryData';

export default function GalleryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Normalize the id to handle minor typos or URL formatting differences (e.g., 'farm hou-e', 'farmhouse')
  let normalizedId = id;
  if (id) {
    const cleanId = id.toLowerCase().replace(/[\s\-_]+/g, '');
    if (cleanId === 'farmhouse' || cleanId === 'farmhoue') {
      normalizedId = 'farm-house';
    } else if (cleanId === 'slideturn') {
      normalizedId = 'slide-turn';
    } else if (cleanId === 'officespace') {
      normalizedId = 'office-space';
    } else if (cleanId === 'telescopicsliders') {
      normalizedId = 'telescopic-sliders';
    }
  }

  const data = normalizedId ? galleryData[normalizedId] : null;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

  if (!data) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-slate-900 mb-4">Gallery Not Found</h1>
        <button onClick={() => navigate(-1)} className="text-luxury-gold hover:underline">Return to Previous Page</button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section - Split Layout */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
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
        
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <button onClick={() => navigate(-1)} className="inline-flex items-center text-luxury-gold hover:text-slate-900 transition-colors mb-6 text-sm uppercase tracking-widest cursor-pointer bg-transparent border-none">
            <ArrowLeft size={16} className="mr-2" /> Back to Products
          </button>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">{data.title}</h1>
          <p className="text-lg font-light text-slate-600 leading-relaxed max-w-xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-16 bg-white border-y border-slate-100 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-2">Project Showcase</h3>
            <h2 className="text-3xl font-serif text-slate-900">Explore {data.title} Installations</h2>
          </div>
          {data.images.length === 0 ? (
            <div className="text-center text-slate-500 py-12">No images found for this category.</div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {data.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 5) * 0.1 }}
                  className="break-inside-avoid overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img loading="lazy" src={img} alt={`${data.title} ${idx + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Ready to bring your vision to life?</h2>
          <p className="text-slate-300 font-light mb-10 text-lg">
            Contact our engineering experts today to discuss how our {data.title} systems can elevate your next architectural project.
          </p>
          <button className="bg-luxury-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-colors shadow-lg">
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
