import { useContext, useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CategoryContext } from "./CategoryContext";
import { Link } from "react-router-dom";

const DropDown = ({ setSelectedCategory }) => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = useContext(CategoryContext)[0];
  const menuRef = useRef(null);

  const handleToggle = () => {
    if (!open) {
      setShowDropdown(true);
      setTimeout(() => setOpen(true), 10); // allow animation to trigger
    } else {
      setOpen(false);
      setTimeout(() => setShowDropdown(false), 200); // match animation duration
    }
  };

  const handleClick = (index) => {
    setSelectedCategory(index);
    handleToggle(); // Close with animation
  };

  useEffect(() => {
    const handler = (event) => {
      if (showDropdown && menuRef.current && !menuRef.current.contains(event.target)) {
        handleToggle();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showDropdown]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div className="flex items-center gap-1">
        <Link
          to="../shop"
          className="text-sm font-medium text-white hover:text-gray-700"
        >
          Products
        </Link>
        <button
          type="button"
          onClick={handleToggle}
          className="p-1 rounded-md hover:bg-gray-200 transition"
        >
          {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </button>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          className={`absolute left-1/2 -translate-x-1/4 mt-2 w-48 top-10 rounded-md shadow-xl bg-white ring-1 ring-gray-200 z-50 max-h-60 overflow-y-auto transform transition-all duration-200 ease-out origin-top ${
            open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <ul className="py-2 text-sm text-gray-700">
            {categories &&
              categories[0]?.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className="px-4 py-2 hover:bg-indigo-100 transition-all cursor-pointer"
                >
                  <Link to={`../shop#category-${index}`} className="block w-full">
                    {category}
                  </Link>
                </li>
              ))}
            {!categories && (
              <div className="p-5 w-50 h-10 text-gray-400 text-center text-black">Loading...</div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
