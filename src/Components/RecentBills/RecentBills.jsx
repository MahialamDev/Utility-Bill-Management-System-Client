import React, { useEffect, useState } from "react";
import MyContainar from "../../Layouts/MyContainar";
import BillCards from "../BillCards/BillCards";
import { IoIosArrowForward } from "react-icons/io";
import { FiSmartphone, FiTv } from "react-icons/fi";
import electricyImg from "../../assets/eco-house.png";
import GasImg from "../../assets/gas-pump.png";
import waterImg from "../../assets/water-tap.png";
import internetImg from "../../assets/freelance.png";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import FullScreenLoader from "../../Loader/FullScreenLoader";

const RecentBills = () => {
  const [recentBills, setRecentBills] = useState([]);
  const { loading, setLoading } = useAuth();
  const axiosInstance = useAxios();

  const categories = [
    { id: 1, name: "Electricity", img: electricyImg },
    { id: 2, name: "Gas", img: GasImg },
    { id: 3, name: "Water", img: waterImg },
    { id: 4, name: "Internet", img: internetImg },
    { id: 5, name: "Mobile Recharge", icon: FiSmartphone },
    { id: 6, name: "TV Cable", icon: FiTv },
    { id: 7, name: "See More", isViewAll: true },
  ];

  useEffect(() => {
    setLoading(true);
    axiosInstance("/recent-bills").then((data) => {
      setRecentBills(data.data);
      setLoading(false);
    });
  }, [setLoading, axiosInstance]);

  const handleCategoryWiseData = (category) => {
    console.log("Category Clicked:", category);
  };

  if (loading) return <FullScreenLoader />;

  return (
    <section className="py-16 bg-base-100">
      <div>

        {/* Category Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold">
            Bill Categories
          </h3>

          <button className="group flex items-center gap-2 text-primary font-medium hover:opacity-80 transition">
            View All
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Categories – Modern Smooth Pills */}
        <div className="flex gap-4 overflow-x-auto pb-3 mb-16 scrollbar-hide">
          {categories.map((categorie) => {
            const Icon = categorie.icon;

            return (
              <div
                key={categorie.id}
                onClick={() => handleCategoryWiseData(categorie)}
                className="
                  group min-w-[190px]
                  flex items-center gap-4
                  px-5 py-4
                  rounded-2xl
                  cursor-pointer
                  bg-base-300/60
                  border border-base-content/10
                  transition-all duration-300 ease-out
                  hover:border-primary/40
                  hover:bg-base-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    h-11 w-11
                    flex items-center justify-center
                    rounded-xl
                    bg-primary/10
                    transition-all duration-300
                    group-hover:bg-primary/20
                    group-hover:rotate-6
                  "
                >
                  {categorie.img && (
                    <img
                      src={categorie.img}
                      alt={categorie.name}
                      className="w-6 h-6 object-contain"
                    />
                  )}

                  {Icon && (
                    <Icon className="text-xl text-primary" />
                  )}

                  {categorie.isViewAll && (
                    <IoIosArrowForward className="text-xl text-primary" />
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-base group-hover:text-primary transition">
                    {categorie.name}
                  </span>
                  <span className="text-xs text-base-content/60">
                    Quick access
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Bills Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-primary">Recent</span> Bills
          </h2>
          <p className="mt-3 text-base-content/60 max-w-2xl mx-auto">
            Quickly access and manage your latest utility bills.
          </p>
        </div>

        {/* Bills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recentBills.map((bill) => (
            <BillCards bill={bill} key={bill._id} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentBills;
