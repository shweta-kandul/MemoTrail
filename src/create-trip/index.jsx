import React from "react";
import LocationSearch from "../component/custom/LocationSearch";
// import LocationSearch from "../components/custom/LocationSearch";

export default function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20">
        <h2 className="text-xl my-3 font-medium">
          What is destination of choice?
        </h2>
        <LocationSearch />
      </div>
    </div>
  );
}
