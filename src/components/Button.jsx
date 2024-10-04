import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Button = () => {
  return (
    <>
      <div className="flex justify-center mb-[50px] items-center gap-8">
        <button className="btn btn-square btn-outline">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 16 16"
            stroke="currentColor"
          >
            <FaArrowLeft />
          </svg>
        </button>
        <button className="btn btn-square btn-outline">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 16 16"
            stroke="currentColor"
          >
            <FaArrowRight />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Button;
