import React, { useState } from "react";
import { Edit, Save, X, Mail, Phone, Key, Lock, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user, logOutUser, setLoading } = useAuth();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
    phoneNumber: user?.phoneNumber || "",
  });

  // Handle input changes
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Save changes
  const handleSave = async () => {
    if (!user) return;
    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      toast.success("Profile Updated Successfully");
      setEditMode(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Cancel edits
  const handleCancel = () => {
    setFormData({
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
      phoneNumber: user?.phoneNumber || "",
    });
    setEditMode(false);
  };

  // Logout
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 md:p-8 space-y-8">

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <img
          src={formData.photoURL || "https://i.ibb.co/sdP0yB6x/default-user.png"}
          alt={formData.displayName || "User"}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary shadow-md object-cover"
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-primary truncate">{formData.displayName || "Unknown User"}</h2>
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex items-center gap-1 text-primary hover:text-primary/80 font-semibold"
            >
              {editMode ? <X size={18}/> : <Edit size={18}/>}
              {editMode ? "Cancel" : "Edit"}
            </button>
          </div>
          <div className="flex flex-col gap-1 text-base-400">
            <p className="flex items-center gap-2"><Mail size={16}/> {user?.email || "No email"}</p>
            {formData.phoneNumber && <p className="flex items-center gap-2"><Phone size={16}/> {formData.phoneNumber}</p>}
            <p className={`text-sm font-medium ${user?.emailVerified ? "text-green-600" : "text-red-600"}`}>
              {user?.emailVerified ? "Email Verified ✅" : "Email Not Verified ❌"}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-base-200 p-6 rounded-2xl shadow-md border border-base-300">
        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2"><Key size={20}/> Personal Info</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {["displayName", "photoURL", "phoneNumber"].map((key) => (
            <input
              key={key}
              type="text"
              value={formData[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={key === "displayName" ? "Display Name" : key === "photoURL" ? "Photo URL" : "Phone Number"}
              disabled={!editMode}
              className={`p-3 rounded-xl border border-base-300 focus:ring-2 focus:ring-primary bg-base-100 ${!editMode ? "opacity-70 cursor-not-allowed" : ""}`}
            />
          ))}
        </div>
        {editMode && (
          <div className="flex gap-4 mt-4">
            <button onClick={handleSave} className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl flex items-center gap-2">
              <Save size={16}/> Save
            </button>
            <button onClick={handleCancel} className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center gap-2">
              <X size={16}/> Cancel
            </button>
          </div>
        )}
      </div>

      {/* Account & Security */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-base-200 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2"><Key size={18}/> Account Details</h3>
          <p className="text-base-400">UID: {user?.uid}</p>
          <p className="text-base-400">Provider: {user?.providerData?.[0]?.providerId || "N/A"}</p>
        </div>
        <div className="bg-base-200 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2"><Lock size={18}/> Security</h3>
          <p className="text-base-400">Email Verified: {user?.emailVerified ? "✅ Yes" : "❌ No"}</p>
          <p className="text-base-400">Change Password via Settings</p>
        </div>
      </div>

      {/* Activity & Preferences */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-base-200 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2"><Edit size={18}/> Activity</h3>
          <p className="text-base-400">Created: {user?.metadata?.creationTime}</p>
          <p className="text-base-400">Last Sign In: {user?.metadata?.lastSignInTime}</p>
        </div>
        <div className="bg-base-200 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2"><Settings size={18}/> Preferences</h3>
          <p className="text-base-400">Theme: Default</p>
          <p className="text-base-400">Notifications: Enabled</p>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogOut}
        className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold flex items-center justify-center gap-2 transition"
      >
        <LogOut size={18}/> Log Out
      </button>
    </div>
  );
};

export default Profile;
