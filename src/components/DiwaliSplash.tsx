import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Automatically checks if current date is before October 24, 2025
const checkDiwaliMode = () => {
  const today = new Date();
  const endDate = new Date('2025-10-24');
  return today < endDate;
};

export const IS_DIWALI_MODE = checkDiwaliMode();

const DiwaliSplash = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    if (IS_DIWALI_MODE) {
      setIsVisible(true);
      
      // Auto-hide after 8 seconds (video duration)
      const timer = setTimeout(() => {
        setShouldExit(true);
        
        // Remove from DOM after fade out
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldExit ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        style={{ 
          willChange: 'opacity'
        }}
      >
        {/* Diwali Video Background */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.warn("Video failed to load:", e);
          }}
        >
          <source src="/diwalisplash.webm" type="video/webm" />
          <source src="/diwalisplash.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiwaliSplash;
