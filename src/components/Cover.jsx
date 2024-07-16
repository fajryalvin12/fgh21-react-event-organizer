import React from "react";
import Mascot from "../assets/images/mascot.png";

function Cover() {
  return (
    <div className="bg-[#3366ff] h-[750px] mb-[175px]">
      <img
        className="flex justify-right pt-[100px]"
        src={Mascot}
        alt="mascot"
      />
    </div>
  );
}

export default Cover;
