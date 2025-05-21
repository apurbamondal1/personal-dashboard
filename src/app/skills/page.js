import Navbar from '../components/Navbar';
import profile from '../data/profile.json';

export default function Skills() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2">
          {profile.skills.map((skill, idx) => (
            <li key={idx} className="bg-gray-100 p-2 rounded shadow">{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
