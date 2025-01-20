"use client";

import React, { useEffect, useState } from "react";

const texts = [
  "Welcome to <span class='text-blue-500'>HabDev</span>,",
  "<span class='text-blue-500'>A Software Development Company</span>,",
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
        setSpeed(120);
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
    <section className="min-h-screen flex items-center justify-center bg-navy-800 text-white relative">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-wide transition-all"
          dangerouslySetInnerHTML={{
            __html: `${displayText}<span class="animate-blink text-blue-500">|</span>`,
          }}
        />
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Discover the power of innovative software tailored for you.
        </p>
        <p className="mt-2 text-lg md:text-xl opacity-80">
          We help businesses thrive with cutting-edge solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
