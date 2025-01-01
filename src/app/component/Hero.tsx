"use client";

import React from "react";
import Image from "next/image";
import TypingAnimation from "./typing";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-12 overflow-hidden">
      {/* Fixed Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-20 z-30 flex items-center gap-2">
        <Image
          src="/images/hab.png"
          alt="HabDev Logo"
          width={50}
          height={50}
          className="rounded-full shadow-lg"
        />
        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text tracking-wider shadow-md">
          Hab<span className="text-white">Dev</span>
        </span>
      </div>

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

      
      <div className="text-center max-w-4xl mt-[10rem] md:mt-[15rem] lg:mt-[20rem] z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg leading-snug tracking-wide">
          <TypingAnimation/>
          
          </h1>
        
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

    
    </section>
  );
};

export default Hero;
