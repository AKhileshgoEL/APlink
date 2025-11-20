import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Step2Tutorials() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2
        className="text-xl font-semibold flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>Step $ – Tutorials for Installation</span>
        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </h2>

      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            Kindly install the brokers accordingly and see tutorials if facing
            any issue.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.youtube.com/watch?v=-UZKYJp2Jmo"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-center"
            >
              🎓 How to Use Dhan
            </a>

            <a
              href="https://www.youtube.com/watch?v=-UZKYJp2Jmo"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-purple-50 hover:bg-purple-100 p-4 rounded-xl text-center"
            >
              🎓 How to Use Delta Exchange
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
