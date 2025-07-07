import React, { useState } from "react";
import LocationSearch from "../component/custom/LocationSearch";
import { SelectBudgetOptions, SelectTravelesList } from "../constants/options";
// import LocationSearch from "../components/custom/LocationSearch";

export default function CreateTrip() {
  const [place, setPlace] = useState();

  const handlePlaceSelect = (location) => {
    setPlace(location);
    console.log(location);
  };
  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 mt-10 mx-auto max-w-7xl">
      <h2 className="font-bold text-3xl">Let's Plan Your Perfect Getaway</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Whether you're dreaming of relaxing beaches, vibrant cities, scenic
        mountains, or cultural adventures — we’re here to help you make it real.
      </p>

      <div className="mt-20">
        <h2 className="text-xl my-3 font-medium">
          What is destination of choice?
        </h2>
        <LocationSearch onSelectPlace={handlePlaceSelect} />
      </div>

      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">
          How many days are you planning for trip?
        </h2>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Ex.3"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className="p-4 border cursor-pointer rounded-lg shadow-sm hover:shadow-xl hover:shadow-gray-800 transition duration-300"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500"> {item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              className="p-4 border cursor-pointer rounded-lg shadow-sm hover:shadow-xl hover:shadow-gray-800 transition duration-300"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500"> {item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg mt-5 mb-5">
        Generate Trip
      </button>
    </div>
  );
}
