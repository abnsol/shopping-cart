import { useEffect, useState } from "react";
import { useAuth } from "../components/auth/AuthContext";

const Account = () => {
  const { token, logoutAuth } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    if (token) fetchUser();
  }, [token]);

  if (!user) return <div className="text-center mt-10 text-gray-500">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <img
            src={user.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-300"
          />
          <div className="text-center sm:text-left space-y-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500 text-sm">@{user.username}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-sm text-gray-400">Member since: May 2022</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-4 justify-end sm:justify-end">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition">
            Edit Profile
          </button>
        </div>

        {/* Extra Content */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2 text-indigo-800">Recent Activity</h2>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Logged in from new device</li>
              <li>Updated profile picture</li>
              <li>Changed email address</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2 text-indigo-800">Account Status</h2>
            <p className="text-sm text-gray-600">
              Sex: <span className="font-medium text-gray-800 capitalize">{user.gender}</span>
            </p>
            <p className="text-sm text-gray-600">
              Email Verified: <span className="text-green-600 font-semibold">Yes</span>
            </p>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-wrap gap-4 justify-start sm:justify-start">
            <button
                className="ml-auto bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl transition"
                onClick={logoutAuth}
                >
                Logout
            </button>
            <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                onClick={logoutAuth}
                >
                Delete Account
            </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
