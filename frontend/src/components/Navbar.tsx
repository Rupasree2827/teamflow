import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Bell,
  Search,
  UserCircle2,
  CalendarDays,
  Moon,
  Sun,
  Settings,
  LogOut,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const name =
    localStorage.getItem("name") || "Rupasree";

  const email =
    localStorage.getItem("email") ||
    "AI & ML Developer";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm px-8 py-5 flex justify-between items-center">

      {/* Left */}

      <div>

        <h2 className="text-3xl font-bold text-gray-800">
          {greeting}
        </h2>

        <div className="flex items-center gap-2 mt-2 text-gray-500">

          <CalendarDays size={16} />

          <span>{today}</span>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center bg-slate-100 rounded-2xl px-4 py-3 shadow-sm">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-52"
          />

        </div>

        {/* Theme Button */}

       <button
  onClick={() =>
    toast("🌙 Dark Mode is coming in the next version!")
  }
  className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-indigo-100 transition flex items-center justify-center"
  title="Theme (Coming Soon)"
>
  {hour < 18 ? (
    <Moon size={20} />
  ) : (
    <Sun size={20} />
  )}
</button>

        {/* Notifications */}

        <div className="relative">

          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
            className="relative w-12 h-12 rounded-2xl bg-slate-100 hover:bg-indigo-100 transition flex items-center justify-center"
          >

            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

          </button>

          {showNotifications && (

            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden">

              <div className="p-4 border-b">

                <h3 className="font-bold text-lg">
                  Notifications
                </h3>

              </div>

              <div className="p-4 space-y-4">

                <div className="flex gap-3">

                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>

                  <div>

                    <p className="font-semibold">
                      Team Created
                    </p>

                    <p className="text-gray-500 text-sm">
                      Development Team added successfully.
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>

                  <div>

                    <p className="font-semibold">
                      Project Added
                    </p>

                    <p className="text-gray-500 text-sm">
                      TeamFlow project created.
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>

                  <div>

                    <p className="font-semibold">
                      Task Updated
                    </p>

                    <p className="text-gray-500 text-sm">
                      Login Module marked completed.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() =>
              setShowProfile(!showProfile)
            }
            className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl px-4 py-2 text-white shadow-lg hover:scale-105 transition"
          >

            <UserCircle2 size={38} />

            <div className="text-left">

              <p className="font-semibold">
                {name}
              </p>

              <p className="text-xs text-indigo-100">
                {email}
              </p>

            </div>

          </button>

          {showProfile && (

            <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border overflow-hidden">

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">

                <UserCircle2
                  size={60}
                  className="mx-auto"
                />

                <h3 className="font-bold text-center mt-3 text-xl">
                  {name}
                </h3>

                <p className="text-center text-indigo-100 text-sm">
                  {email}
                </p>

              </div>

              <button
  onClick={() => navigate("/profile")}
  className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-100"
>

                <Settings size={20} />

                Profile Settings

              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50"
              >

                <LogOut size={20} />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;