import React from "react";
import Logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-[10px]">
      <div>
        <div className="flex items-center text-2xl font-bold">
          <img src={Logo} alt="logo" />
          <span className="text-[#3366ff]">We</span>
          <span className="text-[#ff3d71]">tick</span>
        </div>
      </div>
      <div className="flex list-none gap-[50px] font-semibold">
        <li>Home</li>
        <li>Create Event</li>
        <li>Location</li>
      </div>
      <div className="px-[10px] flex gap-[10px]">
        <button className="px-[50px] py-[10px] rounded-xl border font-semibold">
          <Link to={"/Login"}>Login</Link>
        </button>
        <button className="px-[50px] py-[10px] rounded-xl border font-semibold bg-[#3366ff] text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
