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

function ContentProfile() {
  const [profession, setProfession] = React.useState([]);
  const [nationalities, setNationalities] = React.useState([]);
  const navigate = useNavigate();
  function clickLogout(e) {
    e.preventDefault();
    window.alert("Your account has been logged out!");
    navigate("/Login");
  }
  function processProfile() {
    window.alert("Profile Saved!");
  }

  const data = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    (async () => {
      const getData = await fetch(
        "https://wsw6zh-8888.csb.app/profile/professions",
        {
          headers: {
            Authorization: "Bearer " + data,
          },
        }
      );
      const convertData = await getData.json();
      const job = convertData.results;
      setProfession(job);
    })();
  }, []); // Profession
  useEffect(() => {
    (async () => {
      const getNation = await fetch(
        "https://wsw6zh-8888.csb.app/profile/nationalities",
        {
          headers: {
            Authorization: "Bearer " + data,
          },
        }
      );
      const convertNation = await getNation.json();
      const nations = convertNation.results;
      setNationalities(nations);
    })();
  }, []); // Nationalities

  console.log(nationalities);
  return (
    <div className="bg-[#f4f7ff] p-0 md:py-[50px]">
      <div className="flex justify-center">
        <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
          <div className="flex gap-[20px]">
            <img
              src={profile.picture}
              alt=""
              className="border border-[#3366ff] rounded-full w-12 h-12"
            />
            <div>
              <div className="font-semibold">{profile.name}</div>
              <div>{profile.profession}</div>
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
        <div className="md:w-2/3 md:p-[100px] md:mr-[120px] md:flex-row w-full p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col-reverse">
          <div className="flex-1">
            <form
              onSubmit={processProfile}
              className="flex flex-col gap-[30px]"
            >
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between text-[20px] font-bold">
                Profile
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="name">Name</label>
                <input
                  type="text"
                  placeholder="Jhon Thomson"
                  id="name"
                  className="p-[10px] border rounded-xl"
                  value={profile.name}
                />
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="username">Username</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="text"
                  placeholder="@jhont0"
                  id="username"
                  value={profile.username}
                />
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="email">Email</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="email"
                  placeholder="admin@gmail.com"
                  id="email"
                  value={profile.email}
                />
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="phone">Phone Number</label>
                <input
                  className="p-[10px] border rounded-xl"
                  type="text"
                  placeholder="081234567890"
                  id="phone"
                  value={profile.phoneNumber}
                />
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label>Gender</label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    defaultChecked={profile.gender === "Male" ? true : false}
                  />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    defaultChecked={profile.gender === "Female" ? true : false}
                  />
                  <label for="female">Female</label>
                </div>
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="profession">Profession</label>
                <select className="p-[10px] border rounded-xl">
                  {profession.map((data) => {
                    return (
                      <option selected={profile.profession}>{data.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="nationality">Nationality</label>
                <select id="nationality" className="p-[10px] border rounded-xl">
                  {nationalities.map((flag) => {
                    return (
                      <option selected={flag === profile.nationality}>
                        {flag.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                <label for="birth">Birthday Date</label>
                <input
                  type="date"
                  id="birth"
                  className="p-[10px] border rounded-xl"
                  placeholder=""
                  selected={profile.birthdayDate}
                  // defaultValue={defaultValue}
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
              <img
                className="h-[200px] w-[200px] rounded-full bg-black"
                src={profile.picture}
              />
              <div>
                <button
                  className="py-[15px] px-[82px] font-semibold text-[#3366ff] bg-[#ffff] rounded-[15px] text-[16px] border border-[#3366ff] hidden md:flex"
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
