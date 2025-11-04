import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AchievementSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Our Recent Achievement
            </h2>
            <p className="text-xl text-accent font-semibold">
              Delivering Excellence in Every Space We Build
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hagerstone recently completed one of its landmark projects — a modern workspace designed for CR 63. 
              This achievement represents our commitment to quality, innovation, and precision in every project we undertake.
            </p>
            <Button
              asChild
              variant="outline"
              className="group hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Link to="/projects">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury aspect-video">
              <video
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/testimonials/CR 63.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
