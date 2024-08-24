import React from "react";
import {
  FaCircleUser,
  FaCreditCard,
  FaUserPen,
  FaLock,
  FaRectangleList,
  FaHeart,
  FaGear,
  FaArrowRightFromBracket,
  FaCirclePlus,
} from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import { removeProfile } from "../redux/reducers/profile";
import { Link } from "react-router-dom";
import Antony from "../assets/images/antony.png";

function Sidebar() {
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function clickLogout(e) {
    e.preventDefault();
    dispatch(logout(null));
    dispatch(removeProfile(null));
    navigate("/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-[20px]">
        <img
          src={Antony}
          alt=""
          className="border border-[#373a42bf] rounded-full w-12 h-12 object-cover"
        />
        <div>
          <div className="font-semibold">{profile.fullName}</div>
          <div>{profile.profession}</div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] text-[#373a42bf] font-semibold">
        <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
          <FaCircleUser />
          <div>Profile</div>
        </div>
        <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#508C9B]">
          <FaCreditCard />
          <div className="stroke-zinc-600">Card</div>
        </div>
        <div className="pl-[50px] flex gap-[25px] text-[#373a42bf] items-center hover:text-[#508C9B]">
          <FaUserPen />
          <div>
            <Link to={"/profile"}>Edit Profile</Link>
          </div>
        </div>
        <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#508C9B]">
          <FaLock />
          <div>
            <Link to={"/change-password"}>Change Password</Link>
          </div>
        </div>
        <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
          <FaCirclePlus />
          <div>
            <Link to={"/create-event"}>Create Event</Link>
          </div>
        </div>
        <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
          <FaRectangleList />
          <div>
            <Link to={"/my-booking"}>My Booking</Link>
          </div>
        </div>
        <div className="flex gap-[25px] items-center hover:text-[#508C9B]">
          <FaHeart />
          <div>
            <Link to={"/wishlist"}>My Wishlist</Link>
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
  );
}

export default Sidebar;
