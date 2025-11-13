import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import FullScreenLoader from "../../Loader/FullScreenLoader";
import MyContainar from "../../Layouts/MyContainar";
import {
  Mail,
  FileText,
  DollarSign,
  User,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import Swal from "sweetalert2";

const BillDetails = () => {
  const { id } = useParams();
  const { loading, setLoading, user } = useAuth();
  const [billDetailsData, setBillDetailsData] = useState([]);
  const modalRef = useRef();
  console.log(id);
  const axiosInstance = useAxios();

  useEffect(() => {
    //setLoading(true)
    axiosInstance(`/bill-details/${id}`).then((data) => {
      setBillDetailsData(data.data);
      //setLoading(false)
    });

    console.log(axiosInstance);
  }, [setLoading, axiosInstance, id]);

  console.log(billDetailsData);
  const { title, category, amount, location, created_at, description, image } =
    billDetailsData;

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handlePayBill = (e) => {
    e.preventDefault();
    console.log("OK Bro");
    const bill_id = billDetailsData._id;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const amount = e.target.amount.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const category = e.target.category.value;
    const created_at = new Date().toISOString();

    const submitedBills = {
      bill_id,
      name,
      email,
      image,
      amount,
      phone,
      address,
      category,
      created_at,
    };

    axiosInstance.post("/submited-bills", submitedBills).then((data) => {
      if (data.data.insertedId) {
        modalRef.current.close();
        e.target.reset();
        Swal.fire({
          title: "Payment Successfully!",
          icon: "success",
          draggable: true,
        });
      }
    });
  };

  // Payment month validation variables
const currentDate = new Date();
const billDate = created_at ? new Date(created_at) : new Date("invalid");

const isValidBillDate = !isNaN(billDate.getTime());

const currentMonth = currentDate.getMonth(); // 0-11
const currentYear = currentDate.getFullYear();
const billMonth = isValidBillDate ? billDate.getMonth() : -1;
const billYear = isValidBillDate ? billDate.getFullYear() : -1;

//disable button
const isDifferentMonth =
  currentMonth !== billMonth || currentYear !== billYear;

  if (loading) return <FullScreenLoader />;

  return (
    <MyContainar>
      {/* Details Section */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl border border-[#2841C5]/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Top Image Section */}
          <div className="relative w-full flex justify-center items-center bg-[#2841C5]/5 py-10">
            <div className="w-52 h-52 bg-white rounded-2xl shadow-lg overflow-hidden border border-[#2841C5]/10">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#2841C5] mt-4 mb-8">
            {title}
          </h1>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-[#2841C5]/5 rounded-xl p-4 text-center">
                <h3 className="text-sm font-semibold text-[#2841C5]/80">
                  Category
                </h3>
                <p className="text-lg font-bold text-gray-800 mt-1">
                  {category}
                </p>
              </div>
              <div className="bg-[#2841C5]/5 rounded-xl p-4 text-center">
                <h3 className="text-sm font-semibold text-[#2841C5]/80">
                  Amount
                </h3>
                <p className="text-lg font-bold text-gray-800 mt-1">
                  ৳ {amount}
                </p>
              </div>
              <div className="bg-[#2841C5]/5 rounded-xl p-4 text-center">
                <h3 className="text-sm font-semibold text-[#2841C5]/80">
                  Location
                </h3>
                <p className="text-lg font-bold text-gray-800 mt-1">
                  {location}
                </p>
              </div>
              <div className="bg-[#2841C5]/5 rounded-xl p-4 text-center">
                <h3 className="text-sm font-semibold text-[#2841C5]/80">
                  Date
                </h3>
                <p className="text-lg font-bold text-gray-800 mt-1">
                  {new Date(created_at).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#2841C5]/10"></ div>

            {/* Description Section */}
            <div>
              <h2 className="text-xl font-semibold text-[#2841C5] mb-3">
                Bill Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {description}
              </p>
            </div>

            {/* Payment Button */}
<div className="text-center pt-4">
  <button
    onClick={!isDifferentMonth ? handleModal : undefined}
    disabled={isDifferentMonth}
    className={`px-10 py-3 font-semibold rounded-full shadow-md transition-all duration-300 ${
      isDifferentMonth
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-[#2841C5] hover:bg-[#1f33a3] text-white hover:shadow-xl cursor-pointer"
    }`}
    aria-disabled={isDifferentMonth}
    title={
      isDifferentMonth
        ? "Payment unavailable — bill is not from this month"
        : "Pay Now"
    }
  >
    {isDifferentMonth ? "Payment Unavailable" : "Pay Now"}
  </button>
</div>

          </div>
        </div>
      </div>

      {/* Modal Open */}

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative">
          {/* Close Button */}
          <form method="dialog" className="absolute right-4 top-4">
            <button className="btn btn-sm btn-circle bg-[#2841C5] text-white hover:bg-[#1f33a3] border-none">
              <X size={18} />
            </button>
          </form>

          {/* Header */}
          <h1 className="text-2xl font-semibold text-center text-[#2841C5] mb-6">
            Pay Your Bill
          </h1>

          {/* Form */}
          <form onSubmit={handlePayBill} className="space-y-5">
            {/* Email */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <Mail size={18} className="text-[#2841C5]" /> Email
              </label>
              <input
                name="email"
                className="input input-bordered w-full rounded-xl focus:border-[#2841C5] focus:ring-[#2841C5]"
                type="email"
                value={user.email}
                readOnly
              />
            </div>

            {/* Bill Type & Amount */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                  <FileText size={18} className="text-[#2841C5]" /> Bill Type
                </label>
                <input
                  name="category"
                  className="input input-bordered w-full rounded-xl focus:border-[#2841C5] focus:ring-[#2841C5]"
                  type="text"
                  value={billDetailsData.category}
                  readOnly
                />
              </div>
              <div>
                <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                  <DollarSign size={18} className="text-[#2841C5]" /> Amount
                </label>
                <input
                  name="amount"
                  className="input input-bordered w-full rounded-xl focus:border-[#2841C5] focus:ring-[#2841C5]"
                  type="text"
                  value={billDetailsData.amount}
                  readOnly
                />
              </div>
            </div>

            {/* User Name */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <User size={18} className="text-[#2841C5]" /> User Name
              </label>
              <input
                name="name"
                className="input input-bordered w-full rounded-xl focus:border-[#2841C5] focus:ring-[#2841C5]"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <MapPin size={18} className="text-[#2841C5]" /> Address
              </label>
              <input
                name="address"
                className="input input-bordered w-full rounded-xl focus:border-[#2841C5] focus:ring-[#2841C5]"
                type="text"
                placeholder="Enter your address"
                maxlength="50"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <Phone size={18} className="text-[#2841C5]" /> Phone
              </label>
              <input
                name="phone"
                className="input input-bordered w-full rounded-xl focus:border-[#2841C5] focus:ring-[#2841C5]"
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <input
                type="submit"
                value="Submit Payment"
                className="btn w-full bg-[#2841C5] text-white border-none rounded-xl hover:bg-[#1f33a3] transition-all duration-200"
              />
            </div>
          </form>

          {/* Close Button Bottom */}
          <div className="modal-action mt-4">
            <form method="dialog" className="w-full">
              <button className="btn w-full rounded-xl border-[#2841C5] text-[#2841C5] hover:bg-[#2841C5] hover:text-white transition-all">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </MyContainar>
  );
};

export default BillDetails;
