import React from "react";
import Mascot from "../assets/images/mascot.png";
import { useNavigate } from "react-router-dom";
import Brand from "../components/Brand";

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
      <div className="bg-[#201E43] flex-[60%] hidden md:flex justify-center items-center"></div>
      <div className="flex-[40%]">
        <form
          onSubmit={processForgot}
          className="flex flex-col justify-center gap-[20px] p-8 md:p-0 mt-28 md:m-[100px]"
        >
          <Brand />
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
              className="p-[10px] w-full text-[16px] bg-[#134B70] text-white rounded-xl font-semibold"
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
