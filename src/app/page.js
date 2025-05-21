import profile from '../app/data/profile.json';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={120}
      height={120}
      className="rounded-full mx-auto shadow-md"
    />
    <h1 className="text-2xl font-bold mt-4 text-indigo-600">{profile.name}</h1>
    <p className="mt-2 text-gray-700">{profile.bio}</p>
    <p className="mt-2 text-sm text-gray-500">
      📧 {profile.email} <br /> 📞 {profile.phone}
    </p>
  </div>
</div>


    </>
  );
}
