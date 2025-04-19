import { useState, useContext, useEffect, useRef } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";
import FavoritesContext from "./FavoriteContext";
import CartContext from "./CartContext";
import { ImSpinner8 } from "react-icons/im";

const checkProductInArray = (product, array) => {
  return array.some((item) => item.id === product.id);
};

const Product = ({ product, isActive }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const [cart, setCart] = useContext(CartContext);
  const [inFavorite, setInFav] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  // Check if product is in favorites/cart
  useEffect(() => {
    setInFav(checkProductInArray(product, favorites));
    setInCart(checkProductInArray(product, cart));
  }, [product, favorites, cart]);

  // Handle image loading and cleanup
  useEffect(() => {
    if (!isActive) {
      setIsLoading(true);
      return;
    }

    const img = new Image();
    let mounted = true;

    const handleLoad = () => {
      if (mounted) {
        setIsLoading(false);
      }
    };

    img.src = product.images[0];
    img.onload = handleLoad;
    img.onerror = handleLoad; // Fallback if image fails to load

    return () => {
      mounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [product.images, isActive]);

  const handleFavoriteClick = () => {
    if (inFavorite) {
      setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const handleCartClick = () => {
    if (inCart) {
      setCart((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setCart((prev) => [...prev, product]);
    }
  };

  return (
    <div className="pt-5 w-full max-w-[280px] bg-indigo-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container with Loading State */}
      <div className="w-[300px] h-[250px] flex items-center justify-center bg-indigo-400 relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImSpinner8 className="animate-spin text-indigo-600 text-2xl" />
          </div>
        ) : null}
        
        <img
          ref={imgRef}
          src={product.images[0]}
          alt={product.title}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>

      {/* Product Info (always visible) */}
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