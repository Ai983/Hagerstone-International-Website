import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { FIREWORKS_COLORS } from '@/config/diwaliConfig';

interface FireworksCanvasProps {
  duration: number;
  intensity?: 'full' | 'short';
}

const FireworksCanvas = ({ duration, intensity = 'full' }: FireworksCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    const colors = Object.values(FIREWORKS_COLORS);
    
    // Detect mobile for performance optimization
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 50;
    const spread = isMobile ? 50 : 70;

    const fireFireworks = () => {
      const count = intensity === 'full' ? 3 : 2;
      
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          myConfetti({
            particleCount,
            angle: 60 + (i * 20),
            spread,
            origin: { x: 0.3 + (i * 0.2), y: 0.6 },
            colors: colors.slice(i, i + 3),
            gravity: 0.8,
            scalar: isMobile ? 0.8 : 1.2,
            drift: 0,
            ticks: 200,
            shapes: ['circle', 'square'],
            zIndex: 45,
          });
        }, i * 100);
      }
    };

    // Initial burst
    fireFireworks();

    // Continuous fireworks for duration
    const interval = setInterval(() => {
      fireFireworks();
    }, intensity === 'full' ? 800 : 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      myConfetti.reset();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      myConfetti.reset();
    };
  }, [duration, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 45 }}
    />
  );
};

export default FireworksCanvas;
