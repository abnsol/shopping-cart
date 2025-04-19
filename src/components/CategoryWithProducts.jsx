import { useState, useEffect } from "react";
import Product from "./Product";
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";

const CategoryWithProducts = ({ title, id, products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
      setStartIndex(0); // Reset to first item when resizing
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(products.length - visibleCount, prev + visibleCount));
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  // Calculate responsive width for each product
  const getProductWidth = () => {
    if (visibleCount === 1) return 'w-full max-w-[300px]'; // Full width on mobile
    if (visibleCount === 2) return 'w-1/2 max-w-[300px]'; // Half width on tablet
    return 'w-1/3 max-w-[300px]'; // Third width on desktop
  };

  return (
    <section id={id} className="w-full bg-gradient-to-br from-indigo-100 to-white">
      <h2 className="text-3xl text-left font-extrabold p-6 text-gray-600">
        {title}
      </h2>

      <div className="relative group py-5 bg-gray-100 rounded-[10px] overflow-hidden">
        {/* Prev Button */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300"
          >
            <GrPrevious className="text-2xl text-gray-700" />
          </button>
        )}

        {/* Product Container */}
        <div className="flex justify-center overflow-x-hidden">
          <div className={`flex ${visibleCount === 1 ? 'w-full justify-center' : 'w-auto'} gap-4 px-4`}>
            {visibleProducts.map((product, i) => (
              <div 
                key={i} 
                className={`${getProductWidth()} flex-shrink-0 transition-all duration-300`}
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        {(startIndex + visibleCount) < products.length && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-lg hover:bg-indigo-50 transition-all duration-300"
          >
            <MdNavigateNext className="text-3xl text-gray-700" />
          </button>
        )}
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