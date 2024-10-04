import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import Loading from "../components/Loading";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();
  let [alert, setAlert] = React.useState(0);
  let [loading, setLoading] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const formik = useFormik({
    onSubmit: processSignup,
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .required("Required!")
        .min(5, "Minimum 5 characters!"),
      email: Yup.string()
        .required("Required!")
        .email("Input the proper email!"),
      password: Yup.string()
        .required("Required!")
        .min(8, "Minimum 8 characters!"),
      confirmPassword: Yup.string()
        .required("Required!")
        .min(8, "Minimum 8 characters!"),
    }),
  });
  async function processSignup() {
    const formFullName = formik.values.fullName;
    const formEmail = formik.values.email;
    const formPass = formik.values.password;
    const formConfirm = formik.values.confirmPassword;

    const register = new URLSearchParams();
    register.append("fullName", formFullName);
    register.append("email", formEmail);
    register.append("password", formPass);
    register.append("confirmPassword", formConfirm);

    const endpoint = "http://103.93.58.89:21212/auth/register";

    const response = await fetch(endpoint, {
      method: "POST",
      body: register,
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
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center gap-[20px] p-8 md:p-0 mt-28 md:m-[100px]"
        >
          <Brand />
          <div className="text-2xl font-bold">Sign Up</div>
          <div className="flex">
            <div>Already have an account?</div>
            <div className="text-[#134B70] font-semibold">
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
            <div className="flex border rounded-xl h-16 pl-4 items-center justify-center overflow-hidden">
              <input
                className="flex-1 h-16 outline-none"
                name="fullName"
                type="text"
                placeholder="Full Name"
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="text-red-700">{formik.errors.fullName}</p>
            )}
            <div className="flex border rounded-xl h-16 pl-4 items-center justify-center overflow-hidden">
              <input
                className="flex-1 h-16 outline-none"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-700">{formik.errors.email}</p>
            )}
            <div className="flex border rounded-xl h-16 pl-4 items-center justify-center overflow-hidden">
              <input
                className="flex-1 h-16 outline-none"
                name="password"
                type={pass}
                placeholder="Password"
                onChange={formik.handleChange}
              />
              <button
                className="flex w-16 h-16 justify-center items-center overflow-hidden"
                type="button"
                onClick={revealPassword}
              >
                <FaEye />
              </button>
            </div>
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-700">{formik.errors.password}</p>
            )}
            <div className="flex border rounded-xl h-16 pl-4 items-center justify-center overflow-hidden">
              <input
                className="flex-1 h-16 outline-none"
                name="confirmPassword"
                type={confirmPass}
                placeholder="Confirm Password"
                onChange={formik.handleChange}
              />
              <button
                className="flex w-16 h-16 justify-center items-center overflow-hidden"
                type="button"
                onClick={revealConfirmPassword}
              >
                <FaEye />
              </button>
            </div>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="text-red-700">{formik.errors.confirmPassword}</p>
              )}
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
