import React from "react";
import FooterLogo from "../assets/icons/footer-socmed.png";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";

function Footer() {
  return (
    <div className="flex flex-col gap-[75px] py-8 px-8 md:py-[160px] md:px-[220px]">
      <div className="flex gap-[30px] justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-[30px]">
          <Brand />
          <div className="flex flex-col gap-[15px]">
            <div>Find events you love with our</div>
            <div>
              <img src={FooterLogo} alt="socmedfoot" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="font-semibold">Tickhub</div>
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
            <li>Booking</li>
            <li>
              <Link to={"/create-event"}>Create Event</Link>
            </li>
            <li>Discover</li>
            <li>
              <Link to={"/signup"}>Register</Link>
            </li>
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
      <div>&copy; 2024 Tickhub All Rights Reserved</div>
    </div>
  );
}

export default Footer;
