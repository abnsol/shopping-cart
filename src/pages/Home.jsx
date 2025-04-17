import { Link } from "react-router-dom";
import { IoIosFlash } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";

const Home = () => {
    const bestSellers = [
        {
          id: 78,
          title: "Apple MacBook Pro 14 Inch Space Grey",
          image: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
          price: 1999.99
        },
        {
          id: 79,
          title: "Asus Zenbook Pro Dual Screen Laptop",
          image: "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
          price: 1799.99
        },
        {
            id: 122,
            title: "iPhone 6",
            image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
            price: 299.99
        },
      ];   

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-indigo-600 text-white py-20 px-6 text-center min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">ShopEase</h1>
                <p className="text-xl mb-8">Your one-stop destination for effortless shopping!</p>
                <Link to="/shop#category-0"><button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-100 transition">Shop Now</button>
                </Link>
            </section>

            {/* Best Sellers */}
            <section className="px-20 py-10 bg-white">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Best Sellers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {bestSellers.map(({ id, title, price, image }) => (
                    <div
                        key={id}
                        className="rounded-lg overflow-hidden shadow-lg transform hover:scale-100 transition-all duration-300"
                    >
                        <img
                        src={image}
                        alt={title}
                        className="w-full h-40 object-contain bg-gray-200"
                        />
                        <div className="p-6 bg-white">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                            <p className="text-lg text-indigo-600 font-bold">${price.toFixed(2)}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </section>


        {/* Promo Banner */}
        <section className="bg-indigo-600 text-white text-center py-12 px-6 my-10 rounded-lg mx-6">
            <h2 className="text-3xl font-bold mb-4">Free Shipping on Orders Over $50!</h2>
            <p>Limited time offer. Don’t miss out!</p>
        </section>

        {/* Why ShopEase */}
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Experience ShopEase</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="flex justify-center mb-2">< IoIosFlash className="text-4xl"/></div>
                <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
                <p>Get your products delivered quickly and reliably.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="flex justify-center mb-2"><  FaShieldAlt className="text-4xl"/></div>
                <h3 className="font-semibold text-xl mb-2">Secure Payments</h3>
                <p>Your transactions are protected with top-level security.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
            <div className="flex justify-center mb-2"><  LuMessageCircleMore className="text-4xl"/></div>
                <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
                <p>Our team is here to help anytime, anywhere.</p>
            </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Emily", "James", "Sophia"].map((name, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6 text-center">
                <p className="italic mb-4">"ShopEase has made shopping so easy and fun. Highly recommended!"</p>
                <h3 className="font-bold">{name}</h3>
                <span className="text-sm text-gray-500">Customer</span>
                </div>
            ))}
            </div>
        </section>
        </div>
    );
};

export default Home;
