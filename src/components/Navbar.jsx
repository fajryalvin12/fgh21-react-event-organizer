import React, { useRef } from "react";
import DefaultUser from "../assets/icons/user.png";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
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
    <nav className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center p-4 bg-white w-full border-b-4">
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
        <li className="hover:text-[#508C9B]">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#508C9B]">
          <Link to={"/create-event"}>Create Event</Link>
        </li>
        <li className="hover:text-[#508C9B]">
          <Link to={"/search"}>Search</Link>
        </li>
        <li className="hover:text-[#508C9B]">
          <Link to={"/my-booking"}>My Booking</Link>
        </li>
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
        <div
          ref={authButton}
          className="px-[10px] flex gap-[10px] items-center font-semibold"
        >
          <div>
            <Link to={"/profile"}>
              <img
                className="border border-[#134B70] rounded-full h-12 w-12 object-cover"
                src={
                  profile?.picture == undefined
                    ? "https://cdn-icons-png.flaticon.com/512/21/21104.png"
                    : profile?.picture
                }
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:block">{profile?.fullName}</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
