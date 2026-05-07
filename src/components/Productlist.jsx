import { useSelector } from "react-redux"; // ✅ RTK
import Product from "./Product";

const Productlist = () => {
  const { filter_products } = useSelector((state) => state.filter); // ✅ RTK

  if (!filter_products || filter_products.length === 0) {
    return (
      <div className="text-center py-20 animate-in fade-in duration-500">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No products match your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filter_products.map((elem, idx) => (
        <div
          key={elem.id}
          className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl rounded-lg"
          style={{ animationDelay: `${idx * 60}ms` }}
        >
          <Product {...elem} />
        </div>
      ))}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Productlist;
