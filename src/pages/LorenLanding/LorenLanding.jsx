import { useLorenForm } from './useLorenForm';
import { TrendingUp, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import LMSAccessCard from '../../components/LMSAccessCard';
import LorenSetupCard from '../../components/LorenSetupCard';

export default function LorenLanding() {
  const {
    formData,
    handleChange,
    handleSubmit,
    submitted,
    loading,
    errorMessage,
  } = useLorenForm();

  const LOREN_LINK =
    'https://www.tradingview.com/script/T6rXQ2Pk-LOREN-PNKJ-LOREN-auto/';
  const WHATSAPP_LINK = 'https://chat.whatsapp.com/YOUR_GROUP_LINK';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-gray-100 flex flex-col">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-opacity-30 backdrop-blur-md border-b border-gray-700">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
          LOREN TRADE
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">LMS</li>
          <li className="hover:text-yellow-400 cursor-pointer">Tutorials</li>
          <li className="hover:text-yellow-400 cursor-pointer">Support</li>
        </ul>
        <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
          Login
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-grow items-center justify-center px-8 py-12 md:py-20 max-w-7xl mx-auto w-full space-y-12">
        {/* HERO TEXT */}
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Welcome to <span className="text-yellow-400">Tradewise</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Congratulations on enrolling in our{' '}
            <span className="text-yellow-400 font-semibold">
              Intraday and Scalping Bootcamp!
            </span>
            <br />
            Explore all your trading resources and setups below.
          </p>

          <div className="flex justify-center space-x-5">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-yellow-400 w-6 h-6" />
              <span>Loren Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-yellow-400 w-6 h-6" />
              <span>Secure Access</span>
            </div>
          </div>
        </div>

        {/* DROPDOWN CARDS */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <LorenSetupCard />
          <LMSAccessCard />
        </div>

        {/* VERIFICATION FORM */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md mt-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Access Loren Setup
                </h2>
                <p className="text-sm text-gray-500">
                  Verify your details to continue
                </p>
              </div>

              {['name', 'phone', 'tradingId', 'email'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field === 'tradingId'
                      ? 'TradingView ID'
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field}`}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                  />
                </div>
              ))}

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-yellow-400 hover:bg-yellow-500'
                } text-gray-900 font-semibold p-3 rounded-lg transition shadow-md hover:shadow-lg flex justify-center items-center`}
              >
                {loading ? 'Verifying...' : 'Verify & Continue'}
                {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold text-green-600">
                Verification Successful!
              </h2>
              <p className="text-gray-700">
                Hi <strong>{formData.name}</strong> 👋 You’re verified! Choose
                your next step:
              </p>

              <div className="flex flex-col gap-3 mt-6">
                <a
                  href={LOREN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold p-3 rounded-lg block transition shadow-md hover:shadow-lg"
                >
                  🔗 Open Loren Setup
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg block transition shadow-md hover:shadow-lg"
                >
                  💬 Join WhatsApp Group
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0B132B] text-gray-400 text-center py-6 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Tradewise — Built for smart traders.
      </footer>
    </div>
  );
}
