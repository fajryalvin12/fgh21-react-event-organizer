import React from "react";
import Footer from "./Footer";
import Stadium from "../assets/images/stadium.png";
import { Link } from "react-router-dom";

function ContentEvent() {
  return (
    <div className="bg-[#f4f7ff] py-[50px]">
      <div className="p-[100px]  mx-[120px] bg-[#ffff] flex rounded-[30px]">
        <div className="">
          <img src={Stadium} alt="stadium" />
        </div>
        <div className="flex flex-col gap-[25px] w-full">
          <div className="flex justify-between items-center ">
            <div className="font-semibold text-[20px]">Tickets</div>
            <div className="flex gap-[15px] items-center text-[12px] font-semibold text-[#ff3d71]">
              <div>BY PRICE</div>
              <button>
                <span>
                  <img src="" alt="toogle" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[15px] w-full">
              <div className="flex items-center gap-[15px]">
                <div>Tiket Merah</div>
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
                <div className="font-semibold text-[12px] text-[#c1c5d0]">
                  Quantity
                </div>
                <div className="flex gap-[20px] w-full items-center">
                  <button className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]">
                    Minus
                  </button>
                  <p>0</p>
                  <button className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]">
                    Plus
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <div className="flex items-center gap-[15px]">
                <div>Tiket Merah</div>
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
                <div className="font-semibold text-[12px] text-[#c1c5d0]">
                  Quantity
                </div>
                <div className="flex gap-[20px] w-full items-center">
                  <button className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]">
                    Minus
                  </button>
                  <p>0</p>
                  <button className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]">
                    Plus
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <div className="flex items-center gap-[15px]">
                <div>Tiket Merah</div>
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
                <div className="font-semibold text-[12px] text-[#c1c5d0]">
                  Quantity
                </div>
                <div className="flex gap-[20px] w-full items-center">
                  <button className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]">
                    Minus
                  </button>
                  <p>0</p>
                  <button className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]">
                    Plus
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-[15px] font-semibold mb-[50px]">
            <div className="flex justify-between w-full">
              <div>Ticket Section</div>
              <div className="text-[#3366ff]">VIP</div>
            </div>
            <div className="flex justify-between w-full">
              <div>Quantity</div>
              <div className="text-[#3366ff]">2</div>
            </div>
            <div className="flex justify-between w-full">
              <div>Total Payment</div>
              <div className="text-[#3366ff]">$70</div>
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
