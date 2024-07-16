import React from "react";
import Logo from "../assets/icons/logo.png";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";
import Mascot from "../assets/images/mascot.png";

function Login() {
  return (
    <div className="flex h-[100vh] ">
      <div className="bg-[#3366ff] flex-[60%] flex justify-center items-center">
        <img src={Mascot} alt="" />
      </div>
      <div className="flex-[40%]">
        <form className="flex flex-col justify-center gap-[20px] m-[175px]">
          <div className="flex items-center text-2xl font-bold">
            <img src={Logo} alt="logo" />
            <span className="text-[#3366ff]">We</span>
            <span className="text-[#ff3d71]">tick</span>
          </div>
          <div className="text-2xl font-bold">Sign In</div>
          <div>Hi, Welcome back to Urticket!</div>
          <div className="flex flex-col gap-[10px]">
            <input
              className="p-[16px] border rounded-xl"
              name="name"
              type="text"
              placeholder="Username"
            />
            <input
              className="p-[16px] border rounded-xl"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-[16px] border rounded-xl"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="text-right text-[#3366ff]">Forgot Password?</div>
          <div>
            <button
              className="p-[10px] w-full text-[16px] bg-[#3366ff] text-white rounded-xl font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <div>or sign in with</div>
            <div className="flex gap-8">
              <button className="bg-[#ffff] px-[36px] py-[12px] border border-[#3366ff] rounded-xl">
                <img src={Google} alt="" />
              </button>
              <button className="bg-[#ffff] px-[36px] py-[12px] border border-[#3366ff] rounded-xl">
                <img src={Facebook} alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
