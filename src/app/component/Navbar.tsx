"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 shadow-lg z-50 ">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link
              href="#home"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
            
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link href="#home" className="group">
          <div className="w-16 h-16 flex items-center justify-center  rounded-full overflow-hidden">
            <Image
              src="/images/hab.png" 
              alt="Habakkuk Logo"
              width={50}
              height={50}
              className="rounded-full group-hover:animate-spin transition-transform duration-500"
            />
          </div>
        </Link>
      </div>
     
    </nav>
  );
};

export default Navbar;