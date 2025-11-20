// // src/pages/LorenLanding/apiService.js
// import axios from 'axios';

// const TARGET_BOOTCAMP_ID = 'clrluxl5101a8pcei3jgvtxi8';

// export async function checkEnrollment(phoneNumber) {
//   try {
//     console.log('🔍 Checking enrollment for:', phoneNumber);

//     const apiUrl = `https://api.thefuture.university/users/${phoneNumber}/phone`;
//     const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
//       apiUrl
//     )}`;

//     const response = await axios.get(proxyUrl);
//     const data = JSON.parse(response.data.contents || '{}');
//     const userData = data.data || data;

//     if (!userData || !userData.bootcamps) {
//       return {
//         enrolled: false,
//         message: 'No bootcamps found for this phone number.',
//       };
//     }

//     const enrolledBootcamp = userData.bootcamps.find(
//       (b) => b.id === TARGET_BOOTCAMP_ID
//     );
//     if (enrolledBootcamp) {
//       return { enrolled: true, bootcamp: enrolledBootcamp };
//     } else {
//       return {
//         enrolled: false,
//         message: 'You are not enrolled in this bootcamp.',
//       };
//     }
//   } catch (error) {
//     console.error('❌ Error fetching enrollment:', error);
//     if (error.response && error.response.status === 404) {
//       return {
//         enrolled: false,
//         message: 'Phone number not found in our records.',
//       };
//     }
//     return {
//       enrolled: false,
//       message: 'Unable to verify enrollment. Please try again.',
//     };
//   }
// }

// export async function submitToSheet(formData) {
//   const sheetURL =
//     'https://script.google.com/macros/s/AKfycbzPXZqCYkBCObBCIDjV3ZHIbAxVVJrgIAQ8kuUOHAYZA0Bf1nuLrH6DoGFEy_zKaXEH/exec';

//   return fetch(
//     `https://api.allorigins.win/raw?url=${encodeURIComponent(sheetURL)}`,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...formData, action: 'Form Submitted' }),
//     }
//   );
// }
// src/pages/LorenLanding/apiService.js
import axios from 'axios';

import { API_BASE_URL } from '../../config';

// Frontend does not know the bootcamp id - backend checks it.
// checkEnrollment will call our backend proxy which calls TFU and returns filtered data.
export async function checkEnrollment(phoneNumber) {
  try {
    const resp = await axios.get(
      `${API_BASE_URL}/api/user/${encodeURIComponent(phoneNumber)}`
    );
    // resp.data.data contains the filtered user object from backend
    if (!resp.data || !resp.data.data) {
      return { enrolled: false, message: 'No data from server' };
    }
    const user = resp.data.data;
    // backend already computes enrolled boolean
    if (user.enrolled) {
      return { enrolled: true, user };
    }
    return {
      enrolled: false,
      message: 'You are not enrolled in the target bootcamp.',
    };
  } catch (err) {
    console.error('checkEnrollment error:', err);
    if (err.response) {
      if (err.response.status === 404)
        return { enrolled: false, message: 'Phone not found' };
      return {
        enrolled: false,
        message: `b error: ${err.response.status}`,
      };
    }
    // print(err.response.message);
    return { enrolled: false, message: 'Network error. Please try again.' };
  }
}

// submitToSheet posts to our backend /api/proxy which forwards to Google Apps Script
export async function submitToSheet(formData) {
  const resp = await axios.post(
    '/api/proxy',
    { ...formData, action: 'Form Submitted' },
    { timeout: 10000 }
  );
  return resp;
}
