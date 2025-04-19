import { useState, useEffect } from "react";
import Product from "./Product";
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";

const CategoryWithProducts = ({ title, id, products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Adjust these breakpoints as needed
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
      
      // Reset startIndex when visibleCount changes to avoid empty spaces
      setStartIndex(0);
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(products.length - visibleCount, prev + visibleCount));
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section id={id} className="w-full bg-gradient-to-br from-indigo-100 to-white">
      <h2 className="text-3xl text-left font-extrabold p-6 text-gray-600">
        {title}
      </h2>

      <div className="relative group py-5 bg-gray-100 rounded-[10px]">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 ${
            startIndex === 0 ? "opacity-0 group-hover:opacity-40 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={startIndex === 0}
        >
          <GrPrevious className="text-2xl text-gray-700" />
        </button>

        {/* Product Container */}
        <div className="flex justify-center">
          <div className={`flex ${visibleCount === 1 ? 'space-x-0' : visibleCount === 2 ? 'space-x-4' : 'space-x-6'} transition-transform duration-300`}>
            {visibleProducts.map((product, i) => (
              <div key={i} className={`${visibleCount === 1 ? 'w-full' : visibleCount === 2 ? 'w-1/2' : 'w-1/3'} max-w-[300px] flex-shrink-0 px-2`}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-indigo-50 transition-all duration-300 ${
            startIndex + visibleCount >= products.length
              ? "opacity-0 group-hover:opacity-40 cursor-not-allowed"
              : "opacity-100"
          }`}
          disabled={startIndex + visibleCount >= products.length}
        >
          <MdNavigateNext className="text-3xl text-gray-700" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 p-5 bg-gray-100 rounded-lg">
        {Array.from({ length: Math.ceil(products.length / visibleCount) }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === Math.floor(startIndex / visibleCount)
                ? "bg-indigo-600 scale-110"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CategoryWithProducts;