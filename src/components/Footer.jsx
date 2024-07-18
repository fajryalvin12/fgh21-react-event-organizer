import React from "react";
import Logo from "../assets/icons/logo.png";
import FooterLogo from "../assets/icons/footer-socmed.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col gap-[75px] py-[160px] px-[220px]">
      <div className="flex gap-[30px] justify-between">
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center text-2xl font-bold">
            <img src={Logo} alt="logo" />
            <span className="text-[#3366ff]">We</span>
            <span className="text-[#ff3d71]">tick</span>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div>Find events you love with our</div>
            <div>
              <img src={FooterLogo} alt="socmedfoot" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="font-semibold">Wetick</div>
          <ul className="p-none m-none flex flex-col gap-[15px] text-[#c1c5d0]">
            <li>About Us</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Payments</li>
            <li>Mobile Apps</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="font-semibold">Features</div>
          <ul className="p-none m-none flex flex-col gap-[15px] text-[#c1c5d0]">
            <li>
              <Link to={"/BookingPage"}>Booking</Link>
            </li>
            <li>Create Event</li>
            <li>Discover</li>
            <li>Register</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="font-semibold">Company</div>
          <ul className="p-none m-none flex flex-col gap-[15px] text-[#c1c5d0]">
            <li>Partnership</li>
            <li>Help</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div>&copy; 2020 Wetick All Rights Reserved</div>
    </div>
  );
}

export default Footer;
