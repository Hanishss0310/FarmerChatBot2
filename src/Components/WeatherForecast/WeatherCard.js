import React from "react";
import { CloudRain, Wind } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md mt-24 mb-16">
      {/* Header */}
      <h2 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mb-4">
        <CloudRain className="w-6 h-6 text-blue-600" />
        Weather Forecast
      </h2>

      {/* Current Weather Info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Temperature</p>
          <p className="text-lg font-bold">28°C</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Humidity</p>
          <p className="text-lg font-bold">80%</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Wind</p>
          <p className="text-lg font-bold flex items-center justify-center gap-1">
            <Wind className="w-4 h-4" /> 15 km/h
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Rainfall</p>
          <p className="text-lg font-bold">5 mm</p>
        </div>
      </div>

      {/* 3-Day Forecast */}
      <h3 className="text-lg font-semibold text-blue-800 mb-3">3-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Sunday */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="font-medium">Sunday, September 14</p>
          <CloudRain className="w-6 h-6 text-blue-600 my-2" />
          <p className="text-sm text-gray-600">
            Some sun, then turning cloudy with a bit of rain this afternoon
          </p>
          <p className="font-bold mt-2">32° / 24°</p>
          <p className="text-blue-600 text-sm">5mm rain</p>
        </div>
        {/* Monday */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="font-medium">Monday, September 15</p>
          <CloudRain className="w-6 h-6 text-blue-600 my-2" />
          <p className="text-sm text-gray-600">
            Considerable cloudiness with a little rain; humid
          </p>
          <p className="font-bold mt-2">31° / 24°</p>
          <p className="text-blue-600 text-sm">3mm rain</p>
        </div>
        {/* Tuesday */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="font-medium">Tuesday, September 16</p>
          <CloudRain className="w-6 h-6 text-blue-600 my-2" />
          <p className="text-sm text-gray-600">
            Humid with thick cloud cover; brief morning shower followed by a little rain
          </p>
          <p className="font-bold mt-2">30° / 24°</p>
          <p className="text-blue-600 text-sm">4mm rain</p>
        </div>
      </div>
    </div>
  );
}
