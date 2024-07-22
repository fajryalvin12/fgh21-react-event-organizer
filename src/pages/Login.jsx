import React from "react";
import Logo from "../assets/icons/logo.png";
import Google from "../assets/icons/google.png";
import Facebook from "../assets/icons/facebook.png";
import Mascot from "../assets/images/mascot.png";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

function Login() {
  const navigate = useNavigate();
  function processLogin(e) {
    e.preventDefault();
    const formName = e.target.name.value;
    const formEmail = e.target.email.value;
    const formPass = e.target.password.value;

    if (formEmail === "admin@gmail.com" && formPass === "1234") {
      window.alert("Login Success!");
      window.alert("Welcome back, " + formName + "!");
      navigate("/");
    } else {
      window.alert("Please input the appropriate data");
    }
  }
  let [pass, setPass] = React.useState("password");
  function revealPassword() {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  }

  return (
    <div className="flex h-[100vh] ">
      <div className="bg-[#3366ff] flex-[60%] hidden md:flex justify-center items-center">
        <img src={Mascot} alt="" />
      </div>
      <div className="flex-[40%]">
        <form
          onSubmit={processLogin}
          className="flex flex-col justify-center gap-[20px] p-8 md:p-0 mt-28 md:m-[175px]"
        >
          <div className="flex items-center text-2xl font-bold">
            <img src={Logo} alt="logo" />
            <span className="text-[#3366ff]">We</span>
            <span className="text-[#ff3d71]">tick</span>
          </div>
          <div className="text-2xl font-bold">Sign In</div>
          <div>Hi, Welcome back to Urticket!</div>
          <div className="flex flex-col gap-[10px]">
            <input
              className="border rounded-xl h-16 pl-4 outline-none"
              name="email"
              type="email"
              placeholder="Email"
            />
            <div className="flex border rounded-xl h-16 pl-4 items-center justify-center overflow-hidden">
              <input
                className="flex-1 h-16 outline-none"
                name="password"
                type={pass}
                placeholder="Password"
              />
              <button
                className="flex w-16 h-16 justify-center items-center overflow-hidden"
                type="button"
                onClick={revealPassword}
              >
                <FaEye />
              </button>
            </div>
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
