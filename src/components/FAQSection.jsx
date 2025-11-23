import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

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
    <div
      id="faqs"
      className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm scroll-mt-32"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions (FAQ'S)
      </h2>

      {faqs.map((item, idx) => (
        <div key={idx} className="border-b border-gray-200 py-3">
          <button
            className="w-full text-left text-gray-900 font-semibold text-lg flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {item.q}
            <span>{openIndex === idx ? '−' : '+'}</span>
          </button>

          {openIndex === idx && (
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
