/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MessageCircle } from "lucide-react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ThankYou from "./pages/ThankYou";
import GalleryDetail from "./pages/GalleryDetail";
import Concepts from "./pages/Concepts";
import Facade from "./pages/concepts/Facade";
import Restaurant from "./pages/concepts/Restaurant";
import PoolSideBar from "./pages/concepts/PoolSideBar";

// Scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 px-6 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Coming Soon</h1>
      <h2 className="text-6xl font-serif text-slate-900 mb-8">{title}</h2>
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
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/concepts/facade" element={<Facade />} />
            <Route path="/concepts/restaurant" element={<Restaurant />} />
            <Route path="/concepts/pool-side-bar" element={<PoolSideBar />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
          </Routes>
        </main>
        <Footer />

        {/* Global Sticky WA Icon on Bottom Right */}
        <a
          href="https://wa.me/917337074370"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </Router>
  );
}
