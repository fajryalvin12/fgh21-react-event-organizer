import React, { useRef } from "react";
import Logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";

function Navbar() {
  const menuBar = useRef();
  const authButton = useRef();
  function toggleBar() {
    menuBar.current.classList.toggle("hidden");
    authButton.current.classList.toggle("hidden");
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center p-[10px]">
      <div className="flex gap-8">
        <div className="flex items-center text-2xl font-bold">
          <img src={Logo} alt="logo" />
          <span className="text-[#3366ff]">We</span>
          <span className="text-[#ff3d71]">tick</span>
        </div>
        <button onClick={toggleBar} className="md:hidden">
          <FaAlignJustify />
        </button>
      </div>
      <div
        ref={menuBar}
        className="flex list-none gap-[50px] font-semibold flex-col md:flex-row items-center"
      >
        <li className="hover:text-[#3366FF]">Home</li>
        <li className="hover:text-[#3366FF]">
          <Link to={"/CreateEvent"}>Create Event</Link>
        </li>
        <li className="hover:text-[#3366FF]">Location</li>
      </div>
      <div
        ref={authButton}
        className="px-[10px] flex gap-[10px] flex-col md:flex-row"
      >
        <button className="px-[50px] py-[10px] rounded-xl border font-semibold">
          <Link to={"/Login"}>Login</Link>
        </button>
        <button className="px-[50px] py-[10px] rounded-xl border font-semibold bg-[#3366ff] text-white">
          <Link to={"/Signup"}>Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
