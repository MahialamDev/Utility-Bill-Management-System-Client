import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import MyContainar from "../Layouts/MyContainar";
import BillCards from "../Components/BillCards/BillCards";
import billBanner from "../assets/bill-banner.png";
import useAuth from "../Hooks/useAuth";
import FullScreenLoader from "../Loader/FullScreenLoader";
import useAxios from "../Hooks/useAxios";

// 🔹 Fake bills data

const Bills = () => {
  const { loading, setLoading } = useAuth();

  // const [recentBills, setRecentBills] = useState([]);
  const [allBills, setAllBills] = useState([]);

  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);
    axiosInstance("/all-bills").then((data) => {
      setAllBills(data.data);
      setLoading(false);
    });
  }, [axiosInstance, setLoading]);

  if (loading) return <FullScreenLoader />;

  console.log("allBills", allBills);

  return (
    <MyContainar>
      <div className="w-full h-[500px] rounded-2xl mb-5 border border-gray-200">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={billBanner}
          alt=""
        />
      </div>

      <div className="border w-full p-2 flex items-center justify-end">
        <div className="flex-end">
          <button className="btn">Catetory</button>
          <button className="btn">Short-By</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBills.map((bill) => (
          <BillCards key={bill._id} bill={bill} />
        ))}
      </div>
    </MyContainar>
  );
};

export default Bills;
