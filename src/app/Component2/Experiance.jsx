"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Company",
    duration: "Jan 2022 - Present",
    description: "Developed responsive web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    role: "MERN Stack Developer",
    company: "Startup Inc.",
    duration: "Jun 2020 - Dec 2021",
    description: "Built full-stack applications using MongoDB, Express.js, React, and Node.js.",
  },
  {
    role: "Intern",
    company: "Web Solutions",
    duration: "Jan 2020 - May 2020",
    description: "Assisted in building web projects and improving UI/UX design.",
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-[#00bf8f] text-center mb-12">My Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:shadow-[#00bf8f]/50 transition-all duration-300"
            >
              <h3 className="text-[#00bf8f] font-bold text-xl">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-2">{exp.company} | {exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
