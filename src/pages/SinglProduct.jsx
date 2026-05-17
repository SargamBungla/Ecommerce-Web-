import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../store/productSlice";
import { addToCart } from "../store/cartSlice";
import FormatePrice from "../Helpers/FormatePrice";
import { useNavigate } from "react-router-dom";

export const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState("");

  const { singleProduct, isSingleLoading } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  useEffect(() => {
    if (singleProduct.thumbnail) {
      setMainImage(singleProduct.thumbnail);
    }
  }, [singleProduct]);

  if (isSingleLoading || !singleProduct || !singleProduct.id) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-purple-600 text-2xl">Loading...</p>
      </div>
    );
  }

  const {
    title,
    thumbnail,
    price,
    description,
    rating,
    stock,
    brand,
    category,
    discountPercentage,
    availabilityStatus,
    images,
  } = singleProduct;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...singleProduct, qty }));
    navigate("/cart");
  };

  return (
    <section className="py-10 md:py-16 px-4 max-w-6xl mx-auto bg-white dark:bg-gray-900 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-gray-500 dark:text-gray-400 mb-6 capitalize text-sm">
        Home / {category} / {title}
      </p>

      {/* ✅ Mobile: 1 col, Desktop: 2 col */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* LEFT — Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          {images && images.length > 1 && (
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={title}
                  onClick={() => setMainImage(img)}
                  className={`w-14 h-14 md:w-20 md:h-20 object-contain rounded-lg border-2 cursor-pointer
                    ${
                      mainImage === img
                        ? "border-purple-500"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                />
              ))}
            </div>
          )}

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImage || thumbnail}
              alt={title}
              className="w-full h-64 md:h-96 object-contain rounded-2xl bg-gray-50 dark:bg-gray-800"
            />
          </div>
        </div>

        {/* RIGHT — Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {title}
          </h1>

          <p className="text-yellow-500 mb-2">
            {"★".repeat(Math.round(rating))} ({rating})
          </p>

          <p className="text-gray-400 line-through text-sm">
            MRP: <FormatePrice price={price} />
          </p>
          <p className="text-purple-600 font-bold text-xl md:text-2xl mb-4">
            Deal:{" "}
            <FormatePrice
              price={(price * (1 - discountPercentage / 100)).toFixed(2)}
            />
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
            {description}
          </p>

          {/* ✅ Mobile: column, Desktop: row */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-6 text-sm">
            <span className="text-gray-600 dark:text-gray-300">
              Status: <b className="text-green-600">{availabilityStatus}</b>
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              Brand: <b>{brand}</b>
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              Stock: <b>{stock}</b>
            </span>
          </div>

          {/* Qty Toggle */}
          <div className="flex items-center gap-6 my-6">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition"
            >
              -
            </button>
            <span className="text-2xl font-semibold text-purple-600">
              {qty}
            </span>
            <button
              onClick={() => setQty(qty < stock ? qty + 1 : stock)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition text-base md:text-lg font-semibold w-full"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};
