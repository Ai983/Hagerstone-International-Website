import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Our Services", href: "/services" },
    { name: "Ideas", href: "/ideas" },
    { name: "Blog", href: "/blog" },
    {name: "Find Your Style", href: "/find-your-style"},
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/hagerstone_international/",
    },
    {
      icon: Facebook,
      name: "Facebook", 
      href: "https://www.facebook.com/HagerstoneInternational",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/14708271/admin/page-posts/published/",
    }
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-card">
                <img 
                  src="/logoo.png" 
                  alt="Hagerstone Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
            <h2 className="text-2xl font-bold text-gold">Hagerstone</h2>
            <p className="text-xs text-white/90">International Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md">
              Creating exceptional interior spaces that blend luxury with functionality. 
              Your vision, our expertise.
            </p>
            
            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gold flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Visit Our Studios
              </h3>
              
              {/* Noida Office */}
              <a 
                href="https://www.google.com/maps/place/91Springboard,+Plot+No.+D-107,+Vyapar+Marg,+D+Block,+Sector+2,+Noida,+Uttar+Pradesh+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Noida Office (Head Office)</p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      91Springboard, Plot No. D-107,<br />
                      Vyapar Marg, D Block, Sector 2,<br />
                      Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
              </a>

              {/* Bangalore Office */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Bangalore Office</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Jbr Tech Park, Plot No. 77, 6th Rd, <br />
                    EPIP Zone, Whitefield, Bengaluru, <br />
                    Karnataka 560066
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mt-8">
              
              <a 
                href="tel:+918882979328"
                className="flex items-center space-x-3 hover:text-gold transition-colors duration-300 group"
              >
                <Phone className="h-5 w-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <p className="text-sm text-white/80">+91 88829 79328</p>
                </div>
              </a>
              
              <a 
                href="mailto:ea@hagerstone.com"
                className="flex items-center space-x-3 hover:text-gold transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-sm text-white/80">ea@hagerstone.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/90 hover:text-gold transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                  );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Hagerstone International Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;