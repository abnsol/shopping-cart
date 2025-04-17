import { useState } from "react";
import { useAuth } from "../components/auth/AuthContext"; // adjust path as needed

const Login = () => {
  const users = [
    {
      username: "emilys", // admin
      password: "emilyspass",
    },
    {
      username: "michaelw", // user
      password: "michaelwpass",
    },
  ];

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFillDemo = (user) => {
    setInput(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = users.find(
      (u) => u.username === input.username && u.password === input.password
    );
    if (match) {
      auth.loginAuth(input);
    } else {
      alert("Please provide a valid username and password.");
    }
  };

  return (
        <div className="max-w-md mx-auto m-5 bg-white shadow-md rounded-lg p-8">
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            </div>
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded-md mb-6 text-sm shadow-sm width-full">
            <p className="font-medium mb-1">Valid User / Password</p>
            <ul className="list-disc ml-0 p-0">
            <li className="flex justify-between items-center">
                <div>
                        <code className="bg-gray-200 px-1 rounded">emilys</code> /{" "}
                        <code className="bg-gray-200 px-1 rounded">emilyspass</code>{" "}
                </div>
                <button
                className="ml-2 text-indigo-600 hover:bg-gray-300 text-xs border-[1px] px-1 rounded-lg"
                onClick={() =>
                    handleFillDemo({ username: "emilys", password: "emilyspass" })
                }
                >Use</button>
            </li>
            <li className="flex justify-between items-center">
                <div>
                    <code className="bg-gray-200 px-1 rounded">michaelw</code> /{" "}
                    <code className="bg-gray-200 px-1 rounded">michaelwpass</code>{" "}
                </div>
                <button
                className="ml-2 text-indigo-600 hover:bg-gray-300 text-xs border-[1px] px-1 rounded-lg"
                onClick={() =>
                    handleFillDemo({
                    username: "michaelw",
                    password: "michaelwpass",
                    })
                }
                >Use</button>
            </li>
            </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
            </label>
            <input
                name="username"
                type="text"
                value={input.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
            </label>
            <input
                name="password"
                type="password"
                value={input.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
            />
            </div>
            <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
            Login
            </button>
        </form>
    </div>
  );
};

export default Login;
