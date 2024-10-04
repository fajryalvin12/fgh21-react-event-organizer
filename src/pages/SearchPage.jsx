import React, { useEffect, useState } from "react";
import { useListEventsQuery } from "../redux/services/event";
import { useNavigate } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import Layout from "../components/Layout";

const SearchPage = () => {
  const [event, setEvent] = useState([]);
  const [page, setPage] = useState(1);
  const { data, err, isLoading } = useListEventsQuery([1, 5]);
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
  async function eventPagination(event) {
    event.preventDefault();
    const pagination = await fetch(
      `http://103.93.58.89:21212/events?page=${page}`
    );
    const listPage = await pagination.json();
    setEvent(listPage.results);
  }

  useEffect(() => {
    setEvent(data?.results || []);
  }, [isLoading]);
  useEffect(() => {
    eventPagination();
  }, []);

  return (
    <>
      <Layout>
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
                          <p onClick={() => clickEvent(item.id)}>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="h-full w-full flex flex-col justify-center items-center gap-6">
                    <div className="text-2xl font-semibold">
                      Events not found
                    </div>
                  </div>
                )}
              </div>
              <form onSubmit={eventPagination}>
                <div className="join flex justify-center">
                  <button
                    onClick={() => setPage(page - 1)}
                    className="join-item btn shadow-xl bg-gray-200"
                  >
                    «
                  </button>
                  <button className="join-item btn shadow-xl bg-gray-200">
                    Page {page}
                  </button>
                  <button
                    onClick={() => setPage(page + 1)}
                    className="join-item btn shadow-xl bg-gray-200"
                  >
                    »
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SearchPage;
