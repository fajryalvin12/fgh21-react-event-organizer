import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Antony from "../assets/images/antony.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import axios from "axios";
import Sidebar from "./Sidebar";
import DefaultUser from "../assets/icons/user.png";
import Layout from "../components/Layout";

function ContentProfile() {
  const profile = useSelector((state) => state.profile.data);
  const [profession, setProfession] = React.useState([]);
  const [nationalities, setNationalities] = React.useState([]);
  const [national, setNational] = React.useState(profile.nationality);
  const [loading, setLoading] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(0);
  const token = useSelector((state) => state.auth.token);

  const linkNat = "http://localhost:8888/nationalities";
  const linkEdit = "http://localhost:8888/profile";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getNation();
  }, []);

  function changeNations(e) {
    setNational(e.target.value);
  }
  async function getNation() {
    const res = await fetch(linkNat, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    const data = await res.json();
    const nationName = data.results;
    setNationalities(nationName);
  }
  async function processProfile(e) {
    setLoading(1);
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const gender = e.target.gender.value;
    const profession = e.target.profession.value;
    const birthdate = e.target.birthdate.value;

    const inputProfile = new URLSearchParams();
    inputProfile.append("fullName", fullname);
    inputProfile.append("username", username);
    inputProfile.append("email", email);
    inputProfile.append("gender", gender);
    inputProfile.append("phoneNumber", phone);
    inputProfile.append("profession", profession);
    inputProfile.append("nationality", national);
    inputProfile.append("birthDate", birthdate);

    try {
      const data = await axios.patch(linkEdit, inputProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.data.success) {
        setMessage(data.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      } else {
        setMessage(data.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      }
      console.log(data.data.success);
      // dispatch(addProfile(data.data.results));
    } catch (error) {
      console.error("Failed to update profile!");
    }
    setTimeout(() => setLoading(0), 500);
  }

  if (token === null) {
    navigate("/Login");
  }

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        {loading ? <Loading /> : ""}
        <div className="flex justify-center">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className="md:w-2/3 md:p-[100px] md:mr-[120px] md:flex-row w-full p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col-reverse md:rounded-3xl shadow-md">
            <div className="flex-1">
              <form
                onSubmit={processProfile}
                className="flex flex-col gap-[30px]"
              >
                <div className="flex gap-4 p-4 md:p-0 flex-col md:flex-row md:justify-between text-[20px] font-bold">
                  Profile
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
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label for="name" className="w-1/3">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jhon Thomson"
                    id="name"
                    name="fullname"
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    defaultValue={profile.fullName}
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
                    name="username"
                    defaultValue={profile.username}
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
                    name="email"
                    defaultValue={profile.email}
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
                    name="phone"
                    defaultValue={profile.phoneNumber}
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
                        value={1}
                        defaultChecked={profile.gender === 1 ? true : false}
                      />
                      <label for="male">Male</label>
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value={0}
                        defaultChecked={profile.gender === 0 ? true : false}
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
                    type="text"
                    placeholder="Profession"
                    id="profession"
                    name="profession"
                    defaultValue={profile.profession}
                  />
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label for="nationality" className="w-1/3">
                    Nationality
                  </label>
                  <select
                    name="nationality"
                    id="nationality"
                    onChange={changeNations}
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  >
                    {nationalities.map((nation) => {
                      return (
                        <option
                          key={nation.id}
                          value={nation.id}
                          selected={nation.id === profile.nationality}
                        >
                          {nation.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label for="birthdate" className="w-1/3">
                    Birthday Date
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    placeholder=""
                    defaultValue={profile.birthDate}
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
                  className="h-[200px] w-[200px] rounded-full border-4 border-[#373a42bf] object-cover"
                  src={DefaultUser}
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
      </div>
    </Layout>
  );
}

export default ContentProfile;
