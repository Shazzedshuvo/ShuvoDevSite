"use client";

import { useEffect, useMemo, useState } from "react";
import Background from "../Componnt/Bagground";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

export default function Home1() {
  const roles = useMemo(() => ["Web Developer", "MERN Stack Developer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else if (!deleting && subIndex === current.length) {
          setDeleting(true);
        } else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  // Social links data
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaGithub />, href: "https://github.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaGlobe />, href: "https://yourwebsite.com" },
  ];

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden text-white flex items-center justify-center"
    >
      {/* Background Animation */}
      <Background />

      {/* Glow effects */}
      <div className="absolute -top-32 -left-32 w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6 md:px-12">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left space-y-5"
        >
          <div className="text-2xl sm:text-3xl font-mono mb-4">
            <span>{roles[index].substring(0, subIndex)}</span>
            <span className="animate-pulse">|</span>
          </div>

          <h1 className="text-[#00bf8f] text-2xl font-bold">Hi, I’m</h1>
          <span className="text-4xl font-bold block">Shazzed Shuvo</span>

          <p className="text-gray-300 max-w-xl">
            Hi, I’m Shazzed Shuvo — a passionate Web Developer and MERN Stack
            Developer. I love creating modern, responsive web applications that
            provide great user experiences and solve real problems.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="#projects"
              className="px-6 py-2 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] text-black font-semibold rounded-full shadow-lg hover:shadow-[#00bf8f]/50 transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-[#00bf8f] text-[#00bf8f] font-semibold rounded-full hover:bg-[#00bf8f] hover:text-black transition-colors duration-300 hover:scale-105"
            >
              My Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                className="text-white w-12 h-12 flex items-center justify-center rounded-full bg-[#00bf8f]/20 shadow-lg shadow-[#00bf8f]/40 hover:shadow-[#00bf8f]/70 transition-all duration-300 text-2xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <motion.img
            src="/22.jpg"
            alt="Shazzed Shuvo"
            className="w-72 md:w-96 rounded-2xl shadow-[0_0_40px_#00bf8f80]"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
