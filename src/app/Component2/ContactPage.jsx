"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { useRef } from "react";

const ContactPage = () => {
  const containerRef = useRef(null);

  // Mouse position motion value
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform for left & right sections
  const leftX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const leftY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const rightX = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
  const rightY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <motion.div
          style={{ x: leftX, y: leftY }}
          className="space-y-10 bg-[#111111]/50 p-6 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-[#00bf8f] border-l-4 border-[#00bf8f] pl-3">
            Contact Info
          </h2>

          <div className="flex items-start gap-4">
            <div className="bg-[#00bf8f]/20 p-3 rounded-full text-[#00bf8f]">
              <FiPhone size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-200">Phone:</p>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li>+012 345 678 102</li>
                <li>+012 345 678 203</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#00bf8f]/20 p-3 rounded-full text-[#00bf8f]">
              <FiMail size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-200">Email:</p>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li>email@here.com</li>
                <li>your@email.here</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#00bf8f]/20 p-3 rounded-full text-[#00bf8f]">
              <FiMapPin size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-200">Address:</p>
              <p className="text-gray-400 text-sm mt-1">
                123 Street Name, Crossroad, City, Country
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{ x: rightX, y: rightY }}
          className="bg-[#111111]/50 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-[#00bf8f] mb-8 border-l-4 border-[#00bf8f] pl-3">
            Get In Touch
          </h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-700 bg-transparent rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00bf8f] focus:outline-none text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-700 bg-transparent rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00bf8f] focus:outline-none text-white"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-700 bg-transparent rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00bf8f] focus:outline-none text-white"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-gray-700 bg-transparent rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00bf8f] focus:outline-none text-white resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-full bg-[#00bf8f] text-black py-3 rounded-lg font-semibold text-lg shadow-md"
            >
              <FiSend size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
