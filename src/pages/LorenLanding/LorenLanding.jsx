// import { useLorenForm } from './useLorenForm';
// import { TrendingUp, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
// import tradewiseLogo from '../../assets/tradewise_logo.png';

// export default function LorenLanding() {
//   const {
//     formData,
//     handleChange,
//     handleSubmit,
//     submitted,
//     loading,
//     errorMessage,
//   } = useLorenForm();

//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
//       {/* HEADER */}
//       <header className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 shadow-sm bg-white">
//         <img
//           src={tradewiseLogo}
//           alt="Tradewise Logo"
//           className="w-28 object-contain"
//         />

//         <a
//           href="tel:9877582083"
//           className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition"
//         >
//           📞 9877582083
//         </a>
//       </header>

//       {/* MAIN CONTENT */}
//       <div className="max-w-3xl mx-auto px-6 py-1 space-y-8">
//         {/* WELCOME TEXT (same as your screenshot) */}
//         <div className="text-center space-y-3">
//           <h2 className="text-5xl font-extrabold leading-tight">
//             Welcome to <span className="text-yellow-500">Tradewise</span>
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Congratulations on enrolling in our{' '}
//             <span className="text-yellow-500 font-semibold">
//               Intraday and Scalping Bootcamp!
//             </span>
//             <br />
//             Explore all your trading resources and setups below.
//           </p>
//           {/* TWO GOLD ICONS */}
//         </div>

//         {/* GLASSMORPHIC FORM CARD */}
//         <div
//           className="
//           w-full max-w-md mx-auto p-9
//           rounded-2xl
//           bg-white/40 backdrop-blur-xl
//           border border-white/60 shadow-2xl
//         "
//         >
//           {!submitted ? (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Heading */}
//               <div className="text-center mb-4">
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Access Loren Setup
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   Verify your details to continue
//                 </p>
//               </div>

//               {/* Input Fields */}
//               {['name', 'phone', 'tradingId', 'email'].map((field) => (
//                 <div key={field}>
//                   <label className="block text-sm font-medium text-gray-800 mb-1">
//                     {field === 'tradingId'
//                       ? 'TradingView ID'
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>

//                   <input
//                     type={field === 'email' ? 'email' : 'text'}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     placeholder={`Enter ${field}`}
//                     required
//                     className="
//                       w-full p-3 rounded-lg
//                       bg-white text-gray-900
//                       border border-gray-300
//                       focus:ring-2 focus:ring-yellow-400 focus:border-transparent
//                       transition
//                     "
//                   />
//                 </div>
//               ))}

//               {/* Error message */}
//               {errorMessage && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
//                   {errorMessage}
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`
//                   w-full p-3 rounded-lg font-semibold text-gray-900
//                   flex justify-center items-center
//                   shadow-md hover:shadow-lg transition
//                   ${
//                     loading
//                       ? 'bg-gray-400'
//                       : 'bg-yellow-400 hover:bg-yellow-500'
//                   }
//                 `}
//               >
//                 {loading ? 'Verifying...' : 'Verify & Continue'}
//                 {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
//               </button>
//             </form>
//           ) : (
//             <div className="text-center space-y-6">
//               <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />

//               <h2 className="text-2xl font-bold text-green-600">
//                 Verification Successful!
//               </h2>

//               <p className="text-gray-700">
//                 Hi <strong>{formData.name}</strong> 👋 You’re verified!
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="text-gray-500 text-center py-6 text-sm border-t border-gray-200">
//         © {new Date().getFullYear()} Tradewise — Built for smart traders.
//       </footer>
//     </div>
//   );
// }
import { useLorenForm } from './useLorenForm';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tradewiseLogo from '../../assets/tradewise_logo.png';
import FloatingButtons from '../../components/FloatingButtons';

export default function LorenLanding() {
  const {
    formData,
    handleChange,
    handleSubmit,
    submitted,
    loading,
    errorMessage,
  } = useLorenForm();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 py-10">
      {/* 🔥 HERO SECTION */}
      <img src={tradewiseLogo} className="w-28 mb-6" alt="logo" />

      <h1 className="text-4xl font-bold text-center leading-tight">
        Welcome to <span className="text-yellow-600">Tradewise</span>
      </h1>

      <p className="text-gray-600 text-center mt-2 text-lg max-w-xl">
        Congratulations on enrolling in our{' '}
        <span className="text-yellow-600 font-semibold">
          Intraday & Scalping Bootcamp!
        </span>{' '}
        Explore all your trading resources & setups below.
      </p>

      {/* 🔥 GLASS FORM CONTAINER */}
      <div className="mt-10 w-full max-w-2xl bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8">
        {/* FORM HEAD */}
        <h2 className="text-2xl font-bold text-center mb-1">
          Access Loren Setup
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Verify your details to continue
        </p>

        {/* FORM */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 3-column RESPONSIVE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* TradingView ID FULL WIDTH */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                TradingView ID
              </label>
              <input
                name="tradingId"
                value={formData.tradingId}
                onChange={handleChange}
                placeholder="Enter TradingView ID"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />

              {/* Help link */}
              <p
                onClick={() => navigate('/tv-id-help')}
                className="mt-1 text-sm text-blue-600 underline cursor-pointer"
              >
                Don’t have TradingView ID?
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-50 text-red-700 border border-red-300 p-3 rounded-lg text-sm">
                {errorMessage}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-yellow-500 hover:bg-yellow-600'
              } text-gray-900 font-semibold py-3 rounded-lg transition flex items-center justify-center`}
            >
              {loading ? 'Verifying...' : 'Verify & Continue'}
              {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
            </button>
          </form>
        ) : (
          /* SUCCESS SCREEN */
          <div className="text-center space-y-4 py-6">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold text-green-600">
              Verification Successful!
            </h2>
            <p className="text-gray-700">
              Hi <strong>{formData.name}</strong> 👋 You're verified!
            </p>

            <a
              href="https://www.tradingview.com/script/T6rXQ2Pk-LOREN-PNKJ-LOREN-auto/"
              target="_blank"
              className="block w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg mt-4"
            >
              🔗 Open Loren Setup
            </a>
          </div>
        )}
      </div>
      <FloatingButtons />
    </div>
  );
}
