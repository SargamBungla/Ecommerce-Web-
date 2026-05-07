import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center gap-6 my-6">
      <button
        onClick={setDecrease}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition"
      >
        <FaMinus size={12} />
      </button>

      <span className="text-2xl font-semibold text-purple-600">{amount}</span>

      <button
        onClick={setIncrease}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition"
      >
        <FaPlus size={12} />
      </button>
    </div>
  );
};

export default CartAmountToggle;
