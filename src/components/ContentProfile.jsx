import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import axios from "axios";
import Sidebar from "./Sidebar";
import Layout from "../components/Layout";
import { addProfile } from "../redux/reducers/profile";
import { useShowNationsQuery } from "../redux/services/nationalities";

function ContentProfile() {
  const profile = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);
  const [national, setNational] = React.useState();
  const [loading, setLoading] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(0);
  const [pic, setPic] = React.useState();
  const { data, err, isLoading } = useShowNationsQuery();
  console.log(profile);
  function handleChange(e) {
    setPic(URL.createObjectURL(e.target.files[0]));
  }

  const linkEdit = "http://103.93.58.89:21212/profile";
  const link = "http://103.93.58.89:21212";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeNations(e) {
    setNational(e.target.value);
  }
  async function processProfile(e) {
    setLoading(1);
    console.log("jalan");
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const username = e.target.userName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const gender = e.target.gender.value;
    const profession = e.target.profession.value;
    const birthdate = e.target.birthdate.value;

    const inputProfile = new URLSearchParams();
    inputProfile.append("fullName", fullname);
    inputProfile.append("userName", username);
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
      const profileData = data.data.results;
      if (data.data.success) {
        dispatch(addProfile(profileData));
        setMessage(data.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      } else {
        setMessage(data.data.message);
        setAlert(1);
        setTimeout(() => setAlert(0), 1000);
      }
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => setLoading(0), 500);
  }
  async function uploadImages(e) {
    e.preventDefault();
    const image = e.target.profileImg.files[0];
    const formData = new FormData();
    console.log(image);
    formData.append("profileImg", image);

    try {
      const response = await axios.patch(
        `${link}/profile/upload-img`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        const data = await axios.get(`${link}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(addProfile(data.data.results));
      }
      setMessage(response.data.message);
      setAlert(1);
      setTimeout(() => setAlert(0), 1000);
    } catch (err) {
      console.error(err);
    }
  }

  if (token === null) {
    navigate("/login");
  }

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        {loading ? <Loading /> : ""}
        <div className="flex justify-center">
          <div className="px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className="md:w-2/3 md:p-[100px] md:mr-[120px] md:flex-row w-full p-0 m-0 bg-[#ffff] rounded-none flex gap-[50px] flex-col-reverse md:rounded-3xl shadow-xl">
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
                  <label htmlFor="name" className="w-1/3">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jhon Thomson"
                    id="name"
                    name="fullname"
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    defaultValue={profile?.fullName}
                  />
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label htmlFor="username" className="w-1/3">
                    Username
                  </label>
                  <input
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    type="text"
                    placeholder="@jhont0"
                    id="username"
                    name="userName"
                    defaultValue={profile?.username}
                  />
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label htmlFor="email" className="w-1/3">
                    Email
                  </label>
                  <input
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    type="email"
                    placeholder="admin@gmail.com"
                    id="email"
                    name="email"
                    defaultValue={profile?.email}
                  />
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label htmlFor="phone" className="w-1/3">
                    Phone Number
                  </label>
                  <input
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    type="text"
                    placeholder="081234567890"
                    id="phone"
                    name="phone"
                    defaultValue={profile?.phoneNumber}
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
                        defaultChecked={profile?.gender === 1 ? true : false}
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value={0}
                        defaultChecked={profile?.gender === 0 ? true : false}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label htmlFor="profession" className="w-1/3">
                    Profession
                  </label>
                  <input
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    type="text"
                    placeholder="Profession"
                    id="profession"
                    name="profession"
                    defaultValue={profile?.profession}
                  />
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label htmlFor="nationality" className="w-1/3">
                    Nationality
                  </label>
                  <select
                    name="nationality"
                    id="nationality"
                    onChange={changeNations}
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                  >
                    {data?.results.map((nation) => {
                      return (
                        <option
                          key={nation.id}
                          value={nation.id}
                          selected={nation.id === profile?.nationality}
                        >
                          {nation.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex gap-10 p-4 md:p-0 flex-col md:flex-row md:justify-between font-semibold md:items-center">
                  <label htmlFor="birthdate" className="w-1/3">
                    Birthday Date
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    className="p-[10px] border rounded-xl w-2/3 outline-none text-[12px]"
                    placeholder=""
                    defaultValue={profile?.birthDate}
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
              <form
                onSubmit={uploadImages}
                className="flex items-center flex-col gap-[20px]"
              >
                <label htmlFor="profileImg">
                  <img
                    name="profileImg"
                    className="h-[200px] w-[200px] rounded-full border-4 border-[#373a42bf] object-cover"
                    src={
                      profile?.picture == undefined
                        ? "https://cdn-icons-png.flaticon.com/512/21/21104.png"
                        : link + profile?.picture
                    }
                  />
                </label>
                <input
                  type="file"
                  name="profileImg"
                  id="profileImg"
                  className="hidden"
                  onChange={handleChange}
                />
                <button className="py-[15px] px-[82px] font-semibold text-[#508C9B] bg-[#ffff] rounded-[15px] text-[16px] border border-[#508C9B] hidden md:flex">
                  Choose Photo
                </button>
                <div className="hidden md:flex md:flex-col">
                  <div>Image size: max, 2 MB</div>
                  <div>Image formats: .JPG, .JPEG, .PNG</div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContentProfile;
