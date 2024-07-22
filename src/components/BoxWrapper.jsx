import React from "react";
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

function BoxWrapper() {
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
    <div className="flex gap-[50px] mb-[50px] ml-[50px] overflow-scroll">
      {boxEvent.map((item, index) => {
        return (
          <div className="flex w-[260px] h-[376px] items-center justify-center relative shrink-0">
            <img
              className="absolute rounded-[30px] overflow-hidden w-full h-full object-cover"
              src={item.img}
              alt="event1"
            />
            <div className="absolute bottom-70 p-[20px] text-[#ffff] flex flex-col font-bold">
              <div className="text-[14px]">{item.date}</div>
              <div className="text-[22px]">
                <Link to={"/EventPage"}>{item.title}</Link>
              </div>
            </div>
            <div className=" absolute bottom-20 right-40 flex pl-[25px]">
              <img
                className="rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                src={AvatarOne}
                alt="one"
              />
              <img
                className="rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                src={AvatarTwo}
                alt="two"
              />
              <img
                className="rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                src={AvatarThree}
                alt="three"
              />
              <img
                className="rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                src={AvatarFour}
                alt="four"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxWrapper;
