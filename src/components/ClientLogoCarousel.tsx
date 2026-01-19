import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { clientLogos, type ClientLogo } from '@/data/clientLogos';

// Duplicate logos for seamless infinite scroll
const allLogos = [...clientLogos, ...clientLogos];

function LogoCard({ client, index, isInView }: { client: ClientLogo; index: number; isInView: boolean }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Don't render broken images
  if (imageError) return null;

  return (
    <div
      className="flex-shrink-0 w-40 md:w-48 h-20 md:h-24 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-primary/20 flex items-center justify-center hover:scale-105 p-3 md:p-4"
    >
      {/* Skeleton loader */}
      {!imageLoaded && (
        <div className="w-full h-full bg-muted/30 animate-pulse rounded" />
      )}
      <img
        src={client.logo}
        alt={`${client.name} - Hagerstone client logo`}
        width={160}
        height={80}
        className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
        }`}
        loading={index < 8 ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default function ClientLogoCarousel() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl mb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Trusted by Leading Organizations</h2>
          <p className="text-lg text-foreground/80">
            As <strong>international interior design companies in India</strong>, we partner with Fortune 500 firms and industry leaders worldwide
          </p>
        </div>
        <div ref={ref} className="relative overflow-hidden">
          <div 
            className={`flex space-x-6 md:space-x-8 items-center ${
              inView ? 'animate-[slide_60s_linear_infinite]' : ''
            }`}
            style={{ width: 'max-content' }}
          >
            {allLogos.map((client, index) => (
              <LogoCard 
                key={`${client.name}-${index}`} 
                client={client} 
                index={index}
                isInView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
