"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
<<<<<<< HEAD
    <section className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20 lg:px-32 mt-24">
      {/* Header with Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-20 z-30 flex items-center gap-3">
        <Image
          src="/images/hab.png"
          alt="HabDev Logo"
          width={50}
          height={50}
          className="rounded-full shadow-lg"
        />
        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text tracking-wider">
          Hab<span className="text-white">Dev</span>
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-20">
        {/* Profile Picture */}
        <div className="relative flex-shrink-0">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
            <Image
              src="/images/your-profile.jpg" // Replace with your profile image path
              alt="David Habakkuk"
              layout="responsive"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-30 blur-lg animate-pulse"></div>
        </div>

        {/* About Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto lg:mx-0">
            Hi, I’m David Habakkuk, a software developer with over 4 years of
            experience turning complex challenges into powerful digital
            solutions. My passion lies in bringing your ideas to life through
            modern, innovative technologies.
            <br />
            Whether it’s designing sleek user interfaces, building robust
            applications, or crafting end-to-end solutions, I thrive on
            delivering results that exceed expectations. Let’s collaborate to
            transform your dreams into reality!
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-10">
            <button
              className="bg-blue-500 text-white rounded-full px-10 py-3 shadow-lg hover:bg-blue-600 transition duration-300 text-lg"
              onClick={() => window.location.href = "#projects"}
            >
              View Projects
            </button>
            <a
              href="/files/David-Habakkuk-Resume.pdf"
              download
              className="bg-transparent border border-blue-500 text-blue-500 rounded-full px-10 py-3 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 text-lg"
            >
              Download Resume / CV
            </a>
          </div>
        </div>
=======
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
>>>>>>> 7c851d232b7a97eb6e3b2a3c3ae14ba3213c9d49
      </div>
    </section>
  );
};

export default About;
