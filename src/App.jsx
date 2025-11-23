// import React, { useState } from 'react';
// import LorenSetupCard from './components/LorenSetupCard';
// import LMSAccessCard from './components/LMSAccessCard';
// import FAQSection from './components/FAQSection';

// export default function App() {
//   const [playVideo, setPlayVideo] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-white font-sans">
//       {/* 🔶 TOP BAR WITH SUPPORT + GOOGLE FORM + BRANDING */}
//       <div className="w-full flex justify-between items-center px-6 py-4">
//         {/* LEFT SECTION → Support + Google Form */}
//         <div className="flex items-center gap-4">
//           {/* 📞 Support Button */}
//           <a
//             href="tel:9877582083"
//             className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition"
//           >
//             📞 Support: 9877582083
//           </a>

//           {/* 📝 Google Form Button */}
//           <a
//             href="https://forms.gle/yLfEve4vaL7KgYYc6"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 transition"
//           >
//             📝 Doubt Form
//           </a>
//         </div>

//         {/* Branding */}
//         <div className="text-lg font-bold tracking-wide text-yellow-300">
//           TRADEWISE
//         </div>
//       </div>

//       {/* MAIN WRAPPER */}
//       <div className="max-w-4xl mx-auto px-6 py-6 space-y-10">
//         {/* 📘 MAIN TITLE */}
//         <h1 className="text-4xl font-extrabold text-center tracking-wide">
//           📚 Intraday & Scalping Bootcamp
//           <span className="text-yellow-400"> with Pankaj Sahu</span>
//         </h1>

//         {/* 🎥 VIDEO SECTION */}
//         <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative">
//           {/* 👉 Thumbnail BEFORE Click */}
//           {!playVideo && (
//             <div
//               className="relative cursor-pointer"
//               onClick={() => setPlayVideo(true)}
//             >
//               <img
//                 src="https://img.youtube.com/vi/Jbbl7LGbMYo/maxresdefault.jpg"
//                 alt="Intro Video"
//                 className="w-full object-cover opacity-95"
//               />

//               {/* Play Button Overlay */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white/80 rounded-full p-5 shadow-lg hover:scale-110 transition">
//                   <span className="text-red-600 text-4xl">▶</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* 👉 YouTube Player AFTER Click */}
//           {playVideo && (
//             <iframe
//               className="w-full h-64 sm:h-96"
//               src="https://www.youtube.com/embed/Jbbl7LGbMYo?autoplay=1"
//               title="Bootcamp Intro Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
//               allowFullScreen
//             ></iframe>
//           )}
//         </div>

//         {/* 🔶 LMS + LOREN CARDS */}
//         <div className="space-y-6">
//           <LMSAccessCard />
//           <LorenSetupCard />
//         </div>

//         {/* ❓ FAQ SECTION */}
//         <FAQSection />
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import LorenSetupCard from './components/LorenSetupCard';
// import LMSAccessCard from './components/LMSAccessCard';
// import FAQSection from './components/FAQSection';

// import tradewiseLogo from './assets/tradewise_logo.png';

// export default function App() {
//   const [playVideo, setPlayVideo] = useState(false);

//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-sans">
//       {/* 🔶 HEADER — LOGO LEFT + SUPPORT NUMBER RIGHT */}
//       <header className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 shadow-sm bg-white">
//         {/* Left → Logo */}
//         <img
//           src={tradewiseLogo}
//           alt="Tradewise Logo"
//           className="w-28 object-contain"
//         />

//         {/* Right → Support Number */}
//         <a
//           href="tel:9877582083"
//           className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition"
//         >
//           📞 9877582083
//         </a>
//       </header>

//       {/* MAIN CONTENT WRAPPER */}
//       <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">
//         {/* 📘 HEADING (2 lines) */}
//         <div className="text-center">
//           <h1 className="text-4xl font-bold leading-tight">
//             Intraday & Scalping
//           </h1>
//           <h2 className="text-3xl font-semibold mt-1 text-yellow-600">
//             with Pankaj Sahu
//           </h2>
//         </div>

//         {/* 🎥 VIDEO SECTION */}
//         <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-300 relative">
//           {/* Thumbnail BEFORE clicking */}
//           {!playVideo && (
//             <div
//               className="relative cursor-pointer"
//               onClick={() => setPlayVideo(true)}
//             >
//               <img
//                 src="https://img.youtube.com/vi/Jbbl7LGbMYo/maxresdefault.jpg"
//                 alt="Intro Video Thumbnail"
//                 className="w-full object-cover"
//               />

//               {/* Circular Play Button */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white rounded-full p-6 shadow-lg hover:scale-110 transition">
//                   <span className="text-red-600 text-4xl">▶</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Video AFTER clicking */}
//           {playVideo && (
//             <iframe
//               className="w-full h-64 sm:h-96"
//               src="https://www.youtube.com/embed/Jbbl7LGbMYo?autoplay=1"
//               title="Bootcamp Intro Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
//               allowFullScreen
//             ></iframe>
//           )}
//         </div>

//         {/* 🔶 CARDS SECTION (Redesigned inside component files) */}
//         <div className="space-y-6">
//           <LMSAccessCard />
//           <LorenSetupCard />
//         </div>

//         {/* ❓ FAQ SECTION */}
//         <FAQSection />
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import LorenSetupCard from './components/LorenSetupCard';
import LMSAccessCard from './components/LMSAccessCard';
import DoubtFormCard from './components/DoubtFormCard';
import FAQSection from './components/FAQSection';

import tradewiseLogo from './assets/tradewise_logo.png';

export default function App() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full flex justify-between items-center px-6 py-2 border-b border-gray-200 shadow-sm bg-white">
        <img src={tradewiseLogo} alt="Tradewise Logo" className="w-20" />

        <a
          href="tel:9877582083"
          className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold shadow hover:bg-yellow-500 transition"
        >
          📞 9877582083
        </a>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-5 py-3 space-y-3">
        {/* HEADING */}
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight">
            Intraday & Scalping
          </h1>
          <h2 className="text-3xl font-semibold mt-1 text-yellow-600">
            with Pankaj Sahu
          </h2>
        </div>

        {/* VIDEO SECTION */}
        <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-300 relative">
          {!playVideo ? (
            <div
              className="relative cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <img
                src="https://img.youtube.com/vi/Jbbl7LGbMYo/maxresdefault.jpg"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-6 shadow-lg hover:scale-110 transition">
                  <span className="text-red-600 text-4xl">▶</span>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-64 sm:h-96"
              src="https://www.youtube.com/embed/Jbbl7LGbMYo?autoplay=1"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* CARDS SECTION */}
        <div className="space-y-3">
          <LMSAccessCard />
          <LorenSetupCard />
          <DoubtFormCard /> {/* 👈 NEW DOUBT FORM CARD ADDED */}
        </div>

        {/* FAQ SECTION */}
        <FAQSection />
      </div>
    </div>
  );
}
