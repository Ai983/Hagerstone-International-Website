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
      
      // Auto-hide after 6 seconds
      const timer = setTimeout(() => {
        setShouldExit(true);
        
        // Remove from DOM after fade out
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      }, 6000);

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
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1410 50%, #2d2416 100%)',
          willChange: 'opacity'
        }}
      >
        {/* Fireworks Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`firework-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#d4af37' : '#ffd700'} 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 20, 25],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeOut'
              }}
            />
          ))}
        </div>

        {/* Gold Confetti/Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
              }}
              initial={{ y: 0, opacity: 1, rotate: 0 }}
              animate={{
                y: window.innerHeight + 50,
                opacity: [1, 0.8, 0],
                rotate: 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'linear'
              }}
            >
              <Sparkles className="w-3 h-3 text-[#d4af37]" fill="#d4af37" />
            </motion.div>
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          {/* Hagerstone Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <motion.img
              src="/logo.png"
              alt="Hagerstone"
              className="h-16 md:h-20 object-contain"
              animate={{
                filter: [
                  'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))',
                  'drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))',
                  'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>

          {/* Happy Diwali Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                  '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.5)',
                  '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              ✨ Happy Diwali ✨
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-[#d4af37] font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              From the Hagerstone Family
            </motion.p>
          </motion.div>

          {/* Diyas at Four Corners */}
          {/* Bottom Left Diya */}
          <motion.div
            className="absolute bottom-8 left-8 md:bottom-12 md:left-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-full relative">
                <motion.div
                  className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 w-3 h-6 md:w-4 md:h-7 bg-gradient-to-t from-[#ff6b00] via-[#ffa500] to-[#ffd700] rounded-full"
                  animate={{ scaleY: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    filter: 'blur(1px)',
                    boxShadow: '0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 107, 0, 0.4)',
                  }}
                />
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Right Diya */}
          <motion.div
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-full relative">
                <motion.div
                  className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 w-3 h-6 md:w-4 md:h-7 bg-gradient-to-t from-[#ff6b00] via-[#ffa500] to-[#ffd700] rounded-full"
                  animate={{ scaleY: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    filter: 'blur(1px)',
                    boxShadow: '0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 107, 0, 0.4)',
                  }}
                />
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Top Left Diya (Smaller) */}
          <motion.div
            className="absolute top-8 left-8 md:top-12 md:left-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}
            >
              <div className="w-7 h-7 md:w-9 md:h-9 bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-full relative">
                <motion.div
                  className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-2.5 h-5 md:w-3 md:h-6 bg-gradient-to-t from-[#ff6b00] via-[#ffa500] to-[#ffd700] rounded-full"
                  animate={{ scaleY: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    filter: 'blur(1px)',
                    boxShadow: '0 0 8px rgba(255, 165, 0, 0.8), 0 0 16px rgba(255, 107, 0, 0.4)',
                  }}
                />
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, transparent 70%)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Top Right Diya (Smaller) */}
          <motion.div
            className="absolute top-8 right-8 md:top-12 md:right-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.9, ease: 'easeInOut' }}
            >
              <div className="w-7 h-7 md:w-9 md:h-9 bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-full relative">
                <motion.div
                  className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-2.5 h-5 md:w-3 md:h-6 bg-gradient-to-t from-[#ff6b00] via-[#ffa500] to-[#ffd700] rounded-full"
                  animate={{ scaleY: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    filter: 'blur(1px)',
                    boxShadow: '0 0 8px rgba(255, 165, 0, 0.8), 0 0 16px rgba(255, 107, 0, 0.4)',
                  }}
                />
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, transparent 70%)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiwaliSplash;
