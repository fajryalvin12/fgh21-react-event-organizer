import React from "react";
import Logo from "../assets/icons/logo.png";
import AvatarProfile from "../assets/icons/avatar-profile.png";
import { Link } from "react-router-dom";

function NavbarProfile() {
  return (
    <div className="flex justify-between items-center p-[10px] mb-[20px]">
      <div>
        <div className="flex items-center text-2xl font-bold">
          <img src={Logo} alt="logo" />
          <span className="text-[#3366ff]">We</span>
          <span className="text-[#ff3d71]">tick</span>
        </div>
      </div>
      <div className="flex list-none gap-[50px] font-semibold">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Create Event</li>
        <li>Location</li>
      </div>
      <div className="px-[10px] flex gap-[10px] items-center font-semibold">
        <div>
          <img
            className="border border-[#3366ff] rounded-full border-[3px]"
            src={AvatarProfile}
            alt="ap"
          />
        </div>
        <div> Jhon Thomson</div>
      </div>
    </div>
  );
}

export default NavbarProfile;
