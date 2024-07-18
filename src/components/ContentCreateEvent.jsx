import React from "react";
import AvatarProfile from "../assets/icons/avatar-profile.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  FaCircleUser,
  FaCreditCard,
  FaUserPen,
  FaLock,
  FaRectangleList,
  FaHeart,
  FaGear,
  FaArrowRightFromBracket,
  FaCalendarDays,
  FaRegHeart,
  FaCirclePlus,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ContentCreateEvent() {
  const navigate = useNavigate();
  function clickLogout(e) {
    e.preventDefault();
    window.alert("Your account has been logged out!");
    navigate("/Login");
  }
  function clickEdit(e) {
    e.preventDefault();
    navigate("/ProfilePage");
  }
  function clickChange(e) {
    e.preventDefault();
    navigate("/ChangePassword");
  }
  function clickEvent(e) {
    e.preventDefault();
    navigate("/EventPage");
  }
  function clickMy(e) {
    e.preventDefault();
    navigate("/MyBooking");
  }
  function setPopUp() {
    const PopUp = document.getElementById("popup");
    PopUp.classList.toggle("hidden");
  }
  function standBy(e) {
    e.stopPropagation();
  }
  function setPopUp2() {
    PopUp.classList.toggle("hidden");
  }
  return (
    <div className="bg-[#f4f7ff] py-[50px]">
      <div className="flex gap-[20px]">
        <div className="w-1/3 px-[100px] flex flex-col gap-[30px]">
          <div className="flex gap-[20px]">
            <img
              src={AvatarProfile}
              alt=""
              className="border border-[#3366ff] rounded-full border-[3px]"
            />
            <div>
              <div onClick={clickEdit} className="font-semibold">
                Jhon Thomson
              </div>
              <div>Entrepreneur, ID</div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] text-[#373a42bf] font-semibold">
            <div className="flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaCircleUser />
              <div>Profile</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaCreditCard />
              <div>Card</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaUserPen />
              <div onClick={clickEdit}>Edit Profile</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaLock />
              <div onClick={clickChange}>Change Password</div>
            </div>
            <div className="flex gap-[25px] text-[#3366FF] items-center hover:text-[#3366FF]">
              <FaCirclePlus />
              <div>
                <Link to={"/CreateEvent"}>Create Event</Link>
              </div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaRectangleList />
              <div onClick={clickMy}>My Booking</div>
            </div>
            <div className="flex gap-[25px]  items-center hover:text-[#3366FF]">
              <FaHeart />
              <div>My Wishlist</div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaGear />
              <div>Settings</div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-red-500">
              <FaArrowRightFromBracket />
              <div onClick={clickLogout}>Logout</div>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-[100px]  mr-[120px] bg-[#ffff] flex rounded-[30px] flex flex-col gap-[50px]">
          <div className="flex items-center justify-between">
            <div className="text-[20px] font-bold">My Booking</div>
            <button
              onClick={setPopUp}
              className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#3366FF] rounded-[15px] font-semibold"
            >
              Create
            </button>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div className="flex gap-5 font-semibold">
                    <div onClick={clickEvent} className="text-[#3366FF]">
                      Details
                    </div>
                    <div className="text-[#3366FF]">Update</div>
                    <div className="text-[#3366FF]">Delete</div>
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div className="flex gap-5 font-semibold">
                    <div onClick={clickEvent} className="text-[#3366FF]">
                      Details
                    </div>
                    <div className="text-[#3366FF]">Update</div>
                    <div className="text-[#3366FF]">Delete</div>
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div className="flex gap-5 font-semibold">
                    <div onClick={clickEvent} className="text-[#3366FF]">
                      Details
                    </div>
                    <div className="text-[#3366FF]">Update</div>
                    <div className="text-[#3366FF]">Delete</div>
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[25px]">
                <div className="p-[10px] text-center font-semibold text-[#ff8900]">
                  <div>15</div>
                  <div className="text-gray-500">Wed</div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="text-[24px] font-bold">
                    Sights & Sounds Exhibition
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div className="flex gap-5 font-semibold">
                    <div onClick={clickEvent} className="text-[#3366FF]">
                      Details
                    </div>
                    <div className="text-[#3366FF]">Update</div>
                    <div className="text-[#3366FF]">Delete</div>
                  </div>
                </div>
              </div>
              <div>
                <FaRegHeart className="w-[36px] h-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        onClick={setPopUp2}
        className="bg-[#0000007e] absolute top-0 hidden w-full"
        id="popup"
      >
        <div onClick={standBy} className="bg-[#ffff]  rounded-3xl p-20 m-20">
          <div className="font-bold text-2xl mb-10">Update Event</div>
          <form className="flex flex-col gap-10">
            <div className="flex items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Name</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Input name event..."
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Category</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Select Category"
                />
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Location</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Select Location"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Date/Time Show</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="01/01/2022"
                />
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Price</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Input Price ..."
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Image</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Choose File ..."
                />
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <label htmlFor="">Detail</label>
                <input
                  className="border p-5 w-full mr-10 rounded-xl"
                  type="text"
                  placeholder="Input Details"
                />
              </div>
            </div>
            <div>
              <button
                className="w-full py-[16px] px-110px] text-[#ffff] font-semibold text-[16px] rounded-[15px] bg-[#3366ff]"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContentCreateEvent;
