import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/teamMembers";


const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      

      {/* Detail Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-15 pt-20 py-12">
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
            <div className="space-y-4 mt-8 md:mt-12 px-2 md:px-0">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-1">
                  {selectedMember.name}
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-3">
                  {selectedMember.role}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mt-4 md:mt-0">
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
                  alt={selectedMember.imageAlt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
         layout
         className="flex gap-6 overflow-x-auto no-scrollbar px-2 py-4"
        >
         <AnimatePresence>
          {teamMembers.map((member) => (
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
              alt={member.imageAlt}
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
