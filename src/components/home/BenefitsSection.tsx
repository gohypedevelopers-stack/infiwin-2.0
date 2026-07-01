import { Eye, CloudRain, Lock } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Eye className="text-luxury-gold" size={32} />,
      title: "Unobstructed Panoramic Views",
      description: "No vertical frames between glass structures ensures completely transparent viewports, expanding visual horizons and natural luxury lighting levels instantly.",
    },
    {
      icon: <CloudRain className="text-luxury-gold" size={32} />,
      title: "100% Weather Shield Protection",
      description: "Blocks dust, windstorms, flying debris, and intense monsoon rains. Fully customized rubber profiles keep balconies immaculate through extreme climates.",
    },
    {
      icon: <Lock className="text-luxury-gold" size={32} />,
      title: "Noise Dampening Isolation",
      description: "Attenuate high-decibel street noises significantly. Convert chaotic urban balconies into tranquil spaces suited for deep focus and reading.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Core Advantages</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The Premium 'Slide & Turn' Edge</h2>
          <p className="text-slate-500 font-light text-lg">
            Discover why modern homeowners and commercial spaces are replacing conventional iron grills with custom frameless folding structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-100 p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
