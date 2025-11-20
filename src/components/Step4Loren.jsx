import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import lorenLogo from '../assets/Loren_logo.svg';

export default function Step4Loren() {
  const [open, setOpen] = useState(false);

  // Open landing page in new tab (no tracking)
  const handleLorenClick = () => {
    window.open('/loren-landing', '_blank'); // just open, no logging
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2
        className="text-xl font-semibold flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>Step 1 – Loren Setup</span>
        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </h2>

      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            Follow the steps below to set up Loren.
          </p>

          {/* Loren Link */}
          <button
            onClick={handleLorenClick}
            className="flex items-center gap-3 p-4 border rounded-xl hover:bg-yellow-50 transition w-full"
          >
            <img
              src={lorenLogo}
              alt="Loren Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
            <span className="font-medium">Open Loren Setup</span>
          </button>

          {/* Drive Video Link */}
          <a
            href="https://drive.google.com/your-loren-video-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border rounded-xl hover:bg-yellow-50 transition"
          >
            <span className="font-medium">Video Guide – How to Use Loren</span>
          </a>
        </div>
      )}
    </div>
  );
}
