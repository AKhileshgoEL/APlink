import React from 'react';
import { X } from 'lucide-react';

export default function FAQModal({ open, onClose }) {
  if (!open) return null;

  const faqs = [
    {
      q: 'When will I get the LMS access?',
      a: 'You get LMS access immediately after enrollment.',
    },
    {
      q: 'Where can I watch recordings?',
      a: 'All recordings are available inside the LMS dashboard.',
    },
    {
      q: 'How to access Loren Setup?',
      a: 'Fill the verification form, and once verified, you can access Loren Setup.',
    },
    {
      q: 'What if my phone number is not found?',
      a: 'Make sure you entered the same mobile number used during enrollment.',
    },
    {
      q: 'Who can I contact for support?',
      a: 'You can call us at 9877582083 for urgent help.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-gray-300 shadow-2xl rounded-2xl p-6 w-[90%] max-w-lg animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 bg-white/60 rounded-full p-2 shadow hover:bg-white transition"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          FAQs — Frequently Asked Questions
        </h2>

        {/* FAQ CONTENT */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="bg-white/60 p-3 rounded-lg border border-gray-300 cursor-pointer"
            >
              <summary className="font-semibold text-gray-900">
                {item.q}
              </summary>
              <p className="text-gray-700 mt-2 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
