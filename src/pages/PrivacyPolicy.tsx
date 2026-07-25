import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-40 pb-12 lg:pb-16 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            At INFI WINDOW SYSTEM, accessible from www.infiwindow.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by INFI WINDOW SYSTEM and how we use it.
          </p>
          
          <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">Our Services</h2>
          
          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Architectural Details</h3>
          <p className="mb-4">
            Architectural features and details play several roles in defining the character of a structure: they add visual interest, define certain styles and types, and often showcase superior craftsmanship and architectural design. The designs are very elegant.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Product Literature</h3>
          <p className="mb-4">
            No matter what design you have in mind, INFIWIN allows you to achieve it in style with our Contemporary window and door. We work with a simple philosophy to make a unique, advanced, modern, and reliable window and doors for our clients.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Adjustments</h3>
          <p className="mb-4">
            You will get an estimate and quality service from our specialists. Our company offers you a window and door repair service. Glass Window Repair INFIWIN staff team will teach you how to use doors and windows properly and care about them. INFIWIN team of professionals will advise you and help fix any malfunctions quantitatively, with a guarantee and at any time you need.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Warranty</h3>
          <p className="mb-4">
            INFIWIN is committed to offering only the highest-quality products from the top industry standards. We offer a limited lifetime warranty on all of its products. This warranty gives you coverage on Channels, Profiles, Hardware etc.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Total Solution</h3>
          <p className="mb-4">
            We provide end to end solution, from tailormade manufacturing to installation. Now you can easily and accurately build faster than ever before. Our simplified design process enables you to get quotes clearly mentioning particulars of your best suited solution which are priced appropriately, increasing efficiencies and reducing errors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
