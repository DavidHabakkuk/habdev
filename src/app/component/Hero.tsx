"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { LiaCalendarCheckSolid } from "react-icons/lia";

const texts = [
  "Welcome to <span class='text-blue-500'>HabDev</span>,",
  "<span class='text-blue-500'>A Software Solution  Company</span>,",
  "Building your <span class='text-blue-500'>dreams</span> into reality.",
];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setSpeed(100);
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setSpeed(200);
      }
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, textIndex, speed]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-900 text-white relative">
      <div className="fixed top-4 left-4 md:top-6 md:left-20 z-30 flex items-center gap-3 animate-fade-in-down">
       <LiaCalendarCheckSolidink href="/">
       <Image
          src="/images/hab.png"
          alt="HabDev Logo"
          width={50}
          height={50}
          className="rounded-full shadow-lg"
        />
       </Link>

        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text tracking-wider">
          Hab<span className="text-white">Tech</span>
        </span>
      </div>
      <div className="flex flex-col items-center text-center px-6 mt-20 md:mt-32 lg:mt-40 animate-fade-in">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight inline-block pb-2"
          dangerouslySetInnerHTML={{
            __html: `${displayText}<span class="animate-blink text-blue-500">|</span>`,
          }}
        />
        <p className="mt-6 text-lg md:text-2xl text-gray-400 max-w-3xl transition-transform duration-700 hover:translate-x-1">
          We specialize in creating modern, innovative software solutions that drive growth and transform ideas into reality.
        </p>
      </div>
    </section>
  );
};

export default Hero;
