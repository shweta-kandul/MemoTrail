import React, { useState } from "react";
import axios from "axios";

export default function LocationSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "0c9821545b044ba8bfe5685772eb4db8"; 

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete`,
        {
          params: {
            text: value,
            limit: 5,
            apiKey: API_KEY,
          },
        }
      );
      setSuggestions(response.data.features);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (location) => {
    setQuery(location.properties.formatted);
    setSuggestions([]);
    console.log("📍 Selected:", location.properties);
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter destination"
        className="w-full border border-gray-300 p-2 rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border mt-1 w-full max-h-48 overflow-y-auto">
          {suggestions.map((loc) => (
            <li
              key={loc.properties.place_id}
              onClick={() => handleSelect(loc)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {loc.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
