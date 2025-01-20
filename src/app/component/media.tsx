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
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Import phone icon from solid icons

config.autoAddCss = false;

const SocialLinks: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 shadow-lg z-50">
      <div className="container mx-auto flex justify-center items-center gap-8">
        {/* Social Links */}
        {[
          {
            href: "https://www.linkedin.com/in/david-habakkuk-656030288/",
            icon: faLinkedin,
            color: "hover:text-blue-600",
            animationDelay: "0s",
          },
          {
            href: "https://github.com/DavidHabakkuk",
            icon: faGithub,
            color: "hover:text-gray-500",
            animationDelay: "0.2s",
          },
          {
            href: "https://instagram.com/yourprofile",
            icon: faInstagram,
            color: "hover:text-pink-500",
            animationDelay: "0.4s",
          },
          {
            href: "https://web.facebook.com/profile.php?id=100089536842727",
            icon: faFacebook,
            color: "hover:text-blue-500",
            animationDelay: "0.6s",
          },
          {
            href: "https://wa.me/+2349063704342",
            icon: faWhatsapp,
            color: "hover:text-green-500",
            animationDelay: "0.8s",
          },
          {
            href: "tel:09063704342", // Link to call
            icon: faPhone,
            color: "hover:text-green-400",
            animationDelay: "1s",
          },
        ].map(({ href, icon, color, animationDelay }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transition-colors duration-300 ${color}`}
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              className="animate-bounce"
              style={{ animationDelay }}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SocialLinks;
