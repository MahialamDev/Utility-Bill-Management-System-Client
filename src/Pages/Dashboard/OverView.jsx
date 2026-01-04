import React from "react";

const Overview = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">

      {/* ================= Main Card (Gradient) ================= */}
<div className="relative rounded-3xl shadow-xl p-6 md:p-10 overflow-hidden">
  {/* Gradient Background with blur */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 backdrop-blur-md rounded-3xl -z-10"></div>

  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Overview</h1>
  <p className="text-base-400 text-lg mb-6">
    Here’s a quick glance at your account and bills.
  </p>

  {/* Stats Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-base-100/80 rounded-xl p-6 shadow hover:shadow-md transition backdrop-blur-sm">
      <p className="text-gray-500 text-sm">Paid Bills</p>
      <h2 className="text-xl font-semibold text-primary mt-2">8</h2>
    </div>

    <div className="bg-base-100/80 rounded-xl p-6 shadow hover:shadow-md transition backdrop-blur-sm">
      <p className="text-gray-500 text-sm">Last Payment</p>
      <h2 className="text-xl font-semibold text-primary mt-2">$120</h2>
    </div>

    <div className="bg-base-100/80 rounded-xl p-6 shadow hover:shadow-md transition backdrop-blur-sm">
      <p className="text-gray-500 text-sm">Upcoming Due</p>
      <h2 className="text-xl font-semibold text-primary mt-2">$50</h2>
    </div>
  </div>
</div>



      {/* ================= Recent Activity ================= */}
      <div className="bg-base-100 rounded-3xl shadow-xl p-6 md:p-10">
        <h3 className="text-lg font-semibold text-base-400 mb-4">Recent Activity</h3>
        <ul className="space-y-2 text-gray-500">
          <li>Electricity bill of $120 paid on 03 Jan 2026</li>
          <li>Water bill of $30 pending since 01 Jan 2026</li>
          <li>Internet bill of $50 paid on 02 Jan 2026</li>
        </ul>
      </div>

      {/* ================= Upcoming Bills ================= */}
      <div className="bg-base-100 rounded-3xl shadow-xl p-6 md:p-10">
        <h3 className="text-lg font-semibold text-base-400 mb-4">Upcoming Bills</h3>
        <ul className="space-y-2 text-gray-500">
          <li>Gas bill of $60 due on 10 Jan 2026</li>
          <li>Internet bill of $50 due on 15 Jan 2026</li>
          <li>Electricity bill of $130 due on 20 Jan 2026</li>
        </ul>
      </div>

      {/* ================= Tips & Alerts ================= */}
      <div className="bg-base-100 rounded-3xl shadow-xl p-6 md:p-10">
        <h3 className="text-lg font-semibold text-base-400 mb-4">Tips & Alerts</h3>
        <ul className="space-y-2 text-gray-500 list-disc list-inside">
          <li>Pay your bills on time to avoid late fees.</li>
          <li>Enable reminders for upcoming bills.</li>
          <li>Check your monthly bill summary for unexpected charges.</li>
        </ul>
      </div>

      {/* ================= Summary Charts Placeholder ================= */}
      <div className="bg-base-100 rounded-3xl shadow-xl p-6 md:p-10">
        <h3 className="text-lg font-semibold text-base-400 mb-4">Spending Summary</h3>
        <div className="h-40 bg-white rounded-xl shadow flex items-center justify-center text-gray-400">
          {/* Future: Chart component */}
          Chart Placeholder
        </div>
      </div>

    </div>
  );
};

export default Overview;
