import React, { useRef } from "react";
import Logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Antony from "../assets/images/antony.png";
import Brand from "../components/Brand";

function Navbar() {
  const menuBar = useRef();
  const authButton = useRef();
  function toggleBar() {
    menuBar.current.classList.toggle("hidden");
    authButton.current.classList.toggle("hidden");
  }

  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  return (
    <div className=" fixed flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center p-4 bg-white w-full z-10">
      <div className="flex gap-8">
        <div className="flex items-center text-2xl font-bold">
          <Brand />
        </div>
        <button onClick={toggleBar} className="md:hidden">
          <FaAlignJustify />
        </button>
      </div>
      <div
        ref={menuBar}
        className="flex list-none gap-[50px] font-semibold flex-col md:flex-row items-center"
      >
        <li className="hover:text-[#508C9B]">Home</li>
        <li className="hover:text-[#508C9B]">
          <Link to={"/create-event"}>Create Event</Link>
        </li>
        <li className="hover:text-[#508C9B]">Location</li>
      </div>
      {token === null ? (
        <div
          ref={authButton}
          className="px-[10px] flex gap-[10px] flex-col md:flex-row"
        >
          <button className="px-[50px] py-[10px] rounded-xl border font-semibold hover:bg-[#134B70] hover:text-white">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="px-[50px] py-[10px] rounded-xl border font-semibold bg-[#134B70] text-white hover:bg-white hover:text-black">
            <Link to={"/signup"}>Sign Up</Link>
          </button>
        </div>
      ) : (
        <div className="px-[10px] flex gap-[10px] items-center font-semibold">
          <div>
            <Link to={"/profile"}>
              <img
                className="border border-[#134B70] rounded-full h-12 w-12 object-cover"
                src={Antony}
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:block">{profile.fullName}</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
