import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth";
import { addProfile } from "../redux/reducers/profile";
import Brand from "../components/Brand";
import Loading from "../components/Loading";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState(0);
  const [loading, setLoading] = React.useState(0);
  const [message, setMessage] = React.useState("");

  const formik = useFormik({
    onSubmit: processLogin,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Input the proper email!")
        .required("Required!"),
      password: Yup.string()
        .required("Required!")
        .min(8, "Minimum 8 characters!"),
    }),
  });
  async function processLogin() {
    setLoading(1);
    const formEmail = formik.values.email;
    const formPass = formik.values.password;

    const inputData = new URLSearchParams();
    inputData.append("email", formEmail);
    inputData.append("password", formPass);

    const response = await fetch("http://localhost:8888/auth/login", {
      method: "POST",
      body: inputData,
    });
    const data = await response.json();
    if (data.success) {
      const token = data.results.token;
      setLoading(1);
      console.log(token);
      dispatch(login(token));
      const user = "http://localhost:8888/profile";
      const getData = await fetch(user, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const realData = await getData.json();
      console.log(realData.results);
      dispatch(addProfile(realData.results));
      navigate("/");
      setTimeout(() => setLoading(0), 5000);
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

  return (
    <div className="flex h-screen">
      {loading ? <Loading /> : ""}
      <div className="bg-[#201E43] flex-[60%] hidden md:flex justify-center items-center"></div>
      <div className="flex-[40%]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center gap-[20px] p-8 md:p-0 mt-28 md:m-[100px]"
        >
          <Link to={"/"}>
            <Brand />
          </Link>
          <div className="text-2xl font-bold">Sign In</div>
          <div>Hi, Welcome back to Urticket!</div>
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
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              className={
                formik.errors.email && formik.touched.email
                  ? "border rounded-xl h-16 pl-4 outline-none"
                  : "border rounded-xl h-16 pl-4 outline-none"
              }
            />
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
          </div>
          <div className="text-right text-[#508C9B]">
            <Link to={"/forgot-password"}>Forgot Password?</Link>
          </div>
          <div>
            <button
              className="p-[10px] w-full text-[16px] bg-[#134B70] text-white rounded-xl font-semibold hover:text-[#134B70] hover:bg-white hover:border"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <button
              className="p-[10px] w-full text-[16px] bg-white border text-[#134B70] rounded-xl font-semibold hover:bg-[#134B70] hover:text-white"
              type="submit"
            >
              <Link to={"/signup"}> Create New Account</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
