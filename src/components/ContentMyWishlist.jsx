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
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ContentMyWishlist() {
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
            <div className="flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaRectangleList />
              <div onClick={clickMy}>My Booking</div>
            </div>
            <div className="flex gap-[25px] text-[#3366FF] items-center hover:text-[#3366FF]">
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
            <div className="flex gap-[10px] items-center p-[20px] bg-[#D6E0FF] text-[#3366FF] rounded-[15px] font-semibold">
              <FaCalendarDays />
              <div>March</div>
            </div>
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
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
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
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
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
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
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
                  <div onClick={clickEvent} className="text-[#3366FF]">
                    Details
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
    </div>
  );
}

export default ContentMyWishlist;
