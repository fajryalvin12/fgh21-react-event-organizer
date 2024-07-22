import React from "react";
import Logo from "../assets/icons/logo.png";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";
import Mascot from "../assets/images/mascot.png";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

function ForgotPassword() {
  const navigate = useNavigate();
  function processForgot(e) {
    e.preventDefault();
    const formEmail = e.target.email.value;
    if (formEmail !== "") {
      alert("We will send the notification on your email");
      navigate("/Login");
    } else {
      alert("Please input the match email!");
    }
  }

  return (
    <div className="flex h-[100vh] ">
      <div className="bg-[#3366ff] flex-[60%] hidden md:flex justify-center items-center">
        <img src={Mascot} alt="" />
      </div>
      <div className="flex-[40%]">
        <form
          onSubmit={processForgot}
          className="flex flex-col justify-center gap-[20px] p-8 md:p-0 mt-28 md:m-[100px]"
        >
          <div className="flex items-center text-2xl font-bold">
            <img src={Logo} alt="logo" />
            <span className="text-[#3366ff]">We</span>
            <span className="text-[#ff3d71]">tick</span>
          </div>
          <div className="text-2xl font-bold">Forgot Password</div>
          <div>You will get mail soon on your email</div>
          <div className="flex flex-col gap-[10px]">
            <input
              className="border rounded-xl h-16 pl-4 outline-none"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <button
              className="p-[10px] w-full text-[16px] bg-[#3366ff] text-white rounded-xl font-semibold"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
