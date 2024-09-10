import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link, ScrollRestoration } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Sidebar from "./Sidebar";
import axios from "axios";
import Layout from "../components/Layout";

function ContentCreateEvent() {
  const [eventId, setEventId] = useState([]);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const [modals, setModals] = useState(false);
  const endpoint = "http://localhost:8888/events";
  const urlCategories = "http://localhost:8888/categories";
  const urlLocations = "http://localhost:8888/locations";
  async function dataEvent() {
    const data = await axios.get(endpoint);
    const listEvent = data.data.results;
    setEventId(listEvent);
  }
  async function dataCategory() {
    const data = await axios.get(urlCategories);
    const listCategories = data.data.results;
    setCategory(listCategories);
  }
  async function dataLocations() {
    const data = await axios.get(urlLocations);
    const listLocations = data.data.results;
    setLocation(listLocations);
  }
  async function createEvent(e) {
    e.preventDefault();
    const title = e.target.name.value;
    // const category = parseInt(e.target.category.value);
    // const location = parseInt(e.target.location.value);
    const date = e.target.date.value;
    const image = e.target.image.value;
    const description = e.target.details.value;
    try {
      const response = await axios.post(
        endpoint,
        {
          image: image,
          title: title,
          date: date,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to create new event");
    }
  }
  useEffect(() => {
    dataEvent();
    dataCategory();
    dataLocations();
  }, []);
  function showModals() {
    const PopUp = document.getElementById("popup");
    PopUp.classList.toggle("hidden");
  }
  function standBy(e) {
    e.stopPropagation();
  }
  function hideModals() {
    const PopUp = document.getElementById("popup");
    PopUp.classList.toggle("hidden");
  }
  const profile = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);
  // if (token === null) {
  //   navigate("/login");
  // }
  console.log(token);

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        <div className="flex gap-[20px]">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className="md:w-2/3 p-0 m-0 md:p-[100px] md:mr-[120px] bg-[#ffff] rounded-none md:rounded-[30px] flex gap-[50px] flex-col h-[700px]">
            <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
              <div className="text-[20px] font-bold">Manage Event</div>
              <button
                onClick={showModals}
                className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold"
              >
                Create
              </button>
            </div>
            <div className="flex flex-col gap-[20px] overflow-y-scroll">
              {eventId.map((item) => {
                return (
                  <div className="flex justify-between">
                    <div className="flex gap-[25px]">
                      <div className="p-[10px] text-center font-semibold text-[#ff8900] border max-h-20 rounded-xl">
                        <div>00</div>
                        <div className="text-gray-500">XXX</div>
                      </div>
                      <div className="flex flex-col gap-[15px]">
                        <div className="text-[24px] font-bold">
                          {item.title}
                        </div>
                        <div>
                          <div className="text-gray-500">
                            Jakarta, Indonesia
                          </div>
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
        <div className="bg-[#0000007e] absolute top-0 hidden w-full" id="popup">
          <div
            onClick={standBy}
            className="bg-[#ffff] rounded-3xl p-4 m-8 md:p-20 md:m-20"
          >
            <div className="flex justify-between font-bold text-2xl mb-10">
              <h2>Update Event</h2>
              <button type="button" onClick={hideModals}>
                X
              </button>
            </div>
            <form
              onSubmit={createEvent}
              className="flex flex-col gap-2 md:gap-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="">Name</label>
                  <input
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    type="text"
                    name="title"
                    placeholder="Input name event..."
                    id="name"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="category">Category</label>
                  <select
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    name="category"
                    id="category"
                  >
                    {category.map((item) => {
                      return (
                        <option key={item.key} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="location">Location</label>
                  <select
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    name="location"
                    id="location"
                  >
                    {location.map((item) => {
                      return (
                        <option key={item.key} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="">Date/Time Show</label>
                  <input
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    type="date"
                    placeholder="01/01/2022"
                    name="date"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="">Price</label>
                  <input
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    type="text"
                    placeholder="Input Price ..."
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="">Image</label>
                  <input
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    type="text"
                    name="image"
                    placeholder="Choose File ..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="flex-1 flex flex-col gap-4">
                  <label htmlFor="">Detail</label>
                  <input
                    className="border p-5 w-full mr-10 rounded-xl outline-none"
                    type="text"
                    name="details"
                    placeholder="Input Details"
                  />
                </div>
              </div>
              <div>
                <button
                  className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#508C9B]"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContentCreateEvent;
