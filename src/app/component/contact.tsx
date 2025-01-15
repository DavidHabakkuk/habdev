"use client";

<<<<<<< HEAD
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
=======
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
>>>>>>> 7c851d232b7a97eb6e3b2a3c3ae14ba3213c9d49

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      await emailjs.sendForm(
        "service_fkht90f", // Replace with your service ID
        "template_wpu5xmj", // Replace with your template ID
        form.current!,
        "KrVtehMRZrvBYeAhv" // Replace with your public key
      );
      setResponseMessage("Message sent successfully!");
      form.current?.reset();
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
        <p className="text-2xl font-bold text-center mb-8">
          Let's connect and solve problems together.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-700 text-white rounded focus:ring focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-700 text-white rounded focus:ring focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring focus:ring-blue-500 mb-4"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-blue-600 rounded ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <p
              className={`mt-4 text-center ${
                responseMessage.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </section>
=======
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
>>>>>>> 7c851d232b7a97eb6e3b2a3c3ae14ba3213c9d49
  );
};

export default ContactForm;
