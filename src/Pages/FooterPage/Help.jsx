import React from "react";
import MyContainar from "../../Layouts/MyContainar";
import { FaRegQuestionCircle, FaFileInvoiceDollar, FaBell, FaUserShield } from "react-icons/fa";

const Help = () => {
  return (
    <MyContainar className="py-10 bg-base-300 shadow-lg rounded-2xl md:p-10 md:bg-transparent">
      <div className="mx-auto  text-base-content ">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Help Center
        </h1>
        <p className="text-sm text-base-400 mb-8">
          Find answers to common questions and get support for managing your utility bills.
        </p>

        {/* Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="p-5 bg-base-100 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaFileInvoiceDollar size={22} />
              <h2 className="text-lg font-semibold">Managing Bills</h2>
            </div>
            <p className="text-gray-500">
              Learn how to add, update, and track your electricity, gas, water,
              and internet bills efficiently.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-base-100 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaBell size={22} />
              <h2 className="text-lg font-semibold">Bill Reminders</h2>
            </div>
            <p className="text-gray-500">
              Get help with setting up reminders so you never miss a payment
              deadline again.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-base-100 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaUserShield size={22} />
              <h2 className="text-lg font-semibold">Account & Security</h2>
            </div>
            <p className="text-gray-500">
              Manage your account settings, change passwords, and keep your
              personal data secure.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 bg-base-100 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <FaRegQuestionCircle size={22} />
              <h2 className="text-lg font-semibold">General FAQs</h2>
            </div>
            <p className="text-gray-500">
              Find answers to the most frequently asked questions about our
              utility bill management platform.
            </p>
          </div>

        </div>

        {/* Contact Support */}
        <div className="mt-10 border-t border-base-200 pt-6">
          <h2 className="text-xl font-semibold mb-2">Need More Help?</h2>
          <p className="text-gray-500 mb-4">
            If you can’t find the answer you’re looking for, our support team is
            ready to help you.
          </p>
          <button className="btn btn-primary">
            Contact Support
          </button>
        </div>

      </div>
    </MyContainar>
  );
};

export default Help;
