const HeroSection = ({ mydata }) => {
  const { name } = mydata;
  return (
    <section className="px-10 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p className="text-purple-500 font-medium mb-2">WELCOME TO</p>

          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {name}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minima alias impedit nobis ex ratione officia autem.
          </p>

          <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
            SHOP NOW
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Purple Background Box */}
            <div className="absolute top-[-20px] right-[-20px] w-full h-full bg-purple-300 rounded-md"></div>

            {/* Image */}
            <img
              src="/images/hero.jpg"
              alt="hero"
              className="relative w-[400px] h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
