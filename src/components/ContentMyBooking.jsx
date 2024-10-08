import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { FaCalendarDays } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import Layout from "../components/Layout";

function ContentMyBooking() {
  const token = useSelector((state) => state.auth.token);
  const [detailBook, setDetailBook] = useState([]);
  console.log(detailBook);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://103.93.58.89:21212/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setDetailBook([...data.results]);
    })();
  }, []);

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        <div className="flex gap-[20px]">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className=" p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col max-h-[600px] md:w-2/3 md:p-[90px] md:mr-[120px] md:rounded-3xl md:shadow-xl w-full">
            <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
              <div className="text-2xl font-bold">My Booking</div>
              <div className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold">
                <FaCalendarDays />
                <div>March</div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] overflow-y-scroll">
              {detailBook.length > 0 ? (
                detailBook.map((item) => {
                  return (
                    <div className="flex gap-[25px]">
                      <div className="p-[10px] text-center font-semibold text-[#ff8900] max-h-20 border rounded-xl">
                        <div>15</div>
                        <div className="text-gray-500">Wed</div>
                      </div>
                      <div className="flex flex-col gap-[15px]">
                        <div className="text-[24px] font-bold">
                          {item.eventTitle}
                        </div>
                        <div>
                          <div className="text-gray-500">
                            Jakarta, Indonesia
                          </div>
                          <div className="text-gray-500">{item.date}</div>
                        </div>
                        <div className="text-[#508C9B] font-semibold">
                          Details
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full w-full flex flex-col justify-center items-center gap-6">
                  <div className="text-2xl font-bold">No tickets bought</div>
                  <div>
                    It appears you haven't bought any tickets yet. Maybe try
                    searching else?
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContentMyBooking;
