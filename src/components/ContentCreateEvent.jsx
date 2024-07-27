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
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import { removeProfile } from "../redux/reducers/profile";

function ContentCreateEvent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function clickLogout(e) {
    e.preventDefault();
    window.alert("Your account has been logged out!");
    dispatch(logout(null));
    dispatch(removeProfile(null));
    navigate("/Login");
  }
  function clickEdit(e) {
    e.preventDefault();
    navigate("/ProfilePage");
  }
  function clickEvent(e) {
    e.preventDefault();
    navigate("/EventPage");
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
    <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
      <div className="flex gap-[20px]">
        <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
          <div className="flex gap-[20px]">
            <img
              src={AvatarProfile}
              alt=""
              className=" border-[#3366ff] rounded-full border-[3px]"
            />
            <div>
              <div onClick={clickEdit} className="font-semibold">
                Jhon Thomson
              </div>
              <div>Entrepreneur, ID</div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] text-[#373a42bf] font-semibold">
            <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaCircleUser />
              <div>Profile</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaCreditCard />
              <div>Card</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaUserPen />
              <div>
                <Link to={"/ProfilePage"}>Edit Profile</Link>
              </div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaLock />
              <div>
                <Link to={"/ChangePassword"}>Change Password</Link>
              </div>
            </div>
            <div className="flex gap-[25px] text-[#508C9B] items-center hover:text-[#508C9B]">
              <FaCirclePlus />
              <div>
                <Link to={"/CreateEvent"}>Create Event</Link>
              </div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaRectangleList />
              <div>
                <Link to={"/MyBooking"}>My Booking</Link>
              </div>
            </div>
            <div className="flex gap-[25px]  items-center hover:text-[#508C9B]">
              <FaHeart />
              <div>
                <Link to={"/MyWishlist"}>My Wishlist</Link>
              </div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaGear />
              <div>Settings</div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-red-500">
              <FaArrowRightFromBracket />
              <button onClick={clickLogout}>Logout</button>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-0 m-0 md:p-[100px] md:mr-[120px] bg-[#ffff]  rounded-none md:rounded-[30px] flex gap-[50px] flex-col">
          <div className="flex md:items-center items-start gap-8 p-4 md:p-0 justify-between flex-col md:flex-row">
            <div className="text-[20px] font-bold">Manage Event</div>
            <button
              onClick={setPopUp}
              className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#508C9B] rounded-[15px] font-semibold"
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
                    Cek Khodam Kak Mudryk
                  </div>
                  <div>
                    <div className="text-gray-500">Jakarta, Indonesia</div>
                    <div className="text-gray-500">Wed, 15 Nov, 4:00 PM</div>
                  </div>
                  <div className="flex gap-5 font-semibold">
                    <div onClick={clickEvent} className="text-[#508C9B]">
                      Details
                    </div>
                    <div className="text-[#508C9B]">Update</div>
                    <div className="text-[#508C9B]">Delete</div>
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
                    <div onClick={clickEvent} className="text-[#508C9B]">
                      Details
                    </div>
                    <div className="text-[#508C9B]">Update</div>
                    <div className="text-[#508C9B]">Delete</div>
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
                    <div onClick={clickEvent} className="text-[#508C9B]">
                      Details
                    </div>
                    <div className="text-[#508C9B]">Update</div>
                    <div className="text-[#508C9B]">Delete</div>
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
                    <div onClick={clickEvent} className="text-[#508C9B]">
                      Details
                    </div>
                    <div className="text-[#508C9B]">Update</div>
                    <div className="text-[#508C9B]">Delete</div>
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
        <div
          onClick={standBy}
          className="bg-[#ffff] rounded-3xl p-4 m-8 md:p-20 md:m-20"
        >
          <div className="font-bold text-2xl mb-10">Update Event</div>
          <form className="flex flex-col gap-2 md:gap-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
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
            <div className="flex flex-col md:flex-row items-center gap-12">
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
            <div className="flex flex-col md:flex-row items-center gap-12">
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
