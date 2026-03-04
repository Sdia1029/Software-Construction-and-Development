
"use client";
import React, { useState } from "react";

function Page() {
  const [values, setvalue] = useState(0);
  function Add() {
    if (values< 10) {
      setvalue(values + 1);
    }
  }
  function Subtract() {
    if (values > 0) {
      setvalue(values - 1);
    }
  }

  return (
    <div className="bg-green-200 min-h-screen text-black flex flex-col items-center justify-center ">
      <h1 className="font-bold text-5xl">Counter Program</h1>

      <h1 className="font-bold text-5xl ">{values}</h1>

      <div className="space-x-4 mt-6">
        <button
          onClick={Add}
          className="bg-blue-600 text-white py-2 px-6 rounded-md ">
          Add1
        </button>

        <button
          onClick={Subtract}
          className="bg-blue-600 text-white py-2 px-6 rounded-md">
          Subtract1
        </button>
      </div>
    </div>
  );
}

export default Page;