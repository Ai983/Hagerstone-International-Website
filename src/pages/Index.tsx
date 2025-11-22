import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/HeroSlider";
import VideoTestimonials from "@/components/VideoTestimonials";
import AchievementSection from "@/components/AchievementSection";
import { projects } from "@/data/project";
import { Badge } from "@/components/ui/badge";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import {
  Building2,
  Users,
  Award,
  Star,
  ArrowRight,
  Palette,
  Building,
  Zap,
  CheckCircle,
  Briefcase,
  Ruler,
  Projector,
  Globe
} from "lucide-react";

const Index = () => {

  const services = [
    {
      icon: Palette,
      title: "Interior Design & Fit-Outs",
      description: "Modern interior design for corporate offices and commercial spaces in Delhi, Noida, Gurugram",
      link: "/services"
    },
    {
      icon: Building,
      title: "EPC & PEB Construction",
      description: "Engineered Procurement Construction and Pre-Engineered Buildings for industrial projects",
      link: "/services"
    },
    {
      icon: Zap,
      title: "MEP & HVAC Services",
      description: "Complete Mechanical, Electrical, Plumbing, HVAC, and firefighting solutions",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Ltd.",
      content: "Hagerstone transformed our office space beautifully. The attention to detail and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Fashion Retail Chain",
      content: "Outstanding work on our showroom design. The team understood our vision and delivered exactly what we wanted.",
      rating: 5
    },
    {
    name: "Ananya Desai",
    company: "Realty Corp",
    content: "Reliable and creative. The entire process from design to execution was seamless.",
    rating: 5
    },
    {
    name: "Karan Bansal",
    company: "RetailNest",
    content: "Very collaborative and punctual. We loved the experience.",
    rating: 5
    },
    {
    name: "Vikram Mehta",
    company: "InfraBuild India",
    content: "Professional team and premium execution. We highly recommend Hagerstone.",
    rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Unified Navbar */}
      
        




      {/* Hero Slider */}
      <HeroSlider />

      {/* SEO-Optimized Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6">
            Hagerstone International: Leading Interior Design and Build Company in Delhi
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              As one of the <strong>top interior fit-out companies in Delhi</strong>, Hagerstone International Pvt. Ltd. delivers world-class <Link to="/services" className="text-accent hover:underline">interior design and build solutions</Link> for corporate offices, hospitality venues, retail spaces, and industrial facilities across India and internationally.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Our expertise as <strong>international interior designers</strong> combines innovative design execution with comprehensive MEP, EPC, and PEB construction capabilities. We are the <strong>best interior company in Delhi</strong> for turnkey project delivery, serving Fortune 500 clients and transforming commercial spaces throughout Delhi, Noida, and Gurugram.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/projects">View Our Portfolio</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-muted/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Best Construction Company: Making an Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As a leading <strong>build and construction firm</strong>, our numbers reflect our commitment to excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              { icon: Briefcase, value: 11, suffix: "+ YEARS", label: "Of Experience In Industry" },
              { icon: Ruler, value: 7, suffix: " MILLION+ SQFT", label: "Designed & Delivered" },
              { icon: Projector, value: 250, suffix: "+ PROJECTS", label: "Combined Projects Delivery By Our Leadership Team" },
              { icon: Users, value: 350, suffix: "+ MANPOWER", label: "Expert & general workforce across India" },
              { icon: Building2, value: 25, suffix: "+ CITIES", label: "Across the India" },
              { icon: Globe, value: 7, suffix: "+ COUNTRIES", label: "Around the Globe" },
            ].map(({ icon: Icon, value, suffix, label }, index) => {
              const { ref, inView } = useInView({ triggerOnce: true });
              return (
                <div
                  key={index}
                  ref={ref}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center transition hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-primary dark:text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {inView && <CountUp start={0} end={value} duration={2} suffix={` ${suffix}`} />}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Valued Clients */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Trusted by Leading Organizations</h2>
            <p className="text-lg text-foreground/80">
              As <strong>international interior design companies in India</strong>, we partner with Fortune 500 firms and industry leaders worldwide
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-[slide_20s_linear_infinite] space-x-8 items-center">
              {[
                { name: "Monin", logo: "/clients-logo/Monin.jpeg" },
                { name: "AECOM", logo: "/clients-logo/AECOM.png" },
                { name: "TAJ", logo: "/clients-logo/Taj.jpeg" },
                { name: "UltraTech Cement", logo: "/clients-logo/Ultratech.jpeg" },
                { name: "Air India", logo: "/clients-logo/airindia.jpeg" },
                { name: "Lufthansa", logo: "/clients-logo/lufthansa.jpeg" },
                // Duplicate for continuous scroll
                { name: "Monin", logo: "/clients-logo/Monin.jpeg" },
                { name: "AECOM", logo: "/clients-logo/AECOM.png" },
                { name: "TAJ", logo: "/clients-logo/Taj.jpeg" },
                { name: "UltraTech Cement", logo: "/clients-logo/Ultratech.jpeg" },
                { name: "Air India", logo: "/clients-logo/airindia.jpeg" },
                { name: "Lufthansa", logo: "/clients-logo/lufthansa.jpeg" }
              ].map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-48 h-24 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-primary/20 flex items-center justify-center hover:scale-105 p-4"
                >
                  <img 
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* Services Preview */}
      <section className="py-20 px-6 md:px-16 text-center bg-background">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive Interior Design and Build Services
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          From <strong>office interiors</strong> and <strong>commercial space design</strong> to <strong>hospitality interior design</strong>, we deliver end-to-end solutions
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="text-accent hover:underline">Explore our complete range of services</Link> including MEP, EPC, PEB construction, HVAC, firefighting, and modern lighting solutions
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <motion.div
                className="bg-muted rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-accent hover:underline text-sm font-medium">
                  Learn More →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
  

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
              Featured Interior Design Projects
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up mb-4">
              Showcasing our expertise as the <strong>top interior design firm</strong> in commercial and hospitality spaces
            </p>
            <p className="text-base text-muted-foreground">
              <Link to="/projects" className="text-accent hover:underline">Explore our complete portfolio</Link> of corporate office styling and design fit-outs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <Card 
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.hero}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="text-sm bg-accent px-2 py-1 rounded mb-2">{project.sector}</Badge>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-muted hover:scale-105 transition-all duration-300"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievement Section - Replaces Client Testimonials */}
      <AchievementSection />

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Why Choose Hagerstone as Your Interior Design Partner?
            </h2>
            <p className="text-xl text-white/90 animate-slide-up mb-2">
              Excellence in every project, innovation in every design
            </p>
            <p className="text-base text-white/80 animate-slide-up">
              From <Link to="/about" className="text-accent hover:underline">our experienced team</Link> to Fortune 500 clients, discover what makes us the <strong>best interior designer</strong> choice
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "11+ Years of Excellence",
              "500+ Satisfied Clients",
              "Fortune 500 Experience",
              "Turnkey Solutions"
            ].map((benefit, index) => (
            <div
            key={benefit}
            className="text-center animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{benefit}</h3>
            </div>
          ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-4 animate-slide-up">
            Partner with India's leading <strong>interior design and build companies</strong> for your next project
          </p>
          <p className="text-base text-muted-foreground mb-8">
            Whether you need <Link to="/services" className="text-accent hover:underline">corporate office interiors</Link>, hospitality design, or complete construction services, we deliver excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg animate-scale-in"
            >
              <Link to="/contact">Start Your Project Today</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

