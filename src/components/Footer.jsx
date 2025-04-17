import {Link} from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-indigo-500 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">ShopEase</h2>
            <p className="text-sm text-white">
              Your one-stop shop for the latest products.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm flex gap-15 text-white">
              <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
              <li><Link to="/shop" className="hover:text-gray-800">Products</Link></li>
              <li><Link to="/cart" className="hover:text-gray-800">Cart</Link></li>
              <li><Link to="/favorites" className="hover:text-gray-800">Favorite</Link></li>
            </ul>
          </div>
  
          
        </div>
  
        {/* Bottom Text */}
        <div className="text-center text-xs text-white mt-10">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  