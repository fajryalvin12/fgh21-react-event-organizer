import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link, ScrollRestoration } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import { removeProfile } from "../redux/reducers/profile";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import axios from "axios";

function ContentCreateEvent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eventId, setEventId] = useState([]);
  const endpoint = "http://localhost:8888/events";
  async function dataEvent() {
    const data = await axios.get(endpoint);
    const listEvent = data.data.results;
    setEventId(listEvent);
  }
  useEffect(() => {
    dataEvent();
  }, []);
  console.log(eventId);
  function setPopUp() {
    const PopUp = document.getElementById("popup");
    PopUp.classList.toggle("hidden");
  }
  function standBy(e) {
    e.stopPropagation();
  }
  function setPopUp2() {
    PopUp.classList.toggle("hidden");
  }
  const profile = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);
  // if (token === null) {
  //   navigate("/login");
  // }
  console.log(token);

  return (
    <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
      <div className="flex gap-[20px] mt-12">
        <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
          <Sidebar />
        </div>
        <div className="md:w-2/3 p-0 m-0 md:p-[100px] md:mr-[120px] bg-[#ffff]  rounded-none md:rounded-[30px] flex gap-[50px] flex-col">
          <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
            <div className="text-[20px] font-bold">Manage Event</div>
            <button
              onClick={setPopUp}
              className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold"
            >
              Create
            </button>
          </div>
          <div className="flex flex-col gap-[20px]">
            {eventId.map((item) => {
              return (
                <div className="flex justify-between">
                  <div className="flex gap-[25px]">
                    <div className="p-[10px] text-center font-semibold text-[#ff8900] border max-h-20 rounded-xl">
                      <div>00</div>
                      <div className="text-gray-500">XXX</div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="text-[24px] font-bold">{item.title}</div>
                      <div>
                        <div className="text-gray-500">Jakarta, Indonesia</div>
                        <div className="text-gray-500">{item.date}</div>
                      </div>
                      <div className="flex gap-5 font-semibold">
                        <div className="text-[#508C9B]">Details</div>
                        <div className="text-[#508C9B]">Update</div>
                        <div className="text-[#508C9B]">Delete</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaRegHeart className="w-[36px] h-[36px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
      <div
        onClick={setPopUp2}
        className="bg-[#0000007e] absolute top-0 hidden w-full"
        id="popup"
      >
        <div
          onClick={standBy}
          className="bg-[#ffff] rounded-3xl p-4 m-8 md:p-20 md:m-20"
        >
          <div className="font-bold text-2xl mb-10">Update Event</div>
          <form className="flex flex-col gap-2 md:gap-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Name</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Input name event..."
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Category</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Select Category"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Location</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Select Location"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Date/Time Show</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="01/01/2022"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Price</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Input Price ..."
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Image</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Choose File ..."
                />
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Detail</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Input Details"
                />
              </div>
            </div>
            <div>
              <button
                className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#3366ff]"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default ContentCreateEvent;
