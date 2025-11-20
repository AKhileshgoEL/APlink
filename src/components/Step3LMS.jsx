import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import lmsLogo from '../assets/LMS_logo.png';

export default function Step3LMS() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2
        className="text-xl font-semibold flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>Step 2 – LMS / TFU Learners App</span>
        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </h2>

      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            Install the LMS or TFU Learners app to access recordings of all
            sessions.
          </p>

          <a
            href="https://tfu.bio/learners-app-dashboard-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border rounded-xl hover:bg-green-50 transition"
          >
            <img
              src={lmsLogo}
              alt="LMS Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
            <p className="font-medium">Install TFU Learners App</p>
          </a>
        </div>
      )}
    </div>
  );
}
