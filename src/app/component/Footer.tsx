"use client";

import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => setYear(new Date().getFullYear());
    updateYear();
  }, []);

  return (
    <footer className="fixed right-0 top-0 bottom-0 flex items-center justify-center   text-white w-25">
      <div className="text-center transform rotate-90">
        <p className="text-xs md:text-sm inline  ">
          © {year} <span className="font-bold">
            Hab 
            <span className="text-blue-500">Tech</span>
        
          </span>
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
