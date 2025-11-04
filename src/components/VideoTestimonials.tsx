import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoTestimonial {
  id: string;
  title: string;
  client: string;
  role: string;
  thumbnail?: string;
  videoUrl: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "vst-united",
    title: "VST United Group",
    client: "VST United Group",
    role: "Corporate Client",
    videoUrl: "/testimonials/vst-united-group.mp4",
  },
  // Add more testimonials here in the future
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const currentVideo = videoTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            See What Our Clients Have to Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories. Genuine experiences. Discover how Hagerstone delivers excellence in every space we create.
          </p>
        </motion.div>

        {/* Video Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            {/* Left Preview Cards */}
            <div className="hidden lg:flex flex-col gap-4">
              {videoTestimonials.length > 1 && (
                <>
                  <motion.div
                    className="w-32 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg backdrop-blur-sm border border-primary/20 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary/40 text-xs font-bold transform -rotate-90 tracking-widest">
                      PREVIOUS
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </>
              )}
            </div>

            {/* Main Video Card */}
            <motion.div
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-luxury group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={currentVideo.videoUrl}
                poster={currentVideo.thumbnail}
                muted
                playsInline
                preload="metadata"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300" 
                style={{ opacity: isHovering ? 0.7 : 1 }} 
              />

              {/* Play Button - Fades out on hover */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovering ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 text-accent ml-1" fill="currentColor" />
                </div>
              </motion.div>

              {/* Client Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-1">{currentVideo.client}</h3>
                <p className="text-sm text-white/80 uppercase tracking-wider">{currentVideo.role}</p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
            </motion.div>

            {/* Right Preview Cards */}
            <div className="hidden lg:flex flex-col gap-4">
              {videoTestimonials.length > 1 && (
                <>
                  <motion.div
                    className="w-32 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg backdrop-blur-sm border border-accent/20 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary/40 text-xs font-bold transform -rotate-90 tracking-widest">
                      NEXT
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          {videoTestimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-0 lg:-translate-x-16 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-primary/20 hover:bg-white hover:scale-110 transition-all shadow-lg"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 lg:right-0 lg:translate-x-16 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-primary/20 hover:bg-white hover:scale-110 transition-all shadow-lg"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </Button>
            </>
          )}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="link"
            className="text-primary hover:text-accent transition-colors group"
          >
            See All Video Testimonials
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
