import React, { useEffect, useState } from "react";
import MyContainar from "../Layouts/MyContainar";
import BillCards from "../Components/BillCards/BillCards";
import billBanner from "../assets/bill-banner.png";
import useAuth from "../Hooks/useAuth";
import FullScreenLoader from "../Loader/FullScreenLoader";
import useAxios from "../Hooks/useAxios";
import { Search } from "lucide-react";

const Bills = () => {
  const { loading, setLoading } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("all-bills");
  const [searchText, setSearchtext] = useState("");
  const [sort, setSort] = useState("");
  const [allBills, setAllBills] = useState([]);

  const axiosInstance = useAxios();

  // Fetch Bills
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/all-bills?category=${selectedCategory}&sort=${sort}&search=${searchText}`)
      .then((res) => setAllBills(res.data))
      .finally(() => setLoading(false));
  }, [axiosInstance, setLoading, selectedCategory, sort, searchText]);

  // Handle Category Change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle Sort Change
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Handle Search Submit
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchtext(e.target.search.value);
  };

  if (loading) return <FullScreenLoader />;

  return (
    <MyContainar className="py-10">

      {/* Banner */}
      <div className="w-full h-[500px] rounded-2xl mb-8 overflow-hidden border border-gray-200">
        <img
          src={billBanner}
          alt="Bill Banner"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        {/* Category & Sort */}
        <div className="flex gap-4 flex-wrap">
          <fieldset className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Category</label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="select select-bordered min-w-[150px]"
            >
              <option value="all-bills">All Bills</option>
              <option value="internet">Internet</option>
              <option value="water">Water</option>
              <option value="electricity">Electricity</option>
              <option value="gas">Gas</option>
              <option value="mobile">Mobile Recharge</option>
              <option value="tv">TV Cable</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Sort By</label>
            <select
              value={sort}
              onChange={handleSortChange}
              className="select select-bordered min-w-[150px]"
            >
              <option value="date-asc">Create Date Asc</option>
              <option value="date-desc">Create Date Desc</option>
            </select>
          </fieldset>
        </div>

        {/* Search */}
    
<form
  onSubmit={handleSearch}
  className="flex items-stretch w-full md:w-auto border border-gray-300 dark:border-gray-600 rounded-full overflow-hidden shadow-sm"
>
  <input
    type="text"
    name="search"
    placeholder="Search bills..."
    className="px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-200"
  />
  <button
    type="submit"
    className="flex items-center justify-center px-4 bg-primary text-white hover:bg-primary/90 transition"
  >
    <Search size={18} />
  </button>
</form>

      </div>

      {/* Bills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allBills.length > 0 ? (
          allBills.map((bill) => <BillCards key={bill._id} bill={bill} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-400 py-10">
            No bills found.
          </p>
        )}
      </div>
    </MyContainar>
  );
};

export default Bills;
