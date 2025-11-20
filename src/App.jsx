// import { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// // Import your logo images
// import dhanLogo from './assets/Dhan_logo.jpeg';
// import deltaLogo from './assets/Delta_Exchange_logo.png';

// export default function App() {
//   // Correct state variables
//   const [openStep1, setOpenStep1] = useState(false);
//   const [openStep2, setOpenStep2] = useState(false);

//   const apps = [
//     {
//       name: 'Dhan',
//       icon: dhanLogo,
//       link: 'https://join.dhan.co/?invite=RBEYP85374~OPT',
//       description: 'Stock & Options Trading Platform',
//     },
//     {
//       name: 'Delta Exchange',
//       icon: deltaLogo,
//       link: 'https://india.delta.exchange/?code=Pankajsahu',
//       description: 'Crypto & Forex Derivatives Platform',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-sans">
//       <div className="max-w-3xl mx-auto space-y-8">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           📚 Trading Resource Hub
//         </h1>

//         {/* Step 1 – Apps to Install */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2
//             className="text-xl font-semibold flex items-center justify-between cursor-pointer"
//             onClick={() => setOpenStep1(!openStep1)}
//           >
//             <span>Step 1 – Apps to Install</span>
//             <ChevronDown
//               className={`transition-transform ${
//                 openStep1 ? 'rotate-180' : 'rotate-0'
//               }`}
//             />
//           </h2>

//           {openStep1 && (
//             <div className="mt-4 space-y-4">
//               {/* Description */}
//               <p className="text-sm text-gray-600 mb-2">
//                 We request you all to open the account with the same broker as
//                 us, so that your strike price and premium will be the same.
//               </p>

//               {/* App links */}
//               {apps.map((app) => (
//                 <a
//                   key={app.name}
//                   href={app.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-between p-4 border rounded-xl hover:bg-blue-50 transition"
//                 >
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={app.icon}
//                       alt={`${app.name} logo`}
//                       className="w-10 h-10 object-contain rounded-lg"
//                     />
//                     <div>
//                       <p className="font-medium">{app.name}</p>
//                       <p className="text-sm text-gray-500">{app.description}</p>
//                     </div>
//                   </div>
//                   <span className="text-blue-600 font-medium">Install →</span>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Step 2 – Tutorials */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2
//             className="text-xl font-semibold flex items-center justify-between cursor-pointer"
//             onClick={() => setOpenStep2(!openStep2)}
//           >
//             <span>Step 2 – Installtion Guide </span>
//             <ChevronDown
//               className={`transition-transform ${
//                 openStep2 ? 'rotate-180' : 'rotate-0'
//               }`}
//             />
//           </h2>

//           {openStep2 && (
//             <div className="mt-4 space-y-4">
//               {/* Description */}
//               <p className="text-sm text-gray-600 mb-2">
//                 Kindly install the brokers accordingly and see tutorials if
//                 facing any issue.
//               </p>

//               {/* Tutorial links */}
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <a
//                   href="https://youtu.be/Jbbl7LGbMYo"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-center"
//                 >
//                   🎓 How to Use Dhan
//                 </a>

//                 <a
//                   href="https://www.youtube.com/watch?v=-UZKYJp2Jmo"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block bg-purple-50 hover:bg-purple-100 p-4 rounded-xl text-center"
//                 >
//                   🎓 How to Use Delta Exchange
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// App.jsx

// import Step2Tutorials from './components/Step2Tutorials';
// import Step3LMS from './components/Step3LMS';
// import Step4Loren from './components/Step4Loren';
// import Step1Apps from './components/Step1Apps';
// import LorenLanding from './pages/LorenLanding/LorenLanding';

// export default function App() {
//   return <LorenLanding />;
// }
import React from 'react';
import LorenSetupCard from './components/LorenSetupCard';
import LMSAccessCard from './components/LMSAccessCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">
          📚 Trading Resource Hub
        </h1>

        {/* LMS Card */}
        <LMSAccessCard />

        {/* Loren Setup Card */}
        <LorenSetupCard />
      </div>
    </div>
  );
}
