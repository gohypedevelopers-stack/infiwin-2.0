import { useState, FormEvent } from "react";
import { Rocket } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { useNavigate } from "react-router-dom";

export const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    city: ""
  });

  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "", city: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
      isValid = false;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = "Please provide a valid 10-digit mobile number";
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please specify your delivery city";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Track conversion (simulated)
      if ((window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          'currency': 'INR',
          'value': 1800
        });
      }
      // Redirect to thank you page
      navigate("/thank-you");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 relative h-full">
      <div className="flex flex-col justify-center h-full gap-6">
        {/* Header Block at Top */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-serif text-slate-900 mb-2">Lock-In Your Deal Price</h3>
          <p className="text-slate-500 font-light text-sm mb-0">
            Fill out this quick 3-field layout to request our premium catalog along with architectural assistance.
          </p>
        </div>

        {/* Inputs and Buttons Grouped at Bottom */}
        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Field 1: Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="eg. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 ${errors.name ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-luxury-gold/20 focus:border-luxury-gold'}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">{errors.name}</p>}
            </div>

            {/* Field 2: Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-400 font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="73370 74370"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 ${errors.phone ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-luxury-gold/20 focus:border-luxury-gold'}`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">{errors.phone}</p>}
            </div>

            {/* Field 3: City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Location City</label>
              <input
                type="text"
                placeholder="eg. Noida, Delhi, Gurgaon"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none focus:ring-2 ${errors.city ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-luxury-gold/20 focus:border-luxury-gold'}`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-2 font-medium">{errors.city}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-slate-800 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold sm:font-bold tracking-wide sm:tracking-wider uppercase text-[11px] sm:text-sm transition-colors shadow-lg mt-2 cursor-pointer border-none"
            >
              <Rocket size={16} /> Request Quote & Call Back
            </button>
          </form>

          {/* Divider and WhatsApp Button */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-4 relative">
              <span className="bg-white px-4 relative z-10">OR CHAT DIRECTLY</span>
              <span className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-0"></span>
            </p>

            <a
              href="https://wa.me/917337074370?text=Hi Infiwin, I am interested in getting a Slide & Turn Balcony System. Please share your product catalog!"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold sm:font-bold tracking-wide sm:tracking-wider uppercase text-[11px] sm:text-sm transition-colors shadow-lg"
            >
              <WhatsAppIcon size={16} /> Get Instant Price via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
