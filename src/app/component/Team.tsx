"use client";

import React from "react";
import { motion } from "framer-motion";

const Team: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
      {/* Title & Description (Motion from Bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          My Team
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          I have a vibrant group of talented individuals, including:
        </p>
      </motion.div>

      {/* Team List (Staggered Motion from Bottom) */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, duration: 1, ease: "easeOut" },
          },
        }}
        className="list-disc list-inside mt-6 space-y-4 text-gray-300"
        role="list"
        aria-label="Team roles"
      >
        {[
          {
            role: "Frontend Developers",
            description:
              "Creating interactive and user-friendly web and application experiences.",
          },
          {
            role: "Backend Developers",
            description:
              "Building robust and scalable server-side applications.",
          },
          {
            role: "Graphic Designers",
            description: "Designing stunning visuals and illustrations.",
          },
          {
            role: "Product Designers",
            description:
              "Crafting visually appealing and functional user-centered designs.",
          },
          {
            role: "Application Developers",
            description:
              "Developing efficient and intuitive applications across platforms.",
          },
          {
            role: "Other Professionals",
            description:
              "And many other passionate professionals contributing to the tech ecosystem.",
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-blue-500">{item.role}:</span> {item.description}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Team;
