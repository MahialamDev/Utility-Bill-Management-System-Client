import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Edit, Key, Lock, LogOut, Mail, Save, Settings, SquarePen, X } from "lucide-react";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user, logOutUser, } = useAuth();
  const [edit, setEdit] = useState(false);

  const handleSave = async(e) => {
    e.preventDefault();
    console.log(e.target.image.value)

    if (!user) return;
        try {
          await updateProfile(user, {
            displayName: e.target.name.value,
            photoURL: e.target.image.value,
          });
    
          toast.success("Profile Updated Successfully");
          setEdit(false);
        } catch (err) {
          toast.error(err.message);
        }
  }

  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch()
  }



  

  return (
    <div className="space-y-5 mx-auto">
      {/* Profile info */}
      <div className="flex items-center gap-5 md:gap-10 py-6 p-3  bg-base-300 shadow-md rounded-xl relative">
        <div className="w-25 md:w-30 rounded-full">
          <img
            className="w-full rounded-full"
            src={user?.photoURL}
            referrerPolicy="no-referrer"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-xl md:text-4xl text-primary font-bold">
            {user?.displayName}
          </h1>
          <p className="text-gray-500 flex items-center gap-2">
            <Mail size={18} /> {user?.email}
          </p>
        </div>
        <div onClick={() => setEdit(!edit)} className="text-primary absolute top-5 right-5 cursor-pointer ">
          
          {edit && 
            <span className=" flex items-center gap-1 font-semibold">
            <X />Cancel
            </span> 
          }

          {!edit && 
          
            
            <span className="flex items-center gap-1 font-semibold">
            <SquarePen size={20} />
            Edit
          </span>

          }

          

          

        </div>
      </div>

      {/* Personal info */}
      <div className="p-3 py-5 bg-base-300 shadow-md rounded-xl relative">
        {/* heading */}
        <h1 className="text-primary flex items-center gap-3 font-semibold text-xl ">
          <Key size={22} /> Personal Info
        </h1>
        {/* Editable */}
         
        {!edit && 
          <div className="mt-5">
          <div className="md:flex gap-5">
            <p className=" flex-1 p-2.5 px-4 border border-primary/10 rounded-md bg-gray-400/5">
              {user?.displayName}
            </p>
            <p
              title={user?.photoURL}
              className="p-2.5 px-4 mt-4 md:mt-0 border border-primary/10 rounded-md flex-1 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer bg-gray-400/5"
            >
              {user?.photoURL}
            </p>
          </div>
        </div>
        }

        {/* if edit mode */}
        
        {edit && 
          <form onSubmit={handleSave} className="mt-5 transition-all duration-500 ease-in-out">
          <div className="md:flex gap-5">
            <input name="name" type="text" className=" flex-1 p-2.5 w-full px-4 border border-primary/10 rounded-md bg-gray-400/5" defaultValue={`${user?.displayName || ""}`} />
              
            
              <input
                name="image"
              title={user?.photoURL}
              className="p-2.5 w-full mt-5 md:mt-0 px-4 border border-primary/10 rounded-md flex-1 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer bg-gray-400/5" defaultValue={`${user?.photoURL || ""}`}
             />
              
           
            </div>
            
            <div className="flex gap-4 mt-4">
            <button type="submit"
              // onClick={handleSave}
              className="px-6 py-2 bg-primary text-white rounded-xl flex items-center gap-2"
            >
              <Save size={16} /> Save
            </button>

            <button onClick={()=> setEdit(false)} type="button"
              // onClick={handleCancel}
              className="px-6 py-2 bg-red-500 text-white rounded-xl flex items-center gap-2"
            >
              <X size={16} /> Cancel
            </button>
          </div>

        </form>

        }

        

      </div>

      {/* Account & Security */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-base-300 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
            <Key size={18} /> Account Details
          </h3>
          <p>UID: {user?.uid}</p>
          <p>Provider: {user?.providerData?.[0]?.providerId || "N/A"}</p>
        </div>

        <div className="bg-base-300 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
            <Lock size={18} /> Security
          </h3>
          <p>Email Verified: {user?.emailVerified ? "Yes" : "No"}</p>
          <p>Change Password via Settings</p>
        </div>
      </div>

      {/* Activity & Preferences */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-base-300 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
            <Edit size={18} /> Activity
          </h3>
          <p>Created: {user?.metadata?.creationTime}</p>
          <p>Last Sign In: {user?.metadata?.lastSignInTime}</p>
        </div>

        <div className="bg-base-300 p-6 rounded-2xl shadow-md border border-base-300">
          <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
            <Settings size={18} /> Preferences
          </h3>
          <p>Theme: Default</p>
          <p>Notifications: Enabled</p>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogOut}
        className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold flex items-center justify-center gap-2"
      >
        <LogOut size={18} /> Log Out
      </button>



    </div>
  );
};

export default Profile;



