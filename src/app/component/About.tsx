"use client";

import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20 lg:px-32 mt-23">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-400">Me</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
          As a passionate Front-End Developer, I am always eager to solve problems and embrace new learning opportunities. Let’s collaborate and tackle challenges together.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          A secondary school graduate who aspires to join a higher institution
          to study <span className="text-blue-400">Computer Science</span>. With
          a deep curiosity about technology and programming, I’m preparing
          myself for a future in software development and innovation. I am also
          eager and passionate to learn new languages and other technical tools.
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
          My journey in technology is fueled by curiosity and a passion for problem-solving. I enjoy working with modern tools to create engaging user experiences and innovative solutions.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center mt-6">
          I am constantly honing my skills in web development and programming while exploring the limitless possibilities of the tech world. Collaboration and continuous learning are at the heart of everything I do.
        </p>
      </div>
    </section>
  );
};

export default About;
