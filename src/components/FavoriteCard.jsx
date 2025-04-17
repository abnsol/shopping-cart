import { FaCartPlus } from "react-icons/fa";
import CartContext from "../components/CartContext";
import { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import FavoriteContext from "./FavoriteContext";
import { FaTrashAlt } from "react-icons/fa";

const searchProductInArray = (product, array) => {
  return array.some((item) => item.id === product.id);
}

const FavoriteCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const [cart,setCart] = useContext(CartContext);
  const [favorites, setFavorites] = useContext(FavoriteContext);

  useEffect(() => {
    setInCart(searchProductInArray(product, cart));
  },[cart, product]);

  const handleCartClick = () => {
    if (inCart) {
      setInCart(false);
      setCart((prev) => prev.filter((item) => item.id !== product.id));
      return;
    }
    setCart((prev) => !searchProductInArray(product,prev) ? [...prev, product] : prev);
    setInCart(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-24 object-contain rounded-lg mb-3 bg-indigo-500"
      />

      <div className="w-full flex flex-col gap-1 text-xs text-gray-700">
        <div className="flex justify-between items-center font-semibold text-gray-800">
          <span className="truncate">{product.title}</span>
          <span className="text-indigo-600 font-bold">${product.price}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{product.brand}</span>
          <span className={`${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
          </span>
        </div>
      </div>

      <div className="mt-3 flex gap-3 justify-end items-center w-full p-2">
        {/* Add/Remove from Cart */}
        <button
          onClick={handleCartClick}
          className="text-xl text-indigo-600 hover:text-indigo-800 transition-colors"
          title={inCart ? "Remove from cart" : "Add to cart"}
        >
          {inCart ? <FaCartPlus /> : <MdAddShoppingCart />}
        </button>

        {/* Remove from Favorites */}
        <button
          onClick={() => setFavorites((prev) => prev.filter((item) => item.id !== product.id))}
          className="text-md text-indigo-700 hover:text-red-700 transition-colors"
          title="Remove from favorites"
        >
          <FaTrashAlt />
        </button>
    </div>

    </div>
  );
};

export default FavoriteCard;