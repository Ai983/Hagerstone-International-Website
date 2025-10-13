import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion as m } from "framer-motion";
import { Menu, X, Instagram, Linkedin, Twitter, FacebookIcon, Facebook, MapPin, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const HoveringNavbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const controls = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  // lock/unlock scroll when menu toggles
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (menuOpen) {
      const prevHtml = html.style.overflow;
      const prevBody = body.style.overflow;
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      // close on ESC
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
      window.addEventListener("keydown", onKey);
      return () => {
        html.style.overflow = prevHtml;
        body.style.overflow = prevBody;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [menuOpen]);

  // Handle scroll for transparency effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Force reset + animate on every route change
  useEffect(() => {
    controls.set({ y: -80, opacity: 0 }); // Reset first
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [location.pathname, controls]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={controls}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          menuOpen 
            ? "bg-black/75 backdrop-blur-md" 
            : isHome && !isScrolled 
              ? "bg-transparent" 
              : "bg-white/95 dark:bg-black/80 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-4 z-[120] hover:opacity-90 transition-opacity">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 transition-all duration-300 drop-shadow-lg"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="leading-tight"
            >
              <div className={`text-lg font-bold transition-colors duration-300 ${
                menuOpen 
                  ? "text-white drop-shadow-lg" 
                  : isHome && !isScrolled 
                    ? "text-white drop-shadow-lg" 
                    : "text-primary"
              }`} style={{
                textShadow: (menuOpen || (isHome && !isScrolled)) ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none'
              }}>Hagerstone</div>
              <div className={`text-sm transition-colors duration-300 ${
                menuOpen 
                  ? "text-white/90 drop-shadow-lg" 
                  : isHome && !isScrolled 
                    ? "text-white/90 drop-shadow-lg" 
                    : "text-muted-foreground"
              }`} style={{
                textShadow: (menuOpen || (isHome && !isScrolled)) ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none'
              }}>International Pvt. Ltd.</div>
            </motion.div>
          </Link>

          {/* Right: Theme + Hamburger */}
          <div className="flex items-center gap-3">
            <div className={`transition-colors duration-300 ${
              isHome && !isScrolled && !menuOpen ? "opacity-80" : ""
            }`}>
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none focus:ring-2 transition-colors ${
                menuOpen 
                  ? "hover:bg-white/10 focus:ring-white/50 text-white" 
                  : isHome && !isScrolled
                    ? "hover:bg-white/10 focus:ring-white/50 text-white"
                    : "hover:bg-black/5 dark:hover:bg-white/10 focus:ring-primary text-primary"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="fullscreen-menu"
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Overlay - Outside nav container */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            key="fs-menu"
            id="fullscreen-menu"
            className="fixed inset-0 z-[40] bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Scrollable content container */}
            <div className="h-full w-full overflow-y-auto">
              <div className="min-h-full flex items-start justify-center px-4 sm:px-8 md:px-12 lg:px-20 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-16">
                <div className="max-w-4xl w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT SIDE - Navigation Links */}
                    <div className="flex flex-col justify-start pl-0 sm:pl-4 lg:pl-8">
                      <div className="relative mb-6 sm:mb-8 md:mb-10">
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
                          PAGES
                        </h2>
                        <div className="w-24 sm:w-28 md:w-32 h-0.5 bg-white"></div>
                      </div>
                      <nav>
                        <ul className="space-y-2 sm:space-y-3 md:space-y-4 pl-0 sm:pl-2 md:pl-4">
                          {[
                            { to: "/", label: "HOME", number: "01" },
                            { to: "/about", label: "ABOUT", number: "02", submenu: [{ to: "/our-team", label: "OUR TEAM" }] },
                            { to: "/projects", label: "PROJECTS", number: "03" },
                            { to: "/services", label: "OUR SERVICES", number: "04" },
                            { to: "/ideas", label: "IDEAS", number: "05" },
                            { to: "/blog", label: "BLOG", number: "06" },
                            { to: "/find-your-style", label: "FIND YOUR STYLE", number: "07" },
                            { to: "/contact", label: "CONTACT", number: "08" },
                          ].map(({ to, label, number, submenu }) => (
                            <li key={to} className="relative group">
                              <Link
                                to={to}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-medium tracking-wide text-white hover:text-white transition-colors duration-300"
                              >
                                <span className="w-6 sm:w-7 md:w-8 text-xs font-normal text-white/50 tracking-wide mr-3 sm:mr-4 md:mr-6">{number}</span>
                                 <span className="relative">
                                   {label}
                                   {/* Static underline - responsive width */}
                                   <div className="absolute bottom-[-4px] sm:bottom-[-5px] md:bottom-[-6px] left-[-2px] sm:left-[-3px] md:left-[-4px] w-32 sm:w-36 md:w-44 h-px bg-white/20"></div>
                                   {/* Animated underline on hover - responsive width */}
                                   <div className="absolute bottom-[-4px] sm:bottom-[-5px] md:bottom-[-6px] left-[-2px] sm:left-[-3px] md:left-[-4px] w-32 sm:w-36 md:w-44 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                 </span>
                              </Link>
                              {/* Submenu */}
                              {submenu && (
                                <ul className="mt-2 ml-8 sm:ml-10 md:ml-12 space-y-2">
                                  {submenu.map((subitem) => (
                                    <li key={subitem.to} className="relative group/sub">
                                      <Link
                                        to={subitem.to}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center py-1 text-xs sm:text-sm md:text-base font-normal tracking-wide text-white/80 hover:text-white transition-colors duration-300"
                                      >
                                        <span className="relative">
                                          {subitem.label}
                                          <div className="absolute bottom-[-2px] left-[-2px] w-24 sm:w-28 h-px bg-white/10"></div>
                                          <div className="absolute bottom-[-2px] left-[-2px] w-24 sm:w-28 h-px bg-white origin-left scale-x-0 group-hover/sub:scale-x-100 transition-transform duration-500 ease-out"></div>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>

                    {/* RIGHT SIDE - Contact Info */}
                    <div className="flex flex-col justify-start pr-0 sm:pr-4 lg:pr-8 mt-8 lg:mt-0">
                      <div className="relative mb-6 sm:mb-8 md:mb-10">
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
                          FIND US HERE
                        </h2>
                        <div className="w-32 sm:w-40 md:w-48 h-0.5 bg-[#d4af37]"></div>
                      </div>
                      
                      <div className="space-y-6 sm:space-y-7 md:space-y-8 text-white">
                        {/* HQ - Noida Office */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#d4af37]" />
                            <h3 className="text-sm sm:text-base font-semibold text-[#d4af37]">HQ – Noida Office</h3>
                          </div>
                          <div className="text-xs sm:text-sm leading-relaxed text-white/90 pl-6">
                            91Springboard, Plot No.D-107,<br />
                            Vyapar Marg, D-Block, Sector-2,<br />
                            Noida, Uttar Pradesh, 201301
                          </div>
                          <div className="space-y-1.5 text-white/80 pl-6 text-xs sm:text-sm">
                            <div>📧 Email: ea@hagerstone.com</div>
                            <div>📞 Phone: +91 88829 79328</div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/20"></div>

                        {/* Presence Across Major Cities */}
                        <div className="space-y-3">
                          <h3 className="text-xs sm:text-sm font-semibold text-[#d4af37] tracking-wide">
                            🌍 PRESENCE ACROSS OTHER MAJOR CITIES IN INDIA
                          </h3>
                          <div className="grid grid-cols-2 gap-2 pl-4 text-xs sm:text-sm text-white/80">
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <MapPin className="w-3 h-3 text-[#d4af37]" />
                              <span>Delhi</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <MapPin className="w-3 h-3 text-[#d4af37]" />
                              <span>Gurgaon</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <MapPin className="w-3 h-3 text-[#d4af37]" />
                              <span>Bengaluru</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                              <MapPin className="w-3 h-3 text-[#d4af37]" />
                              <span>Mumbai</span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/20"></div>

                        {/* Collapsible Project Locations */}
                        <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full group">
                            <h3 className="text-xs sm:text-sm font-semibold text-[#d4af37] tracking-wide">
                              🏗️ ONGOING / COMPLETED PROJECT LOCATIONS
                            </h3>
                            <motion.div
                              animate={{ rotate: projectsOpen ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <ChevronDown className="w-4 h-4 text-[#d4af37] group-hover:text-white transition-colors" />
                            </motion.div>
                          </CollapsibleTrigger>
                          
                          <CollapsibleContent className="overflow-hidden">
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: projectsOpen ? "auto" : 0,
                                opacity: projectsOpen ? 1 : 0
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="mt-3"
                            >
                              <div 
                                className="max-h-[200px] sm:max-h-[250px] overflow-y-auto pl-4 pr-2 custom-scrollbar"
                                style={{
                                  scrollbarWidth: 'thin',
                                  scrollbarColor: '#d4af37 #2a2a2a'
                                }}
                              >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                                  {[
                                    "Ahmedabad",
                                    "Bhadra (Rajasthan)",
                                    "Bhuj (Gujarat)",
                                    "Chandigarh",
                                    "Chennai",
                                    "Chattargarh (Rajasthan)",
                                    "Dera Bassi (Punjab)",
                                    "Ferozepur (Punjab)",
                                    "Jasrasar (Rajasthan)",
                                    "Hyderabad",
                                    "Jaipur",
                                    "Kotputli (Rajasthan)",
                                    "Lucknow",
                                    "Ludhiana",
                                    "Manesar (Haryana)",
                                    "Mumbai",
                                    "Ponneri (Tamil Nadu)",
                                    "Raipur",
                                    "Rajpura (Punjab)",
                                    "Shimla",
                                    "Sricity (Andhra Pradesh)",
                                    "Varanasi"
                                  ].map((city) => (
                                    <div 
                                      key={city}
                                      className="flex items-center gap-1.5 py-1 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-default"
                                    >
                                      <MapPin className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                                      <span>{city}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </CollapsibleContent>
                        </Collapsible>

                        {/* Social Links */}
                        <div className="flex gap-4 sm:gap-5 md:gap-6 pt-2">
                          <a 
                            href="https://www.linkedin.com/company/hagerstone/posts/?feedView=all" 
                            className="text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <Linkedin size={18} className="sm:w-5 sm:h-5" />
                          </a>
                          <a 
                            href="http://instagram.com/hagerstone_international/" 
                            className="text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                            aria-label="Instagram"
                          >
                            <Instagram size={18} className="sm:w-5 sm:h-5" />
                          </a>
                          <a 
                            href="https://www.facebook.com/HagerstoneInternational" 
                            className="text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                            aria-label="Facebook"
                          >
                            <Facebook size={18} className="sm:w-5 sm:h-5" />
                          </a>
                        </div>

                        {/* CTA Button */}
                        <Link 
                          to="/contact" 
                          onClick={() => setMenuOpen(false)}
                          className="inline-block px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 border border-[#d4af37] text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] text-xs font-medium hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                        >
                          GET IN TOUCH →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HoveringNavbar;