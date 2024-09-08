import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import CreditCard from "../assets/images/credit-card.png";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaBuildingColumns,
  FaShop,
  FaDollarSign,
  FaPlus,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Loading from "./Loading";
import Layout from "../components/Layout";

function ContentPayment() {
  const navigate = useNavigate();
  const endpointTrx = "http://localhost:8888/transactions";
  const token = useSelector((state) => state.auth.token);
  const eventTitle = useSelector((state) => state.section.eventTitle);
  const qty = useSelector((state) => state.section.qty);
  const eventId = useSelector((state) => state.section.eventId);
  const totalPayment = useSelector((state) => state.section.totalPayment);
  const ticketSection = useSelector((state) => state.section.ticketSection);
  const sectionId = useSelector((state) => state.section.sectionId);
  const quantityArray = useSelector((state) => state.section.quantity);
  const [payMethod, setPayMethod] = useState(0);
  const [loading, setLoading] = React.useState(0);
  function tooglePayment(event) {
    setPayMethod(event.target.value);
  }

  async function processPayment() {
    setLoading(1);
    try {
      const response = await axios.post(
        endpointTrx,
        {
          eventId: parseInt(eventId),
          paymentMethodId: parseInt(payMethod),
          sectionId: sectionId,
          ticketQty: quantityArray,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error to proceed data");
      navigate("/login");
      return;
    }
    navigate("/my-booking");
    setTimeout(() => setLoading(0), 5000);
  }

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        {loading ? <Loading /> : ""}
        <div className="p-6 m-0 md:p-[100px] md:mx-[120px] bg-[#ffff] flex-col md:flex-row rounded-[30px] flex gap-[50px] shadow-md">
          <div className="flex-1">
            <div className="flex flex-col gap-[50px]">
              <div className="font-semibold text-[20px] w-full">
                Payment Method
              </div>
              <div className="flex items-center gap-[15px] justify-between">
                <div className="flex gap-[10px] items-center">
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    value={1}
                    // checked={payMethod === 1}
                    onChange={tooglePayment}
                  />
                  <div className="p-[10px] bg-[#F1EAFF] text-[#884DFF] rounded-[10px]">
                    <FaCreditCard />
                  </div>
                  <label className="font-bold" htmlFor="card">
                    Card
                  </label>
                </div>
                <div>
                  <FaAngleUp />
                </div>
              </div>
              <div className="flex gap-[10px] items-center pl-[50px]">
                <img src={CreditCard} alt="" />
                <div className="border border-dotted border-[#508C9B] p-[10px] rounded-[10px] text-[#508C9B]">
                  <FaPlus />
                </div>
              </div>
              <div className="flex items-center gap-[15px] justify-between">
                <div className="flex gap-[10px] items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    value={2}
                    // checked={payMethod === 2}
                    onChange={tooglePayment}
                  />
                  <div className="p-[10px] bg-[#FFEAEF] text-[#FF3D71] rounded-[10px]">
                    <FaBuildingColumns />
                  </div>
                  <label className="font-bold" htmlFor="bank">
                    Bank Transfer
                  </label>
                </div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
              <div className="flex items-center gap-[15px] justify-between">
                <div className="flex gap-[10px]">
                  <input
                    type="radio"
                    id="retail"
                    name="payment"
                    value={3}
                    // checked={payMethod === 2}
                    onChange={tooglePayment}
                  />
                  <div className="p-[10px] bg-[#FFF4E7] text-[#FF8900] rounded-[10px]">
                    <FaShop />
                  </div>
                  <label className="font-bold" htmlFor="retail">
                    Retail
                  </label>
                </div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
              <div className="flex items-center gap-[15px] justify-between">
                <div className="flex gap-[10px] items-center">
                  <input
                    type="radio"
                    id="money"
                    name="payment"
                    value={4}
                    // checked={payMethod === 2}
                    onChange={tooglePayment}
                  />
                  <div className="p-[10px] bg-[#D6E0FF] text-[#3366FF] rounded-[10px]">
                    <FaDollarSign />
                  </div>
                  <label className="font-bold" htmlFor="money">
                    E-Money
                  </label>
                </div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-[50px] w-full">
              <div className="font-semibold text-[20px] w-full">
                Ticket Detail
              </div>
              <div className="flex flex-col gap-[15px] font-semibold mb-[50px]">
                <div className="flex justify-between w-full">
                  <div>Event</div>
                  <div className="text-[#508C9B]">
                    {eventId === 0 ? "-" : eventTitle}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div>Ticket Section</div>
                  <div className="text-[#508C9B]">
                    {ticketSection.length === 0
                      ? "-"
                      : ticketSection.join(", ")}
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div>Quantity</div>
                  <div className="text-[#508C9B]">{qty === 0 ? "-" : qty}</div>
                </div>
                <div className="flex justify-between w-full">
                  <div>Total Payment</div>
                  <div className="text-[#508C9B]">
                    {totalPayment === 0
                      ? "-"
                      : `Rp.${totalPayment.toLocaleString("id")}`}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={processPayment}
                  className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#134B70]"
                  type="button"
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContentPayment;
