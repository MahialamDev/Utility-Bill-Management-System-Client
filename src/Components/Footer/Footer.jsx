import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import mainLogoimg from "../../assets/myLogoW.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import MyContainar from "../../Layouts/MyContainar";

const Footer = () => {
    const navigate = useNavigate();
  const location = useLocation();

  const handleFaqScroll = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true }); // Home page-এ নেবে
      setTimeout(() => {
        const faq = document.getElementById("faq-section");
        if (faq) faq.scrollIntoView({ behavior: "smooth" });
      }, 100); // short delay until home renders
    } else {
      const faq = document.getElementById("faq-section");
      if (faq) faq.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-base-300/80 backdrop-blur-2xl border-t border-gray-200/10 mt-10 text-gray-700 text-[17px] relative ">
      {/* Top glow */}

      {/* 🔹 Main Footer Section */}
      <MyContainar>
        <div className=" py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 1️⃣ Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={mainLogoimg} alt="PayBills Logo" className="h-8" />
            <h1 className="text-xl font-bold text-[#2841C5]">
              Pay<span className="text-base-content/70">Bills</span>
            </h1>
          </div>
          <p className=" text-base-content/70 leading-relaxed">
            Fast, secure and simple online bill payment platform. Pay your
            utility bills effortlessly anytime, anywhere.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="#"
              className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition"
            >
              <FaFacebook size={18} className="text-[#2841C5]" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition"
            >
              <FaTwitter size={18} className="text-[#2841C5]" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition"
            >
              <FaInstagram size={18} className="text-[#2841C5]" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition"
            >
              <FaLinkedin size={18} className="text-[#2841C5]" />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="text-base-content/70">
          <h2 className="text-[17px] font-semibold text-base-content/70 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 ">
            <li>
              <Link
                to="/"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Home
              </Link>
              </li>
              
            <li>
              <Link
                to="/bills"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Pay Bills
              </Link>
              </li>
               <li>
              <Link
                to="/dashboard/profile"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Profile
              </Link>
            </li>
              
            <li>
              <Link
                to="/dashboard/my-pay-bills"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                My Pay Bills
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                How It Works
              </Link>
            </li>
           
          </ul>
        </div>

        {/* 3️⃣ Support */}
        <div>
          <h2 className="text-[17px] font-semibold text-base-content/70 mb-4">Support</h2>
          <ul className="space-y-2 text-base-content/70">
            <li>
      <button
        onClick={handleFaqScroll}
        className="hover:text-[#2841C5] transition-colors duration-200"
      >
        FAQ
      </button>
    </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="hover:text-[#2841C5] transition-colors duration-200"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h2 className="text-[17px] font-semibold text-base-content/70 mb-4">
            Get in Touch
          </h2>
          <ul className="space-y-3  text-base-content/70">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-[#2841C5] mt-0.5" />
              <span>Jamalpur, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#2841C5]" />
              <a
                href="tel:+8801979922268"
                className="hover:text-[#2841C5] transition"
              >
                +880 1979-922268
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#2841C5]" />
              <a
                href="mailto:support@paybills.com"
                className="hover:text-[#2841C5] transition"
              >
                support@paybills.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      </MyContainar>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-gray-400/10 py-4">
        <MyContainar>
          <div className=" flex flex-col md:flex-row items-center justify-between text-[17px] text-gray-600">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#2841C5]">PayBills</span>. All
            Rights Reserved.
          </p>
          <p className="mt-2 md:mt-0 text-center md:text-right text-gray-500">
            Developed with <span className="inline-block animate-pulse text-red-500">❤️</span> by{" "}
            <span className="text-[#2841C5] font-medium">Mahialam Rahat</span>
          </p>
        </div>
        </MyContainar>
      </div>
    </footer>
  );
};

export default Footer;
