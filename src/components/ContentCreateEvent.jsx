import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import axios from "axios";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/reducers/event";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useListEventsQuery } from "../redux/services/event";

function ContentCreateEvent() {
  const id = useParams();
  console.log(id);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlCategories = "http://103.93.58.89:21212/categories";
  const urlLocations = "http://103.93.58.89:21212/locations";
  const { data, err, isLoading } = useListEventsQuery();

  async function clickEvent(id) {
    navigate("/events/" + id);
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
    setLoading(1);
    e.preventDefault();
    const title = e.target.name.value;
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
      const data = response.data.results;
      console.log(data);
      if (response.data.success) {
        dispatch(addEvent(data));
        setMessage(response.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      } else {
        setMessage(response.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      }
    } catch (error) {
      console.error("Failed to create new event");
    }
    setTimeout(() => setLoading(0), 1000);
  }
  async function deleteEvent(id) {
    try {
      const response = await axios.delete(
        "http://103.93.58.89:21212/events/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        dispatch(addEvent(data));
        setMessage(response.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      } else {
        setMessage(response.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      }
    } catch {
      console.error("Failed to delete the event");
    }
  }
  useEffect(() => {
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
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }
  console.log(data);

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        {loading ? <Loading /> : ""}
        <div className="flex gap-[20px]">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className="md:w-2/3 p-0 m-0 md:p-[90px] md:mr-[120px] bg-[#ffff] rounded-none flex gap-[50px] flex-col max-h-[600px] md:rounded-3xl shadow-xl">
            <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
              <div className="text-2xl font-bold">Manage Event</div>
              <button
                onClick={showModals}
                className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold"
              >
                Create
              </button>
            </div>
            {alert ? (
              <div className="h-12 flex-1 bg-white flex items-center pl-4 justify-between">
                {message ? (
                  <button
                    onClick={() => setAlert(0)}
                    className="text-green-500"
                  >
                    {message}
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <div className="flex flex-col gap-[20px] overflow-y-scroll">
              {data?.results.map((item) => {
                return (
                  <div className="flex justify-between">
                    <div className="flex gap-[25px]">
                      <div className="p-[10px] text-center font-semibold text-[#ff8900] max-h-20 border rounded-xl">
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
                          <button
                            onClick={() => clickEvent(item.id)}
                            className="text-[#508C9B]"
                          >
                            Details
                          </button>
                          <button className="text-[#508C9B]">Update</button>
                          <button
                            onClick={() => deleteEvent(item.id)}
                            className="text-[#508C9B]"
                          >
                            Delete
                          </button>
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
          {loading ? <Loading /> : ""}
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
            {alert ? (
              <div className="h-12 flex-1 bg-white flex items-center pl-4 justify-between">
                {message ? (
                  <button
                    onClick={() => setAlert(0)}
                    className="text-green-500"
                  >
                    {message}
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
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
