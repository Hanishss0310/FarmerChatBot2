import React, { useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";


export default function FertilizerForm() {
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    moisture: "",
    soilType: "",
    cropType: "",
    nitrogen: "",
    potassium: "",
    phosphorous: "",
  });

  const [fertilizer, setFertilizer] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple logic for fertilizer suggestion
  const handleSubmit = (e) => {
    e.preventDefault();

    let suggestion = "General NPK Fertilizer";

    if (formData.nitrogen < 50) {
      suggestion = "Urea (High Nitrogen)";
    } else if (formData.potassium < 50) {
      suggestion = "Muriate of Potash (High Potassium)";
    } else if (formData.phosphorous < 50) {
      suggestion = "Single Super Phosphate (High Phosphorous)";
    } else if (formData.soilType.toLowerCase().includes("clay")) {
      suggestion = "Balanced NPK Mix for Clay Soil";
    } else if (formData.cropType.toLowerCase().includes("rice")) {
      suggestion = "DAP + Urea for Rice Crops";
    }

    setFertilizer(suggestion);
  };

  return (
    <div>
        <Navbar />

        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mb-10 mt-40">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Fertilizer Recommendation Form
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Temperature (°C)", name: "temperature", type: "number" },
          { label: "Humidity (%)", name: "humidity", type: "number" },
          { label: "Moisture (%)", name: "moisture", type: "number" },
          { label: "Soil Type", name: "soilType", type: "text" },
          { label: "Crop Type", name: "cropType", type: "text" },
          { label: "Nitrogen (N)", name: "nitrogen", type: "number" },
          { label: "Potassium (K)", name: "potassium", type: "number" },
          { label: "Phosphorous (P)", name: "phosphorous", type: "number" },
        ].map((field, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="mb-1 font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
        ))}

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Get Fertilizer Recommendation
          </button>
        </div>
      </form>

      {fertilizer && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-green-800">
            Recommended Fertilizer:
          </h3>
          <p className="text-xl font-bold text-green-900">{fertilizer}</p>
        </div>
      )}
      
    </div>

        <Footer />
    </div>
  );
}
