import NavBar from "../components/NavBar";
import { useContext } from "react";
import FavoritesContext from "../components/FavoriteContext";
import FavoriteCard from "../components/FavoriteCard";
// import { FiHeart } from "react-icons/fi";

const Favorites = () => {
  const [favorites] = useContext(FavoritesContext);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            {/* <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
              <FiHeart className="text-pink-500 text-xl" />
            </div> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Favorites
          </h1>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            {favorites.length > 0 
              ? "All the products you've loved in one place"
              : "Your favorite items will appear here"}
          </p> */}
        </div>

        {/* Favorites Grid */}
        {favorites.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
              <FiHeart className="text-pink-400 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Start exploring our collection and add products to your favorites by clicking the heart icon.
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Browse Products
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map(product => (
              <FavoriteCard 
                key={product.id} 
                product={product} 
                className="transform hover:-translate-y-1 transition-transform duration-200"
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Favorites;