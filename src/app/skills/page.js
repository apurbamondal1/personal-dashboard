'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import profile from '../data/profile.json';

export default function Skills() {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / docHeight, 1);

      const red = Math.floor(255 * scrollPercent);
      const green = Math.floor(180 * (1 - scrollPercent));
      const blue = 200;

      if (indicatorRef.current) {
        indicatorRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen pt-20 px-4 pb-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-700">Skills</h2>
          <div className="w-24 h-1 bg-indigo-500 mt-2 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Static Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2 z-0" />

          {/* Scroll-Responsive Color Line */}
          <div
            ref={indicatorRef}
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 z-10 transition-colors duration-300"
          />

          {/* Cards */}
          <div className="space-y-8 relative z-20">
            {profile.skills.map((skill, idx) => (
           <div
           key={idx}
           className="bg-white p-6 rounded-xl shadow-md w-full text-center border border-gray-200
                      hover:scale-105 hover:shadow-lg hover:bg-indigo-50
                      transition-transform transition-shadow duration-300"
         >
           <h3 className="text-xl text-black font-semibold">
             {skill}
           </h3>
         </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
