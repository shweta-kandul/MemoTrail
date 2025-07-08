import React from "react";
import homeIcon from "../../assets/home.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* <!-- Left Side: Text --> */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 leading-tight">
              “Tell us your vibe – we’ll plan the tribe!”
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-6 font-bold">
              Let smart technology build your travel itinerary in seconds. From
              destinations to stays – it's all just one click away.
            </p>
            <Link to={"/create-trip"}>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg">
                Start Planning Now
              </button>
            </Link>
          </div>

          {/* <!-- Right Side: Image --> */}
          <div className="md:w-1/2">
            <img
              src={homeIcon}
              alt="AI Trip Planner"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
