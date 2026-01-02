import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import MyLink from "../../Style/MyLink";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { HiMenuAlt2 } from "react-icons/hi";
import { ClipLoader } from "react-spinners";
import {
  CreditCard,
  Phone,
  Menu,
  Search,
  Bell,
  User,
  X,
  LogOut,
  Edit,
} from "lucide-react";
import mainLogoimg from "../../assets/myLogoW.png";
import MyContainar from "../../Layouts/MyContainar";
import Logo from "../UI/Logo";
import ThemeController from "../UI/ThemeController";
import { FiBell } from "react-icons/fi";

const Navbar = () => {
  const { user, logOutUser, setLoading, loading } = useAuth();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
          {/* <li className="border-b border-b-gray-100 md:border-none">
            <MyLink to="/contact">Contact</MyLink>
          </li> */}
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
        toast.success("Logout SUccessfull");
        navigate("/");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* 🔹 Top Contact Bar */}
      <div className="w-full bg-[#EAF0FF] py-1">
        <MyContainar>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-[#2841C5] font-medium">📞</span>
              <p>01979922268</p>
            </div>
            <p className="hidden md:block text-gray-500">
              Fast & Secure Bill Payment Service 💳
            </p>
          </div>
        </MyContainar>
      </div>

      <header
        className="sticky top-0 z-50 h-20 bg-base-100/70 backdrop-blur-2xl border-b-2 border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <MyContainar className={"flex items-center justify-between h-full overflow-hidden"}>
          {/* menu and icon */}
          <div className="flex items-center h-full gap-2">
            <HiMenuAlt2 className="md:hidden" size={22} />
            <Logo />
          </div>
          {/* desktop Nav */}
          <nav className="hidden md:flex items-center h-full">
            <ul className="flex h-full items-center gap-5">{links}</ul>
          </nav>


          {/* icon and profile */}
          <div className="flex items-center h-full gap-2 overflow-hidden">
            <ThemeController />


             {/* Notification */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
             
              <FiBell size={22} className="text-gray-700"  />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="md:min-w-[150px]">

              {/* Profile / Login */}
              {loading ? (
                <ClipLoader color="#4052D6" size={20} />
              ) : user ?
                <div className="relative">
                  {/* Profile Button */}
                  <button className="flex items-center gap-2 p-1 rounded-full hover:bg-blue-100 transition">
                    <img
                      className="w-10 h-10 object-cover rounded-full border-2 border-primary shadow-md"
                      src={user.photoURL || "https://i.ibb.co/sdP0yB6x/images.jpg"}
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                    <span className="hidden md:block font-medium text-primary pr-2">{user.displayName || "User"}</span>
                  </button>


                </div> :
                  <div className="flex items-center gap-3">
                <Link to="/login">
                   <button className="px-4 py-1.5 rounded-full bg-transparent border border-primary text-primary text-sm font-medium hover:bg-[#2841C5] hover:text-white transition">
                     Login
                   </button>
                 </Link>
                 <Link to="/register">
                   <button className="hidden md:flex px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-[#1f34a8] transition">
                     Register
                   </button>
                 </Link>
               </div>

          }

          </div>
             
        

        </div>
        
        
        
        
        </MyContainar>
      </header>
    </>


    

    // <header className="w-full bg-white shadow-sm sticky top-0 z-50">

    //   {/* 🔹 Search Bar */}
    //   <div
    //     className={`absolute w-full left-0 right-0 flex items-center justify-center bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-md transition-all duration-500 z-50 ${
    //       showSearch ? "top-0" : "-top-[800px]"
    //     }`}
    //   >
    //     <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl">
    //       {/* Input with icon */}
    //       <div className="relative flex-grow w-full">
    //         <Search
    //           size={20}
    //           className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
    //         />
    //         <input
    //           type="search"
    //           placeholder="Search items..."
    //           className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 text-sm sm:text-base placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-md"
    //         />
    //       </div>

    //       {/* Buttons */}
    //       <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
    //         <button className="btn bg-[#2841C5] hover:bg-[#1f34a8] text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">
    //           <Search size={18} />
    //           Search
    //         </button>

    //         <button
    //           onClick={() => setShowSearch(false)}
    //           className="btn bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"
    //         >
    //           <X size={18} />
    //           Cancel
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* 🔹 Top Contact Bar */}
    //   <div className="w-full bg-[#EAF0FF] py-1">
    //     <div className="container mx-auto px-5 flex items-center justify-between text-sm text-gray-600">
    //       <div className="flex items-center gap-2">
    //         <span className="text-[#2841C5] font-medium">📞</span>
    //         <p>01979922268</p>
    //       </div>
    //       <p className="hidden md:block text-gray-500">
    //         Fast & Secure Bill Payment Service 💳
    //       </p>
    //     </div>
    //   </div>

    //   {/* 🔹 Main Navbar */}
    //   <div className="border-t border-gray-100 relative py-2">
    //     <MyContainar>
    //       <div className="mx-auto px-5 py-2 flex items-center justify-between">

    //       {/* Left: Logo + Menu */}
    //       <div className="flex items-center gap-3">
    //         <button
    //           onClick={() => setShowNav(true)}
    //           className="md:hidden p-1 rounded-lg hover:bg-gray-100"
    //         >
    //           <Menu size={22} className="text-gray-700" />
    //         </button>

    //         <Link to="/" className="flex items-center gap-2">
    //           <div className="h-8">
    //             <img className="h-full" src={mainLogoimg} alt="logo" />
    //           </div>
    //           <h1 className="text-xl font-bold text-[#2841C5] hidden md:flex">
    //             Pay<span className="text-gray-800">Bills</span>
    //           </h1>
    //         </Link>
    //       </div>

    //       {/* Middle: Nav Links (Desktop) */}
    //       <nav className="hidden md:flex items-center">
    //         <ul className="flex items-center gap-8 font-medium text-gray-700">
    //           {links}
    //         </ul>
    //       </nav>

    //       {/* Right: Icons + Profile/Login */}
    //       <div className="flex items-center gap-4">

    //         {/* Search Button */}
    //         <button
    //           onClick={() => setShowSearch(!showSearch)}
    //           className="flex p-2 rounded-full hover:bg-gray-100 transition"
    //         >
    //           <Search size={20} className="text-gray-700" />
    //         </button>

    //         {/* Notification */}
    //         <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
    //           <Bell size={20} className="text-gray-700" />
    //           <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
    //         </button>

    //         {/* Profile / Login */}
    //         {loading ? (
    //           <ClipLoader color="#4052D6" size={20} />
    //         ) : user ? (
    //           <div className="relative">
    //             {/* Profile Button */}
    //             <button
    //               className="flex items-center gap-2 p-1 rounded-full hover:bg-blue-100 transition"
    //               popoverTarget="popover-1"
    //               style={{ anchorName: "--anchor-1" }}
    //             >
    //               <img
    //                 className="w-10 h-10 object-cover rounded-full border-2 border-blue-500 shadow-md"
    //                 src={user.photoURL || "https://i.ibb.co/sdP0yB6x/images.jpg"}
    //                 alt="User"
    //                 referrerPolicy="no-referrer"
    //               />
    //               <span className="hidden md:block font-medium text-blue-600">{user.displayName || "User"}</span>
    //             </button>

    //             {/* Dropdown */}
    //             <ul
    //               className="dropdown dropdown-end menu w-56 rounded-2xl bg-blue-50 shadow-lg backdrop-blur-md text-blue-700 border border-blue-200 mt-2 py-4 flex flex-col items-center space-y-3"
    //               popover="auto"
    //               id="popover-1"

    //             >
    //               <img
    //                 className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-sm object-cover"
    //                 src={user.photoURL || "https://i.ibb.co/sdP0yB6x/images.jpg"}
    //                 alt="User"
    //                 referrerPolicy="no-referrer"
    //               />
    //               <p className="text-center font-semibold text-blue-600">{user.displayName || "Unknown"}</p>
    //               <p className="text-sm text-gray-600">{user.email}</p>

    //               <Link to="/profile" className="w-full">
    //                 <button className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300">
    //                   <Edit size={16} />
    //                   Edit Profile
    //                 </button>
    //               </Link>

    //               <button
    //                 onClick={handleLogOut}
    //                 className="w-full py-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-white font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300"
    //                 >
    //                   <LogOut size={16}  />

    //                 Log Out
    //               </button>
    //             </ul>
    //           </div>
    //         ) : (
    //           <div className="flex items-center gap-3">
    //             <Link to="/login">
    //               <button className="px-4 py-1.5 rounded-full bg-transparent border border-[#2841C5] text-[#2841C5] text-sm font-medium hover:bg-[#2841C5] hover:text-white transition">
    //                 Login
    //               </button>
    //             </Link>
    //             <Link to="/register">
    //               <button className="hidden md:flex px-4 py-1.5 rounded-full bg-[#2841C5] text-white text-sm font-medium hover:bg-[#1f34a8] transition">
    //                 Register
    //               </button>
    //             </Link>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     </MyContainar>

    //     {/* 🔹 Overlay */}
    //     <div
    //       className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
    //         showNav ? "opacity-100 visible" : "opacity-0 invisible"
    //       }`}
    //       onClick={() => setShowNav(false)}
    //     />

    //     {/* 🔹 Mobile Sidebar Nav */}
    //     <nav
    //       className={`fixed top-0 left-0 bg-white h-full w-3/4 max-w-xs p-6 shadow-lg transition-transform duration-300 md:hidden ${
    //         showNav ? "translate-x-0" : "-translate-x-full"
    //       }`}
    //     >
    //       {/* Top: Logo + Close */}
    //       <div className="flex items-center justify-between mb-8">
    //         <div className="flex items-center gap-2">
    //           <img src={mainLogoimg} alt="logo" className="h-8" />
    //           <h1 className="text-lg font-bold text-[#2841C5]">
    //             Pay<span className="text-gray-800">Bills</span>
    //           </h1>
    //         </div>
    //         <button
    //           onClick={() => setShowNav(false)}
    //           className="p-2 rounded-full hover:bg-gray-100 transition"
    //         >
    //           <X size={22} className="text-gray-700" />
    //         </button>
    //       </div>

    //       {/* Links */}
    //       <ul className="flex flex-col gap-6 font-medium text-gray-700">
    //         {links}
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Navbar;
