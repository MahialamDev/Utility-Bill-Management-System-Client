import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { user, setLoading, loginWithGoogle, loginWithEmail } = useAuth();
  console.log(user, loginWithGoogle);
  const [show, setShow] = useState(false);
  // Navigate home
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Email Login
    loginWithEmail(email, password)
      .then(() => {
        toast.success("Login Successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  // Google Login
  const handleGoogleSingIn = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Login Successfully!.");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register Now
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleEmailPassLogin} className="space-y-5">
          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-xl h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="form-control w-full relative">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-xl pr-12 h-12 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span
              className="absolute z-50 right-3 top-10 text-gray-500 hover:text-blue-500 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
            </span>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSingIn}
          className="w-full h-12 bg-white text-black border border-gray-300 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
