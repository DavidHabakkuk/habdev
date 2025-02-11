"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-shrink-0 group"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
            <Image
              src="/images/profile.png"
              alt="David Habakkuk"
              width={256}
              height={256}
              className="object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-30 blur-lg animate-pulse"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto lg:mx-0">
            I&apos;m David Habakkuk, a software developer with over 4 years of
            experience turning complex challenges into powerful digital
            solutions. My passion lies in bringing your ideas to life through
            modern, innovative technologies.
            <br />
            Whether it&rsquo;s designing sleek user interfaces, building robust
            applications, or crafting end-to-end solutions, I thrive on
            delivering results that exceed expectations. Let&rsquo;s collaborate to
            transform your dreams into reality!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-10">
            <button
              className="bg-blue-500 text-white rounded-full px-10 py-3 shadow-lg hover:bg-blue-600 transition duration-300 text-lg transform hover:translate-y-1"
              onClick={() => (window.location.href = "#projects")}
            >
              View Projects
            </button>
            <a
              href="/doc/habakkuk_CV.pdf"
              download
              className="bg-transparent border border-blue-500 text-blue-500 rounded-full px-10 py-3 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 text-lg transform hover:translate-y-1"
            >
              Download Resume / CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;






