import Navbar from '../components/Navbar';
import profile from '../data/profile.json';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Goals</h2>
        <p>{profile.goals}</p>

        <h2 className="text-xl font-semibold">Hobbies</h2>
        <ul className="list-disc list-inside">
          {profile.hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
