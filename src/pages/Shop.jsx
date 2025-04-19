import { useContext, useEffect, useState } from "react";
import { SelectedProductContext } from "../components/SelectedProductContext";
import { useLocation } from "react-router-dom";
import { CategoryContext } from "../components/CategoryContext";
import Product from "../components/Product";
import CategoryWithProducts from "../components/CategoryWithProducts";
import FavoritesContext from "../components/FavoriteContext";
import CartContext from "../components/CartContext";
import { Link } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";

const Shop = () => {
  const location = useLocation();
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [categoriesError, setCategoriesError] = useState(false);
  const categoryContext = useContext(CategoryContext);
  const categoryWithProducts = categoryContext[0][1];
  const categoryList = categoryContext[0][0];

  // Track loading and error states
  useEffect(() => {
    if (categoryContext[1]) { // Assuming categoryContext[1] is loading state
      setCategoriesLoaded(false);
      setCategoriesError(false);
    } else if (categoryContext[2]) { // Assuming categoryContext[2] is error state
      setCategoriesError(true);
      setCategoriesLoaded(true);
    } else {
      setCategoriesLoaded(true);
      setCategoriesError(false);
    }
  }, [categoryContext]);

  // Smooth scrolling to category
  useEffect(() => {
    if (categoriesLoaded && !categoriesError && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // Small delay to ensure everything is rendered
      }
    }
  }, [location, categoriesLoaded, categoriesError]);

  return (
    <div className="shop-page bg-gradient-to-br from-indigo-100 to-white min-h-screen">
      {/* Hero Section */}
      <section className="rounded-lg min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-4xl font-bold text-indigo-600 mb-4">
          Explore Our Products
        </h1>
        <p className="text-lg md:text-xl text-indigo-400 max-w-xl mb-6">
          Quality, style, and tradition — all in one place.
        </p>
        <Link 
          to="../shop#category-0" 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-all font-semibold"
        >
          Start Shopping
        </Link>
      </section>

      {/* Content Section */}
      {!categoriesLoaded && !categoriesError ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="text-center">
            <ImSpinner8 className="animate-spin text-indigo-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-indigo-500">
              Loading Products...
            </h2>
            <p className="text-gray-500 mt-2">Please wait a moment</p>
          </div>
        </div>
      ) : categoriesError ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500">
              Failed to Load Products
            </h2>
            <p className="text-gray-500 mt-2">Please try again later</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        categoryWithProducts?.map((category, i) => (
          <CategoryWithProducts
            key={i}
            title={categoryList[i]}
            id={`category-${i}`}
            products={category.products}
          />
        )) || (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-indigo-500">
                Loading Products...
              </h2>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Shop;