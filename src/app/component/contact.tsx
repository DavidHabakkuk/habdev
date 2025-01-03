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

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed left-4 top-1/3 flex flex-col space-y-6 p-4 rounded-lg bg-transparent shadow-lg">
      {[
        {
          href: "https://www.linkedin.com/in/david-habakkuk-656030288/",
          icon: faLinkedin,
          color: "hover:text-blue-600",
        },
        {
          href: "https://github.com/DavidHabakkuk",
          icon: faGithub,
          color: "hover:text-gray-500",
        },
        {
          href: "https://instagram.com/yourprofile",
          icon: faInstagram,
          color: "hover:text-pink-500",
        },
        {
          href: "https://web.facebook.com/profile.php?id=100089536842727",
          icon: faFacebook,
          color: "hover:text-blue-500",
        },
        {
          href: "https://wa.me/+2349063704342",
          icon: faWhatsapp,
          color: "hover:text-green-500",
        },
      ].map(({ href, icon, color }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-300 ${color}`}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
