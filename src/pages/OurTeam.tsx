import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/teamMembers";


const OurTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(teamMembers.map((m) => m.category)))
  ];
  const filteredMembers = selectedCategory === "All"
    ? teamMembers
    : teamMembers.filter((member) => member.category === selectedCategory);
  // Always keep grid alignment by filling empty slots with invisible placeholders
  const columns = 4; // match lg:grid-cols-4
  const rows = Math.ceil(filteredMembers.length / columns);
  const gridCount = rows * columns;
  const placeholders = Array(gridCount - filteredMembers.length).fill(null);
  const [selectedMember, setSelectedMember] = useState(filteredMembers[0] || teamMembers[0]);

  // Update selectedMember when filteredMembers changes
  useEffect(() => {
    if (!filteredMembers.includes(selectedMember)) {
      setSelectedMember(filteredMembers[0] || teamMembers[0]);
    }
  }, [selectedCategory, filteredMembers]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      

      {/* Detail Section */}
      <section className="max-w-5xl mx-auto px-15 pt-20 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-6 items-start mb-10"
          >
            {/* Left: Text Content */}
            <div className="space-y-4 mt-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-base text-gray-600 mb-3">
                  {selectedMember.role}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                {selectedMember.bio}
              </p>
            </div>

            {/* Right: Portrait Image */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-80 max-w-xs aspect-[3/4] overflow-hidden border border-gray-200"
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
      <section className="max-w-6xl mx-auto px-6 py-8">
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
         className="flex gap-6 overflow-x-auto no-scrollbar px-2 py-4"
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
            className="cursor-pointer flex-shrink-0 group"
           >
            {/* Portrait */}
            <div
             className={`relative w-36 h-48 overflow-hidden rounded-sm ${
              selectedMember?.id === member.id
               ? "ring-2 ring-gray-900"
               : "ring-1 ring-transparent"
             }`}
           >
             <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-500"
             />
           </div>
          </motion.div>
         ))}
        </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default OurTeam;
