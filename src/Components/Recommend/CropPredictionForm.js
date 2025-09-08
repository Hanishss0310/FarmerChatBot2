import React, { useState } from "react";

export default function CropPredictionForm() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [output, setOutput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔗 Send formData to your backend API here
    // Example with fetch:
    /*
    const response = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    setOutput(result);
    */

    // Temporary mock output
    setOutput({
      crop: "Wheat",
      recommendation: "Best suited for your soil conditions.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 mt-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Soil & Weather Data Input
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { name: "nitrogen", label: "Nitrogen (N)" },
            { name: "phosphorus", label: "Phosphorus (P)" },
            { name: "potassium", label: "Potassium (K)" },
            { name: "temperature", label: "Temperature (°C)" },
            { name: "humidity", label: "Humidity (%)" },
            { name: "ph", label: "pH Value" },
            { name: "rainfall", label: "Rainfall (mm)" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {label}
              </label>
              <input
                type="number"
                step="any"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          ))}

          {/* Submit button spans both columns */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition"
            >
              Predict Crop
            </button>
          </div>
        </form>

        {/* Output Area */}
        <div className="mt-8 p-6 border border-green-200 rounded-xl bg-green-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Prediction Output
          </h3>
          {output ? (
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Recommended Crop:</span>{" "}
                {output.crop}
              </p>
              <p className="text-gray-700">{output.recommendation}</p>
            </div>
          ) : (
            <p className="text-gray-500">Submit the form to see results.</p>
          )}
        </div>
      </div>
    </div>
  );
}
