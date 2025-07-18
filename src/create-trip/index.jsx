import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import LocationSearch from "../component/custom/LocationSearch";
import { FaGoogle } from "react-icons/fa";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app, db } from "../service/firebase"; 

import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/options";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceSelect = (location) => {
    setPlace(location);
    handleInputChange("location", location);
    console.log("Selected location:", location);
  };

  useEffect(() => {
    console.log("Form data:", formData);
  }, [formData]);

  const retryDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  const tryGenerating = async (model, prompt, retries = 2) => {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await model.generateContent(prompt);
        return await result.response.text();
      } catch (err) {
        if (err.message.includes("503") && i < retries - 1) {
          console.warn("Model overloaded. Retrying in 3 seconds...");
          await retryDelay(3000);
        } else {
          throw err;
        }
      }
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        onGenerateTrip();
        setOpenDialog(false);
      });
  };

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (
      (formData?.noOfDays > 10 && !formData?.people) ||
      !formData?.noOfDays ||
      !formData?.traveler
    ) {
      toast.error("Please fill all details..", { autoClose: 2000 });
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replaceAll(
      "{location}",
      formData?.location?.formatted || "Unknown Location"
    )
      .replaceAll("{totalDays}", formData?.noOfDays)
      .replaceAll("{traveler}", formData?.traveler)
      .replaceAll("{budget}", formData?.budget);

    try {
      setLoading(true);
      setOutput("");

      const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY
      );

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const text = await tryGenerating(model, FINAL_PROMPT);

      SaveAiTrip(text);
      // Try pretty-printing JSON
      let prettyOutput = text;
      try {
        const parsed = JSON.parse(text);
        prettyOutput = JSON.stringify(parsed, null, 2);
      } catch (e) {
        console.warn("Not valid JSON. Showing raw output.");
      }

      setOutput(prettyOutput);
      console.log("Generated Trip Plan:", prettyOutput);
    } catch (error) {
      console.error("AI Error:", error);
      if (error.message?.includes("429")) {
        toast.error("Too many requests! Please wait a minute and try again.");
      } else if (error.message?.includes("503")) {
        toast.error("Model is overloaded. Please try again in a few minutes.");
      } else {
        toast.error("Failed to generate trip plan.");
      }
    } finally {
      setLoading(false);
    }
  };

  // const SaveAiTrip = async (TripData) => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const docId = Date.now().toString();
  //   await setDoc(doc(db, "AITrips", docId), {
  //     userSelection: formData,
  //     TripData: TripData,
  //     userEmail: user?.email,
  //     id: docId,
  //   });
  // };
  const SaveAiTrip = async (TripData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      TripData: TripData,
      userEmail: user?.email,
      id: docId,
    });
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
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData?.budget === item.title && "shadow-lg border-amber-600"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
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
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData?.traveler === item.people &&
                "shadow-lg border-amber-600"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onGenerateTrip}
          disabled={loading}
          className={`bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg mt-5 mb-5 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "Generating..." : "Generate Trip"}
        </button>
      </div>

      {output && (
        <div className="mt-10 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Generated Trip Plan:</h2>
          <pre className="text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      )}

      {openDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-[90%] text-center transition transform scale-100 ">
            <img src="/logo.png" alt="logo" className="w-48 h-auto" />
            <h2 className="font-bold text-lg">Sign In with Google</h2>
            <p className="mb-5">
              Sign in to the App with Google authentication securly
            </p>
            <button
              onClick={login}
              className="bg-orange-500 flex items-center justify-center gap-2 ml-32 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              <FaGoogle />
              Sign In with Google
            </button>
            <p className="text-sm whitespace-pre-wrap">{output}</p>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setOpenDialog(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
