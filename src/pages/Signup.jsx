import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import Loading from "../components/Loading";

function Signup() {
  const navigate = useNavigate();
  let [alert, setAlert] = React.useState(0);
  let [loading, setLoading] = React.useState(0);
  const [message, setMessage] = React.useState("");
  async function processSignup(e) {
    e.preventDefault();
    const formName = e.target.name.value;
    const formEmail = e.target.email.value;
    const formPass = e.target.password.value;
    const formConfirm = e.target.confirm.value;

    const signupData = new URLSearchParams();
    signupData.append("fullName", formName);
    signupData.append("email", formEmail);
    signupData.append("password", formPass);
    signupData.append("confirmPassword", formConfirm);

    const endpoint = "http://localhost:8888/auth/register";

    const response = await fetch(endpoint, {
      method: "POST",
      body: signupData,
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      setLoading(1);
      setMessage(data.message);
      navigate("/Login");
    } else {
      setLoading(1);
      setMessage(data.message);
      setAlert(1);
      setLoading(0);
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
  let [confirmPass, setConfirmPass] = React.useState("password");
  function revealConfirmPassword() {
    if (confirmPass === "password") {
      setConfirmPass("text");
    } else {
      setConfirmPass("password");
    }
  }

  return (
    <div className="flex h-screen">
      {loading ? <Loading /> : ""}
      <div className="bg-[#201E43] flex-[60%] hidden md:flex justify-center items-center"></div>
      <div className="flex-[40%]">
        <form
          onSubmit={processSignup}
          className="flex flex-col justify-center gap-[20px] p-8 md:p-0 mt-28 md:m-[100px]"
        >
          <Brand />
          <div className="text-2xl font-bold">Sign Up</div>
          <div className="flex">
            <div>Already have an account?</div>
            <div className="text-[#508C9B] font-semibold">
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
          {alert ? (
            <div className="h-12 flex-1 bg-red-400 flex items-center pl-4 justify-between">
              {message ? <div>{message}</div> : ""}
              <button
                onClick={() => setAlert(0)}
                className="h-12 w-12 font-bold"
              >
                X
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col gap-[10px]">
            <input
              className="border rounded-xl h-16 pl-4 outline-none"
              name="name"
              type="text"
              placeholder="Full Name"
            />
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
            <div className="flex border rounded-xl h-16 pl-4 items-center justify-center overflow-hidden">
              <input
                className="flex-1 h-16 outline-none"
                name="confirm"
                type={confirmPass}
                placeholder="Confirm Password"
              />
              <button
                className="flex w-16 h-16 justify-center items-center overflow-hidden"
                type="button"
                onClick={revealConfirmPassword}
              >
                <FaEye />
              </button>
            </div>
          </div>
          <div className="text-left flex gap-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Accept Terms and Conditions</label>
          </div>
          <div>
            <button
              className="p-[10px] w-full text-[16px] bg-[#134B70] text-white rounded-xl font-semibold"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
