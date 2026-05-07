// const Trusted = () => {
//   return (
//     <section className="py-10 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4 pt-48">
//         <h3 className="text-center capitalize text-gray-800 text-2xl font-bold">
//           Trusted By 1000+ Companies
//         </h3>

//         <div className="mt-12 flex justify-between items-center flex-row flex-wrap md:grid-cols-2 gap-6">
//           <div>
//             <img
//               className="min-w-20 h-20 object-contain"
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div>
//             <img
//               className="min-w-20 h-20 object-contain"
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div>
//             <img
//               className="min-w-20 h-20 object-contain"
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div>
//             <img
//               className="min-w-20 h-20 object-contain"
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
//               alt="trusted-brands"
//             />
//           </div>
//           <div>
//             <img
//               className="min-w-20 h-20 object-contain"
//               src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
//               alt="trusted-brands"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Trusted;

const Trusted = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 pt-48">
        <h3 className="text-center capitalize text-gray-800 dark:text-white text-2xl font-bold">
          Trusted By 1000+ Companies
        </h3>

        <div className="mt-12 flex justify-between items-center flex-row flex-wrap md:grid-cols-2 gap-6">
          {[
            "image2.png",
            "image3.png",
            "image4.png",
            "image6.png",
            "image8.png",
          ].map((img, index) => (
            <div
              key={index}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-colors duration-300"
            >
              <img
                className="min-w-20 h-20 object-contain dark:opacity-80 dark:grayscale dark:invert"
                src={`https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/${img}`}
                alt="trusted-brands"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
