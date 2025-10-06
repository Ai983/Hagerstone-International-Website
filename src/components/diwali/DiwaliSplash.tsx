import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FireworksCanvas from './FireworksCanvas';
import { DIWALI_MODE, DIWALI_TIMINGS } from '@/config/diwaliConfig';

const DiwaliSplash = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [hasShown, setHasShown] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isHomepage = location.pathname === '/';
  const duration = isHomepage ? DIWALI_TIMINGS.homepageDuration : DIWALI_TIMINGS.shortDuration;

  useEffect(() => {
    // Only show once per session
    if (hasShown) {
      setIsVisible(false);
      return;
    }

    setHasShown(true);

    // Play video on homepage
    if (isHomepage && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay failed:', err);
      });
    }
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, hasShown, isHomepage]);

  if (!DIWALI_MODE || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 flex items-center justify-center"
          style={{
            background: '#0B132B',
            zIndex: 70,
          }}
        >
          {isHomepage ? (
            // Homepage: Show full video splash
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                muted
                playsInline
                preload="auto"
              >
                <source src="/diwali-splash.mp4" type="video/mp4" />
              </video>
            </div>
          ) : (
            // Other pages: Show short fireworks + logo + company name
            <>
              {/* Fireworks Layer */}
              <FireworksCanvas 
                duration={duration} 
                intensity="short"
              />

              {/* Content Layer */}
              <div className="relative z-50 flex flex-col items-center justify-center px-4">
                {/* Logo Animation */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="mb-6"
                >
                  <div className="relative">
                    {/* Pulsing glow effect */}
                    <motion.div
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 blur-3xl rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
                      }}
                    />
                    
                    <img
                      src="/logo.png"
                      alt="Hagerstone Logo"
                      className="relative w-24 h-24 md:w-32 md:h-32 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/logoo.png';
                      }}
                    />
                  </div>
                </motion.div>

                {/* Company Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="text-xl md:text-3xl lg:text-4xl font-bold text-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                  }}
                >
                  Hagerstone International Pvt. Ltd.
                </motion.h1>
              </div>

              {/* Animated particles background */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 105, 180, 0.1) 0%, transparent 50%)',
                  zIndex: 40,
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiwaliSplash;
