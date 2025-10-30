import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("Loaded API Key:", apiKey ? "✅ Found" : "❌ Missing");

  const fetchWeather = async (city) => {
  console.log("Fetching weather for:", city);
  try {
    const response = await fetch(`http://localhost:8080/weather?city=${city}`);
    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.info || "City not found");
    }

    setWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Error fetching weather: " + error.message);
  }
};



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-4">
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">
          Weather App
        </h1>
        <SearchBar onSearch={fetchWeather} loading={loading} />
        {loading && <p className="text-center text-blue-700 mt-3">Loading...</p>}
        {error && <p className="text-center text-red-600 mt-3">{error}</p>}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}
