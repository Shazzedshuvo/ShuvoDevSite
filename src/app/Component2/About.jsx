"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-6"
      >
        <h2 className="text-4xl font-bold text-[#00bf8f]">About Me</h2>
        <p className="text-gray-300 text-lg">
          Hi, I’m Shazzed Shuvo — a passionate Web Developer and MERN Stack Developer. I love building modern, responsive web applications that solve real-world problems.  
        </p>
        <p className="text-gray-400">
          I enjoy learning new technologies and continuously improving my skills. My focus is on writing clean, efficient, and scalable code while providing great user experiences.
        </p>
        <p className="text-gray-400 italic">
          “Strive for progress, not perfection.”
        </p>
      </motion.div>
    </section>
  );
};

export default About;
