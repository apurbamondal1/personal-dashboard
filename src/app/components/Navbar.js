'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Profile', href: '/' },
    { name: 'Academics', href: '/academics' },
    { name: 'Skills', href: '/skills' },
    { name: 'About', href: '/about' }
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Your Dashboard</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
