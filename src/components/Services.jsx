// export default Services;
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const iconClass =
  "w-16 h-16 p-4 rounded-full bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400";
const cardClass =
  "flex flex-col justify-center items-center h-48 bg-white dark:bg-gray-800 rounded-3xl shadow-sm text-center px-4 transition-colors duration-300";

const Services = () => {
  return (
    <section className="py-16 md:py-36 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* ✅ Mobile: 1 col, Desktop: 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className={cardClass}>
            <TbTruckDelivery className={iconClass} />
            <h3 className="mt-5 text-lg md:text-2xl font-semibold text-gray-800 dark:text-white">
              Super Fast and Free Delivery
            </h3>
          </div>

          {/* Card 2 — Two Stacked */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-1 justify-center items-center bg-white dark:bg-gray-800 rounded-3xl shadow-sm px-4 py-6 transition-colors duration-300">
              <div className="flex flex-row justify-center items-center gap-4">
                <MdSecurity className={iconClass} />
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white">
                  Non-contact Shipping
                </h3>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center bg-white dark:bg-gray-800 rounded-3xl shadow-sm px-4 py-6 transition-colors duration-300">
              <div className="flex flex-row justify-center items-center gap-4">
                <GiReceiveMoney className={iconClass} />
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white">
                  Money-back Guaranteed
                </h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={cardClass}>
            <RiSecurePaymentLine className={iconClass} />
            <h3 className="mt-5 text-lg md:text-2xl font-semibold text-gray-800 dark:text-white">
              Super Secure Payment System
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
