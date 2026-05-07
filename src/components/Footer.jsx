export const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 bg-[#1a1a2e] text-gray-400 px-10 py-10 mt-auto">
      <div className="flex justify-between gap-10 flex-wrap">
        {/* Brand */}
        <div className="max-w-[220px]">
          <img src="/images/logo.png" className="h-5 w-auto" />
          <p className="text-[13px] mt-2.5 leading-relaxed">
            Welcome to Thapa EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
        </div>

        {/* Shopping Links */}
        <div>
          <h4 className="text-white mb-4 text-[14px] tracking-widest">
            SHOPPING
          </h4>
          <ul className="flex flex-col gap-2.5 text-[13px]">
            <li>Computer Store</li>
            <li>Laptop Store</li>
            <li>Accessories</li>
            <li>Sales & Discount</li>
          </ul>
        </div>

        {/* Experience Links */}
        <div>
          <h4 className="text-white mb-4 text-[14px] tracking-widest">
            Experience
          </h4>
          <ul className="flex flex-col gap-2.5 text-[13px]">
            <li>Contact Us</li>
            <li>Payment Method</li>
            <li>Delivery</li>
            <li>Return and Exchange</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white mb-4 text-[14px] tracking-widest">
            NEWSLETTER
          </h4>
          <p className="text-[13px] mb-3 leading-relaxed">
            Be the first to know about new arrivals, sales & promos!
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-0 border-b border-gray-400 text-white py-2 w-[200px] outline-none text-[13px] placeholder-gray-400"
          />
        </div>
      </div>

      {/* Bottom */}
      <p className="text-center mt-8 text-[12px] text-gray-600">
        Design and Code by Thapa Technical
      </p>
    </footer>
  );
};
