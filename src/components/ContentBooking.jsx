import React from "react";
import Footer from "./Footer";
import Stadium from "../assets/images/stadium.png";
import { Link } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaArrowDownUpAcrossLine,
  FaTicket,
} from "react-icons/fa6";

function ContentEvent() {
  let [purple, setPurple] = React.useState(0);
  function purpleMinus() {
    if (purple <= 0) {
      window.alert("Please input valid amount!");
    } else {
      setPurple(purple - 1);
    }
  }
  function purplePlus() {
    if (purple >= 10) {
      window.alert("Please input valid amount!");
    } else {
      setPurple(purple + 1);
    }
    setPurple === "";
  }

  let [red, setRed] = React.useState(0);
  function redMinus() {
    if (red <= 0) {
      window.alert("Please input valid amount!");
    } else {
      setRed(red - 1);
    }
  }
  function redPlus() {
    if (red >= 10) {
      window.alert("Please input valid amount!");
    } else {
      setRed(red + 1);
    }
  }
  let [orange, setOrange] = React.useState(0);
  function orangeMinus() {
    if (orange <= 0) {
      window.alert("Please input valid amount!");
    } else {
      setOrange(orange - 1);
    }
  }
  function orangePlus() {
    if (orange >= 10) {
      window.alert("Please input valid amount!");
    } else {
      setOrange(orange + 1);
    }
  }

  return (
    <div className="bg-[#f4f7ff] p-0 md:py-[50px]">
      <div className="flex-col md:flex-row p-0 md:p-[100px] m-0 md:mx-[120px] bg-[#ffff] flex rounded-[30px]">
        <div className="flex-1">
          <img src={Stadium} alt="stadium" />
        </div>
        <div className="flex flex-col gap-[25px] w-full flex-1 p-8 md:p-0">
          <div className="flex justify-between items-center ">
            <div className="font-semibold text-[20px]">Tickets</div>
            <div className="flex gap-[15px] items-center text-[12px] font-semibold text-[#ff3d71]">
              <div>BY PRICE</div>
              <button>
                <span>
                  <FaArrowDownUpAcrossLine />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[15px] w-full">
              <div className="flex items-center gap-[15px]">
                <div className="p-[10px] bg-[#F1EAFF] text-[#884DFF] rounded-[10px]">
                  <FaTicket />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <div className="font-bold text-[14px]">
                      SECTION REG, ROW 1
                    </div>
                    <div className="font-semibold text-[12px] text-[#c1c5d0]">
                      12 Seats available
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[14px]">$15</div>
                    <div className="font-semibold text-[12px] text-[#c1c5d0]">
                      per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] w-full items-center">
                <div className="font-semibold text-[16px] text-[#c1c5d0]">
                  Quantity
                </div>
                <div className="flex gap-[20px] w-full items-center">
                  <button
                    onClick={purpleMinus}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                  >
                    <FaMinus />
                  </button>
                  <p>{purple}</p>
                  <button
                    onClick={purplePlus}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <div className="flex items-center gap-[15px]">
                <div className="p-[10px] bg-[#FFEAEF] text-[#FF3D71] rounded-[10px]">
                  <FaTicket />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <div className="font-bold text-[14px]">
                      SECTION VIP, ROW 2
                    </div>
                    <div className="font-semibold text-[12px] text-[#c1c5d0]">
                      9 Seats available
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[14px]">$35</div>
                    <div className="font-semibold text-[12px] text-[#c1c5d0]">
                      per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] w-full items-center">
                <div className="font-semibold text-[16px] text-[#c1c5d0]">
                  Quantity
                </div>
                <div className="flex gap-[20px] w-full items-center">
                  <button
                    onClick={redMinus}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                  >
                    <FaMinus />
                  </button>
                  <p>{red}</p>
                  <button
                    onClick={redPlus}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <div className="flex items-center gap-[15px]">
                <div className="p-[10px] bg-[#FFF4E7] text-[#FF8900] rounded-[10px]">
                  <FaTicket />
                </div>
                <div className="flex w-full justify-between">
                  <div>
                    <div className="font-bold text-[14px]">
                      SECTION VVIP, ROW 3
                    </div>
                    <div className="font-semibold text-[12px] text-[#c1c5d0]">
                      6 Seats available
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[14px]">$50</div>
                    <div className="font-semibold text-[12px] text-[#c1c5d0]">
                      per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] w-full items-center">
                <div className="font-semibold text-[16px] text-[#c1c5d0]">
                  Quantity
                </div>
                <div className="flex gap-[20px] w-full items-center">
                  <button
                    onClick={orangeMinus}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                  >
                    <FaMinus />
                  </button>
                  <p>{orange}</p>
                  <button
                    onClick={orangePlus}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-[15px] font-semibold mb-[50px]">
            <div className="flex justify-between w-full items-center">
              <div>Ticket Section</div>
              <div className="text-[#3366ff] flex items-center">
                {purple === 0 && red === 0 && orange === 0
                  ? "-"
                  : `REG${" " + purple}, ` +
                    `VIP${" " + red}, ` +
                    `VVIP${" " + orange}`}
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <div>Quantity</div>
              <div className="text-[#3366ff] flex items-center">
                {purple + red + orange}
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <div>Total Payment</div>
              <div className="text-[#3366ff] flex items-center">
                $
                {purple === 0 && red === 0 && orange === 0
                  ? "0"
                  : purple * 15 + red * 35 + orange * 50}
              </div>
            </div>
          </div>
          <div>
            <button className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#3366ff]">
              <Link to={"/PaymentPage"}>Checkout</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentEvent;
