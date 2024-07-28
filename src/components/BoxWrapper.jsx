import React, { useEffect } from "react";
import Antony from "../assets/images/event-3.jpg";
import Braithwaite from "../assets/images/braithwaite.png";
import Maguire from "../assets/images/maguire.jpg";
import Messi from "../assets/images/messi.jpg";
import Cristiano from "../assets/images/siuuuuu.png";
import EventFour from "../assets/images/event-4.jpg";
import AvatarOne from "../assets/images/avatar1.png";
import AvatarTwo from "../assets/images/avatar2.png";
import AvatarThree from "../assets/images/avatar3.png";
import AvatarFour from "../assets/images/avatar4.png";
import { Link } from "react-router-dom";
import { addEvent } from "../redux/reducers/event.js";
import { Provider, useSelector, useDispatch } from "react-redux";
import axios from "axios";

function BoxWrapper() {
  const newEvent = useSelector((state) => state.event.boxEvent);

  const endpoint = "https://wsw6zh-8888.csb.app/events";
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      const abc = data.data.results;
      dispatch(addEvent(abc));
    })();
  }, []);
  const boxEvent = [
    {
      title: "Cek Khodam El-DearGod",
      date: "Sat, 10 Jan, 11:00 PM",
      img: EventFour,
    },
    {
      title: "Minggu bersama El-gasing",
      date: "Thu, 16 Dec, 9:00 AM",
      img: Antony,
    },
    {
      title: "Berjoget ria dipandu oleh El-Mojang Geulis",
      date: "Mon, 21 Jan, 11:00 AM",
      img: Braithwaite,
    },
    {
      title: "Standup Comedian bahas Inggris dan MU",
      date: "Thu, 16 Dec, 9:00 AM",
      img: Maguire,
    },
    {
      title: "Tutorial mencekek yang baik dan benar",
      date: "Fri, 16 Dec, 9:00 AM",
      img: Messi,
    },
    {
      title: "Mari menanam mangrove di Arab Saudi",
      date: "Thu, 16 Dec, 9:00 AM",
      img: Cristiano,
    },
  ];

  return (
    <div className="flex gap-[50px] mb-[50px] ml-[50px] overflow-scroll ">
      {newEvent.map((item) => {
        return (
          <div className="flex w-[260px] h-[376px] items-center justify-center relative shrink-0">
            <img
              className="absolute rounded-[30px] overflow-hidden w-full h-full object-cover"
              src={"https://wsw6zh-8888.csb.app" + item.picture}
              alt="event"
            />
            <div className="absolute bottom-0 p-[20px] text-white flex flex-col justify-end font-bold bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.5)] to-[rgba(16,20,38,1)] w-full">
              <div className="text-[14px]">{item.time.split("T")[0]}</div>
              <div className="text-[22px]">
                <Link to={"/EventPage"}>{item.title}</Link>
              </div>
              <div className="relative top-0 left-0 flex pl-4">
                {item.attendees.map((pic) => {
                  return (
                    <img
                      className="top-0 left-0 rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                      src={"https://wsw6zh-8888.csb.app" + pic.picture}
                      alt="one"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxWrapper;
