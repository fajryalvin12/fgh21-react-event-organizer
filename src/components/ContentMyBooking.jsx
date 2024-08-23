import React, { useEffect, useState } from "react";
import AvatarProfile from "../assets/icons/avatar-profile.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  FaCircleUser,
  FaCreditCard,
  FaUserPen,
  FaLock,
  FaRectangleList,
  FaHeart,
  FaGear,
  FaArrowRightFromBracket,
  FaCalendarDays,
  FaCirclePlus,
} from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function ContentMyBooking() {
  const [booking, setBooking] = useState({});
  const id = useParams().id;
  console.log(id)
  async function myBooking() {
    const data = await axios.get("http://localhost:8888/transactions" + id);
    setBooking(data.data.results);
  }
  useEffect(() => {
    myBooking();
  }, []);
  const navigate = useNavigate();
  function clickLogout(e) {
    e.preventDefault();
    window.alert("Your account has been logged out!");
    navigate("/login");
  }
  function clickEdit(e) {
    e.preventDefault();
    navigate("/profile");
  }
  function clickEvent(e) {
    e.preventDefault();
    navigate("/events/" + id);
  }
  const profile = useSelector((state) => state.profile.data);
  const events = useSelector((state) => state.event.boxEvent);

  return (
    <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
      <div className="flex gap-[20px] mt-12">
        <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
        <Sidebar />
        </div>
        <div className="md:w-2/3 p-0 m-0 md:p-[100px] md:mr-[120px] bg-[#ffff] rounded-none md:rounded-[30px] flex gap-[50px] flex-col">
          <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
            <div className="text-[20px] font-bold">My Booking</div>
            <div className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold">
              <FaCalendarDays />
              <div>March</div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {events.map((item) => {
              return (
                <div className="flex gap-[25px]">
                  <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                    <div>15</div>
                    <div className="text-gray-500">Wed</div>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <div className="text-[24px] font-bold">{item.title}</div>
                    <div>
                      <div className="text-gray-500">Jakarta, Indonesia</div>
                      <div className="text-gray-500">{item.date}</div>
                    </div>
                    <div onClick={clickEvent} className="text-[#508C9B]">
                      Details
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentMyBooking;
