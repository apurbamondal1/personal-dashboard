import Navbar from '../components/Navbar';
import profile from '../data/profile.json';

export default function Academics() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Academic Background</h2>
        <ul className="list-disc list-inside">
          {profile.education.map((edu, idx) => (
            <li key={idx}>
              {edu.degree}, {edu.institution} ({edu.year})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
