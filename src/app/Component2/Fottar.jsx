"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaGithub />, href: "https://github.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaGlobe />, href: "https://yourwebsite.com" },
  ];

  return (
    <motion.footer
      className="w-full bg-black text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-bold text-[#00bf8f]">Shazzed Shuvo</div>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
            “Strive for progress, not perfection.”  
            <br />
            Building modern web experiences with passion and creativity.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-[#00bf8f]/20 shadow-lg shadow-[#00bf8f]/40 hover:shadow-[#00bf8f]/70 transition-all duration-300 text-xl"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-gray-400 text-sm">
          © {new Date().getFullYear()} Shazzed Shuvo. All rights reserved.
          <br />
          Keep learning, keep building, keep growing! 🚀
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
