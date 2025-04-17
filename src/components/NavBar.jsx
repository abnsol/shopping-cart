import { Link } from "react-router-dom"
// import styles from './NavBar.module.css'
import DropDown from "./DropDown"
import { MdOutlineFavoriteBorder,  MdOutlineShoppingCart , MdOutlineAccountCircle, MdOutlineStorefront } from "react-icons/md";
import { useContext } from "react";
import { CategoryContext } from "./CategoryContext";
import  CartContext  from "./CartContext";
import  FavoriteContext from "./FavoriteContext";
import Loading from "./Loading";
import { AuthContext } from "./auth/AuthContext";
import LoginButton  from "./auth/LoginButton"

const NavBar = ({setSelectedCategory}) => {
    const categories = useContext(CategoryContext)[0][1];
    const [cart,setCart] = useContext(CartContext);
    const [favorites, setFavorites] = useContext(FavoriteContext);
    const { authenticated } = useContext(AuthContext);
    // console.log("authenticated",authenticated)
    // console.log("categories",categories.length)

    return (
        <div className='py-4 px-5 bg-indigo-600'>
          <ul className="flex justify-between items-center">
            <div>
              <li className="text-[22px] text-white">
                <Link to='../' className="flex gap-2 items-center">
                  <MdOutlineStorefront /> ShopEase
                </Link>
              </li>
            </div>
            <div className='flex justify-between items-center text-white space-x-30 pr-4'>
              <div>
                {categories ? (
                  <li><DropDown setSelectedCategory={setSelectedCategory} /></li>
                ) : (
                  <li className="text-sm"><Loading /></li>
                )}
              </div>
    
              <div className="flex justify-between items-center text-white w-[150px] gap-5">
                <li className="text-[22px] relative">
                  <Link to='../favorites'>
                    <MdOutlineFavoriteBorder />
                    {favorites.length > 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-3 h-3 flex items-center justify-center">
                        {favorites.length}
                      </span>
                    )}
                  </Link>
                </li>
    
                <li className="text-[22px] relative">
                  <Link to='../cart'>
                    <MdOutlineShoppingCart />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-3 h-3 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                </li>
    
                {
                  authenticated ? (
                  <li className="text-[22px]">
                    <Link to='../account'><MdOutlineAccountCircle /></Link>
                  </li>
                  ) : (
                    <li className="text-[16px]">
                      <LoginButton />
                    </li>
                  )
                }
              </div>
            </div>
          </ul>
        </div>
      );
    };

export default NavBar