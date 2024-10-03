import React, { useRef } from "react";
import Jakarta from "../assets/images/jakarta.png";
import Bandung from "../assets/images/bandung.png";
import Bali from "../assets/images/bali.png";
import Aceh from "../assets/images/aceh.png";
import Solo from "../assets/images/solo.png";
import Yogyakarta from "../assets/images/jogja.png";
import Semarang from "../assets/images/semarang.png";

function Location() {
  const bali = useRef();
  const aceh = useRef();
  const jogja = useRef();
  const semarang = useRef();
  function swipeLocation() {
    bali.current.classList.toggle("hidden");
    aceh.current.classList.toggle("hidden");
    jogja.current.classList.toggle("hidden");
    semarang.current.classList.toggle("hidden");
  }

  return (
    <div className="p-[50px] bg-[#201E43] rounded-[50px] font-semibold text-[#EEEEEE] mb-[50px] mx-[40px]">
      <div className="bg-[rgba(255,255,255,0.25)] h-[30px] w-[150px] py-[5px] px-[30px] items-center text-[#ffff] rounded-[30px] flex justify-center mb-[25px] ml-0 md:ml-[68px]">
        Location
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-12">
        <div className="flex flex-col items-center gap-1 mb-4 text-3xl max-w-[228px] pl-14">
          <div>Explore the Place Abroad</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Jakarta} alt="jkt" />
          <div className="text-center text-white mt-[15px]">Jakarta</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Bandung} alt="jkt" />
          <div className="text-center mt-[15px] text-white">Bandung</div>
        </div>
        <div ref={bali} className="flex flex-col items-center gap-1 mb-4">
          <img src={Bali} alt="jkt" />
          <div className="text-center mt-[15px] text-white">Bali</div>
        </div>
        <div ref={aceh} className="flex flex-col items-center gap-1 mb-4">
          <img src={Aceh} alt="jkt" />
          <div className="text-center mt-[15px] text-white">Aceh</div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <img src={Solo} alt="jkt" />
          <div className="text-center mt-[15px] text-white">Solo</div>
        </div>
        <div ref={jogja} className="flex flex-col items-center gap-1 mb-4">
          <img src={Yogyakarta} alt="jkt" />
          <div className="text-center mt-[15px] text-white">Yogyakarta</div>
        </div>
        <div ref={semarang} className="flex flex-col items-center gap-1 mb-4">
          <img src={Semarang} alt="jkt" />
          <div className="text-center mt-[15px] text-white">Semarang</div>
        </div>
      </div>
      <div onClick={swipeLocation} className="flex justify-center">
        <button className="pt-[10px] pr-[99px] pb-[9px] pl-[97px] rounded-[10px] border border-[#EEEEEE] border-4 text-[#508C9B] bg-[#ffff]">
          See All
        </button>
      </div>
    </div>
  );
}

export default Location;
