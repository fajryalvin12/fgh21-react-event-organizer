import React from "react";
import Logo from "../assets/icons/logo.png";
import AvatarProfile from "../assets/icons/avatar-profile.png";
import { Link } from "react-router-dom";

function NavbarProfile() {
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
        <li className="hover:text-[#3366FF]">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#3366FF]">Create Event</li>
        <li className="hover:text-[#3366FF]">Location</li>
      </div>
      <div className="px-[10px] flex gap-[10px] items-center font-semibold">
        <div>
          <img
            className="border border-[#3366ff] rounded-full border-[3px]"
            src={AvatarProfile}
            alt="ap"
          />
        </div>
        <div>
          <Link to={"/ProfilePage"}>Jhon Thomson</Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarProfile;
