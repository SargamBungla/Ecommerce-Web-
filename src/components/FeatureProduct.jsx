import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // ✅ RTK
import { fetchProducts } from "../store/productSlice"; // ✅ RTK
import { setProducts } from "../store/filterSlice"; // ✅ RTK
import Product from "./Product";

const FeatureProduct = () => {
  const dispatch = useDispatch();

  // ✅ Context ki jagah useSelector
  const { isLoading, featureProducts, products } = useSelector(
    (state) => state.products,
  );

  // ✅ API call — pehle productContext mein tha
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // ✅ Products aane ke baad filterSlice mein bhi set karo
  useEffect(() => {
    if (products.length > 0) {
      dispatch(setProducts(products));
    }
  }, [products]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <h2 className="text-2xl font-semibold text-purple-600">Loading...</h2>
      </div>
    );
  }

  return (
    <section className="py-36 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-center text-purple-500 dark:text-purple-400 font-medium mb-2">
          Check Now!
        </p>
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {featureProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
