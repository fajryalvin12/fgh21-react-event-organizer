import React from "react";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import axios from "axios";
import Loading from "./Loading";
import Layout from "../components/Layout";

function ContentPass() {
  const navigate = useNavigate();
  let [oldPass, setOldPass] = React.useState("password");
  let [newPass, setNewPass] = React.useState("password");
  let [confirmPass, setConfirmPass] = React.useState("password");
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState(0);
  const [loading, setLoading] = React.useState(0);
  const token = useSelector((state) => state.auth.token);
  const urlChangePass = "http://localhost:8888/users/change-password";
  function oldPassword() {
    if (oldPass === "password") {
      setOldPass("text");
    } else {
      setOldPass("password");
    }
  }
  function newPassword() {
    if (newPass === "password") {
      setNewPass("text");
    } else {
      setNewPass("password");
    }
  }
  function confirmPassword() {
    if (confirmPass === "password") {
      setConfirmPass("text");
    } else {
      setConfirmPass("password");
    }
  }
  async function changePassword(e) {
    setLoading(1);
    e.preventDefault();
    const oldPass = e.target.oldPass.value;
    const newPass = e.target.newPass.value;
    const confirmPass = e.target.confirmPass.value;

    try {
      const response = await axios.patch(
        urlChangePass,
        {
          oldPassword: oldPass,
          newPassword: newPass,
          confirmPassword: confirmPass,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setMessage(response.data.message);
        setAlert(1);
      } else {
        setMessage(response.data.message);
        setAlert(1);
      }
    } catch (error) {
      console.error("failed to change password");
    }
    setTimeout(() => setLoading(0), 3000);
  }

  // if (token == null) {
  //   navigate("login");
  // }

  return (
    <Layout>
      <div className="bg-[#EEEEEE] p-0 md:py-[50px]">
        {loading ? <Loading /> : ""}
        <div className="flex gap-[20px]">
          <div className="w-1/3 px-[100px] flex-col gap-[30px] hidden md:flex">
            <Sidebar />
          </div>
          <div className="w-full md:w-2/3 p-0 md:p-[80px] m-0 md:mr-[120px] bg-[#ffff] rounded-[30px] flex flex-col gap-[50px] shadow-md">
            <div className="font-bold text-2xl">Change Password</div>
            <form
              onSubmit={changePassword}
              className="flex flex-col gap-[10px]"
            >
              <div className="flex justify-between font-semibold items-center gap-12">
                <label className="w-1/3" htmlFor="name">
                  Old Password
                </label>
                <div className="p-[10px] border rounded-xl w-full flex justify-between">
                  <input
                    type={oldPass}
                    placeholder="Input Old Password..."
                    id="oldPass"
                    className="flex-1 h-8 outline-none w-2/3"
                    name="oldPass"
                  />
                  <button type="button" onClick={oldPassword}>
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-semibold items-center gap-12">
                <label className="w-1/3" htmlFor="name">
                  New Password
                </label>
                <div className="p-[10px] border rounded-xl w-full flex justify-between">
                  <input
                    type={newPass}
                    placeholder="Input New Password..."
                    id="newPass"
                    className="flex-1 h-8 outline-none w-2/3"
                    name="newPass"
                  />
                  <button type="button" onClick={newPassword}>
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="flex justify-between font-semibold items-center gap-12">
                <label className="w-1/3" htmlFor="name">
                  Confirm Password
                </label>
                <div className="p-[10px] border rounded-xl w-full flex justify-between">
                  <input
                    type={confirmPass}
                    placeholder="Confirm new password..."
                    id="confirmPass"
                    className="flex-1 h-8 outline-none w-2/3"
                    name="confirmPass"
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
    </Layout>
  );
}

export default ContentPass;
