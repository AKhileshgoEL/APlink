// src/pages/FAQPage.jsx

import React from 'react';

export default function FAQPage() {
  const faqs = [
    {
      q: 'How do I access Loren Setup?',
      a: "Enter your details on the form and once verified, tap 'Open Loren Setup'.",
    },
    {
      q: 'I don’t know my TradingView ID.',
      a: "Click 'Need TradingView ID?' under the form. You will see a video guide.",
    },
    {
      q: 'My phone number shows not enrolled?',
      a: 'Ensure you used the same number used during bootcamp purchase.',
    },
    {
      q: 'Where can I watch recordings?',
      a: 'You can watch all recordings on TFU LMS through the LMS card on the homepage.',
    },
    {
      q: 'How to get support?',
      a: 'Click the WhatsApp floating button or call support at 9877582083.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        ❓ Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((item, i) => (
          <div key={i} className="bg-gray-100 p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">{item.q}</h3>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
