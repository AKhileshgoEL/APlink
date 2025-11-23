// // src/components/FloatingButtons.jsx
// import { HelpCircle, MessageCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function FloatingButtons() {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
//       {/* Floating Help Button */}
//       <button
//         onClick={() => navigate('/faq')}
//         className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-110"
//       >
//         <HelpCircle className="w-6 h-6" />
//       </button>

//       {/* WhatsApp CTA */}
//       <a
//         href="https://wa.me/9056748655"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-110"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </a>
//     </div>
//   );
// }
// import React from "react";
// import { HelpCircle, MessageCircle } from "lucide-react";

// export default function FloatingButtons() {
//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

//       {/* FAQ BUTTON */}
//       <div className="relative group flex items-center justify-end">
//         {/* The expanding card (only appears on hover) */}
//         <div
//           className="absolute right-14 opacity-0 pointer-events-none
//                      group-hover:opacity-100 group-hover:pointer-events-auto
//                      transition-all duration-300
//                      bg-white/20 backdrop-blur-xl border border-white/30
//                      shadow-xl rounded-xl px-4 py-2 whitespace-nowrap
//                      text-gray-900 font-semibold text-sm"
//         >
//           ❓ Frequently Asked Questions
//         </div>

//         {/* The original circular button (unchanged) */}
//         <a
//           href="#faqs"
//           className="w-14 h-14 flex items-center justify-center
//                      bg-yellow-500 text-white rounded-full shadow-lg
//                      transition-all duration-300
//                      hover:scale-110 hover:rotate-180 cursor-pointer"
//         >
//           <HelpCircle className="w-7 h-7" />
//         </a>
//       </div>

//       {/* WHATSAPP BUTTON */}
//       <div className="relative group flex items-center justify-end">
//         {/* The expanding card */}
//         <div
//           className="absolute right-14 opacity-0 pointer-events-none
//                      group-hover:opacity-100 group-hover:pointer-events-auto
//                      transition-all duration-300
//                      bg-white/20 backdrop-blur-xl border border-white/30
//                      shadow-xl rounded-xl px-4 py-2 whitespace-nowrap
//                      text-gray-900 font-semibold text-sm"
//         >
//           💬 WhatsApp Support
//         </div>

//         {/* The original circular button (unchanged) */}
//         <a
//           href="https://wa.me/9056748655"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-14 h-14 flex items-center justify-center
//                      bg-green-500 text-white rounded-full shadow-lg
//                      transition-all duration-300
//                      hover:scale-110 hover:rotate-180 cursor-pointer"
//         >
//           <MessageCircle className="w-7 h-7" />
//         </a>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import { HelpCircle, MessageCircle } from 'lucide-react';

// export default function FloatingButtons() {
//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
//       {/* FAQ BUTTON */}
//       <div className="relative group flex items-center justify-end">
//         {/* The expanding card (only appears on hover) */}
//         <div
//           className="absolute right-14 opacity-0 pointer-events-none
//                      group-hover:opacity-100 group-hover:pointer-events-auto
//                      transition-all duration-300
//                      bg-white/20 backdrop-blur-xl border border-white/30
//                      shadow-xl rounded-xl px-4 py-2 whitespace-nowrap
//                      text-gray-900 font-semibold text-sm"
//         >
//           Frequently Asked Questions
//         </div>

//         {/* The original circular button (unchanged) */}
//         <a
//           href="#faqs"
//           className="w-14 h-14 flex items-center justify-center
//                      bg-yellow-500 text-white rounded-full shadow-lg
//                      transition-all duration-300
//                      hover:scale-110 hover:rotate-180 cursor-pointer"
//         >
//           <HelpCircle className="w-7 h-7" />
//         </a>
//       </div>

//       {/* WHATSAPP BUTTON */}
//       <div className="relative group flex items-center justify-end">
//         {/* The expanding card */}
//         <div
//           className="absolute right-14 opacity-0 pointer-events-none
//                      group-hover:opacity-100 group-hover:pointer-events-auto
//                      transition-all duration-300
//                      bg-white/20 backdrop-blur-xl border border-white/30
//                      shadow-xl rounded-xl px-4 py-2 whitespace-nowrap
//                      text-gray-900 font-semibold text-sm"
//         >
//           💬 WhatsApp Support
//         </div>

//         {/* The original circular button (unchanged) */}
//         <a
//           href="https://wa.me/9056748655"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-14 h-14 flex items-center justify-center
//                      bg-green-500 text-white rounded-full shadow-lg
//                      transition-all duration-300
//                      hover:scale-110 hover:rotate-180 cursor-pointer"
//         >
//           <MessageCircle className="w-7 h-7" />
//         </a>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import { MessageCircle, HelpCircle } from 'lucide-react';

// export default function FloatingButtons() {
//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
//       {/* ✨ FAQ BUTTON */}
//       <a href="#faqs" className="group relative flex items-center">
//         {/* Hover Label */}
//         <div
//           className="
//           absolute right-14 opacity-0 group-hover:opacity-100
//           bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl
//           transition-all duration-300 transform translate-x-3 group-hover:translate-x-0
//           backdrop-blur-md border border-gray-200
//         "
//         >
//           <span className="font-semibold">Frequently Asked Questions</span>
//         </div>

//         {/* Icon Circle */}
//         <div
//           className="
//           w-14 h-14 flex items-center justify-center rounded-full
//           bg-white shadow-xl border border-gray-200 cursor-pointer
//           transition-transform duration-300 group-hover:scale-110
//         "
//         >
//           <HelpCircle
//             className="
//             w-7 h-7 text-yellow-600 transition-transform duration-300
//             group-hover:rotate-12
//           "
//           />
//         </div>
//       </a>

//       {/* ✨ WHATSAPP BUTTON */}
//       <a
//         href="https://wa.me/9056748655"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="group relative flex items-center"
//       >
//         {/* Hover Label */}
//         <div
//           className="
//           absolute right-14 opacity-0 group-hover:opacity-100
//           bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl
//           transition-all duration-300 transform translate-x-3 group-hover:translate-x-0
//           backdrop-blur-md border border-green-600
//         "
//         >
//           <span className="font-semibold">WhatsApp Support</span>
//         </div>

//         {/* Icon Circle */}
//         <div
//           className="
//           w-14 h-14 flex items-center justify-center rounded-full
//           bg-green-500 shadow-lg border border-green-600 cursor-pointer
//           transition-transform duration-300 group-hover:scale-110
//         "
//         >
//           <MessageCircle
//             className="
//             w-7 h-7 text-white transition-transform duration-300
//             group-hover:rotate-12
//           "
//           />
//         </div>
//       </a>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';
import FAQModal from './FAQModal';

export default function FloatingButtons() {
  const [openFAQ, setOpenFAQ] = useState(false);

  return (
    <>
      {/* MODAL */}
      <FAQModal open={openFAQ} onClose={() => setOpenFAQ(false)} />

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* ✨ FAQ BUTTON */}
        <button
          onClick={() => setOpenFAQ(true)}
          className="group relative flex items-center"
        >
          {/* Hover Text */}
          <div
            className="
            absolute right-14 opacity-0 group-hover:opacity-100 
            bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl 
            transition-all duration-300 transform translate-x-3 group-hover:translate-x-0
            backdrop-blur-md border border-gray-200
            "
          >
            <span className="font-semibold">Frequently Asked Questions</span>
          </div>

          {/* Icon */}
          <div
            className="
            w-14 h-14 flex items-center justify-center rounded-full 
            bg-white shadow-xl border border-gray-200 cursor-pointer
            transition-transform duration-300 group-hover:scale-110
            "
          >
            <HelpCircle
              className="
              w-7 h-7 text-yellow-600 transition-transform duration-300
              group-hover:rotate-12
              "
            />
          </div>
        </button>

        {/* ✨ WHATSAPP BUTTON */}
        <a
          href="https://wa.me/9056748655"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          {/* Hover Label */}
          <div
            className="
            absolute right-14 opacity-0 group-hover:opacity-100 
            bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl
            transition-all duration-300 transform translate-x-3 group-hover:translate-x-0
            backdrop-blur-md border border-green-600
            "
          >
            <span className="font-semibold">WhatsApp Support</span>
          </div>

          {/* Icon */}
          <div
            className="
            w-14 h-14 flex items-center justify-center rounded-full 
            bg-green-500 shadow-lg border border-green-600 cursor-pointer
            transition-transform duration-300 group-hover:scale-110
            "
          >
            <MessageCircle
              className="
              w-7 h-7 text-white transition-transform duration-300
              group-hover:rotate-12
              "
            />
          </div>
        </a>
      </div>
    </>
  );
}
