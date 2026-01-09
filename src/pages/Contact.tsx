import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import {
  AnimatedBackground,
  TextReveal,
  ScrollReveal,
} from "@/components/animations";

import { 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  MapPin,
  Clock,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "",
    projectType: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 88829 79328",
      href: "tel:+918882979328",
      description: "Call us for office design & build enquiries"
    },
    {
      icon: Mail,
      title: "Email",
      value: "ea@hagerstone.com",
      href: "mailto:ea@hagerstone.com",
      description: "Send us your project requirements"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9:30AM - 6:30PM",
      href: "#",
      description: "Available for consultations"
    }
  ];

  const officeLocations = [
    {
      name: "Noida Office (Head Office)",
      address: "91springboard, D-107, D Block, Sector 2, Noida, Uttar Pradesh 201301",
      mapUrl: "https://maps.google.com/?q=91Springboard,+Plot+No.+D-107,+Vyapar+Marg,+D+Block,+Sector+2,+Noida,+Uttar+Pradesh+201301",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5371117487475!2d77.31403467549903!3d28.58365947569144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58e07e58aa1%3A0x32d5740a24aaf4b1!2s91Springboard%20Sector-2%2C%20Noida!5e0!3m2!1sen!2sin!4v1760077784822!5m2!1sen!2sin"
    },
    {
      name: "Bangalore Office",
      address: "Second floor, No. 17, 7th Main Indiranagar 2nd Stage, Bangalore-560 038",
      mapUrl: "https://www.google.com/maps/place/17-337,+7th+Main+Rd,+HAL+2nd+Stage,+Indiranagar,+Bengaluru,+Karnataka+560008/@12.9732752,77.6450993,20.32z/data=!4m6!3m5!1s0x3bae16a91c6de3fb:0x91d1b1a9c96940f7!8m2!3d12.973499!4d77.6453674!16s%2Fg%2F11g63pnyz8?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.66933782707287!2d77.6450992665324!3d12.97327521733755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a91c6de3fb%3A0x91d1b1a9c96940f7!2s17-337%2C%207th%20Main%20Rd%2C%20HAL%202nd%20Stage%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560008!5e0!3m2!1sen!2sin!4v1767864452001!5m2!1sen!2sin"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/hagerstone_international/",
      color: "hover:text-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook", 
      href: "https://www.facebook.com/HagerstoneInternational",
      color: "hover:text-blue-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/14708271/admin/page-posts/published/",
      color: "hover:text-blue-700"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Enquiry Sent Successfully!",
        description: "Our design & build team will connect with you within one business day.",
      });
      
      setFormData({
        name: "", email: "", phone: "", subject: "", message: "",
        company: "", projectType: "", location: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try calling us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Hagerstone | Office Design & Build Company Delhi NCR"
        description="Contact Hagerstone International for office design & build, modern office interior design, MEP design, and interior fit out projects in Delhi, Noida, Gurugram and across India."
        canonical="https://hagerstone.com/contact"
        keywords="contact office design and build company, office interior design enquiry, mep design consultants delhi, interior fit out company contact, commercial interior design firm delhi ncr, office workspace design"
      />

      {/* Hero Section */}
      <AnimatedBackground variant="aurora" className="relative text-primary-foreground py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal variant="words" className="text-5xl md:text-6xl font-bold mb-6 text-gold">
            Contact Our Office Design & Build Team
          </TextReveal>
          <ScrollReveal variant="slide-up" delay={0.3}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Share your requirements for <span className="text-gold font-semibold">modern office interior design</span>, 
              office workspace design, <span className="text-gold font-semibold">MEP design</span>, or interior fit out projects. 
              Serving Delhi, Noida, Gurugram, and Bangalore.
            </p>
          </ScrollReveal>
        </div>
      </AnimatedBackground>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title}
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-gold-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                    <a
                      href={info.href}
                      className="text-lg font-medium text-accent hover:text-gold transition-colors duration-300 block mb-2"
                    >
                      {info.value}
                    </a>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <Card className="bg-gradient-card border-0 shadow-luxury overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-gold/10">
                <CardTitle className="text-3xl text-primary">Send an Enquiry</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your office design & build requirement and our team will connect within one business day.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Organization / Brand" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91-XXXXXXXXXX" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} placeholder="e.g. Office Design & Build" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location</Label>
                      <Input id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="City, State" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="min-h-32"
                      placeholder="Area in sq. ft., type of workspace, timeline, and any specific MEP or fit out requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium shadow-luxury"
                  >
                    {isSubmitting ? "Sending..." : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Submit Enquiry</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Offices Section */}
            <div className="space-y-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-primary mb-2 flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-gold" />
                  Visit Our Studios
                </h2>
                <p className="text-muted-foreground">Premium office interior design firm serving major hubs across India.</p>
              </div>

              {officeLocations.map((office) => (
                <Card 
                  key={office.name}
                  className="bg-gradient-card border-0 shadow-md hover:shadow-luxury transition-all duration-500"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gold" />
                      {office.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{office.address}</p>
                    
                    <div className="rounded-lg overflow-hidden h-48 border border-gold/10">
                      <iframe
                        src={office.embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${office.name} Location`}
                      />
                    </div>
                    
                    <Button asChild variant="outline" className="w-full border-gold/50 hover:bg-gold/10 group">
                      <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="bg-gradient-card border-0 shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Follow Us</CardTitle>
                  <p className="text-muted-foreground">
                    Stay connected for the latest updates and inspiration
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Hagerstone International ${social.name}`}
                          className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                          <span className="sr-only">Follow Hagerstone International on {social.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media & CTA */}
              <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-luxury">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Call directly for urgent office design & build, MEP, or fit out projects.
                  </p>
                  <Button 
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300"
                  >
                    <a href="tel:+918882979328">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;