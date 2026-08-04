import React, { useState } from "react";
import { Upload, Send } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export const ContactForms = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", height: "", length: "", subject: "General Inquiry", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const [length, setLength] = useState(5);
  const [height, setHeight] = useState(5);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Inquiry submitted!");
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 h-full">
      {/* Request a Quote (Dark Box) */}
      <div className="bg-[#0a0a0a] text-white p-10 md:p-14 rounded-sm shadow-2xl shadow-black/10 h-full">
        <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">
          Custom Quote
        </p>
        <h3 className="text-3xl font-serif mb-4">Request a Quote</h3>
        <p className="text-white/60 font-light text-sm leading-relaxed mb-10 max-w-sm">
          Provide your specific dimensions so our engineering team can accurately design your custom quote.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert("Quote request submitted"); }} className="space-y-6">
          <div className="flex gap-6 mb-2">
            <div className="flex-1">
              <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                Length (ft)
              </label>
              <input
                type="number"
                min="5"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
                Height (ft)
              </label>
              <input
                type="number"
                min="5"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-3">
              Upload Site Pic (Optional)
            </label>
            <label className="flex items-center justify-center gap-2 w-full bg-[#1a1a1a] border border-white/10 rounded-sm px-4 py-3 text-white cursor-pointer hover:bg-white/5 transition-colors">
              <Upload size={16} />
              <span className="text-sm font-light">Choose File</span>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 relative">
              <span className="bg-[#0a0a0a] px-4 relative z-10">OR CHAT DIRECTLY</span>
              <span className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-0"></span>
            </p>

            <a
              href={`https://wa.me/917337074370?text=Hi Infiwin, I am interested in getting a custom quote based on my dimensions. Length: ${length}ft, Height: ${height}ft`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold sm:font-bold tracking-wide sm:tracking-wider uppercase text-[11px] sm:text-sm transition-colors shadow-lg cursor-pointer"
            >
              <WhatsAppIcon size={16} /> Get Instant Price via WhatsApp
            </a>
          </div>
        </form>
      </div>

      {/* Inquiry Form (Light Box) */}
      <div className="bg-white border border-slate-200 p-10 md:p-14 rounded-sm shadow-xl shadow-black/5 h-full">
        <h3 className="text-2xl font-serif text-slate-900 mb-8">INQUIRY FORM</h3>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.name ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                  }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91"
                className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.phone ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                  }`}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                placeholder="New Delhi"
                className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${errors.city ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                  }`}
              />
            </div>
            
            {/* Subject */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Subject
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-slate-200 pb-3 text-sm text-slate-900 focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer"
              >
                <option>General Inquiry</option>
                <option>Product Information</option>
                <option>Request a Quote</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={3}
              className={`w-full bg-transparent border-b pb-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-400" : "border-slate-200 focus:border-luxury-gold"
                }`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider hover:bg-slate-800 transition-all mt-4 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer border-none"
          >
            {loading ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending…
              </>
            ) : (
              <>
                Send Message <Send size={14} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
