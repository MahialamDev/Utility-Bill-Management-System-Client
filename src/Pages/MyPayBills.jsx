import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import MyContainar from "../Layouts/MyContainar";
import FullScreenLoader from "../Loader/FullScreenLoader";
import InvoicePage from "../Components/Invoice/InvoicePage";
import Swal from "sweetalert2";

const MyPayBills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const [myPayBills, setMyPayBills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.email) {
      setLoading(true)
      axiosInstance(`/submited-bills?email=${user.email}`).then((data) => {
        setMyPayBills(data.data);
        console.log(data.data);
        setLoading(false);
      });
    }
  }, [axiosInstance, user,]);

  const handleDeleteBill = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`submited-bills/${id}`).then((data) => {
          if (data.data.deletedCount) {
            const newPayBills = myPayBills.filter(newPayBill => newPayBill._id !== id);
            setMyPayBills(newPayBills);
            Swal.fire({
              title: "Deleted Succfully!",
              icon: "success",
              draggable: true,
            });
          }
        });
      }
    });
  };

  if (loading) return <FullScreenLoader />;

  return (
    <div>
  <div className="space-y-6 mt-4 md:mt-6">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h2 className="text-2xl font-semibold text-gray-800">
        My Paid Bills
      </h2>
      <span className="text-sm text-gray-500">
        Total: {myPayBills.length} bills
      </span>
    </div>

    {/* Table Card */}
    <div className="bg-base-300 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead className="bg-secondary/20 text-left text-sm text-gray-500">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Address</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="">
            {myPayBills.map((bill, index) => (
              <tr
                key={bill._id}
                className="hover:bg-primary/10 transition border-b border-primary/5"
              >
                <td className="px-6 py-4 font-medium">
                  {index + 1}
                </td>

                {/* User */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        bill.image ||
                        "https://img.daisyui.com/images/profile/demo/2@94.webp"
                      }
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base-content font-medium ">
                        {bill.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {bill.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Amount */}
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-secondary/80">
                    ${bill.amount}
                  </span>
                </td>

                {/* Address */}
                <td className="px-6 py-4 max-w-[220px] truncate text-sm text-gray-600">
                  {bill.address}
                </td>

                {/* Phone */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  {bill.phone}
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(bill.created_at).toLocaleDateString()}
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1.5 text-sm rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition">
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteBill(bill._id)}
                      className="px-3 py-1.5 text-sm rounded-lg border border-red-500 text-red-600 hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Invoice Section */}
    <div className="bg-base-300 rounded-2xl shadow-sm border border-gray-100 p-6 flex justify-between items-center">
      <InvoicePage myPayBills={myPayBills} /> 
    </div>
  </div>
</div>

  );
};

export default MyPayBills;
