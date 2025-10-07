import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 88829 79328",
      href: "tel:+918882979328",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "ea@hagerstone.com",
      href: "mailto:ea@hagerstone.com",
      description: "Send us your queries anytime"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 6PM",
      href: "#",
      description: "We're here to help"
    }
  ];

  const officeLocations = [
    {
      name: "Noida Office (Head Office)",
      address: "91Springboard, Plot No. D-107, Vyapar Marg, D Block, Sector 2, Noida, Uttar Pradesh 201301",
      mapUrl: "https://www.google.com/maps/place/91Springboard,+Plot+No.+D-107,+Vyapar+Marg,+D+Block,+Sector+2,+Noida,+Uttar+Pradesh+201301",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0868762896475!2d77.31301907550174!3d28.632985575692677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456a36e9f7%3A0x19ee75fadafc9d9!2s91Springboard%2C%20Plot%20No.%20D-107%2C%20Vyapar%20Marg%2C%20D%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    },
    {
      name: "Bangalore Office",
      address: "Coming Soon",
      mapUrl: null,
      embedUrl: null
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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-gold">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Let's discuss your next interior design project
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title}
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
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

          {/* Office Locations Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                <MapPin className="h-8 w-8 text-gold" />
                Visit Our Studios
              </h2>
              <p className="text-lg text-muted-foreground">Experience our design excellence at our office locations</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {officeLocations.map((office, index) => (
                <Card 
                  key={office.name}
                  className="bg-gradient-card border-0 shadow-luxury hover:shadow-xl transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-gold" />
                      {office.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {office.address}
                    </p>
                    
                    {office.embedUrl && (
                      <>
                        <div className="rounded-lg overflow-hidden h-64 border-2 border-gold/20">
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
                        
                        <Button
                          asChild
                          className="w-full bg-gold hover:bg-gold/90 text-gold-foreground shadow-luxury hover:scale-105 transition-all duration-300"
                        >
                          <a 
                            href={office.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="h-4 w-4 mr-2" />
                            Get Directions
                          </a>
                        </Button>
                      </>
                    )}
                    
                    {!office.embedUrl && (
                      <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center border-2 border-gold/20">
                        <div className="text-center px-4">
                          <MapPin className="h-12 w-12 text-gold mx-auto mb-3 opacity-50" />
                          <p className="text-muted-foreground font-medium">Coming Soon</p>
                          <p className="text-sm text-muted-foreground/70 mt-2">We'll be opening our Bangalore studio soon</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-luxury animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-32"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium shadow-luxury hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social and CTA */}
            <div className="space-y-8 animate-slide-up">

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
                          className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-luxury">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Call us directly for urgent project discussions
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

      {/* Valued Partners */}
      
    </div>
  );
};

export default Contact;