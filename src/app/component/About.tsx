"use client";

import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20 lg:px-32">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          About <span className="text-blue-400">Me</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center mb-6">
          A Front-End Developer who loves creating simple and beautiful user experiences. I enjoy solving problems and learning new things every day.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center mb-6">
          I’m a secondary school graduate working towards studying <span className="text-blue-400">Computer Science</span>. I’m curious about how technology works and love exploring programming and design.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
          My goal is to grow my skills and contribute to exciting projects. I believe in teamwork, continuous learning, and building solutions that make life easier for everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
