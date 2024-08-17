import React, { useEffect } from "react";
import EventOne from "../assets/images/event-1.png";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../redux/reducers/event.js";
import axios from "axios";

function CategoryContent() {
  const selectCategory = useSelector((state) => state.event.boxEvent);
  const endpoint = "http://localhost:8888/events";
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      const categoryEvent = data.data.results;
      dispatch(addEvent(categoryEvent));
    })();
  }, []);

  return (
    <div className="flex gap-12 items-center mb-[175px] mx-[100px] overflow-x-scroll md:justify-center">
      {selectCategory.map((item) => {
        return (
          <div className="flex flex-col w-[300px] h-[350px] bg-[#134B70] rounded-[30px] overflow-hidden shrink-0">
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
