import React, { useRef } from "react";
import Logo from "../assets/icons/logo.png";
import AvatarProfile from "../assets/icons/avatar-profile.png";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";

function NavbarProfile() {
  const menuBar = useRef();
  const profileButton = useRef();
  function hideBar() {
    menuBar.current.classList.toggle("hidden");
    profileButton.current.classList.toggle("hidden");
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center p-[10px]">
      <div className="flex gap-8">
        <div className="flex items-center text-2xl font-bold">
          <img src={Logo} alt="logo" />
          <span className="text-[#3366ff]">We</span>
          <span className="text-[#ff3d71]">tick</span>
        </div>
        <button onClick={hideBar} className="md:hidden">
          <FaAlignJustify />
        </button>
      </div>
      <div
        ref={menuBar}
        className="flex list-none gap-[50px] font-semibold flex-col md:flex-row items-center"
      >
        <li className="hover:text-[#3366FF]">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#3366FF]">
          <Link to={"/CreateEvent"}>Create Event</Link>
        </li>
        <li className="hover:text-[#3366FF]">Location</li>
      </div>
      <div
        ref={profileButton}
        className="px-[10px] flex gap-[10px] items-center font-semibold"
      >
        <div>
          <Link to={"/ProfilePage"}>
            <img
              className="border border-[#3366ff] rounded-full"
              src={AvatarProfile}
              alt="ap"
            />
          </Link>
        </div>
        <div className="hidden md:block">Jhon Thomson</div>
      </div>
    </div>
  );
}

export default NavbarProfile;
