import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TVHelp() {
  const [playVideo, setPlayVideo] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col items-center">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 mb-4"
      >
        <ArrowLeft className="mr-1" /> Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        How to Create a TradingView ID
      </h1>

      {/* Video */}
      <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {!playVideo ? (
          <div
            className="relative cursor-pointer"
            onClick={() => setPlayVideo(true)}
          >
            <img
              src="https://img.youtube.com/vi/BaDuIEcu8lo/maxresdefault.jpg"
              alt="TV ID Tutorial"
              className="w-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-white rounded-full p-5 shadow-xl">
                <span className="text-red-600 text-4xl">▶</span>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-64 sm:h-96"
            src="https://www.youtube.com/embed/BaDuIEcu8lo?autoplay=1"
            allow="autoplay; encrypted-media"
          />
        )}
      </div>

      <p className="mt-6 text-gray-700 text-center max-w-xl">
        Follow this short tutorial to create your TradingView ID. Once done,
        return to the form and enter your ID to continue.
      </p>
    </div>
  );
}
