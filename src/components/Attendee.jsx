import React from "react";
import AvatarOne from "../assets/images/avatar1.png";
import AvatarTwo from "../assets/images/avatar2.png";
import AvatarThree from "../assets/images/avatar3.png";
import AvatarFour from "../assets/images/avatar4.png";

function Attendee() {
  return (
    <div>
      <div className="flex pl-[10px]">
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
}

export default Attendee;
