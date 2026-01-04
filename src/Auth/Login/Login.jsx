import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MyContainar from "../../Layouts/MyContainar";
import banner from '../../assets/real-time-notification-banner.png'

const Login = () => {
  const { user, setLoading, loginWithGoogle, loginWithEmail } = useAuth();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmail(email, password)
      .then(() => {
        toast.success("Login Successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message || "Login failed"));
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Login Successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Google login failed");
      })
      .finally(() => setLoading(false));
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <MyContainar className="min-h-[90vh]  flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl flex max-w-5xl w-full overflow-hidden">
        
        {/* Left Side - Login Form (অবিকল তোমার প্রথম ডিজাইন) */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-gray-600 text-lg">Welcome back !!!</h2>
            <h1 className="text-4xl font-bold text-gray-800 mt-2">Log In</h1>
          </div>

          <form onSubmit={handleEmailPassLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
                >
                  {show ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              LOGIN
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>

          <div className="text-center my-6 text-gray-500">or continue with</div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              <img src="https://github.com/favicon.ico" alt="GitHub" className="w-6 h-6" />
            </button>
            <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              <img src="https://twitter.com/favicon.ico" alt="Twitter" className="w-6 h-6" />
            </button>
          </div>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-purple-600 font-semibold hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Right Side - Illustration (অবিকল তোমার প্রথম ডিজাইন) */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-blue-100 to-purple-100 items-center justify-center p-10">
          <div className="relative">
            <img
              src={banner} // public folder এ রাখো এই নামে (যেমন public/girl-cactus.png)
              alt="Person working on laptop with cactus"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </MyContainar>
  );
};

export default Login;