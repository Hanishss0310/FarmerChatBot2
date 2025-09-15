import React, { useState } from "react";

const MarketLedger = () => {
  const [commodity, setCommodity] = useState("Coffee");
  const [location, setLocation] = useState("bangalore");
  const [sortOrder, setSortOrder] = useState("desc"); // high → low by default

  const priceData = [
    { commodity: "Coffee", location: "bangalore", price: 6163, date: "9/14/2025" },
    { commodity: "Coffee", location: "Nearby Market A", price: 2347, date: "9/14/2025" },
    { commodity: "Coffee", location: "Nearby Market B", price: 5257, date: "9/14/2025" },
  ];

  // Sort prices based on sortOrder
  const sortedPrices = [...priceData].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-10 px-5 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-3">
            The Agri-Market Ledger
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest agricultural commodity prices from your
            local markets and nearby regions.
          </p>
        </header>

        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
          {/* Commodity Dropdown */}
          <select
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="w-full md:w-1/4 p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Coffee">Coffee</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
          </select>

          {/* Location Input */}
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-1/3 p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-emerald-500"
          />

          {/* Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full md:w-1/4 p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-emerald-500"
          >
            <option value="desc">Price: High → Low</option>
            <option value="asc">Price: Low → High</option>
          </select>

          {/* Search Button */}
          <button className="w-full md:w-1/4 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg font-semibold shadow-md transition">
            Search Prices
          </button>
        </div>

        {/* Latest Prices */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Latest Prices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPrices.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all border-t-4 border-emerald-500"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.commodity}
                </h3>
                <span className="text-xs font-medium px-2 py-1 rounded bg-emerald-100 text-emerald-700">
                  {item.location}
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-emerald-700 mb-2">
                ₹{item.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">per Quintal</p>

              {/* Footer */}
              <p className="text-xs text-gray-400 mt-4">As of {item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketLedger;
