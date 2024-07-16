import React from "react";
import Partner1 from "../assets/icons/partner-1.png";
import Partner2 from "../assets/icons/partner-2.png";
import Partner3 from "../assets/icons/partner-3.png";
import Partner4 from "../assets/icons/partner-4.png";
import Partner5 from "../assets/icons/partner-5.png";
import Partner6 from "../assets/icons/partner-6.png";

function Partner() {
  return (
    <div className="flex flex-col justify-center items-center mb-[50px] bg-[#373a42] text-[#ffff] gap-[30px]">
      <div className="bg-[#ff3d7140] h-[30px] py-[5px] px-[30px] items-center flex text-[#ff3d71] rounded-[30px] mt-[39px]">
        <div>Partner</div>
      </div>
      <div className="text-[36px] font-semibold">Our Trusted Partners</div>
      <div className="mb-[50px]">By Companies Like :</div>
      <div className="flex flex-wrap gap-[62px] mb-[170px]">
        <img src={Partner1} alt="1" />
        <img src={Partner2} alt="2" />
        <img src={Partner3} alt="3" />
        <img src={Partner4} alt="4" />
        <img src={Partner5} alt="5" />
        <img src={Partner6} alt="6" />
      </div>
    </div>
  );
}

export default Partner;
