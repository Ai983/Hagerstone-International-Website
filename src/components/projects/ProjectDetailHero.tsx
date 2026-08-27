// Trigger rebuild: 2025-09-17

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectDetailHero({
  title,
  client,
  hero,
  heroAlt,
  heroVideo,
}: {
  title: string;
  client: string;
  hero: string;
  heroAlt: string;
  heroVideo?: string;
}) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <figure className="absolute inset-0 h-full w-full">
        {heroVideo && !videoError ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={hero}
            onError={() => setVideoError(true)}
          />
        ) : (
          <img
            src={hero}
            alt={heroAlt}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        <figcaption className="sr-only">{heroAlt}</figcaption>
      </figure>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-16">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>
        <p className="mt-2 text-lg text-white/85">{client}</p>
      </div>
    </section>
  );
}
