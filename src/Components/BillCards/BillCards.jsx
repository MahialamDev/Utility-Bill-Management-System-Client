import React from "react";
import { MapPin, Calendar, Folder, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const BillCards = ({ bill }) => {
  const date = new Date(bill.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-gray-100 rounded-2xl  bg-base-300/80 backdrop-blur-2xl p-5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-[#2841C5] group-hover:text-[#1f31a1] transition-colors">
        {bill.title} - {date.toLocaleString("en-US", { month: "long" })}
      </h3>

      <div>
        {/* Image */}
      {bill.image && (
        <div className="w-full h-[60px] mb-3">
          <img className="h-full object-cover rounded-md" src={bill.image} alt="" />
        </div>
      )}

      {/* Info */}
      <div className="space-y-2 text-gray-600 text-sm">
        {/* Category */}
        <p className="flex items-center gap-2 text-base-content">
          <Folder size={18} className="text-secondary" />
          {bill.category}
        </p>

        {/* Amount (if exists) */}
        {bill.amount && (
          <p className="flex items-center gap-2 text-base-content">
            <DollarSign size={18} className="text-secondary" />
            {bill.amount}
          </p>
        )}

        {/* Location (only if amount does NOT exist) */}
        {!bill.amount && (
          <p className="flex items-center gap-2 text-base-content">
            <MapPin size={18} className="text-secondary" />
            {bill.location}
          </p>
        )}

        {/* Date */}
        <p className="flex items-center gap-2 text-base-content">
          <Calendar size={18} className="text-secondary" />
          {formattedDate}
        </p>
      </div>
      </div>

      {/* Button */}
      <Link to={`/bill-details/${bill._id}`}>
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#2841C5] hover:bg-[#1f31a1] text-white font-semibold py-2 rounded-lg transition-all duration-300 cursor-pointer active:translate-x-1">
          See Details
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </Link>
    </div>
  );
};

export default BillCards;
