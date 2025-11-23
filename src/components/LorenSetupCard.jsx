// import { useState } from 'react';
// import { Settings, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function LorenSetupCard() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all"
//       onClick={() => setOpen(!open)}
//     >
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <Settings className="w-6 h-6 text-green-400" />
//           <h3 className="text-xl font-semibold text-white">Loren Setup</h3>
//         </div>
//         <ChevronDown
//           className={`w-6 h-6 text-green-400 transition-transform duration-300 ${
//             open ? 'rotate-180' : ''
//           }`}
//         />
//       </div>

//       {open && (
//         <div className="mt-4 text-left text-gray-300 space-y-3 text-sm">
//           <p>
//             ⚙️ Access and configure your trading setup through our dedicated
//             Loren platform.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 mt-4">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate('/loren-setup'); // should match your Router path
//               }}
//               className="flex-1 bg-green-400 hover:bg-green-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition"
//             >
//               Access Loren Setup
//             </button>

//             <a
//               href="https://example.com/loren-setup-tutorial"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => e.stopPropagation()}
//               className="flex-1 text-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition"
//             >
//               Watch Tutorial
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// src/components/LorenSetupCard.jsx
import { useNavigate } from 'react-router-dom';

export default function LorenSetupCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">Loren Setup</h3>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {/* Configure and access your complete trading setup developed for Intraday
        & Scalping. Get step-by-step access and verification to unlock your
        setup. */}
        Access your complete Intraday & Scalping setup with step-by-step
        guidance.
      </p>

      {/* Buttons */}
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate('/loren-setup')}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition"
        >
          Access Loren Setup
        </button>

        <a
          href="https://drive.google.com/file/d/1p3FRoFz2eTpuexlr98EViipMH-L4jAp_/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Watch Tutorial
        </a>
      </div>
    </div>
  );
}
