import React, { use, useEffect, useState } from "react";
import LocationSearch from "../component/custom/LocationSearch";
import { SelectBudgetOptions, SelectTravelesList } from "../constants/options";
// import LocationSearch from "../components/custom/LocationSearch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceSelect = (location) => {
    setPlace(location);
    handleInputChange("location", location);
    console.log(location);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = () => {
    if (
      (formData?.noOfDays > 10 && !formData?.people) ||
      !formData?.noOfDays ||
      !formData?.traveler
    ) {
      toast.error("Please fill all details..", { autoClose: 2000 });
      return;
    }
    console.log(formData);
  };
  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 mt-10 mx-auto max-w-7xl">
      <h2 className="font-bold text-3xl">Let's Plan Your Perfect Getaway 🌄</h2>
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
          onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          type="text"
          inputMode="numeric"
          placeholder="Ex. 3"
          className="w-full border border-gray-300 p-2 rounded"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
      </div>

      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg  hover:shadow-lg  ${
                formData?.budget == item.title && "shadow-lg border-amber-600"
              }`}
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
              onClick={() => handleInputChange("traveler", item.people)}
              className={`p-4 border cursor-pointer rounded-lg  hover:shadow-lg  ${
                formData?.traveler == item.people &&
                "shadow-lg border-amber-600"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500"> {item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onGenerateTrip}
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg mt-5 mb-5"
        >
          Generate Trip
        </button>
      </div>
    </div>
  );
}
