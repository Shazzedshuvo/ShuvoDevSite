
"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaNpm } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const Skils = () => {
    const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  ];

    return (
        <div>
             <section className="py-16 bg-black text-white h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#00bf8f] mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills & Tools
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center gap-2 bg-[#111111] p-4 rounded-xl shadow-lg hover:shadow-[#00bf8f]/50 transition-all duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
        </div>
    );
};

export default Skils;