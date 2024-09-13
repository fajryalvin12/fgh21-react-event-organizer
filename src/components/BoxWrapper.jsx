import React from "react";
import { useNavigate } from "react-router-dom";
import { useListEventsQuery } from "../redux/services/event";
import AvatarOne from "../assets/images/avatar1.png";
import AvatarTwo from "../assets/images/avatar2.png";
import AvatarThree from "../assets/images/avatar3.png";
import AvatarFour from "../assets/images/avatar4.png";

function BoxWrapper() {
  const navigate = useNavigate();
  async function clickEvent(id) {
    navigate("/events/" + id);
  }
  const { data, err, isLoading } = useListEventsQuery();

  return (
    <div className="flex gap-[50px] mb-[50px] mx-[50px] overflow-x-scroll">
      {data?.results.map((item) => {
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
              <div className="relative top-0 left-0 flex pl-4">
                <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative">
                  <img
                    src={AvatarOne}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-10px]">
                  <img
                    src={AvatarTwo}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[29px] w-[29px] rounded-full overflow-hidden border border-white relative left-[-20px]">
                  <img
                    src={AvatarThree}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[29px] w-[29px] rounded-full overflow-hidden relative left-[-30px]">
                  <img
                    src={AvatarFour}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="flex justify-center items-center text-white absolute w-full h-full bg-[rgba(255,137,0,0.6)] text-[10px] top-0 left-0">
                    62+
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxWrapper;
