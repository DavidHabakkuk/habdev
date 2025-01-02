"use client";

import React, { useEffect, useState } from "react";

const texts = [
  "Hello, I am <span class='text-blue-500'>David Habakkuk</span>.",
  "<span class='text-blue-500'>Frontend Developer</span>.",
];

const TypingAnimation: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Initial speed for typing

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setSpeed(120); // Faster when deleting
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        setSpeed(150); // Slower when typing
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setSpeed(200);
      }
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, textIndex, speed]);

  return (
    <div className="text-center max-w-4xl md:mt-[0rem] lg:mt-[3rem] z-20">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-snug tracking-wide text-white"
        dangerouslySetInnerHTML={{
          __html: `${displayText}<span class="animate-blink text-blue-500">|</span>`,
        }}
      />
    </div>
  );
};

export default TypingAnimation;
