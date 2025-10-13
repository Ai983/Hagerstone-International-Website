import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Team member data - can be moved to separate file if needed
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sujit Kumar",
    role: "Managing Director & Principal Architect",
    image: "/founders/d12ff5f7-e2cf-4b86-b53a-586309fdc5eb.png",
    bio: "Dr. Kumar is a distinguished architect, renowned for his contributions to sustainable design and climate-responsive architecture over the span of his two-decade long career. With a Ph.D. in Solar Passive Architecture and Earth Coupling for Space Conditioning from IIT Delhi, he is one of India's top experts in energy-efficient buildings. He is also a core member of the National Advisory Committee for Sustainable Cities under the Ministry of Urban Housing & Design. In 2001, he founded Hagerstone Pvt. Ltd., setting the foundation for a studio that's been at the forefront of climate-responsive and energy-efficient design.",
    category: "Leadership",
  },
  {
    id: 2,
    name: "Architect Name 2",
    role: "Senior Architect",
    image: "/founders/0542f440-1bd7-4f5d-9709-33c7b4735b5c.png",
    bio: "An accomplished architect with expertise in commercial and corporate design. Passionate about creating spaces that blend functionality with aesthetic excellence.",
    category: "Architect",
  },
  {
    id: 3,
    name: "Designer Name 3",
    role: "Creative Director",
    image: "/founders/caef2106-d964-405b-b54a-aaea2bb48c18.png",
    bio: "Leading our creative team with innovative design solutions. Specializes in interior design and spatial planning for luxury projects.",
    category: "Creative team",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Project Manager",
    image: "/founders/edd078f8-1df5-4f8f-95b3-ba955860347b.png",
    bio: "Ensuring seamless project execution with over 15 years of experience in construction management and client relations.",
    category: "Leadership",
  },
];

const categories = ["All", "Architect", "Leadership", "Creative team"];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMembers = selectedCategory === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      

      {/* Detail Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-start mb-20"
          >
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {selectedMember.role}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedMember.bio}
              </p>
            </div>

            {/* Right: Portrait Image */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full max-w-md aspect-[3/4] overflow-hidden border border-gray-200"
              >
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Filter Categories */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-6 items-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="relative group"
            >
              <span className={`text-base font-medium transition-colors ${
                selectedCategory === category 
                  ? "text-gray-900" 
                  : "text-gray-400 hover:text-gray-700"
              }`}>
                {category}
              </span>
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
                className={`cursor-pointer group ${
                  selectedMember.id === member.id ? "ring-2 ring-gray-900" : ""
                }`}
              >
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Name & Role */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default OurTeam;
