import { useState } from "react";
import { useAuth } from "../components/auth/AuthContext";
import { FiUser, FiLock, FiLogIn, FiCopy } from "react-icons/fi";

const Login = () => {
  const demoAccounts = [
    {
      username: "emilys",
      password: "emilyspass",
      role: "Admin"
    },
    {
      username: "michaelw",
      password: "michaelwpass",
      role: "User"
    }
  ];

  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(null);
  const auth = useAuth();

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFillDemo = (account) => {
    setInput({
      username: account.username,
      password: account.password
    });
    setCopiedAccount(account.username);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const match = demoAccounts.find(
      (u) => u.username === input.username && u.password === input.password
    );
    
    if (match) {
      auth.loginAuth(input);
    } else {
      alert("Invalid credentials. Please try again or use a demo account.");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-sm sm:text-base">Sign in to your account</p>
        </div>

        {/* Demo Accounts Card */}
        <div className="bg-white rounded-lg shadow-sm border border-indigo-100 mb-6 overflow-hidden">
          <div className="bg-indigo-600 px-4 py-3">
            <h3 className="text-sm font-medium text-white">Demo Accounts</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {demoAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between bg-indigo-50 rounded-lg p-3">
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-indigo-800">{account.username}</span>
                      <span className="ml-2 text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                        {account.role}
                      </span>
                    </div>
                    <div className="text-xs text-indigo-600 mt-1">Password: {account.password}</div>
                  </div>
                  <button
                    onClick={() => handleFillDemo(account)}
                    className={`flex items-center text-sm px-3 py-1 rounded-md transition-all ${copiedAccount === account.username ? 'bg-green-100 text-green-800' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                  >
                    {copiedAccount === account.username ? (
                      <>
                        <FiCopy className="mr-1" /> Copied!
                      </>
                    ) : (
                      "Use Account"
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-xl shadow-md sm:shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  name="username"
                  type="text"
                  value={input.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  name="password"
                  type="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium transition ${isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  <FiLogIn className="mr-2" />
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;