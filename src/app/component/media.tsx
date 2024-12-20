"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const Contact: React.FC = () => {
  return (
    <div className="fixed left-4 top-1/3  flex flex-col space-y-6 p-4 rounded-lg bg-transparent shadow-lg">
      <Link
        href="https://www.linkedin.com/in/david-habakkuk-656030288/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
      
      <Link
        href="https://github.com/DavidHabakkuk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>

      <Link
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>

      <Link
        href="https://web.facebook.com/profile.php?id=61554659567321"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </Link>

      <Link
        href="https://wa.me/+2349063704342"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </Link>
    </div>
  );
};

export default Contact;
