import { useContext, useEffect } from "react";
import { SelectedProductContext } from "../components/SelectedProductContext";
import { useLocation } from "react-router-dom";
import { CategoryContext } from "../components/CategoryContext";
import Product from "../components/Product";
import CategoryWithProducts from "../components/CategoryWithProducts";
import FavoritesContext from "../components/FavoriteContext";
import CartContext from "../components/CartContext";
import {Link} from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  const categoryWithProducts = useContext(CategoryContext)[0][1];
  const categoryList = useContext(CategoryContext)[0][0];

  useEffect(() => {
    if (categoryWithProducts && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, categoryWithProducts]);

  return (
    <div className="shop-page bg-gradient-to-br from-indigo-100 to-white min-h-screen ">
        <section className="rounded-lg min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl text- md:text-4xl font-bold text-indigo-600 mb-4">Explore Our Products</h1>
          <p className="text-lg md:text-xl text-indigo-400 max-w-xl mb-6">
            Quality, style, and tradition — all in one place.
          </p> 
          <Link to="../shop#category-0" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-200 transition scroll-smooth font-semibold">
            Start Shopping
          </Link>
        </section>

        {categoryWithProducts ? (
            categoryWithProducts.map((category, i) => (
            <CategoryWithProducts
                key={i}
                title={categoryList[i]}
                id={`category-${i}`}
                products={category.products}
            />
            ))
        ) : (
            <div className="flex justify-center items-center h-[50vh]">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-indigo-500 animate-pulse">
                Loading Produccts...
                </h2>
                <p className="text-gray-500 mt-2">Please wait a moment </p>
            </div>
            </div>
        )}
        </div>
  );
};

export default Shop;
