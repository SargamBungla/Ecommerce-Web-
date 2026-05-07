import { useSelector, useDispatch } from "react-redux"; // ✅ RTK
import { updateFilter, applyFilters, clearFilters } from "../store/filterSlice"; // ✅ RTK
import FormatePrice from "../Helpers/FormatePrice";

const FilterSection = () => {
  const dispatch = useDispatch();

  // ✅ Context ki jagah useSelector
  const { all_products, filters } = useSelector((state) => state.filter);
  const { text, category, brand, price, maxPrice, minPrice } = filters;

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => curElem[property]);
    return ["all", ...new Set(newVal)];
  };

  const categoryData = getUniqueData(all_products, "category");
  const brandData = getUniqueData(all_products, "brand");

  // ✅ Filter update + apply
  const updateFilterValue = (e) => {
    const { name, value } = e.target;
    dispatch(updateFilter({ name, value }));
    dispatch(applyFilters());
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
      {/* 1️⃣ Search */}
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              name="text"
              placeholder="SEARCH"
              value={text}
              onChange={updateFilterValue}
              className="w-full pl-9 pr-4 py-2.5 text-sm tracking-wide uppercase 
                bg-gray-100 dark:bg-gray-700 
                border border-transparent dark:border-gray-600 
                rounded-md 
                placeholder-gray-500 dark:placeholder-gray-400 
                text-gray-700 dark:text-gray-200 
                focus:outline-none focus:bg-white dark:focus:bg-gray-600 
                transition-all duration-300"
            />
          </div>
        </form>
      </div>

      {/* 2️⃣ Category */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Category
        </h3>
        <div className="flex flex-col items-start gap-1.5">
          {categoryData.map((curElem, index) => {
            const isActive = curElem === category;
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                className={`capitalize text-sm py-1 transition-all duration-300
                  hover:translate-x-1 hover:text-indigo-600 dark:hover:text-indigo-400
                  ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4"
                      : "text-gray-600 dark:text-gray-400 font-medium"
                  }`}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3️⃣ Brand */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Company
        </h3>
        <div className="relative">
          <select
            name="brand"
            value={brand}
            onChange={updateFilterValue}
            className="w-full appearance-none capitalize 
              bg-white dark:bg-gray-700 
              border border-gray-300 dark:border-gray-600 
              rounded-md px-3 py-2 pr-9 text-sm 
              text-gray-700 dark:text-gray-200 
              focus:outline-none focus:ring-2 focus:ring-indigo-200 
              transition-all duration-300 shadow-sm"
          >
            {brandData.map((curElem, index) => (
              <option
                key={index}
                value={curElem}
                className="capitalize dark:bg-gray-700"
              >
                {curElem}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* 4️⃣ Price */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Price
        </h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
          <FormatePrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
          className="w-full accent-indigo-600 dark:accent-indigo-400 cursor-pointer"
        />
      </div>

      {/* 5️⃣ Clear Filters */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => dispatch(clearFilters())} // ✅ RTK dispatch
          className="w-full py-2.5 px-4 bg-rose-400 hover:bg-rose-500 
            dark:bg-rose-500 dark:hover:bg-rose-600 
            text-white text-sm font-semibold uppercase tracking-wider 
            rounded-md shadow-md transition-all duration-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
