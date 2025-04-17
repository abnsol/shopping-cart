import { useState , useContext, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";
import FavoritesContext from "./FavoriteContext";
import CartContext from "./CartContext";


const checkProductInArray = (product, array) => {
  return array.some((item) => item.id === product.id);
}

const Product = ({ product }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [cart, setCart] = useContext(CartContext);

  const [inFavorite, setInFav] = useState(false);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInFav(checkProductInArray(product, favorites));
    setInCart(checkProductInArray(product, cart));

    return () => {
      setInFav(false);
      setInCart(false);
    }
  },[product, favorites, cart]);

  const handleFavoriteClick = () => {
    if (inFavorite) {
      setInFav(false);
      setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
      setInFav(true);
    }
  };

  const handleCartClick = () => {
    if (inCart) {
      setInCart(false);
      setCart((prev) => prev.filter((item) => item.id !== product.id));
      return;
    }
    setCart((prev) => [...prev, product]);
    setInCart(true);
  };

  return (
    <div className="pt-5 w-full max-w-[280px] bg-indigo-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[300px] h-[250px] object-contain hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4 flex flex-col justify-between h-[230px] bg-white">
        <div>
          <h3 className="text-sm text-gray-400">{product.brand}</h3>
          <h2 className="text-md font-semibold text-gray-800 truncate">{product.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
          <p className="text-indigo-600 font-bold text-lg mt-2">${product.price}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleCartClick}
            className="text-xl text-indigo-600 hover:text-indigo-800 transition-colors"
            title={inCart ? "Remove from cart" : "Add to cart"}
          >
            {inCart ? <FaCartPlus /> : <MdAddShoppingCart />}
          </button>

          <button
            onClick={handleFavoriteClick}
            className="text-xl text-red-500 hover:scale-110 transition-transform"
            title={inFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {inFavorite ? <MdFavorite /> : <MdFavoriteBorder className="text-gray-500" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
