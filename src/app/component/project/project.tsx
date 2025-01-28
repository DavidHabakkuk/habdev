"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  imageSrc: string;

  link: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    title: "The Ambassadors' church",
    
    imageSrc: "/images/pro.png",
    
    link: "https://example.com/project-ambassadors",
    repoLink: "https://github.com/DavidHabakkuk/church/",
  },
  {
    title: "Glory Realms Teens Ministry",
    imageSrc: "/images/realms.png",
    link: "https://www.gloryrealmsministries.org/",
    repoLink: "https://github.com/DavidHabakkuk/church/",
  },
  {
    title: "Glory Realms Teens Ministry",
    imageSrc: "/images/realms.png",
    link: "https://www.gloryrealmsministries.org/",
    repoLink: "https://github.com/DavidHabakkuk/church/",
  },
 
  
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  justify-between">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                />
              </div>
  
              <div className="p-3">
                <h2 className="text-3xl font-semibold text-white mb-3">
                  {project.title}
                </h2>
                
                
               
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition duration-300">
                      Visit Website
                    </button>
                  </Link>
                  <Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition duration-300">
                      GitHub Repository
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
