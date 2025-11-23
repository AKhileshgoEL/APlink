// import { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import lmsLogo from '../assets/LMS_logo.png'; // ✅ ensure this path is correct

// export default function LMSAccessCard() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all"
//       onClick={() => setOpen(!open)}
//     >
//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           {/* ✅ Replaced book icon with your LMS logo */}
//           <img
//             src={lmsLogo}
//             alt="LMS Logo"
//             className="w-8 h-8 rounded-md object-contain"
//           />
//           <h3 className="text-xl font-semibold text-white">
//             All Resources + Recordings
//           </h3>
//         </div>

//         <ChevronDown
//           className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ${
//             open ? 'rotate-180' : ''
//           }`}
//         />
//       </div>

//       {/* CONTENT */}
//       {open && (
//         <div className="mt-4 text-left text-gray-300 space-y-3 text-sm">
//           <p>📘 Platform to Access Recordings</p>
//           <ul className="list-disc ml-5 space-y-1">
//             {/* <li>Scan the QR Code</li> */}
//             <li>Click on "Go to LMS Platform"</li>
//             <li>Enter your Mobile Number</li>
//             <li>Click "View Course" </li>
//             <li>Access all the Recordings</li>
//           </ul>

//           {/* ✅ Button with actual link */}
//           <a
//             href="https://tfu.bio/learners-app-dashboard-link"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-5 rounded-lg transition"
//             onClick={(e) => e.stopPropagation()} // prevents closing card on click
//           >
//             Go to LMS Platform
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
// src/components/LMSAccessCard.jsx
import lmsLogo from '../assets/LMS_logo.png';

export default function LMSAccessCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      {/* Title + Logo */}
      <div className="flex items-center gap-3">
        <img src={lmsLogo} className="w-10 h-10 rounded-md" />
        <h3 className="text-2xl font-bold text-gray-900">LMS Platform</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Access all your course recordings, bootcamp content in one structured
        learning dashboard.
      </p>

      {/* Button */}
      <div className="mt-5">
        <a
          href="https://tfu.bio/learners-app-dashboard-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition"
        >
          Go to LMS Platform
        </a>
      </div>
    </div>
  );
}
