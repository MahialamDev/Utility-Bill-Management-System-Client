import React from "react";
import { Edit, LogOut, X } from "lucide-react";
import { Link } from "react-router"; // react-router-dom import
import useAuth from "../../Hooks/useAuth";
import MyContainar from "../../Layouts/MyContainar";

const Profile = () => {
  const { user, handleLogOut } = useAuth(); // যদি handleLogOut available থাকে

  return (
    <MyContainar>
      <div className="max-w-md mx-auto mt-10 bg-blue-50 rounded-2xl shadow-lg border border-blue-200 p-6 flex flex-col items-center gap-6">
        {/* Profile Image */}
        <img
          className="w-28 h-28 rounded-full border-2 border-blue-500 shadow-md object-cover"
          src={user?.photoURL || "https://i.ibb.co/sdP0yB6x/images.jpg"}
          alt={user?.displayName || "User"}
          referrerPolicy="no-referrer"
        />

        {/* User Info */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-blue-600">
            {user?.displayName || "Unknown"}
          </h2>
          <p className="text-gray-600">{user?.email || "No email provided"}</p>
          {user?.phoneNumber && (
            <p className="text-gray-600">📞 {user.phoneNumber}</p>
          )}
          <p
            className={`text-sm font-medium ${
              user?.emailVerified ? "text-green-600" : "text-red-600"
            }`}
          >
            {user?.emailVerified ? "Email Verified ✅" : "Email Not Verified ❌"}
          </p>
        </div>

        {/* Edit Profile Button */}
        <Link className="w-full">
          <button className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300">
            <Edit size={16} />
            Edit Profile
          </button>
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogOut}
          className="w-full py-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-white font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300"
        >
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </MyContainar>
  );
};

export default Profile;
