import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import Brand from "../components/Brand";
import Antony from "../assets/images/antony.png"

function NavbarProfile() {
  const menuBar = useRef();
  const profileButton = useRef();
  function hideBar() {
    menuBar.current.classList.toggle("hidden");
    profileButton.current.classList.toggle("hidden");
  }

  const data = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  return (
    <div className="fixed flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center p-[10px] bg-white w-full z-10">
      <div className="flex gap-8">
        <div className="flex items-center text-2xl font-bold">
          <Brand />
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
          <Link to={"/profile"}>
            <img
              className="border border-[#373a42bf] rounded-full w-12 h-12 object-cover"
              src={Antony}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:block">{profile.fullName}</div>
      </div>
    </div>
  );
}

export default NavbarProfile;
