/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 px-6 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Coming Soon</h1>
      <h2 className="text-6xl font-serif italic text-slate-900 mb-8">{title}</h2>
      <p className="text-slate-500 font-light max-w-lg mx-auto">
        We are currently updating our {title.toLowerCase()} page to provide you with the most detailed architectural information.
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
