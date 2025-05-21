'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold">My Dashboard</div>
      <div className="space-x-4">
        <Link href="/">Profile</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
