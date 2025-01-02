'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    emailjs
      .sendForm(
        'service_fkht90f',   // Replace with your service ID
        'template_wpu5xmj',  // Replace with your template ID
        form.current,        // The form you want to submit
        'KrVtehMRZrvBYeAhv'  // Replace with your public key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setResponseMessage('Message sent successfully!');
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          setIsSubmitting(false);
          setResponseMessage('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Contact me</h1>
        <p className="text-2xl font-bold text-center mb-8">
          Let's connect and solve the massive problem together.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-500 mb-4"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {responseMessage && (
            <p
              className={`mt-4 text-center ${responseMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}
            >
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
