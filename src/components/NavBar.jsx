import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { 
  MdOutlineFavoriteBorder,  
  MdOutlineShoppingCart, 
  MdOutlineAccountCircle, 
  MdOutlineStorefront,
  MdMenu,
  MdClose
} from "react-icons/md";
import { useContext, useState } from "react";
import { CategoryContext } from "./CategoryContext";
import CartContext from "./CartContext";
import FavoriteContext from "./FavoriteContext";
import Loading from "./Loading";
import { AuthContext } from "./auth/AuthContext";
import LoginButton from "./auth/LoginButton";

const NavBar = ({ setSelectedCategory }) => {
  const categories = useContext(CategoryContext)[0][1];
  const [cart] = useContext(CartContext);
  const [favorites] = useContext(FavoriteContext);
  const { authenticated } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-4 px-5 bg-indigo-600 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-[22px] text-white">
          <Link to="../" className="flex gap-2 items-center">
            <MdOutlineStorefront /> 
            <span className="hidden sm:inline">ShopEase</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-white">
          {categories ? (
            <div>
              <DropDown setSelectedCategory={setSelectedCategory} />
            </div>
          ) : (
            <div className="text-sm">
              <Loading />
            </div>
          )}

          <div className="flex items-center gap-5 lg:gap-6">
            {/* Favorites */}
            <div className="text-[22px] relative">
              <Link to="../favorites" className="hover:text-indigo-200 transition-colors">
                <MdOutlineFavoriteBorder />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Cart */}
            <div className="text-[22px] relative">
              <Link to="../cart" className="hover:text-indigo-200 transition-colors">
                <MdOutlineShoppingCart />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Account/Login */}
            {authenticated ? (
              <div className="text-[22px] hover:text-indigo-200 transition-colors">
                <Link to="../account">
                  <MdOutlineAccountCircle />
                </Link>
              </div>
            ) : (
              <div className="text-[16px]">
                <LoginButton />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 mt-4 p-4 rounded-lg animate-fadeIn">
          <div className="flex flex-col gap-4">
            {categories ? (
              <div className="mb-3">
                <DropDown 
                  setSelectedCategory={setSelectedCategory} 
                  mobileView={true}
                  onSelect={() => setMobileMenuOpen(false)}
                />
              </div>
            ) : (
              <div className="text-sm text-white">
                <Loading />
              </div>
            )}

            <div className="flex justify-around items-center text-white border-t border-indigo-500 pt-4">
              <Link 
                to="../favorites" 
                className="flex flex-col items-center hover:text-indigo-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[22px] relative">
                  <MdOutlineFavoriteBorder />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                </span>
                <span className="text-xs mt-1">Favorites</span>
              </Link>

              <Link 
                to="../cart" 
                className="flex flex-col items-center hover:text-indigo-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[22px] relative">
                  <MdOutlineShoppingCart />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </span>
                <span className="text-xs mt-1">Cart</span>
              </Link>

              {authenticated ? (
                <Link 
                  to="../account" 
                  className="flex flex-col items-center hover:text-indigo-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[22px]">
                    <MdOutlineAccountCircle />
                  </span>
                  <span className="text-xs mt-1">Account</span>
                </Link>
              ) : (
                <div 
                  className="flex flex-col items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LoginButton mobileView />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;