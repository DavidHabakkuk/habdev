"use client";

import React from "react";
import Image from "next/image";


const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 shadow-lg z-50">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <a href="#home" onClick={(e) => handleScroll(e, "home")} className="group">
          <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden">
            <Image
              src="/images/hab.png"
              alt="Habakkuk Logo"
              width={50}
              height={50}
              className="rounded-full group-hover:animate-spin transition-transform duration-500"
            />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
