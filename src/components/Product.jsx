// import { Link } from "react-router-dom";
// import FormatePrice from "../Helpers/FormatePrice";

// const Product = ({ id, title, thumbnail, price, category }) => {
//   console.log("image URL:", thumbnail);
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
//       {/* Image */}
//       <figure className="relative overflow-hidden group">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="w-full h-52 object-contain mt-4 transition-transform duration-300 group-hover:scale-110"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

//         {/* Category Badge */}
//         <span className="absolute top-4 right-4 bg-white text-purple-600 text-xs px-4 py-1 rounded-full uppercase">
//           {category}
//         </span>
//       </figure>

//       {/* Card Data */}
//       <div className="px-6 pb-6">
//         <div className="flex justify-between items-center my-4">
//           <h3 className="text-gray-800 capitalize font-semibold text-lg truncate w-40">
//             {title}
//           </h3>
//           <p className="text-purple-600 font-bold">
//             <FormatePrice price={price} />
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <Link
//             to={`/singleproduct/${id}`}
//             className="border border-purple-600 text-purple-600 px-8 py-2 rounded-md hover:bg-purple-600 hover:text-white transition duration-300 text-sm"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import { Link } from "react-router-dom";
import FormatePrice from "../Helpers/FormatePrice";

const Product = ({ id, title, thumbnail, price, category }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
      {/* Image */}
      <figure className="relative overflow-hidden group">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-52 object-contain mt-4 transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Category Badge */}
        <span className="absolute top-4 right-4 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 text-xs px-4 py-1 rounded-full uppercase">
          {category}
        </span>
      </figure>

      {/* Card Data */}
      <div className="px-6 pb-6">
        <div className="flex justify-between items-center my-4">
          <h3 className="text-gray-800 dark:text-white capitalize font-semibold text-lg truncate w-40">
            {title}
          </h3>
          <p className="text-purple-600 dark:text-purple-400 font-bold">
            <FormatePrice price={price} />
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to={`/singleproduct/${id}`}
            className="border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-8 py-2 rounded-md hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition duration-300 text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
