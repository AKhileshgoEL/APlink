// src/components/DoubtFormCard.jsx

export default function DoubtFormCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-2xl font-bold text-gray-900">Doubt Form</h3>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Have any questions or stuck somewhere? Submit your doubt using the form
        below and our team will respond shortly.
      </p>

      <div className="mt-5">
        <a
          href="https://forms.gle/yLfEve4vaL7KgYYc6"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Open Doubt Form
        </a>
      </div>
    </div>
  );
}
