import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import electricyImg from "../../assets/eco-house.png";
import GasImg from "../../assets/gas-pump.png";
import waterImg from "../../assets/water-tap.png";
import internetImg from "../../assets/freelance.png";
import mobileImg from "../../assets/chat.png";
import tvImg from "../../assets/smart-tv.png";

const Categories = ({ handleCategoryWiseData }) => {
  const categories = [
    { id: 1, name: "Electricity", img: electricyImg },
    { id: 2, name: "Gas", img: GasImg },
    { id: 3, name: "Water", img: waterImg },
    { id: 4, name: "Internet", img: internetImg },
    { id: 5, name: "MobileRecharge", img: mobileImg },
    { id: 6, name: "TVCable", img: tvImg },
  ];

  return (
      <>
          
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
      <div className="flex gap-4 overflow-x-auto pb-3 mb-16 scrollbar-hide">
      {categories.map((categorie) => (
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
          {/* Icon / Image */}
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
          </div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-base group-hover:text-primary transition">
              {categorie.name}
            </span>
            <span className="text-xs text-base-content/60">Quick access</span>
          </div>
        </div>
      ))}
    </div>
      </>
  );
};

export default Categories;
