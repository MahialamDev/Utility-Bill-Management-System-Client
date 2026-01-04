import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LogOut,
  LayoutDashboard,
  FileText,
  Settings,
  Menu,
  X,
  User,
  PlusCircle,
} from "lucide-react";
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
    // { name: "Add Bill", to: "/dashboard/add-bill", icon: <PlusCircle size={20} /> },
    // { name: "Settings", to: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  const renderLinks = () =>
    links.map((link) => {
      const isActive = location.pathname === link.to;
      return (
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setMobileMenuOpen(false)}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition
            ${isActive ? "bg-primary text-primary-content shadow-lg" : "hover:bg-base-300 text-base-content"}
          `}
        >
          {link.icon}
          <span>{link.name}</span>
        </Link>
      );
    });

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={mobileMenuOpen}
        onChange={(e) => setMobileMenuOpen(e.target.checked)}
      />

      {/* ================= CONTENT ================= */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-100 shadow fixed top-0 z-40 lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex-1 flex items-center gap-2">
            <Logo />
            <span className="font-bold text-lg">PayBills</span>
          </div>

          <ThemeController />
        </div>

        {/* Main */}
        <main className="flex-1 pt-20 lg:pt-8 p-3 md:p-8">
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
        </main>
      </div>

      {/* ================= DRAWER ================= */}
      <div className="drawer-side z-50">
        <label
          className="drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />

        <aside className="w-80 max-w-[85vw] h-screen bg-base-100 flex flex-col shadow-2xl">
          {/* Mobile Drawer Header: PayBills + Theme toggle + Close */}
          <div className="flex items-center justify-between p-4 border-b border-primary/10 lg:hidden">
            <div className="flex flex-col gap-2">
              <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                <Logo />
                <span>PayBills</span>
              </Link>
             
            </div>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* Desktop Sidebar: PayBills + Theme toggle */}
          <div className="hidden lg:block p-6 border-b border-base-300">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-primary">
              <LayoutDashboard size={32} />
              <span><span className="text-red-400">Pay</span>Bills</span>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <ThemeController />
            </div>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-primary/10 flex items-center gap-4">
            <div className="avatar online">
              <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                <img
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  alt="user"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold">{user?.displayName}</p>
              <p className="text-sm opacity-60">{user?.email}</p>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost text-error"
            >
              <LogOut size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 p-6 space-y-2">{renderLinks()}</nav>

          

          {/* Footer */}
          <div className="p-4 border-t text-center text-sm opacity-60">
            © 2026 Bill Manager
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
