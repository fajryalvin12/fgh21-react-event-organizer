import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import { removeProfile } from "../redux/reducers/profile";
import Loading from "../components/Loading";

function ContentProfile() {
  const [profession, setProfession] = React.useState([]);
  const [nationalities, setNationalities] = React.useState([]);
  let [loading, setLoading] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function clickLogout(e) {
    e.preventDefault();
    dispatch(logout(null));
    dispatch(removeProfile(null));
    navigate("/Login");
  }
  function processProfile() {
    window.alert("Profile Saved!");
  }

  const data = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  return (
    <div className="bg-[#EEEEEE] p-0 md:py-[50px] ">
      {loading ? <Loading /> : ""}
      <div className="flex justify-center mt-12 ">
        <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
          <div className="flex gap-[20px]">
            <img
              src={profile.picture}
              alt=""
              className="border border-[#3366ff] rounded-full w-12 h-12"
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
              <div>Card</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] text-[#508C9B] items-center hover:text-[#508C9B]">
              <FaUserPen />
              <div>Edit Profile</div>
            </div>
            <div className="pl-[50px] flex gap-[25px] items-center hover:text-[#508C9B]">
              <FaLock />
              <div>
                <Link to={"/ChangePassword"}>Change Password</Link>
              </div>
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
        <div className="md:w-2/3 md:p-[100px] md:mr-[120px] md:flex-row w-full p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col-reverse md:rounded-3xl">
          <div className="flex-1">
            <form
              onSubmit={processProfile}
              className="flex flex-col gap-[30px]"
            >
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between text-[20px] font-bold">
                Profile
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="name" className="w-1/3">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jhon Thomson"
                  id="name"
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  value={profile.fullName}
                />
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="username" className="w-1/3">
                  Username
                </label>
                <input
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  type="text"
                  placeholder="@jhont0"
                  id="username"
                  value={profile.username}
                />
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="email" className="w-1/3">
                  Email
                </label>
                <input
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  type="email"
                  placeholder="admin@gmail.com"
                  id="email"
                  value={profile.email}
                />
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="phone" className="w-1/3">
                  Phone Number
                </label>
                <input
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  type="text"
                  placeholder="081234567890"
                  id="phone"
                  value={profile.phoneNumber}
                />
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label className="w-1/3">Gender</label>
                <div className="w-2/3 outline-none text-[12px] flex gap-4">
                  <div className="flex gap-4">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      defaultChecked={profile.gender === "Male" ? true : false}
                    />
                    <label for="male">Male</label>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      defaultChecked={
                        profile.gender === "Female" ? true : false
                      }
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="profession" className="w-1/3">
                  Profession
                </label>
                <input
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  type="email"
                  placeholder="admin@gmail.com"
                  id="email"
                  value={profile.profession}
                />
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="nationality" className="w-1/3">
                  Nationality
                </label>
                <input
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  type="email"
                  placeholder="admin@gmail.com"
                  id="email"
                  value={profile.nationalityId}
                />
              </div>
              <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="birth" className="w-1/3">
                  Birthday Date
                </label>
                <input
                  type="text"
                  id="birthday"
                  name="birthday"
                  className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  placeholder=""
                  value={profile.birthDate}
                />
              </div>
              <button
                type="submit"
                className="py-[15px] px-[82px] font-semibold text-[#ffff] bg-[#134B70] rounded-[15px] text-[16px]"
              >
                Save
              </button>
            </form>
          </div>
          <div className="flex-1">
            <div className="flex items-center flex-col gap-[20px]">
              <img
                className="h-[200px] w-[200px] rounded-full"
                src={profile.picture}
              />
              <div>
                <button
                  className="py-[15px] px-[82px] font-semibold text-[#508C9B] bg-[#ffff] rounded-[15px] text-[16px] border border-[#508C9B] hidden md:flex"
                  type="submit"
                >
                  Choose Photo
                </button>
              </div>
              <div className="hidden md:flex md:flex-col">
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

// useEffect(() => {
//   (async () => {
//     setLoading(1);
//     const getData = await fetch(
//       "https://wsw6zh-8888.csb.app/profile/professions",
//       {
//         headers: {
//           Authorization: "Bearer " + data,
//         },
//       }
//     );
//     const convertData = await getData.json();
//     const job = convertData.results;
//     setProfession(job);
//     setLoading(0);
//   })();
// }, []); // Profession
// useEffect(() => {
//   (async () => {
//     setLoading(1);
//     const getNation = await fetch(
//       "https://wsw6zh-8888.csb.app/profile/nationalities",
//       {
//         headers: {
//           Authorization: "Bearer " + data,
//         },
//       }
//     );
//     const convertNation = await getNation.json();
//     const nations = convertNation.results;
//     setNationalities(nations);
//     setLoading(0);
//   })();
// }, []); // Nationalities
