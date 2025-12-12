import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/teamMembers";
import { Linkedin, Mail } from "lucide-react";

const OurTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(teamMembers.map((m) => m.category)))
  ];

  // Filter members by category
  const filteredMembers = selectedCategory === "All"
    ? teamMembers
    : teamMembers.filter((member) => member.category === selectedCategory);

  // Update selected member when category changes
  useEffect(() => {
    if (!filteredMembers.includes(selectedMember)) {
      setSelectedMember(filteredMembers[0] || teamMembers[0]);
    }
  }, [selectedCategory, filteredMembers]);

  return (
    <div className="min-h-screen bg-background pt-20">
      
      {/* ========== HERO SECTION ========== */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Meet Our Team
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          The talented professionals behind Hagerstone's exceptional interior design projects
        </motion.p>
      </section>

      {/* ========== SELECTED MEMBER DETAIL ========== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Text Content */}
            <div className="space-y-4 order-2 lg:order-1">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {selectedMember.category}
                </span>
                <h2 className="text-3xl font-bold text-foreground mt-2 mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {selectedMember.role}
                </p>
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                {selectedMember.bio}
              </p>

              {/* Social Links - Add URLs to teamMembers data if needed */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-72 md:w-80 aspect-[3/4] overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ========== CATEGORY FILTERS ========== */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4 items-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ========== TEAM GRID ========== */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer group"
              >
                {/* Member Card */}
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedMember?.id === member.id
                      ? "ring-2 ring-primary shadow-lg"
                      : "ring-1 ring-border hover:ring-primary/50"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay with name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-medium text-sm truncate">
                        {member.name}
                      </p>
                      <p className="text-white/80 text-xs truncate">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Name below card */}
                <div className="mt-2 text-center">
                  <p className="text-foreground font-medium text-sm truncate">
                    {member.name}
                  </p>
                  <p className="text-muted-foreground text-xs truncate">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ========== BOTTOM SPACING ========== */}
      <div className="h-20" />
    </div>
  );
};

export default OurTeam;
