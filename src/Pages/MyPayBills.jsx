import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import MyContainar from "../Layouts/MyContainar";
import FullScreenLoader from "../Loader/FullScreenLoader";
import InvoicePage from "../Components/Invoice/InvoicePage";
import Swal from "sweetalert2";

const MyPayBills = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosInstance = useAxios();
  const [myPayBills, setMyPayBills] = useState([]);

  useEffect(() => {
    if (user.email) {
      axiosInstance(`/submited-bills?email=${user.email}`).then((data) => {
        setMyPayBills(data.data);
        console.log(data.data);
        setLoading(false);
      });
    }
  }, [axiosInstance, user, setLoading]);

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
    <MyContainar>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-auto min-w-[700px]">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myPayBills.map((myPayBill, index) => (
                <tr
                  key={myPayBill._id}
                  className="hover:bg-base-200 transition-all duration-200"
                >
                  <th>{index + 1}</th>

                  {/* Info */}
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex-shrink-0">
                        <img
                          className="w-full h-full object-cover rounded-full"
                          src={
                            myPayBill?.image ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt=""
                        />
                      </div>
                      <div className="truncate">
                        <div className="font-semibold text-base truncate">
                          {myPayBill.name}
                        </div>
                        <div className="text-sm opacity-60 truncate">
                          {myPayBill.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="font-medium text-green-600">
                      ${myPayBill.amount}
                    </span>
                  </td>

                  <td>
                    <span className="text-sm truncate">
                      {myPayBill.address}
                    </span>
                  </td>

                  <td>
                    <span className="text-sm">{myPayBill.phone}</span>
                  </td>

                  <td>
                    <span className="text-sm text-gray-500">
                      {new Date(myPayBill.created_at).toLocaleDateString()}
                    </span>
                  </td>

                  <th>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <button className="btn btn-sm btn-info text-white hover:scale-105 transition-transform w-full sm:w-auto">
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteBill(myPayBill._id)}
                        className="btn btn-sm btn-error text-white hover:scale-105 transition-transform w-full sm:w-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <InvoicePage myPayBills={myPayBills} />
        </div>
      </div>
    </MyContainar>
  );
};

export default MyPayBills;
