import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { LogOut, LayoutDashboard, FileText, Settings, Menu, X, User, PlusCircle } from "lucide-react";
import useAuth from "../Hooks/useAuth";
import { Outlet } from "react-router";
import ThemeController from "../Components/UI/ThemeController";
import Logo from "../Components/UI/Logo";

const DashboardLayout = () => {
  const { user, logOutUser } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = () => logOutUser().catch(console.error);

  const links = [
    { name: "Overview", to: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "My Bills", to: "/dashboard/my-pay-bills", icon: <FileText size={20} /> },
    { name: "Profile", to: "/dashboard/profile", icon: <User size={20} /> },
    { name: "Add Bill", to: "/dashboard/add-bill", icon: <PlusCircle size={20} /> },
    { name: "Settings", to: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  const renderLinks = () => 
    links.map((link) => {
      const isActive = location.pathname === link.to;
      return (
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setMobileMenuOpen(false)}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
            isActive
              ? "bg-primary text-primary-content shadow-lg"
              : "hover:bg-base-300 text-base-content"
          }`}
        >
          {link.icon}
          <span>{link.name}</span>
        </Link>
      );
    });

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="drawer-checkbox" type="checkbox" className="drawer-toggle" checked={mobileMenuOpen} onChange={(e) => setMobileMenuOpen(e.target.checked)} />

      {/* Mobile Menu Button */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar for Mobile & Header */}
        <div className="navbar bg-base-100 shadow-xl lg:hidden fixed top-0 z-50">
          <div className="flex-1 flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost btn-circle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Logo />PayBills
          </div>
          <div className="flex-none gap-2">
            <ThemeController />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar online placeholder btn btn-ghost btn-circle">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text-xs">{user?.displayName?.[0] || "U"}</span>
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className="justify-between">{user?.displayName || "User"}</a></li>
                <li><button onClick={handleLogOut} className="text-error"><LogOut size={18} className="mr-2" /> Logout</button></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-20 lg:pt-8 p-3 md:p-8">
          <div>
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-10 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Welcome back, {user?.displayName || "User"}! 👋
              </h1>
              <p className="text-base-content/70 text-lg">
                Manage your bills effortlessly from your dashboard.
              </p>
            </div>

            <div className="bg-base-100 rounded-2xl shadow-xl md:p-8 min-h-screen">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="drawer-checkbox" className="drawer-overlay"></label>
        <aside className="flex flex-col w-80 h-full bg-base-100 shadow-2xl">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-base-300 hidden lg:block">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <LayoutDashboard size={32} />
              Bill Manager
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <ThemeController />
            </div>
          </div>

          {/* User Info (Desktop) */}
          <div className="p-6 border-b border-base-300 hidden lg:flex items-center gap-4">
            <div className="avatar online">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="bg-primary text-primary-content flex items-center justify-center w-full h-full text-xl font-bold">
                  <img src={user?.photoURL} referrerPolicy="no-referrer" alt="" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">{user?.displayName || "User"}</p>
              <p className="text-sm text-base-content/60">{user?.email || ""}</p>
            </div>
            <button onClick={handleLogOut} className="ml-auto btn btn-ghost btn-circle text-error">
              <LogOut size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {renderLinks()}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-base-300">
            <p className="text-sm text-base-content/60 text-center">
              © 2026 Bill Manager. All rights reserved.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;