import React from "react";
import Footer from "../components/Footer";
import AvatarProfile from "../assets/icons/avatar-profile.png";
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

function ContentProfile() {
  const navigate = useNavigate();
  function clickLogout(e) {
    e.preventDefault();
    window.alert("Your account has been logged out!");
    navigate("/Login");
  }
  function clickMy(e) {
    e.preventDefault();
    navigate("/MyBooking");
  }
  function clickWishlist(e) {
    e.preventDefault();
    navigate("/MyWishlist");
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
              <div className="font-semibold">Jhon Thomson</div>
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
            <div className="pl-[50px] flex gap-[25px] text-[#3366FF] items-center hover:text-[#3366FF]">
              <FaUserPen />
              <div>Edit Profile</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#3366FF]">
              <FaLock />
              <div>
                <Link to={"/ChangePassword"}>Change Password</Link>
              </div>
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
          <div className="flex-1">
            <form className="flex flex-col gap-[30px]">
              <div className="flex justify-between text-[20px] font-bold">
                Profile
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="name">Name</label>
                <input
                  type="text"
                  placeholder="Jhon Thomson"
                  id="name"
                  className="p-[10px] border rounded-xl"
                />
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="username">Username</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="password"
                  placeholder="@jhont0"
                  id="username"
                />
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="email">Email</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="email"
                  placeholder="admin@gmail.com"
                  id="email"
                />
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="phone">Phone Number</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="text"
                  placeholder="081234567890"
                  id="phone"
                />
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label>Gender</label>
                <div>
                  <input type="radio" id="male" name="gender" />
                  <label for="male">Male</label>
                  <input type="radio" id="female" name="gender" />
                  <label for="female">Female</label>
                </div>
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="profession">Profession</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="text"
                  placeholder="Entrepreneur"
                  id="profession"
                />
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="nationality">Nationality</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="password"
                  placeholder="Indonesia"
                  id="nationality"
                />
              </div>
              <div className="flex justify-between font-semibold items-center">
                <label for="birth">Birthday Date</label>
                <input
                  type="date"
                  id="birth"
                  className="p-[10px] border rounded-xl"
                />
              </div>
              <button
                type="submit"
                className="py-[15px] px-[82px] font-semibold text-[#ffff] bg-[#3366ff] rounded-[15px] text-[16px]"
              >
                Save
              </button>
            </form>
          </div>
          <div className="flex-1">
            <div className="flex items-center flex-col gap-[20px]">
              <div className="h-[200px] w-[200px] rounded-full bg-black">
                <div></div>
              </div>
              <div>
                <button
                  className="py-[15px] px-[82px] font-semibold text-[#3366ff] bg-[#ffff] rounded-[15px] text-[16px] border border-[#3366ff]"
                  type="submit"
                >
                  Choose Photo
                </button>
              </div>
              <div>
                <div>Image size: max, 2 MB</div>
                <div>Image formats: .JPG, .JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentProfile;
