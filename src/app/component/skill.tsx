"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-red-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <SiNextdotjs className="text-gray-500" />, name: "Next.js" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
];

const SkillsPage = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-20 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
        My Skillset
      </h1>

      {/* Rotating Circular Skill Icons with Drop Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-96 h-96 flex items-center justify-center"
      >
        {/* Rotating Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const radius = 150; // Adjust circle size

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                className="absolute flex flex-col items-center"
                style={{
                  left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
                  top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-sm text-gray-400 mt-2">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsPage;
