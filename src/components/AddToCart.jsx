// import React from "react";
// import { useState } from "react";

// const AddToCart = ({ product }) => {
//   const { stock } = product;
//   const [qty, setQty] = useState(1);
//   const { addToCart } = useCartContext();
//   const navigate = useNavigate();

//   const setDecrease = () => {
//     qty > 1 ? setQty(qty - 1) : setQty(1);
//   };

//   const setIncrease = () => {
//     qty < stock ? setQty(qty + 1) : setQty(stock);
//   };

//   const handleAddToCart = () => {
//     addToCart(product, qty); // ✅ cart mein add karo
//     navigate("/cart"); // ✅ cart page pe jao
//   };

//   return (
//     <div>
//       {/* + - Toggle */}
//       <div className="flex items-center gap-6 my-6">
//         <button
//           onClick={setDecrease}
//           className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition"
//         >
//           <FaMinus size={12} />
//         </button>
//         <span className="text-2xl font-semibold text-purple-600">{qty}</span>
//         <button
//           onClick={setIncrease}
//           className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition"
//         >
//           <FaPlus size={12} />
//         </button>
//       </div>

//       {/* Add to Cart Button */}
//       <button
//         onClick={handleAddToCart}
//         className="flex items-center justify-center gap-2 bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition text-lg font-semibold w-full"
//       >
//         <FaShoppingCart />
//         ADD TO CART
//       </button>
//     </div>
//   );
// };

// export default AddToCart;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa"; // ✅
import { useCartContext } from "../context/cartContext"; // ✅

const AddToCart = ({ product }) => {
  const { stock } = product;
  const [qty, setQty] = useState(1); // ✅ 1 se shuru
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  const setDecrease = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };

  const setIncrease = () => {
    qty < stock ? setQty(qty + 1) : setQty(stock);
  };

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate("/cart");
  };

  return (
    <div>
      {/* + - Toggle */}
      <div className="flex items-center gap-6 my-6">
        <button
          onClick={setDecrease}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition"
        >
          <FaMinus size={12} />
        </button>
        <span className="text-2xl font-semibold text-purple-600">{qty}</span>
        <button
          onClick={setIncrease}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition"
        >
          <FaPlus size={12} />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center gap-2 bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition text-lg font-semibold w-full"
      >
        <FaShoppingCart />
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
  