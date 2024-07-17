import React from "react";
import Footer from "./Footer";
import CreditCard from "../assets/images/credit-card.png";
import { Link } from "react-router-dom";

function ContentPayment() {
  return (
    <div className="bg-[#f4f7ff] py-[50px]">
      <div className="p-[100px]  mx-[120px] bg-[#ffff] flex rounded-[30px] flex gap-[50px]">
        <div className="flex-1">
          <div className="flex flex-col gap-[50px]">
            <div className="font-semibold text-[20px] w-full">
              Payment Method
            </div>
            <div className="flex items-center gap-[15px] justify-between">
              <div className="flex gap-[10px]">
                <input type="radio" id="card" name="payment" />
                <img className="w-[24px] h-[24px]" src="" alt="Card" />
                <label className="font-bold" for="card">
                  Card
                </label>
              </div>
              <div>
                <img src="" alt="arrow" />
              </div>
            </div>
            <div className="flex gap-[10px] items-center pl-[50px]">
              <img src={CreditCard} alt="" />
              <img src="" alt="plus" />
            </div>
            <div className="flex items-center gap-[15px] justify-between">
              <div className="flex gap-[10px]">
                <input type="radio" id="card" name="payment" />
                <img className="w-[24px] h-[24px]" src="" alt="Bank" />
                <label className="font-bold" for="card">
                  Bank Transfer
                </label>
              </div>
              <div>
                <img src="" alt="arrow" />
              </div>
            </div>
            <div className="flex items-center gap-[15px] justify-between">
              <div className="flex gap-[10px]">
                <input type="radio" id="card" name="payment" />
                <img className="w-[24px] h-[24px]" src="" alt="Retail" />
                <label className="font-bold" for="card">
                  Retail
                </label>
              </div>
              <div>
                <img src="" alt="arrow" />
              </div>
            </div>
            <div className="flex items-center gap-[15px] justify-between">
              <div className="flex gap-[10px]">
                <input type="radio" id="card" name="payment" />
                <img className="w-[24px] h-[24px]" src="" alt="E-Money" />
                <label className="font-bold" for="card">
                  E-Money
                </label>
              </div>
              <div>
                <img src="" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-[50px] max-w-[500px] w-full">
            <div className="font-semibold text-[20px] w-full">
              Ticket Detail
            </div>
            <div className="flex flex-col gap-[15px] font-semibold mb-[50px]">
              <div className="flex justify-between w-full">
                <div>Event</div>
                <div className="text-[#3366ff]">Cek Khodam Kak Mudrik</div>
              </div>
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
              <button
                className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#3366ff]"
                type="submit"
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentPayment;
