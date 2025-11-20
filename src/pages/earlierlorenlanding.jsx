import axios from 'axios';
import { useState } from 'react';

export default function LorenLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tradingId: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 🎯 Target Bootcamp ID
  const TARGET_BOOTCAMP_ID = 'clrluxl5101a8pcei3jgvtxi8';

  // 🧠 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔍 Check enrollment with proxy (to avoid CORS)
  const checkEnrollment = async (phoneNumber) => {
    try {
      console.log('🔍 Checking enrollment for:', phoneNumber);

      // Using proxy to bypass CORS
      const apiUrl = `https://api.thefuture.university/users/${phoneNumber}/phone`;
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        apiUrl
      )}`;

      const response = await axios.get(proxyUrl);

      console.log('reponse: ', response);

      // allorigins wraps the response in { cozontents: "<json string>" }
      const data = JSON.parse(response.data.contents || '{}');
      console.log('📦 API Raw Data:', data);

      const userData = data.data || data; // handle both structures

      if (!userData || !userData.bootcamps) {
        console.warn('⚠️ Bootcamps not found in response:', userData);
        return {
          enrolled: false,
          message: 'No bootcamps found for this phone number.',
        };
      }

      console.log(
        '📚 Bootcamps:',
        userData.bootcamps.map((b) => b.id)
      );

      // Find bootcamp
      const enrolledBootcamp = userData.bootcamps.find(
        (b) => b.id === TARGET_BOOTCAMP_ID
      );

      if (enrolledBootcamp) {
        console.log('✅ Enrolled in:', enrolledBootcamp);
        return { enrolled: true, bootcamp: enrolledBootcamp };
      } else {
        console.log('❌ Not enrolled in target bootcamp');
        return {
          enrolled: false,
          message: 'You are not enrolled in this bootcamp.',
        };
      }
    } catch (error) {
      console.error('❌ Error fetching enrollment:', error);

      if (error.response && error.response.status === 404) {
        return {
          enrolled: false,
          message: 'Phone number not found in our records.',
        };
      }

      // Network or proxy failure
      return {
        enrolled: false,
        message:
          'Unable to verify enrollment. Please check your internet connection and try again.',
      };
    }
  };

  // 🚀 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const enrollment = await checkEnrollment(formData.phone);
      console.log('📊 Enrollment Result:', enrollment);

      if (!enrollment.enrolled) {
        setErrorMessage(enrollment.message);
        setLoading(false);
        return;
      }

      console.log('✅ User verified, proceeding...');

      // Example: Store data in Google Sheets (Apps Script endpoint)
      const sheetURL =
        'https://script.google.com/macros/s/AKfycbw5P6ho31i7IL0HR1tc0YMw3KXGZ8wVJ_i0mykqZ2H7QDvDXRZ6aogSmIp9AJwSrrer/exec';

      await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(sheetURL)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            tradingId: formData.tradingId,
            action: 'Form Submitted',
          }),
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error('❌ Submit error:', err);
      setErrorMessage('Form submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Links
  const LOREN_LINK =
    'https://www.tradingview.com/script/T6rXQ2Pk-LOREN-PNKJ-LOREN-auto/';
  const WHATSAPP_LINK = 'https://chat.whatsapp.com/YOUR_GROUP_LINK';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Loren Setup Access
            </h2>
            <p className="text-sm text-gray-600">
              Enter your details to verify enrollment
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
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
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
            } text-white font-semibold p-3 rounded-lg transition shadow-md hover:shadow-lg`}
          >
            {loading ? 'Verifying...' : 'Submit & Continue'}
          </button>
        </form>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center space-y-6">
          <h2 className="text-2xl font-bold text-green-600">
            ✅ Verification Successful!
          </h2>
          <p>
            Hi <strong>{formData.name}</strong>! You’re verified. Continue
            below:
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <a
              href={LOREN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold p-3 rounded-lg block transition shadow-md hover:shadow-lg"
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
  );
}
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export default function LorenLanding() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     tradingId: '',
//     email: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const TARGET_BOOTCAMP_ID = 'clrluxl5101a8pcei3jgvtxi8';

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const checkEnrollment = async (phoneNumber) => {
//     try {
//       const response = await axios.get(
//         `https://api.thefuture.university/users/${phoneNumber}/phone`
//       );
//       const userData = response.data?.data;
//       if (!userData?.bootcamps?.length) {
//         return { enrolled: false, message: 'No bootcamps found.' };
//       }

//       const enrolledBootcamp = userData.bootcamps.find(
//         (bootcamp) => bootcamp.id === TARGET_BOOTCAMP_ID
//       );
//       if (enrolledBootcamp) {
//         return { enrolled: true };
//       }
//       return {
//         enrolled: false,
//         message: 'You are not enrolled in this bootcamp.',
//       };
//     } catch (err) {
//       if (err.response?.status === 404) {
//         return { enrolled: false, message: 'Phone number not found.' };
//       }
//       throw new Error(
//         'Unable to verify enrollment. Please check your internet connection.'
//       );
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage('');

//     try {
//       const enrollmentResult = await checkEnrollment(formData.phone);
//       if (!enrollmentResult.enrolled) {
//         setErrorMessage(enrollmentResult.message);
//         setLoading(false);
//         return;
//       }

//       await axios.post('http://localhost:5001/api/proxy', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       setSubmitted(true);
//     } catch (error) {
//       setErrorMessage(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const LOREN_LINK =
//     'https://www.tradingview.com/script/T6rXQ2Pk-LOREN-PNKJ-LOREN-auto/';
//   const WHATSAPP_LINK = 'https://chat.whatsapp.com/YOUR_GROUP_LINK';

//   // Subtle chart animation background
//   useEffect(() => {
//     const root = document.documentElement;
//     let pos = 0;
//     const anim = setInterval(() => {
//       pos += 0.5;
//       root.style.setProperty('--bg-pos', `${pos}px`);
//     }, 50);
//     return () => clearInterval(anim);
//   }, []);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d0d0f] text-white overflow-hidden">
//       {/* Animated background grid */}
//       <div
//         className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#00b7ff_1px,transparent_0)] bg-[size:40px_40px]"
//         style={{ transform: 'translateY(var(--bg-pos))' }}
//       ></div>

//       {/* Branding logos */}
//       <div className="absolute top-6 left-6 flex items-center gap-3">
//         <img
//           src="/assets/brand-logo.png"
//           alt="Brand"
//           className="h-8 opacity-80"
//         />
//         <img
//           src="/assets/loren-logo.png"
//           alt="Loren"
//           className="h-6 opacity-60"
//         />
//       </div>

//       {!submitted ? (
//         <form
//           onSubmit={handleSubmit}
//           className="relative z-10 bg-[#141417]/80 border border-[#facc15]/20 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_rgba(250,204,21,0.15)] w-full max-w-md space-y-5 transition-all duration-300"
//         >
//           <h2 className="text-3xl font-bold text-center text-[#facc15]">
//             Loren Access Portal
//           </h2>
//           <p className="text-sm text-gray-400 text-center">
//             Verify your enrollment to continue
//           </p>

//           <div className="space-y-4 mt-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-[#1a1a1d] border border-gray-700 focus:ring-2 focus:ring-[#facc15] outline-none"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number (10 digits)"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               pattern="[0-9]{10}"
//               className="w-full p-3 rounded-lg bg-[#1a1a1d] border border-gray-700 focus:ring-2 focus:ring-[#facc15] outline-none"
//             />
//             <input
//               type="text"
//               name="tradingId"
//               placeholder="TradingView ID"
//               value={formData.tradingId}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-[#1a1a1d] border border-gray-700 focus:ring-2 focus:ring-[#facc15] outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-[#1a1a1d] border border-gray-700 focus:ring-2 focus:ring-[#facc15] outline-none"
//             />

//             {errorMessage && (
//               <div className="bg-red-900/30 border border-red-500 text-red-300 p-3 rounded-lg text-sm text-center">
//                 {errorMessage}
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-lg font-semibold text-white transition-all shadow-md ${
//                 loading
//                   ? 'bg-gray-600 cursor-not-allowed'
//                   : 'bg-gradient-to-r from-[#facc15] to-[#00b7ff] hover:from-[#ffe670] hover:to-[#29c7ff]'
//               }`}
//             >
//               {loading ? 'Verifying Enrollment...' : 'Submit & Continue'}
//             </button>
//           </div>

//           <p className="text-xs text-gray-500 text-center mt-6">
//             📞 Support:{' '}
//             <span className="text-[#facc15] font-medium">9877582083</span>
//           </p>
//         </form>
//       ) : (
//         <div className="relative z-10 bg-[#141417]/80 border border-[#00b7ff]/20 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_rgba(0,183,255,0.15)] w-full max-w-md text-center space-y-6 transition-all duration-300">
//           <div className="text-[#00b7ff] text-3xl font-bold">
//             ✅ Verified Successfully
//           </div>
//           <p className="text-gray-300">
//             Welcome, <span className="text-[#facc15]">{formData.name}</span>!
//             Your enrollment is verified. You can now proceed.
//           </p>

//           <div className="flex flex-col gap-3 mt-6">
//             <a
//               href={LOREN_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#facc15] hover:bg-[#ffe670] text-black font-semibold p-3 rounded-lg transition shadow-lg"
//             >
//               🔗 Open Loren Setup
//             </a>
//             <a
//               href={WHATSAPP_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#00b7ff] hover:bg-[#29c7ff] text-white font-semibold p-3 rounded-lg transition shadow-lg"
//             >
//               💬 Join WhatsApp Group
//             </a>
//           </div>

//           <div className="text-xs text-gray-400 pt-4 border-t border-gray-700">
//             <p>📞 Support: 9877582083</p>
//             <p>📈 Jigneesh: 7021235233</p>
//             <p>🧾 BX Manager: 99888......</p>
//             <p>🎓 Teacher: ..............</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
