import NavBar from "../components/NavBar";
import { useContext } from "react";
import FavoritesContext from "../components/FavoriteContext";
import FavoriteCard from "../components/FavoriteCard";


const Favorites = () => {
  const [favorites] = useContext(FavoritesContext);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="h-[50vh] flex justify-center items-center text-gray-500 text-xl">
            <p>You haven't added any favorites yet!</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map(product => (
          <FavoriteCard key={product.id} product={product} />
        ))}
      </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
