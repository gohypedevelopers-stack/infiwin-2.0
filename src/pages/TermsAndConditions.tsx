import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="pt-40 pb-12 lg:pb-16 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            Please read these terms and conditions carefully before using Our Service or purchasing our architectural glass systems, including Slide & Turn® Systems, Fabric Glass Sliders, and related products.
          </p>
          <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">Our Work Process</h2>
          
          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Project Planning</h3>
          <p className="mb-4">
            We employ window specialists who are devoted exclusively to advising clients on their window options and getting their orders right, the first time.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Installation</h3>
          <p className="mb-4">
            Enjoy a worry-free installation from start to finish. Infiwin project specialists and expert installers will ensure your project is completed with utmost quality within timeline.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Right Solution</h3>
          <p className="mb-4">
            First, we listen to your initial thoughts, expectation from the space to better understand its functionality. Then, we ask for your preferences in aesthetics, capabilities, and functionality to zero in the best solution for max efficiency.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">Maintenance</h3>
          <p className="mb-4">
            Once you have done the inspection, the next step is to start with the cleaning of the door/window and do necessary maintenance. It doesn't end here, we give two free periodic inspections also.
          </p>

          <h3 className="text-xl font-medium text-slate-900 mt-6 mb-3">CSR</h3>
          <p className="mb-4">
            We just do not sell the concept of viewing more and opening more but we do our bit to make surrounding more beautiful, green and preserve the nature. For every 100 square feet sold, we plant a tree to offset the carbon footprint and make tomorrow more greener, healthier and liveable with our NGO partner Srishti Sewak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
