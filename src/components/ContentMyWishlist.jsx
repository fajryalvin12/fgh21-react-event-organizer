import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaRegHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import axios from "axios";
import Layout from "../components/Layout";
import { useShowWishlistQuery } from "../redux/services/wishlist";

function ContentMyWishlist() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(0);
  const { data, err, isLoading } = useShowWishlistQuery(token);
  async function deleteWishlist(id) {
    try {
      const response = await axios.delete(
        "http://103.93.58.89:21212/wishlist/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setMessage(response.data.message);
        setAlert(1);
      } else {
        setMessage(response.data.message);
        setAlert(1);
      }
      console.log(response.data.success);
    } catch (error) {
      console.error("Failed to delete wishlist");
    }
  }

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        <div className="flex gap-[20px]">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className="w-full md:w-2/3 p-8 m-0 md:p-[90px] md:mr-[120px] bg-[#ffff] rounded-none flex gap-[50px] flex-col md:rounded-3xl shadow-xl">
            <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
              <div className="text-2xl font-bold">My Wishlist</div>
              <button className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold">
                <FaCalendarDays />
                <div>March</div>
              </button>
            </div>
            <div className="flex flex-col gap-[20px] overflow-y-scroll">
              {data?.results.length > 0 ? (
                data?.results.map((item) => {
                  return (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex gap-[25px]">
                        <div className="p-[10px] text-center font-semibold text-[#ff8900] max-h-20 border rounded-xl">
                          <div>15</div>
                          <div className="text-gray-500">Wed</div>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                          <div className="text-[24px] font-bold">
                            {item.title}
                          </div>
                          <div>
                            <div className="text-gray-500">
                              Jakarta, Indonesia
                            </div>
                            <div className="text-gray-500">{item.date}</div>
                          </div>
                          <div className="flex gap-4">
                            <div className="text-[#508C9B] font-semibold">
                              Details
                            </div>
                            <button
                              onClick={() => deleteWishlist(item.id)}
                              className="text-[#508C9B] font-semibold"
                            >
                              Delete
                            </button>
                          </div>
                          {alert ? (
                            <div className="h-12 flex-1 bg-white flex items-center pl-4 justify-between">
                              {message ? (
                                <button
                                  onClick={() => setAlert(0)}
                                  className="text-green-500"
                                >
                                  {message}
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div>
                        <FaRegHeart className="w-[36px] h-[36px]" />
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

export default ContentMyWishlist;
