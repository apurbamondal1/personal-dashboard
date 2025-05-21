'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import profile from '../data/profile.json';

export default function About() {
  const pointerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const container = lineRef.current;
      if (!container || !pointerRef.current) return;

      const rect = container.getBoundingClientRect();
      const y = e.clientY - rect.top;

      // Clamp to container height
      const clampedY = Math.max(0, Math.min(y, rect.height));
      pointerRef.current.style.top = `${clampedY}px`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen pt-20 px-4 pb-10">
        <div className="max-w-4xl mx-auto relative flex flex-col gap-12 items-center">
          {/* Vertical Divider with dynamic pointer */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2 z-0"
          >
            <div
              ref={pointerRef}
              className="absolute w-4 h-4 rounded-full bg-sky-400 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-75"
            />
          </div>

          {/* Goals Card */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl relative z-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">🎯 Goals</h2>
            <p className="text-gray-700 leading-relaxed">{profile.goals}</p>
          </div>

          {/* Hobbies Card */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl relative z-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">🎨 Hobbies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {profile.hobbies.map((hobby, idx) => (
                <li key={idx}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

