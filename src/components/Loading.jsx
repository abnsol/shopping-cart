import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Loading = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen((prev) => !prev);
    };
    
    return (
      <div className="relative flex">
        <Link to='../shop'><div className="text-sm">Products</div></Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md text-sm"
          onClick={handleToggle}
        >
          <span className="ml-2 text-[12px]">
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 top-11 max-h-[57vh] overflow-y-auto border-[1px] border-black rounded-md">
              Loading...
          </div>
        )}
      </div>
    );
  };

export default Loading;