import profile from '../app/data/profile.json';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4 text-center">
        <Image src="/profile.jpg" alt="Profile" width={120} height={120} className="rounded-full mx-auto" />
        <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
        <p className="mt-2">{profile.bio}</p>
        <p className="mt-2 text-sm text-gray-600">📧 {profile.email} | 📞 {profile.phone}</p>
      </div>
    </>
  );
}
