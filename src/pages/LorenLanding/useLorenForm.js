// // src/pages/LorenLanding/useLorenForm.js
// import { useState } from 'react';
// import { checkEnrollment, submitToSheet } from './apiService';

// export function useLorenForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     tradingId: '',
//     email: '',
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage('');

//     try {
//       const enrollment = await checkEnrollment(formData.phone);
//       if (!enrollment.enrolled) {
//         setErrorMessage(enrollment.message);
//         setLoading(false);
//         return;
//       }

//       await submitToSheet(formData);
//       setSubmitted(true);
//     } catch (err) {
//       console.error('❌ Submit error:', err);
//       setErrorMessage('Form submission failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     formData,
//     handleChange,
//     handleSubmit,
//     submitted,
//     loading,
//     errorMessage,
//   };
// }
// src/pages/LorenLanding/useLorenForm.js
import { useState } from 'react';
import { checkEnrollment, submitToSheet } from './apiService';

export function useLorenForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tradingId: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    // client side phone check (start with 6-9 and 10 digits)
    if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      setErrorMessage(
        'Enter a valid 10-digit Indian mobile number starting with 6-9.'
      );
      setLoading(false);
      return;
    }

    try {
      const enrollment = await checkEnrollment(formData.phone);
      if (!enrollment.enrolled) {
        setErrorMessage(enrollment.message || 'You are not registered.');
        setLoading(false);
        return;
      }

      // submit to sheet (backend will forward)
      await submitToSheet(formData);

      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMessage('Form submission failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    submitted,
    loading,
    errorMessage,
  };
}
