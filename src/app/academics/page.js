import Navbar from '../components/Navbar';
import profile from '../data/profile.json';
import { GraduationCap } from 'lucide-react'; // optional icon

export default function Academics() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen pt-20 px-4 pb-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 flex items-center justify-center gap-2">
            <GraduationCap className="w-6 h-6" /> Academic Background
          </h2>
          <div className="w-24 h-1 bg-indigo-400 mt-2 mx-auto rounded-full" />
        </div>

        {/* Card: BCA */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-indigo-600">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-gray-700 mt-2">
            {profile.education[0]?.institution || 'XYZ University'}
          </p>
          <p className="text-sm text-gray-500">{profile.education[0]?.year || '2022'}</p>
        </div>

        {/* Card: D.Pharm */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-indigo-600">Diploma in Pharmacy (D.Pharm)</h3>
          <p className="text-gray-700 mt-2">
            {profile.education[1]?.institution || 'Govt. College of Pharmacy'}
          </p>
          <p className="text-sm text-gray-500">{profile.education[1]?.year || '2020'}</p>
        </div>


        <div className=" pt-20 px-4 pb-10 max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 flex items-center justify-center gap-2">
            <GraduationCap className="w-6 h-6" /> Internships
          </h2>
          <div className="w-40 h-1 bg-indigo-400 mt-2 mx-auto rounded-full" />
        </div>

          {/* Internships */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-indigo-600">N. Alliance</h3>
          <p className="text-sm text-gray-500">Duration:{profile.internships[0].duration}</p>
        </div>

      </main>
    </>
  );
}

