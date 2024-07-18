import React from "react";
import AvatarProfile from "../assets/icons/avatar-profile.png";
import Footer from "../components/Footer";
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
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ContentPass() {
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
              <div>
                <Link to={"/ProfilePage"}>Edit Profile</Link>
              </div>
            </div>
            <div className="pl-[50px] flex gap-[25px] text-[#3366FF] items-center hover:text-[#3366FF]">
              <FaLock />
              <div>Change Password</div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaRectangleList />
              <div>
                <Link to={"/MyBooking"}>My Booking</Link>
              </div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaHeart />
              <div>
                <Link to={"/MyWishlist"}>My Wishlist</Link>
              </div>
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
        <div className="w-2/3 p-[100px]  mr-[120px] bg-[#ffff] flex rounded-[30px] flex gap-[50px]">
          <form className="flex flex-col gap-[30px] w-full">
            <div className="flex justify-between font-semibold items-center">
              <label for="name">Old Password</label>
              <input
                type="text"
                placeholder="Input Old Password..."
                id="name"
                className="p-[10px] border rounded-xl w-full max-w-[800px]"
              />
            </div>
            <div className="flex justify-between font-semibold items-center">
              <label for="name">New Password</label>
              <input
                type="text"
                placeholder="Input New Password ..."
                id="name"
                className="p-[10px] border rounded-xl w-full max-w-[800px]"
              />
            </div>
            <div className="flex justify-between font-semibold items-center">
              <label for="name">Confirm Password</label>
              <input
                type="text"
                placeholder="Input Confirm Password ..."
                id="name"
                className="p-[10px] border rounded-xl w-full max-w-[800px]"
              />
            </div>
            <button
              type="submit"
              className="py-[15px] px-[82px] font-semibold text-[#ffff] bg-[#3366ff] rounded-[15px] text-[16px]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentPass;
