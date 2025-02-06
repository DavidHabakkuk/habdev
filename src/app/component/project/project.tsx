"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "The Ambassadors' church",
    imageSrc: "/images/pro.png",
    link: "https://example.com/project-ambassadors",
    repoLink: "https://github.com/DavidHabakkuk/church/",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-900 py-20"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image src={project.imageSrc} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-3">
                <h2 className="text-3xl font-semibold text-white mb-3">{project.title}</h2>
                <div className="flex gap-4">
                  <Link href={project.link}>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md">Visit Website</button>
                  </Link>
                  <Link href={project.repoLink}>
                    <button className="bg-gray-700 text-white px-5 py-2 rounded-md">GitHub</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
