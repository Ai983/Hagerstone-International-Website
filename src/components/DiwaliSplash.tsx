import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Toggle this to enable/disable Diwali mode
export const IS_DIWALI_MODE = true;

const DiwaliSplash = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Check if splash has already been shown this session
    const hasPlayed = sessionStorage.getItem('diwaliPlayed');
    
    if (!hasPlayed && IS_DIWALI_MODE) {
      setIsVisible(true);
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    sessionStorage.setItem('diwaliPlayed', 'true');
    
    // Fade out after a brief moment
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: videoEnded ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-0 z-[9999] bg-[#0B132B] flex items-center justify-center"
        style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
      >
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          <source src="/Diwalifinal.webm" type="video/webm" />
          <source src="/Diwalifinal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiwaliSplash;
