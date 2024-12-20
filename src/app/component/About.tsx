"use client";

import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20 lg:px-32 mt-23">
  
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-400">Me</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
         A secondary school graduate who aspires to join a higher institution to study <span className="text-blue-400">Computer Science</span>. With a deep curiosity about technology and programming, I’m preparing myself for a future in software development and innovation.
        </p>
      </div>

 
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8">
          My Surroundings
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
          I am surrounded by a vibrant group of talented individuals, including:
        </p>
        <ul className="list-disc list-inside mt-6 space-y-4 text-gray-300">
          <li>
            <span className="text-blue-500">Frontend Developers:</span> Who create interactive and user-friendly web and applications experiences.
          </li>
          <li>
            <span className="text-blue-500">Backend Developers:</span> Building robust and scalable server-side applications.
          </li>
          <li>
            <span className="text-blue-500">Graphic Designers:</span> Creating stunning visuals and illustrations.
          </li>
          <li>
            <span className="text-blue-500">Product designs :</span> Focusing on crafting visually appealing and functional designs.
          </li>
          <li>
            <span className="text-blue-500">Application Developers:</span> Focusing on crafting visually appealing and functional designs.
          </li>
          <li>
            And many other passionate professionals contributing to the tech ecosystem.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
