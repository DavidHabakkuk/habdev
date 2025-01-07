"use client";

import React from "react";
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
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        My Skillset
      </h1>
      <div className="relative w-96 h-96 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full animate-spin-slow">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center justify-center"
              style={{
                transform: `rotate(${(360 / skills.length) * index}deg) translate(150px) rotate(-${
                  (360 / skills.length) * index
                }deg)`,
              }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm text-gray-400 mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
