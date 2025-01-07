"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import Image from "next/image";
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
              className={`animate-bounce`}
              style={{ animationDelay }}
            />
          </Link>
        ))}

        {/* Rotating Logo */}
        <Link href="#top" className="group">
          <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden animate-spin">
            <Image
              src="/images/hab.png"
              alt="Habakkuk Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default SocialLinks;
