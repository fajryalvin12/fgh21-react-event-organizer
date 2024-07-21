import React from "react";
import EventOne from "../assets/images/event-1.png";

function CategoryContent() {
  return (
    <div className="flex gap-12 items-center mb-[175px] overflow-x-scroll md:justify-center">
      <div className="flex flex-col w-[300px] h-[350px] bg-[#3366ff] rounded-[30px] overflow-hidden shrink-0">
        <img
          className="relative h-[175px] object-cover"
          src={EventOne}
          alt="One"
        />
        <div></div>
        <div className="flex flex-col text-[#ffff] p-[20px] font-semibold gap-[5px]">
          <div className="text-[14px]">Wed, 15 Nov, 4:00 PM</div>
          <div className="text-[22px]">Sights & Sounds Exhibition</div>
        </div>
      </div>
      <div className="flex flex-col w-[300px] h-[350px] bg-[#3366ff] rounded-[30px] overflow-hidden shrink-0">
        <img
          className="relative h-[175px] object-cover"
          src={EventOne}
          alt="One"
        />
        <div></div>
        <div className="flex flex-col text-[#ffff] p-[20px] font-semibold gap-[5px]">
          <div className="text-[14px]">Wed, 15 Nov, 4:00 PM</div>
          <div className="text-[22px]">Sights & Sounds Exhibition</div>
        </div>
      </div>
      <div className="flex flex-col w-[300px] h-[350px] bg-[#3366ff] rounded-[30px] overflow-hidden shrink-0">
        <img
          className="relative h-[175px] object-cover"
          src={EventOne}
          alt="One"
        />
        <div></div>
        <div className="flex flex-col text-[#ffff] p-[20px] font-semibold gap-[5px]">
          <div className="text-[14px]">Wed, 15 Nov, 4:00 PM</div>
          <div className="text-[22px]">Sights & Sounds Exhibition</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryContent;
