"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-12 overflow-hidden">
      {/* Profile Image */}
      <div className="absolute top-16 md:top-10 lg:top-8 flex justify-center w-full z-10">
        <div className="relative">
          <Image
            src="/images/me.jpg"
            alt="David Habakkuk Profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-30 blur-lg z-[-1] animate-pulse"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-4xl mt-[22rem] md:mt-[15rem] lg:mt-[30rem] z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg leading-snug tracking-wide">
          Hello, I am <span className="text-blue-400">David Habakkuk</span>. <br />
          <span className="text-blue-500">Frontend Developer</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-8 drop-shadow-md leading-relaxed tracking-wide px-4 md:px-0">
          As a developer with a passion for innovation and a focus on building
          intricate software frameworks, I thrive on transforming challenges into
          scalable, elegant solutions. Let’s craft something extraordinary together.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button
            className="bg-blue-500 text-white rounded-full px-8 py-3 shadow-lg hover:bg-blue-600 transition duration-300"
            onClick={() => window.location.href = "#projects"}
          >
            View Projects
          </button>
          <a
            href="/files/David-Habakkuk-Resume.pdf"
            download
            className="bg-transparent border border-blue-500 text-blue-500 rounded-full px-8 py-3 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70 z-0"></div>
      <div className="absolute w-[150%] md:w-[200%] h-[150%] md:h-[200%] -top-1/2 -left-1/2 bg-gradient-radial from-blue-500/10 via-transparent to-transparent opacity-20 blur-3xl animate-spin-slow z-[-1]"></div>
    </section>
  );
};

export default Hero;
