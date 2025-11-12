import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import MyLink from "../../Style/MyLink";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { CreditCard, Phone, Menu, Search, Bell, User, X } from "lucide-react";
import mainLogoimg from '../../assets/myLogoW.png'


const Navbar = () => {
  const { user, logOutUser, setLoading, loading } = useAuth();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  // const location = useLocation();

  console.log("Your User", user);

  const links = (
    <>
      <li className="border-b border-b-gray-100 md:border-none">
        <MyLink to="/">Home</MyLink>
      </li>
      <li className="border-b border-b-gray-100 md:border-none">
        <MyLink to="/bills">Bills</MyLink>
      </li>

      {user && (
        <>
          <li className="border-b border-b-gray-100 md:border-none">
            <MyLink to="/contact">Contact</MyLink>
          </li>
          <li className="border-b border-b-gray-100 md:border-none">
            <MyLink to="/my-pay-bills">My Pay Bills</MyLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast("Logout SUccessfull");
        navigate("/");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    // <div className="navbar bg-base-100 shadow-sm px-5 py-4 text-xl">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           {" "}
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />{" "}
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex="-1"
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //       >
    //         {links}
    //       </ul>
    //     </div>
    //     <a className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-[#2841C5] transition-colors">
    //       <CreditCard size={28} className="text-[#2841C5]" />
    //       Pay <span className="text-[#1d74ff]">Bills</span>
    //     </a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">{links}</ul>
    //   </div>
    //   <div className="navbar-end">
    //     {loading ? (
    //       <ClipLoader color="#4052D6" size={20} />
    //     ) : user ? (
    //       <div className="flex items-center gap-5">
    //         <div className="w-10 h-10 rounded-full border-3 border-blue-200">
    //           <img
    //             className="mx-auto rounded-full object-cover w-full h-full"
    //             src={user?.photoURL}
    //             referrerPolicy="no-referrer"
    //             alt=""
    //           />
    //         </div>
    //         <button
    //           onClick={handleLogOut}
    //           className="btn p-6 bg-[#2840BF] border hover:bg-transparent hover:text-[#2840BF] text-white shadow-xl"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     ) : (
    //       <div className="flex items-center gap-4">
    //         <Link to="/login">
    //           <button className="btn p-6 hover:text-white hover:bg-[#2840BF] border bg-transparent text-[#2840BF]">
    //             LogIn
    //           </button>
    //         </Link>
    //         <Link to="/registar">
    //           <button className="btn p-6 hidden md:flex text-white bg-[#2840BF] border hover:bg-transparent hover:text-[#2840BF]">
    //             Registar
    //           </button>
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    // </div>




    // <header className="w-full ">

    //   <div className="px-5 w-full bg-blue-100 py-1">
    //     <div className=" container mx-auto  flex items-center gap-3">
    //     <Phone size={18} className="text-[#2841C5]" /><p>01979922268</p>
    //     </div>
    //   </div>

    //   <div className= " border border-gray-50 shadow-sm ">
    //     <div className="px-5 container mx-auto w-full p-3 flex items-center justify-between">
    //     <div>
    //       <img src="" alt="" />
    //       <h1 className="text-2xl">Pay Bills</h1>
    //   </div>
    //   <nav className="hidden md:flex items-center">
    //     <ul className="flex items-center justify-center gap-10">
    //       {links}
    //     </ul>
    //     </nav>
          
    //       {/* <nav className="hidden md:flex items-center">
    //     <ul className="flex items-center justify-center gap-10">
    //       {links}
    //     </ul>
    //   </nav> */}

    //   <div className="">
    //     {loading ? (
    //       <ClipLoader color="#4052D6" size={20} />
    //     ) : user ? (
    //       <div className="flex items-center gap-5">
    //         <div className="w-10 h-10 rounded-full border-3 border-blue-200">
    //           <img
    //             className="mx-auto rounded-full object-cover w-full h-full"
    //             src={user?.photoURL}
    //             referrerPolicy="no-referrer"
    //             alt=""
    //           />
    //         </div>
    //         <button
    //           onClick={handleLogOut}
    //           className="btn p-6 bg-[#2840BF] border hover:bg-transparent hover:text-[#2840BF] text-white shadow-xl"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     ) : (
    //       <div className="flex items-center gap-4">
    //         <Link to="/login">
    //           <button className="btn p-6 hover:text-white hover:bg-[#2840BF] border bg-transparent text-[#2840BF]">
    //             LogIn
    //           </button>
    //         </Link>
    //         <Link to="/registar">
    //           <button className="btn p-6 hidden md:flex text-white bg-[#2840BF] border hover:bg-transparent hover:text-[#2840BF]">
    //             Registar
    //           </button>
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    //   </div>
    //   </div>
    // </header>

       
     
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* 🔹 Top Contact Bar */}
      <div className="w-full bg-[#EAF0FF] py-1">
        <div className="container mx-auto px-5 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-[#2841C5] font-medium">📞</span>
            <p>01979922268</p>
          </div>
          <p className="hidden md:block text-gray-500">
            Fast & Secure Bill Payment Service 💳
          </p>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="border-t border-gray-100 relative p-2">
        <div className="container mx-auto px-5 py-2 flex items-center justify-between">
          {/* Left: Logo + Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNav(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={22} className="text-gray-700" />
            </button>

            <Link to="/" className="flex items-center gap-2">
              <div className="h-8">
                <img className="h-full" src={mainLogoimg} alt="logo" />
              </div>
              <h1 className="text-xl font-bold text-[#2841C5] hidden md:flex">
                Pay<span className="text-gray-800">Bills</span>
              </h1>
            </Link>
          </div>

          {/* Middle: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-8 font-medium text-gray-700">
              {links}
            </ul>
          </nav>

          {/* Right: Icons + Profile/Login */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition">
              <Search size={20} className="text-gray-700" />
            </button>

            {/* Notification */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <Bell size={20} className="text-gray-700" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile / Login */}
            {loading ? (
              <ClipLoader color="#4052D6" size={20} />
            ) : user ? (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-blue-200">
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-1.5 rounded-full bg-[#2841C5] text-white text-sm font-medium hover:bg-[#1f34a8] transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="px-4 py-1.5 rounded-full bg-transparent border border-[#2841C5] text-[#2841C5] text-sm font-medium hover:bg-[#2841C5] hover:text-white transition">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="hidden md:flex px-4 py-1.5 rounded-full bg-[#2841C5] text-white text-sm font-medium hover:bg-[#1f34a8] transition">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            showNav ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setShowNav(false)}
        />

        {/* 🔹 Mobile Sidebar Nav */}
        <nav
          className={`fixed top-0 left-0 bg-white h-full w-3/4 max-w-xs p-6 shadow-lg transition-transform duration-300 md:hidden ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Top: Logo + Close */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img src={mainLogoimg} alt="logo" className="h-8" />
              <h1 className="text-lg font-bold text-[#2841C5]">
                Pay<span className="text-gray-800">Bills</span>
              </h1>
            </div>
            <button
              onClick={() => setShowNav(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X size={22} className="text-gray-700" />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6 font-medium text-gray-700">
            {links}
          </ul>
        </nav>
      </div>
    </header>
    
  );
};

export default Navbar;
