const TotalPrice = ({ setShowForm, totalPrice, totalItems }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-fit sticky top-4">
      <h3 className="text-xl font-semibold mb-4">Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className="flex justify-between mb-4 font-semibold">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
};

export default TotalPrice;
