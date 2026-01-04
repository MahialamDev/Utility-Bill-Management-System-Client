import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MyContainar from "../../Layouts/MyContainar";
import { updateProfile } from "firebase/auth";
import banner from '../../assets/real-time-notification-banner.png'

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { user, singUpWithEmail, loginWithGoogle, setLoading } = useAuth();

  if (user) return <Navigate to="/" replace />;

const handleRegister = (e) => {
  e.preventDefault();
  const displayName = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const photoURL = e.target.photo.value.trim();
  const password = e.target.password.value;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (!passwordRegex.test(password)) {
    toast.warning(
      "Password must be at least 6 characters, include one uppercase and one lowercase letter."
    );
    return;
  }

  singUpWithEmail(email, password)
    .then((res) => {
      if (displayName || photoURL) {
        // Only update if values exist
        updateProfile(res.user, {
          displayName: displayName || undefined,
          photoURL: photoURL || undefined,
        })
          .then(() => console.log("Profile updated"))
          .catch((err) => toast.error(err.message));
      }

      toast.success("Successfully Registered! Please login.");
      navigate("/login");
    })
    .catch((err) => toast.error(err.message || "Registration failed"));
};

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Login Successfully!");
        navigate("/");
      })
      .catch(() => toast.error("Google login failed"))
      .finally(() => setLoading(false));
  };

  return (
    <MyContainar className="min-h-[85vh] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl flex max-w-5xl w-full overflow-hidden">

        {/* Left Side - Register Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-gray-600 text-base">Join us Today!</h2>
            <h1 className="text-3xl font-bold text-gray-800 mt-1">Register</h1>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
              </div>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
                >
                  {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2.5 rounded-full hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              REGISTER
            </button>
          </form>

          <div className="text-center my-4 text-gray-500 text-sm">or continue with</div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              <img src="https://github.com/favicon.ico" alt="GitHub" className="w-5 h-5" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              <img src="https://twitter.com/favicon.ico" alt="Twitter" className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-blue-100 to-purple-100 items-center justify-center p-6">
          <div className="relative">
            <img
              src={banner}
              alt="Illustration"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </MyContainar>
  );
};

export default Register;
