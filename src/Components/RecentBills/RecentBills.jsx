import React, { useEffect, useState } from "react";
import MyContainar from "../../Layouts/MyContainar";
import BillCards from "../BillCards/BillCards";
import { IoIosArrowForward } from "react-icons/io";
import electricyImg from "../../assets/eco-house.png";
import GasImg from "../../assets/gas-pump.png";
import waterImg from "../../assets/water-tap.png";
import internetImg from "../../assets/freelance.png";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import FullScreenLoader from "../../Loader/FullScreenLoader";

const RecentBills = () => {
  // const [singleCategory, setSingleCategory] = useState(null);
  const [recentBills, setRecentBills] = useState([]);
  const { loading, setLoading } = useAuth();


  const categories = [
    { id: 1, name: "Electricity", img: electricyImg },
    { id: 2, name: "Gas", img: GasImg },
    { id: 3, name: "Water", img: waterImg },
    { id: 4, name: "Internet", img: internetImg },
    { id: 5, name: "See More", img: null, isViewAll: true },
  ];



  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);
    axiosInstance('/recent-bills')
      .then(data => {
        setRecentBills(data.data)
        setLoading(false);
      })
  }, [setLoading, axiosInstance]);

  // 🔹 Handle "See Details" click
  const handleCategoryWiseData = (category) => {
    console.log('After Data' , category)
  }

  if(loading) return <FullScreenLoader />

  return (
    <div className="">
      
      <div className="my-10 py-10 ">
         <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center ">
        <span className="text-[#2841C5]">Recent</span> Bills
      </h2>
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="font-semibold text-xl md:text-2xl">Categories</p>
          </div>
          <div>
            <button className=" flex items-center gap-2 cursor-pointer hover:opacity-50 duration-300 transition">
              View All{" "}
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-10 ">
          {categories.map((categorie) => (
            <div
              onClick={()=>handleCategoryWiseData}
              key={categorie.id}
              className="border border-gray-300 rounded-md h-[100px] md:h-[150px] flex items-center justify-center flex-col gap-3 cursor-pointer
             bg-white transition transform duration-300
             hover:-translate-y-1 hover:scale-105 hover:bg-gray-50"
            >
              <div className="h-7 w-7 md:h-10 md:w-10">
                <img
                  className="w-full h-full mx-auto object-cover"
                  src={categorie.img}
                  alt=""
                />
              </div>
              <p className="font-semibold">{categorie.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentBills.map((bill) => (
          <BillCards bill={bill} key={bill._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentBills;
