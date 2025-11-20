import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import dhanLogo from '../assets/Dhan_logo.jpeg';
import deltaLogo from '../assets/Delta_Exchange_logo.png';

export default function Step1Apps() {
  const [open, setOpen] = useState(false);

  const apps = [
    {
      name: 'Dhan',
      icon: dhanLogo,
      link: 'https://join.dhan.co/?invite=RBEYP85374~OPT',
      description: 'Stock & Options Trading Platform',
    },
    {
      name: 'Delta Exchange',
      icon: deltaLogo,
      link: 'https://india.delta.exchange/?code=Pankajsahu',
      description: 'Crypto & Forex Derivatives Platform',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2
        className="text-xl font-semibold flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>Step # – Apps to Install</span>
        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </h2>

      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            We request you all to open the account with the same broker as us,
            so that your strike price and premium will be the same.
          </p>

          {apps.map((app) => (
            <a
              key={app.name}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border rounded-xl hover:bg-blue-50 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={app.icon}
                  alt={`${app.name} logo`}
                  className="w-10 h-10 object-contain rounded-lg"
                />
                <div>
                  <p className="font-medium">{app.name}</p>
                  <p className="text-sm text-gray-500">{app.description}</p>
                </div>
              </div>
              <span className="text-blue-600 font-medium">Install →</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
