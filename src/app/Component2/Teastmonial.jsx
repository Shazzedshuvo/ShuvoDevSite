"use client";

import { motion } from "framer-motion";
import Background from "../Componnt/Bagground";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    message: "Shazzed is an amazing developer! Delivered the project on time with exceptional quality.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    message: "Working with Shazzed was a pleasure. Highly skilled and very professional.",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    message: "Creative and detail-oriented. Loved the collaboration and results!",
  },
];

const Testimonial = () => {
  return (
   <div>
    <Background></Background>
     <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-[#00bf8f]">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:shadow-[#00bf8f]/50 transition-all duration-300"
            >
              <p className="text-gray-300 mb-4">"{t.message}"</p>
              <h3 className="text-[#00bf8f] font-bold">{t.name}</h3>
              <span className="text-gray-400 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default Testimonial;
