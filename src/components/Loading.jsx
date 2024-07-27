import React from "react";
import { FaCircleNotch } from "react-icons/fa6";

function Loading() {
  return (
    <div className="h-screen bg-[rgba(0,0,0,0.5)] flex w-full fixed top-0 left-0">
      <div className="bg-white w-full m-96 flex justify-center items-center rounded-3xl">
        <button className="text-4xl flex animate-spin">
          <FaCircleNotch />
        </button>
        <span className="text-xl pl-8">Now Loading</span>
      </div>
    </div>
  );
}

export default Loading;
