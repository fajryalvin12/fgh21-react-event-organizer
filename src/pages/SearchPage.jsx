import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useListEventsQuery } from "../redux/services/event";
import { useNavigate } from "react-router-dom";
import FilterBar from "../components/FilterBar";

const SearchPage = () => {
  const [event, setEvent] = useState([]);
  const { data, err, isLoading } = useListEventsQuery([1, 10]);
  const navigate = useNavigate();
  async function clickEvent(id) {
    navigate("/events/" + id);
  }
  async function filteredEvents(search = "") {
    const filtered = await fetch(
      `http://103.93.58.89:21212/events?search=${search}`
    );
    const listFiltered = await filtered.json();
    setEvent(listFiltered.results);
  }
  useEffect(() => {
    setEvent(data?.results || []);
  }, [isLoading]);

  return (
    <>
      <Navbar />
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        <div className="flex md:gap-[20px] md:flex-row flex-col">
          <div className="md:w-1/3 md:px-[100px] flex-col gap-[30px] md:flex">
            <div className="flex flex-col md:gap-8 bg-white p-8 md:rounded-3xl md:shadow-lg md:min-h-[600px]">
              <FilterBar filteredEvents={filteredEvents} />
            </div>
          </div>
          <div className=" p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col max-h-[600px] md:w-2/3 md:p-[60px] md:mr-[120px] md:rounded-3xl md:shadow-xl w-full">
            <div className="font-bold text-3xl">List Events</div>
            <div className="grid grid-cols-3 gap-6 overflow-y-scroll">
              {event.length > 0 ? (
                event.map((item) => {
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
                })
              ) : (
                <div className="h-full w-full flex flex-col justify-center items-center gap-6">
                  <div className="text-2xl font-semibold">Events not found</div>
                </div>
              )}
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

// {data?.results.map((item) => {
//   return (

//   );
// })}
