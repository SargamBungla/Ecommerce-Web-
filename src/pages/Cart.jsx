import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQty, clearCart } from "../store/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormatePrice from "../Helpers/FormatePrice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0,
  );
  const tax = Math.round(totalPrice * 0.08);
  const total = totalPrice + tax;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-4 bg-white dark:bg-gray-900 px-4">
        <p className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-white">
          Cart is Empty!
        </p>
        <Link
          to="/products"
          className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 md:py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
          Your Cart
        </h1>

        {/* ✅ Mobile: column, Desktop: grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* LEFT — Cart Items */}
          <div className="lg:col-span-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-2 md:gap-4 border-b border-gray-200 dark:border-gray-700 py-4 md:py-6 bg-white dark:bg-gray-800 rounded-lg px-3 md:px-4 mb-4"
              >
                {/* Image */}
                <div className="col-span-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-16 md:h-24 object-contain rounded-lg bg-gray-50 dark:bg-gray-700"
                  />
                </div>

                {/* Details */}
                <div className="col-span-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase hidden sm:block">
                      {item.category}
                    </p>
                    <h3 className="font-semibold text-gray-900 dark:text-white mt-1 text-xs md:text-base line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 hidden sm:block">
                      Brand: {item.brand}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="self-start text-xs text-red-500 hover:text-red-700 uppercase font-semibold mt-2"
                  >
                    Remove
                  </button>
                </div>

                {/* Qty Toggle */}
                <div className="col-span-2 flex items-center justify-center">
                  <div className="flex flex-col md:flex-row items-center border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQty({
                            id: item.id,
                            qty: Math.max(1, item.qty - 1),
                          }),
                        )
                      }
                      className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaMinus size={8} />
                    </button>
                    <span className="w-7 md:w-9 text-center font-semibold dark:text-white text-sm">
                      {item.qty}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                      }
                      className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FaPlus size={8} />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 flex items-center justify-end">
                  <p className="font-semibold text-gray-900 dark:text-white text-xs md:text-base">
                    <FormatePrice
                      price={Number(item.price) * Number(item.qty)}
                    />
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 text-sm text-red-500 hover:text-red-700 uppercase font-semibold"
            >
              Clear Cart
            </button>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm lg:sticky lg:top-8">
              <div className="border-b dark:border-gray-700 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Order Summary
                </p>
              </div>
              <div className="px-6 py-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="dark:text-white">
                    <FormatePrice price={totalPrice} />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Shipping
                  </span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Tax (8%)
                  </span>
                  <span className="dark:text-white">
                    <FormatePrice price={tax} />
                  </span>
                </div>
              </div>
              <div className="border-t dark:border-gray-700 px-6 py-4">
                <div className="flex justify-between font-bold text-lg">
                  <span className="dark:text-white">Total</span>
                  <span className="dark:text-white">
                    <FormatePrice price={total} />
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-gray-900 dark:bg-purple-600 text-white py-4 rounded-md hover:bg-gray-800 dark:hover:bg-purple-700 transition font-semibold uppercase tracking-widest text-sm">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
