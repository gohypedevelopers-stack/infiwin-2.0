import { useState, useEffect } from "react";

export const EstimatorSection = () => {
  const [length, setLength] = useState(10);
  const [height, setHeight] = useState(5);
  
  const [area, setArea] = useState(0);
  const [estimate, setEstimate] = useState(0);

  const BASE_PRICE = 1800;

  useEffect(() => {
    const computedArea = length * height;
    setArea(computedArea);
    setEstimate(computedArea * BASE_PRICE);
  }, [length, height]);

  return (
    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden h-full" id="estimator">
      <div className="relative z-10 flex flex-col justify-between h-full gap-8">
        <div>
          <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Instant Pricing Guide</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">On-Page System Cost Estimator</h2>
          <p className="text-slate-300 font-light text-sm mb-8 max-w-md">
            Enter your customized window/balcony dimensions below. Our system instantly runs the correct calculations using the official formula matrix.
          </p>

          {/* Sliders */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-medium flex items-center gap-2">
                  📏 Length of Balcony / Window (ft)
                </label>
                <span className="text-xl font-display font-light text-luxury-gold">{length} ft</span>
              </div>
              <input 
                type="range" 
                min="4" 
                max="50" 
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider">
                <span>Min: 4 ft</span>
                <span>Max: 50 ft</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-medium flex items-center gap-2">
                  📐 Height of Balcony / Window (ft)
                </label>
                <span className="text-xl font-display font-light text-luxury-gold">{height} ft</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="15" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider">
                <span>Min: 3 ft</span>
                <span>Max: 15 ft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Calculated Area</p>
              <p className="text-xl font-medium">{area} sq.ft</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Base Unit Price</p>
              <p className="text-xl font-medium">₹1,800 / sq.ft</p>
            </div>
          </div>
          
          <div>
            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-bold">Your Approximate Cost:</p>
            <p className="text-4xl md:text-5xl font-display font-light tracking-tight text-white mb-2 flex items-baseline gap-2">
              ₹{estimate.toLocaleString('en-IN')} <span className="text-sm font-medium text-slate-300"><span className="mr-1 text-slate-400">+</span> Installation Charges.</span>
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              all prices are excluding taxes & freight charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
