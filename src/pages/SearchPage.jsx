import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { useListEventsQuery } from "../redux/services/event";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const { data, err, isLoading } = useListEventsQuery();
  const navigate = useNavigate();
  async function clickEvent(id) {
    navigate("/events/" + id);
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        <div className="flex gap-[20px]">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <div className="flex flex-col gap-8 bg-white p-8 rounded-3xl shadow-lg min-h-[600px]">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="search" className="font-semibold text-xl">
                    Search Event
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="Search here"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <button className="btn btn-outline">
                      <FaSearch />
                    </button>
                  </div>
                </div>
                <div className="form-control">
                  <div className="font-semibold text-xl">Categories</div>
                  <label className="label cursor-pointer">
                    <span className="label-text">Music</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Arts</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Outdoors</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Workshop</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Sport</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Festival</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Fashion</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className=" p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col max-h-[600px] md:w-2/3 md:p-[60px] md:mr-[120px] md:rounded-3xl md:shadow-xl w-full">
            <div className="font-bold text-3xl">List Events</div>
            <div className="grid grid-cols-3 gap-6 overflow-y-scroll">
              {data?.results.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-[250px] h-[125px] items-center justify-center relative shrink-0"
                  >
                    <img
                      className="rounded-xl absolute overflow-hidden w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute bottom-0 p-4 text-white flex flex-col justify-start font-bold bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.5)] to-[rgba(16,20,38,1)] w-full">
                      <p onClick={() => clickEvent(item.id)}>{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="join flex justify-center">
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                defaultChecked
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
