import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-white text-indigo-600 px-3 py-1 rounded-lg">
                ShopEase
              </span>
            </Link>
            <p className="text-indigo-100">
              Your premium destination for quality products and exceptional shopping experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-indigo-400 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indigo-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-indigo-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-indigo-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-indigo-100 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-indigo-400 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indigo-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-100 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-100 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/" className="text-indigo-100 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-indigo-400 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="text-indigo-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-indigo-100">support@shopease.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-indigo-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-indigo-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="text-indigo-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-indigo-100">123 Commerce St, Business City, BC 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-400 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-indigo-200 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-indigo-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-indigo-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-indigo-200 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;