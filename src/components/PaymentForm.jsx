import { FaUser, FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const PaymentForm = ({ setShowForm, setCart }) => {

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative">
            {/* Close Button */}
            <button
            onClick={() => setShowForm(false)}
            className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-black"
            title="Close"
            >
            <MdClose />
            </button>

            {/* Heading */}
            <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
            <p className="text-sm text-gray-500">Complete your order safely and quickly</p>
            </div>

            {/* Form */}
            <form className="space-y-5">
            {/* Full Name */}
            <div className="flex items-center border rounded-lg px-3 py-2 gap-3">
                <FaUser className="text-gray-500" />
                <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"
                required
                />
            </div>

            {/* Bank / Transfer Method */}
            <div className="flex items-center border rounded-lg px-3 py-2 gap-3">
                <FaUniversity className="text-gray-500" />
                <input
                type="text"
                placeholder="Bank Name or Mobile Transfer"
                className="w-full outline-none"
                required
                />
            </div>

            {/* Account / Phone Number */}
            <div className="flex items-center border rounded-lg px-3 py-2 gap-3">
                <FaPhoneAlt className="text-gray-500" />
                <input
                type="text"
                placeholder="Account Number / Phone Number"
                className="w-full outline-none"
                required
                />
            </div>

            {/* Submit */}
            <button
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                onClick={() => {
                    setCart([]);
                    setShowForm(false);
                }}
            >
                Confirm & Pay
            </button>
            </form>

            {/* Secure Message */}
            <div className="mt-4 text-center text-xs text-gray-400">
            Your data is encrypted and securely processed.
            </div>
        </div>
        </div>
    );
};

export default PaymentForm;
