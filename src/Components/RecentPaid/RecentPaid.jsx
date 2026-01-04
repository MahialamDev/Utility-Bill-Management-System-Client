import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Categories from "../Categories/Categories";
import electricyImg from "../../assets/eco-house.png";
import GasImg from "../../assets/gas-pump.png";
import waterImg from "../../assets/water-tap.png";
import internetImg from "../../assets/freelance.png";
import mobileImg from "../../assets/chat.png";
import tvImg from "../../assets/smart-tv.png";

const RecentPaid = () => {
  const categories = [
    { id: 1, name: "Electricity", img: electricyImg },
    { id: 2, name: "Gas", img: GasImg },
    { id: 3, name: "Water", img: waterImg },
    { id: 4, name: "Internet", img: internetImg },
    { id: 5, name: "MobileRecharge", img: mobileImg },
    { id: 6, name: "TVCable", img: tvImg },
  ];

  const axiosInstance = useAxios();
  const [recentPaid, setRecentPaid] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/recent-paid")
      .then((res) => setRecentPaid(res.data))
      .finally(() => setLoading(false));
  }, [axiosInstance]);

  const categoryImg = (categoryName) => {
    const category = categories.find((c) => c.name === categoryName);
    if (!category) return null;
    return (
      <img
        src={category.img}
        alt={category.name}
        className="w-10 h-10 object-contain"
      />
    );
  };

  if (loading)
    return (
      <p className="text-center text-gray-400 py-20 animate-pulse">
        Loading recent payments...
      </p>
    );

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-base-100 dark:bg-gray-900">
      {/* 🔹 Categories */}
      <Categories handleCategoryWiseData={(cat) => console.log(cat.name)} />

      {/* 🔹 Recent Bills Header */}
      <div className="text-center mb-12 mt-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
          <span className="text-primary">Recent</span> Bills
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Quickly access and manage your latest utility bills.
        </p>
      </div>

      {/* 🔹 Recent Bills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentPaid.map((paid) => (
          <div
            key={paid._id}
            className="relative bg-base-200 dark:bg-gray-800 rounded-2xl p-5 flex flex-col items-center gap-3
                       shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Date badge top-left */}
            <span className="absolute top-3 left-3 text-xs text-gray-500 dark:text-gray-400">
              {new Date(paid.created_at).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
              })}
            </span>

            {/* Category Icon */}
            <div className="bg-base-100 dark:bg-gray-700 rounded-full p-3">
              {categoryImg(paid.category)}
            </div>

            {/* Category Name */}
            <h1 className="font-semibold text-lg text-base-content dark:text-gray-200">
              {paid?.category}
            </h1>

            {/* Amount */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Amount:{" "}
              <span className="font-medium text-green-400">${paid?.amount}</span>
            </p>

            {/* Paid By */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Paid By: <span className="font-medium">{paid?.name}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPaid;
