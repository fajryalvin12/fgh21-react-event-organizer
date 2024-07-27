import React, { useEffect } from "react";
import EventOne from "../assets/images/event-1.png";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../redux/reducers/event.js";
import axios from "axios";

function CategoryContent() {
  return (
    <div className="flex gap-12 items-center mb-[175px] overflow-x-scroll md:justify-center">
      <div className="flex flex-col w-[300px] h-[350px] bg-[#134B70] rounded-[30px] overflow-hidden shrink-0">
        <img
          className="relative h-[175px] object-cover"
          src={EventOne}
          alt="One"
        />
        <div></div>
        <div className="flex flex-col text-[#EEEEEE] p-[20px] font-semibold gap-[5px]">
          <div className="text-[14px]">Wed, 15 Nov, 4:00 PM</div>
          <div className="text-[22px]">Sights & Sounds Exhibition</div>
        </div>
      </div>
      <div className="flex flex-col w-[300px] h-[350px] bg-[#134B70] rounded-[30px] overflow-hidden shrink-0">
        <img
          className="relative h-[175px] object-cover"
          src={EventOne}
          alt="One"
        />
        <div></div>
        <div className="flex flex-col text-[#EEEEEE] p-[20px] font-semibold gap-[5px]">
          <div className="text-[14px]">Wed, 15 Nov, 4:00 PM</div>
          <div className="text-[22px]">Sights & Sounds Exhibition</div>
        </div>
      </div>
      <div className="flex flex-col w-[300px] h-[350px] bg-[#134B70] rounded-[30px] overflow-hidden shrink-0">
        <img
          className="relative h-[175px] object-cover"
          src={EventOne}
          alt="One"
        />
        <div></div>
        <div className="flex flex-col text-[#EEEEEE] p-[20px] font-semibold gap-[5px]">
          <div className="text-[14px]">Wed, 15 Nov, 4:00 PM</div>
          <div className="text-[22px]">Sights & Sounds Exhibition</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryContent;
