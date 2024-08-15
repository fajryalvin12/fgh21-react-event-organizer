import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addEvent } from "../redux/reducers/event.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function BoxWrapper() {
  const [eventId, setEventId] = useState([]);
  const endpoint = "http://localhost:8888/events";
  const navigate = useNavigate();
  async function dataEvent() {
    const data = await axios.get(endpoint);
    const listEvent = data.data.results;
    setEventId(listEvent);
  }
  useEffect(() => {
    dataEvent();
  }, []);

  async function clickEvent(id) {
    navigate("/events/" + id);
  }
  return (
    <div className="flex gap-[50px] mb-[50px] ml-[50px] overflow-scroll ">
      {eventId.map((item) => {
        return (
          <div
            className="flex w-[260px] h-[376px] items-center justify-center relative shrink-0"
            key={item.id}
          >
            <img
              className="absolute rounded-[30px] overflow-hidden w-full h-full object-cover"
              src={item.image}
              alt="event"
            />
            <div className="absolute bottom-0 p-[20px] text-white flex flex-col justify-end font-bold bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.5)] to-[rgba(16,20,38,1)] w-full">
              <div className="text-[14px]">{item.date}</div>
              <div onClick={() => clickEvent(item.id)} className="text-[22px]">
                {item.title}
              </div>
              <div className="relative top-0 left-0 flex pl-4"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxWrapper;
