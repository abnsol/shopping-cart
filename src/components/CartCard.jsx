import { useState } from "react";

const CartCard = ({ item, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        if (item.stock - quantity <= 0) return;
        onQuantityChange(item.price,1,item.id);
        setQuantity(prev => prev + 1);
    }

    const handleRemove = () => {
        onQuantityChange(item.price, quantity > 0 ? -1 : 0,item.id);
        setQuantity(prev => prev > 0 ? prev - 1 : 0);
    }

    return (
        <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
        <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded bg-indigo-500" />
        <div className="flex-1 space-y-2">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-500">Stock left: {item.stock}</p>
            <p className="text-gray-700 font-medium">Price: ${item.price}</p>
        </div>
        <div className="flex items-center gap-2">
            <button
            onClick={() => handleRemove()}
            className="w-5 h-5 bg-red-600 rounded-md text-white text-sm hover:bg-red-700"
            >
            −
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
            onClick={() => handleAdd()}
            className="w-5 h-5 bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-600"
            >
            +
            </button>
        </div>
        <p className="text-sm text-gray-600 mt-2 sm:mt-0">
            Subtotal: ${(item.price * quantity).toFixed(2)}
        </p>
        </div>
    );
};

export default CartCard;
