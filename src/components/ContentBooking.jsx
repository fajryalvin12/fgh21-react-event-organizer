import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FaMinus,
  FaPlus,
  FaArrowDownUpAcrossLine,
  FaTicket,
} from "react-icons/fa6";
import axios from "axios";
import TicketSection from "../components/TicketSection";
import {
  addQty,
  addEventId,
  addEventTitle,
  addTotalPayment,
  addTicketSection,
  addSectionId,
  addQuantity,
} from "../redux/reducers/section";
import Layout from "../components/Layout.jsx";

function ContentBooking() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const endpointSection = "http://localhost:8888/events/section/" + id;
  const endpointEvent = "http://localhost:8888/events/" + id;

  const [book, setBook] = useState([]);
  const [section, setSection] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get(endpointEvent);
      setBook(data.data.results);
      const sections = await axios.get(endpointSection);
      setSection(sections.data.results);
    })();
  }, []);

  const [selectedSections, setSelectedSections] = useState([]);

  const ticketSection = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(`${curr.name}(${curr.quantity})`);
    }
    return arr;
  }, []);
  const quantity = selectedSections.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const price = selectedSections.reduce((prev, curr) => prev + curr.price, 0);

  const sectionId = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.id);
    }
    return arr;
  }, []);
  const quantityArray = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.quantity);
    }
    return arr;
  }, []);

  dispatch(addQty(quantity));
  dispatch(addEventId(id));
  dispatch(addEventTitle(book.title));
  dispatch(addTotalPayment(price));
  dispatch(addTicketSection(ticketSection));
  dispatch(addSectionId(sectionId));
  dispatch(addQuantity(quantityArray));

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        <div className="flex-col md:flex-row p-0 md:p-[100px] m-0 md:mx-[120px] bg-[#ffff] flex rounded-[30px] shadow-md">
          <div className="flex-1">
            <img
              className="w-full h-full md:w-[475px] md:h-[586px] object-cover	rounded-none md:rounded-[40px] brightness-50"
              src={book.image}
              alt="stadium"
            />
          </div>
          <div className="flex flex-col gap-[25px] w-full flex-1 p-8 md:p-0">
            <div className="flex justify-between items-center ">
              <div className="font-semibold text-[20px]">{book.title}</div>
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
              {section.map((item, index) => {
                return (
                  <TicketSection
                    key={item.id}
                    data={item}
                    index={index}
                    currentData={selectedSections}
                    onChange={setSelectedSections}
                  />
                );
              })}
            </div>
            <hr />
            <div className="flex flex-col gap-[15px] font-semibold mb-[50px]">
              <div className="flex justify-between w-full items-center">
                <div>Ticket Section</div>
                <div className="text-[#508C9B] flex items-center">
                  {ticketSection.length == 0 ? "-" : ticketSection.join(", ")}
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <div>Quantity</div>
                <div className="text-[#508C9B] flex items-center">
                  {quantity === 0 ? "-" : quantity}
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <div>Total Payment</div>
                <div className="text-[#508C9B] flex items-center">
                  {price === 0 ? "-" : `Rp. ${price.toLocaleString("id")}`}
                </div>
              </div>
            </div>
            <div>
              <button className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#201E43]">
                <Link to={"/payment"}>Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContentBooking;

{
  /* <div className="flex flex-col gap-[15px] w-full">
<div className="flex items-center gap-[15px]">
  <div className="p-[10px] bg-[#F1EAFF] text-[#884DFF] rounded-[10px] justify-start flex">
    <FaTicket />
  </div>
  <div className="flex w-full justify-between">
    <div className="flex flex-col gap-2">
      <div>
        <div className="font-bold text-[14px]">
          {section[0].name}
        </div>
        <div className="font-semibold text-[12px] text-[#c1c5d0]">
          12 Seats available
        </div>
      </div>
      <div className="font-semibold text-[16px] text-[#c1c5d0]">
        Quantity
      </div>
    </div>
    <div className="text-center flex flex-col gap-2">
      <div>
        <div className="font-bold text-[14px]">
          Rp{section[0].price}
        </div>
        <div className="font-semibold text-[12px] text-[#c1c5d0]">
          per person
        </div>
      </div>
      <div className="flex gap-[20px] w-full items-center">
        <div className="flex gap-[20px] w-full items-center flex-end">
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
  </div>
</div>
</div>
<div className="flex flex-col gap-[15px] w-full">
<div className="flex items-center gap-[15px]">
  <div className="p-[10px] bg-[#FFEAEF] text-[#FF3D71] rounded-[10px] justify-start flex">
    <FaTicket />
  </div>
  <div className="flex w-full justify-between">
    <div className="flex flex-col gap-2">
      <div>
        <div className="font-bold text-[14px]">
          {section[1].name}
        </div>
        <div className="font-semibold text-[12px] text-[#c1c5d0]">
          9 Seats available
        </div>
      </div>
      <div className="font-semibold text-[16px] text-[#c1c5d0]">
        Quantity
      </div>
    </div>
    <div className="text-center flex flex-col gap-2">
      <div>
        <div className="font-bold text-[14px]">
          Rp{section[1].price}
        </div>
        <div className="font-semibold text-[12px] text-[#c1c5d0]">
          per person
        </div>
      </div>
      <div className="flex gap-[20px] w-full items-center">
        <div className="flex gap-[20px] w-full items-center flex-end">
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
  </div>
</div>
</div>
<div className="flex flex-col gap-[15px] w-full">
<div className="flex items-center gap-[15px]">
  <div className="p-[10px] bg-[#FFF4E7] text-[#FF8900] rounded-[10px] justify-start flex">
    <FaTicket />
  </div>
  <div className="flex w-full justify-between">
    <div className="flex flex-col gap-2">
      <div>
        <div className="font-bold text-[14px]">
          {section[2].name}
        </div>
        <div className="font-semibold text-[12px] text-[#c1c5d0]">
          6 Seats available
        </div>
      </div>
      <div className="font-semibold text-[16px] text-[#c1c5d0]">
        Quantity
      </div>
    </div>
    <div className="text-center flex flex-col gap-2">
      <div>
        <div className="font-bold text-[14px]">
          Rp{section[2].price}
        </div>
        <div className="font-semibold text-[12px] text-[#c1c5d0]">
          per person
        </div>
      </div>
      <div className="flex gap-[20px] w-full items-center">
        <div className="flex gap-[20px] w-full items-center flex-end">
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
</div>
</div> */
}
{
  /* <div className="flex justify-between w-full items-center">
<div>Quantity</div>
<div className="text-[#508C9B] flex items-center">
  {purple === 0 && red === 0 && orange === 0
    ? "-"
    : purple + red + orange}
</div>
</div> */
}
{
  /* <div className="flex justify-between w-full items-center">
<div>Total Payment</div>
<div className="text-[#508C9B] flex items-center">
  {purple === 0 && red === 0 && orange === 0
    ? "-"
    : "$" + (purple * 15 + red * 35 + orange * 50)}
</div>
</div> */
}
