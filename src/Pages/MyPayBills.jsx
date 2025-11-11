import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import MyContainar from "../Layouts/MyContainar";
import FullScreenLoader from "../Loader/FullScreenLoader";

const MyPayBills = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosInstance = useAxios();
  const [myPayBills, setMyPayBills] = useState([]);

  useEffect(() => {
    if (user.email) {
      axiosInstance(`submited-bills?email=${user.email}`).then((data) => {
        setMyPayBills(data.data);
        console.log(data.data);
        setLoading(false);
      });
    }
  }, [axiosInstance, user, setLoading]);

  if (loading) return <FullScreenLoader />;

  return (
    <MyContainar>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {myPayBills.map((myPayBill, index) => (
                <tr
                  key={myPayBill._id}
                  className="hover:bg-base-200 transition-all duration-200"
                >
                  {/* Checkbox */}
                  <th>{index + 1}</th>

                  {/* Info */}
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10">
                        <img
                          className="w-full h-full object-center"
                          src={
                            myPayBill?.image ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt=""
                        />
                      </div>

                      <div>
                        <div className="font-semibold text-base">
                          {myPayBill.name}
                        </div>
                        <div className="text-sm opacity-60">
                          {myPayBill.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Amount */}
                  <td>
                    <span className="font-medium text-green-600">
                      ${myPayBill.amount}
                    </span>
                  </td>

                  {/* Address */}
                  <td>
                    <span className="text-sm">{myPayBill.address}</span>
                  </td>

                  {/* Phone */}
                  <td>
                    <span className="text-sm">{myPayBill.phone}</span>
                  </td>

                  {/* Date */}
                  <td>
                    <span className="text-sm text-gray-500">
                      {new Date(myPayBill.created_at).toLocaleDateString()}
                    </span>
                  </td>

                  {/* Actions */}
                  <th>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-sm btn-info text-white hover:scale-105 transition-transform">
                        Update
                      </button>
                      <button className="btn btn-sm btn-error text-white hover:scale-105 transition-transform">
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MyContainar>
  );
};

export default MyPayBills;
