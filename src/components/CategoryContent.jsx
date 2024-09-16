import React, { useEffect } from "react";
import { useListEventsQuery } from "../redux/services/event.js";

function CategoryContent() {
  const { data, err, isLoading } = useListEventsQuery();

  return (
    <div className="flex gap-12 items-center mb-[175px] mx-20 overflow-x-scroll ">
      {data?.results.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col w-[300px] h-[350px] bg-[#134B70] rounded-[30px] overflow-hidden shrink-0"
          >
            <img
              className="relative h-[175px] object-cover"
              src={item.image}
              alt="One"
            />
            <div></div>
            <div className="flex flex-col text-[#EEEEEE] p-[20px] font-semibold gap-[5px]">
              <div className="text-[14px]">{item.date}</div>
              <div className="text-[22px]">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryContent;
