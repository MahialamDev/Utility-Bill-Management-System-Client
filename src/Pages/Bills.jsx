import React, { useEffect, useState } from "react";
import MyContainar from "../Layouts/MyContainar";
import BillCards from "../Components/BillCards/BillCards";
import billBanner from "../assets/bill-banner.png";
import useAuth from "../Hooks/useAuth";
import FullScreenLoader from "../Loader/FullScreenLoader";
import useAxios from "../Hooks/useAxios";

const Bills = () => {
  const { loading, setLoading } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("all-bills");
  const [allBills, setAllBills] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);
    axiosInstance(`/all-bills?category=${selectedCategory}`)
      .then(data => setAllBills(data.data))
      .finally(() => setLoading(false));
  }, [axiosInstance, setLoading, selectedCategory]);

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    axiosInstance(`/all-bills?category=${category}`)
      .then(data =>console.log(data.data))
      .catch(err => console.error(err));
  };

  if (loading) return <FullScreenLoader />;

  return (
    <MyContainar>
      <div className="w-full h-[500px] rounded-2xl mb-5 border border-gray-200">
        <img className="h-full w-full object-cover rounded-2xl" src={billBanner} alt="" />
      </div>

      <div className="flex-end">
        <fieldset className="fieldset">
          <select value={selectedCategory} onChange={handleChange} className="select">
            <option value="all-bills">Select a Category</option>
            <option value="internet">Internet</option>
            <option value="water">Water</option>
            <option value="electricity">Electricity</option>
            <option value="gas">Gas</option>
          </select>
        </fieldset>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 mt-5">
        {allBills.map(bill => <BillCards key={bill._id} bill={bill} />)}
      </div>
    </MyContainar>
  );
};

export default Bills;
