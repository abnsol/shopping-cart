import { useContext, useEffect, useState } from "react";
import CartContext from "../components/CartContext";
import CartCard from "../components/CartCard";
import PaymentForm from "../components/PaymentForm";
import TotalPrice from "../components/TotalPrice";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const intialPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const [showForm, setShowForm] = useState(false);
    const [totalPrice, setTotalPrice] = useState(intialPrice);
    const [totalItems, setTotalItems] = useState(cart.length)

    // const [items,setItems] = useState({})

    // const change = (id,delta) => {
    //     if (items[String(id)] > 0)
    //         if (delta == 1) {
    //             setItems(prev => ({...prev, [id]: prev[id] + 1}));      
    //         }else if (delta == -1) {
    //             setItems(prev => ({...prev, [id]: prev[id] - 1}));
    //         }
    // }

    const handleQuantityChange = (price,delta) => {
        setTotalPrice(prev => delta > 0 ? prev + price : delta < 0 ? prev - price : prev);
        setTotalItems(prev => delta > 0 ? prev + 1 : delta < 0 ? prev - 1 : prev);
        // change(id,delta)
    };

    return (
        <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">Your Cart</h1>
            
            {cart.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map(item => (
                            <CartCard key={item.id} item={item} onQuantityChange={handleQuantityChange} setCart={setCart}/>
                        )
                        )}
                    </div>
                    <TotalPrice totalPrice={totalPrice} totalItems={totalItems} setShowForm={setShowForm} />
                </div>):(<div className="h-[50vh] flex items-center justify-center text-gray-500 text-xl"><p>No items in the cart</p></div>)
            }


        {/* Payment Form Modal */}
        {showForm && <PaymentForm setShowForm={setShowForm} setCart={setCart}/>}
        </div>
    );
};

export default Cart;
