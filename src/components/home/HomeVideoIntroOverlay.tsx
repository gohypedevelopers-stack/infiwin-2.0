import React, { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface HomeVideoIntroOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  speed?: number;
}

export const HomeVideoIntroOverlay: React.FC<HomeVideoIntroOverlayProps> = ({
  isOpen,
  onClose,
  speed = 2.0,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Bulletproof setter for playbackRate
  const forceSpeed = useCallback((videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;
    try {
      if (videoElement.playbackRate !== speed) {
        videoElement.playbackRate = speed;
      }
      if (videoElement.defaultPlaybackRate !== speed) {
        videoElement.defaultPlaybackRate = speed;
      }
    } catch {
      // ignore
    }
  }, [speed]);

  // Ref callback to immediately hook into the video element as soon as it's mounted in the DOM
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (node) {
      forceSpeed(node);
      node.play().catch(() => { });
    }
  }, [forceSpeed]);

  useEffect(() => {
    if (!isOpen) return;

    const video = videoRef.current;
    if (!video) return;

    // Apply speed immediately
    forceSpeed(video);

    const handleEvent = () => forceSpeed(video);

    video.addEventListener("loadedmetadata", handleEvent);
    video.addEventListener("loadeddata", handleEvent);
    video.addEventListener("canplay", handleEvent);
    video.addEventListener("canplaythrough", handleEvent);
    video.addEventListener("play", handleEvent);
    video.addEventListener("playing", handleEvent);
    video.addEventListener("timeupdate", handleEvent);

    // Continuous interval to enforce playback speed throughout playback
    const interval = setInterval(() => {
      forceSpeed(video);
    }, 100);

    return () => {
      clearInterval(interval);
      video.removeEventListener("loadedmetadata", handleEvent);
      video.removeEventListener("loadeddata", handleEvent);
      video.removeEventListener("canplay", handleEvent);
      video.removeEventListener("canplaythrough", handleEvent);
      video.removeEventListener("play", handleEvent);
      video.removeEventListener("playing", handleEvent);
      video.removeEventListener("timeupdate", handleEvent);
    };
  }, [isOpen, forceSpeed]);

  // Keyboard shortcut: Escape to cut/close video
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-black w-screen h-screen overflow-hidden flex items-center justify-center select-none"
        >
          {/* Pure Fullscreen Preloader Video */}
          <video
            ref={setVideoRef}
            src="https://ik.imagekit.io/6tktrblyvs/doorspital/glass%20slab%20animation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={onClose}
            className="w-full h-full object-cover bg-black"
          />

          {/* Clean Cut / Skip Button */}
          <button
            onClick={onClose}
            className="fixed top-5 right-5 md:top-8 md:right-8 z-[100000] flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/25 hover:border-luxury-gold text-white hover:text-luxury-gold text-xs uppercase tracking-widest font-medium backdrop-blur-md transition-all duration-300 shadow-2xl cursor-pointer group"
            title="Cut Video / Skip to Website"
            aria-label="Cut Video"
          >
            <span className="font-sans">Skip</span>
            <div className="w-5 h-5 rounded-full bg-white/15 group-hover:bg-luxury-gold/20 flex items-center justify-center transition-colors">
              <X size={14} className="transition-transform group-hover:rotate-90 duration-300" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
