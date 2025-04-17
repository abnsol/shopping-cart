import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const LoginButton = () => {
  return (
    <Link
      to="/login"
      className="flex items-center w-16 justify-center gap-1 bg-white text-indigo-600 px-1 py-1 rounded-lg shadow hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300"
    >
      Login
    </Link>
  );
};

export default LoginButton;
