import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTicket } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQty, addSection } from "../redux/reducers/section";

function TicketSection(props) {
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const price = props.data.price

  useEffect(() => {
    const current = props.currentData;
    current[props.index] = {
      id: props.data.id,
      name: props.data.name,
      price: num * props.data.price,
      quantity: num,
    };
    props.onChange([...current]);
  }, [num]);

  // const plus = () => {
  //   const newData = { ...props.data };
  //   if (num < 10) {
  //     newData.quantity = num + 1;
  //     newData.price = props.data.price * newData.quantity;
  //     dispatch(changeSeat(newData));
  //     setNum(newData.quantity);
  //   }
  // };
  // const min = () => {
  //   const newData = { ...props.data };
  //   if (num > 0) {
  //     newData.quantity = num - 1;
  //     newData.price = props.data.price * newData.quantity;
  //     dispatch(changeSeat(newData));
  //     setNum(newData.quantity);
  //   }
  // };
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[15px] w-full">
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] bg-[#F1EAFF] text-[#884DFF] rounded-[10px] justify-start flex">
            <FaTicket />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-2">
              <div>
                <div className="font-bold text-[14px]">
                  Section {props.data.name}, Row 1
                </div>
                <div className="font-semibold text-[12px] text-[#c1c5d0]">
                  {props.quantity} Seats available
                </div>
              </div>
              <div className="font-semibold text-[16px] text-[#c1c5d0]">
                Quantity
              </div>
            </div>
            <div className="text-center flex flex-col gap-2">
              <div>
                <div className="font-bold text-[14px]">
                  Rp{price.toLocaleString("id")}
                </div>
                <div className="font-semibold text-[12px] text-[#c1c5d0]">
                  per person
                </div>
              </div>
              <div className="flex gap-[20px] w-full items-center">
                <div className="flex gap-[20px] w-full items-center flex-end">
                  <button
                    onClick={()=> setNum(num -1)}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                    disabled={num === 0}
                  >
                    <FaMinus />
                  </button>
                  <p>{num}</p>
                  <button
                    onClick={() => setNum(num + 1)}
                    className="p-[5px] border border-[#c1c5d0] bg-[#ffff] rounded-[7px]"
                    disabled={num === 10}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSection;
