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
  FaEye,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  let [oldPass, setOldPass] = React.useState("password");
  function oldPassword() {
    if (oldPass === "password") {
      setOldPass("text");
    } else {
      setOldPass("password");
    }
  }
  let [newPass, setNewPass] = React.useState("password");
  function newPassword() {
    if (newPass === "password") {
      setNewPass("text");
    } else {
      setNewPass("password");
    }
  }
  let [confirmPass, setConfirmPass] = React.useState("password");
  function confirmPassword() {
    if (confirmPass === "password") {
      setConfirmPass("text");
    } else {
      setConfirmPass("password");
    }
  }
  const profile = useSelector((state) => state.profile.data);

  return (
    <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
      <div className="flex gap-[20px] mt-12">
        <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
          <div className="flex gap-[20px]">
            <img
              src={AvatarProfile}
              alt=""
              className="border border-[#134B70] rounded-full"
            />
            <div>
              <div onClick={clickEdit} className="font-semibold">
                {profile.fullName}
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
            <div className="pl-[50px] flex gap-[25px] text-[#508C9B] items-center hover:text-[#508C9B]">
              <FaLock />
              <div>Change Password</div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaRectangleList />
              <div>
                <Link to={"/MyBooking"}>My Booking</Link>
              </div>
            </div>
            <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
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
              <div onClick={clickLogout}>Logout</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-0 md:p-[80px] m-0 md:mr-[120px] bg-[#ffff] rounded-[30px] flex flex-col gap-[50px]">
          <div className="font-bold text-2xl">Change Password</div>
          <form className="flex flex-col gap-[10px]">
            <div className="flex justify-between font-semibold items-center gap-12">
              <label className="w-1/3" for="name">
                Old Password
              </label>
              <div className="p-[10px] border rounded-xl w-full flex justify-between">
                <input
                  type={oldPass}
                  placeholder="Input Old Password..."
                  id="name"
                  className="flex-1 h-8 outline-none w-2/3"
                />
                <button type="button" onClick={oldPassword}>
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="flex justify-between font-semibold items-center gap-12">
              <label className="w-1/3" for="name">
                New Password
              </label>
              <div className="p-[10px] border rounded-xl w-full flex justify-between">
                <input
                  type={newPass}
                  placeholder="Input New Password..."
                  id="name"
                  className="flex-1 h-8 outline-none w-2/3"
                />
                <button type="button" onClick={newPassword}>
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="flex justify-between font-semibold items-center gap-12">
              <label className="w-1/3" for="name">
                Confirm Password
              </label>
              <div className="p-[10px] border rounded-xl w-full flex justify-between">
                <input
                  type={confirmPass}
                  placeholder="Confirm new password..."
                  id="name"
                  className="flex-1 h-8 outline-none w-2/3"
                />
                <button type="button" onClick={confirmPassword}>
                  <FaEye />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="py-[15px] px-[82px] font-semibold text-[#ffff] bg-[#134B70] rounded-[15px] text-[16px]"
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
