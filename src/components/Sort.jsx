import { useSelector, useDispatch } from "react-redux"; // ✅ RTK
import { setSorting, applyFilters } from "../store/filterSlice"; // ✅ RTK

const Sort = () => {
  const dispatch = useDispatch();

  // ✅ Context ki jagah useSelector
  const { filter_products } = useSelector((state) => state.filter);

  // ✅ Sorting update + apply
  const handleSorting = (e) => {
    dispatch(setSorting(e.target.value));
    dispatch(applyFilters());
  };

  return (
    <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-2 duration-500">
      {/* Product Count */}
      <div className="text-center flex-1">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
          <span className="font-bold text-gray-900 dark:text-white">
            {filter_products.length}
          </span>{" "}
          total products
        </p>
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <select
          name="sort"
          id="sort"
          onChange={handleSorting}
          defaultValue="lowest"
          className="appearance-none 
            bg-white dark:bg-gray-700 
            border border-gray-300 dark:border-gray-600 
            text-gray-700 dark:text-gray-200 
            rounded-md pl-3 pr-9 py-2 text-sm 
            cursor-pointer 
            hover:border-indigo-400 dark:hover:border-indigo-500
            focus:outline-none focus:ring-2 focus:ring-indigo-200 
            transition-all duration-300 shadow-sm"
        >
          <option value="lowest" className="dark:bg-gray-700">
            Price (lowest)
          </option>
          <option value="highest" className="dark:bg-gray-700">
            Price (highest)
          </option>
          <option value="a-z" className="dark:bg-gray-700">
            Name (A - Z)
          </option>
          <option value="z-a" className="dark:bg-gray-700">
            Name (Z - A)
          </option>
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
  );
};

export default Sort;
