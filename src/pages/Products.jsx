import FilterSection from "../components/FilterSection";
import Productlist from "../components/Productlist";
import Sort from "../components/Sort";

export const Products = () => {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto 
      animate-in fade-in duration-500 
      bg-white dark:bg-gray-900 
      transition-colors duration-300 min-h-screen"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT — Filter Section */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div
            className="lg:sticky lg:top-6 
            bg-white dark:bg-gray-800 
            p-4 rounded-xl 
            border border-gray-100 dark:border-gray-700 
            transition-colors duration-300"
          >
            <FilterSection />
          </div>
        </aside>

        {/* RIGHT — Sort + Products */}
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <Sort />
          </div>
          <Productlist />
        </div>
      </div>
    </section>
  );
};

export default Products;
