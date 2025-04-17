import CartContext  from "./CartContext";
import FavoriteContext from "./FavoriteContext";

const FavCarProvider = ({ children,values }) => {
    return (
        <FavoriteContext.Provider value={values.fav}>
            <CartContext.Provider value={values.cart}>
                {children}
            </CartContext.Provider>
        </FavoriteContext.Provider>
    )
}

export default FavCarProvider;