import React from 'react';

 const Team: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8">
        My Team
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
        I have a vibrant group of talented individuals, including:
      </p>
      <ul
        className="list-disc list-inside mt-6 space-y-4 text-gray-300"
        role="list"
        aria-label="Team roles"
      >
        <li>
          <span className="text-blue-500">Frontend Developers:</span> Creating
          interactive and user-friendly web and application experiences.
        </li>
        <li>
          <span className="text-blue-500">Backend Developers:</span> Building
          robust and scalable server-side applications.
        </li>
        <li>
          <span className="text-blue-500">Graphic Designers:</span> Designing
          stunning visuals and illustrations.
        </li>
        <li>
          <span className="text-blue-500">Product Designers:</span> Crafting
          visually appealing and functional user-centered designs.
        </li>
        <li>
          <span className="text-blue-500">Application Developers:</span>{' '}
          Developing efficient and intuitive applications across platforms.
        </li>
        <li>
          And many other passionate professionals contributing to the tech
          ecosystem.
        </li>
      </ul>
    </section>
  );
};
export default Team;