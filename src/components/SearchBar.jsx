import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <form onSubmit={submit} className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Enter city (e.g., Manila)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-3 py-2 bg-sky-600 text-white rounded-lg font-semibold disabled:opacity-60"
      >
        Search
      </button>
    </form>
  );
}
