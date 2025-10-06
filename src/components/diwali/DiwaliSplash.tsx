import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FireworksCanvas from './FireworksCanvas';
import { DIWALI_MODE, DIWALI_TIMINGS } from '@/config/diwaliConfig';

const DiwaliSplash = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [hasShown, setHasShown] = useState(false);
  
  const isHomepage = location.pathname === '/';
  const duration = isHomepage ? DIWALI_TIMINGS.homepageDuration : DIWALI_TIMINGS.shortDuration;

  useEffect(() => {
    // Only show once per session
    if (hasShown) {
      setIsVisible(false);
      return;
    }

    setHasShown(true);
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, hasShown]);

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
            background: 'linear-gradient(135deg, #0B132B 0%, #1a1f3a 50%, #0B132B 100%)',
            zIndex: 70,
          }}
        >
          {/* Fireworks Layer */}
          <FireworksCanvas 
            duration={duration} 
            intensity={isHomepage ? 'full' : 'short'}
          />

          {/* Content Layer */}
          <div className="relative z-50 flex flex-col items-center justify-center px-4">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: DIWALI_TIMINGS.logoDelay / 1000,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="mb-8"
            >
              <div className="relative">
                {/* Pulsing glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
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
                  className="relative w-32 h-32 md:w-40 md:h-40 object-contain"
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
                delay: DIWALI_TIMINGS.companyNameDelay / 1000,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
              }}
            >
              Hagerstone International Pvt. Ltd.
            </motion.h1>

            {/* Diwali Wishes (Homepage Only) */}
            {isHomepage && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: DIWALI_TIMINGS.wishingTextDelay / 1000,
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-xl md:text-3xl text-center font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                }}
              >
                wishes everyone a Happy Diwali ✨
              </motion.p>
            )}
          </div>

          {/* Animated particles background */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 105, 180, 0.1) 0%, transparent 50%)',
              zIndex: 40,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiwaliSplash;
