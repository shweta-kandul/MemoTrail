import React from "react";

export default function Header() {
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.png" alt="logo" className="w-48 h-auto" />
      <div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
          Sing In
        </button>
      </div>
    </div>
  );
}
