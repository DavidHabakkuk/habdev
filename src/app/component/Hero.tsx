"use client";

import React from "react";
import TypingAnimation from "./typing";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-6 md:px-12"
      style={{
        backgroundImage: "url('/images/habdev.svg')", // Replace with your image path
        backgroundSize: "contian",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-snug tracking-wide">
          <TypingAnimation />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge technology solutions.
        </p>
        <button
          className="mt-8 px-8 py-4 bg-blue-500 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
          onClick={() => window.location.href = "#services"}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
