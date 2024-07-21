import React from "react";
import Jakarta from "../assets/images/jakarta.png";
import Bandung from "../assets/images/bandung.png";
import Bali from "../assets/images/bali.png";
import Aceh from "../assets/images/aceh.png";
import Solo from "../assets/images/solo.png";
import Yogyakarta from "../assets/images/jogja.png";
import Semarang from "../assets/images/semarang.png";

function Location() {
  return (
    <div className="p-[50px] bg-[#3366ff] rounded-[50px] font-semibold text-[#ffff] mb-[50px] mx-[40px]">
      <div>
        <div className="bg-[rgba(255,255,255,0.25)] h-[30px] w-[150px] py-[5px] px-[30px] items-center text-[#ffff] rounded-[30px] flex justify-center mb-[25px] ml-0 md:ml-[68px]">
          <div>Location</div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-12">
        <div className=" flex flex-col items-center w-[230px] text-[36px] pl-8">
          Discover Events Near You
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Jakarta} alt="jkt" />
          <div className="text-center mt-[15px]">Jakarta</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Bandung} alt="jkt" />
          <div className="text-center mt-[15px]">Bandung</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Bali} alt="jkt" />
          <div className="text-center mt-[15px]">Bali</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Aceh} alt="jkt" />
          <div className="text-center mt-[15px]">Aceh</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Solo} alt="jkt" />
          <div className="text-center mt-[15px]">Solo</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Yogyakarta} alt="jkt" />
          <div className="text-center mt-[15px]">Yogyakarta</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Semarang} alt="jkt" />
          <div className="text-center mt-[15px]">Semarang</div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] text-[#3366ff] bg-[#ffff]">
          See All
        </button>
      </div>
    </div>
  );
}

export default Location;
