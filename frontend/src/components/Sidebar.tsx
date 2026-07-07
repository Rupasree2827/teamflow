import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  LogOut,
  Sparkles,
   UserCircle2,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Teams",
      path: "/teams",
      icon: <Users size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FolderKanban size={20} />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <CheckSquare size={20} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <UserCircle2 size={20} />,
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col justify-between shadow-2xl">

      {/* Logo */}
      <div>

        <div className="p-8 border-b border-white/10">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">

              <Sparkles size={28} />

            </div>

            <div>

              <h1 className="text-3xl font-extrabold">
                TeamFlow
              </h1>

              <p className="text-slate-400 text-sm mt-1">
                Project Management
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="mt-8 px-5">

          {menuItems.map((item) => {
            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center gap-4 p-4 rounded-2xl mb-4 transition-all duration-300
                ${
                  active
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl"
                    : "hover:bg-white/10"
                }`}
              >
                <div
                  className={`transition duration-300
                  ${
                    active
                      ? "scale-110"
                      : "group-hover:scale-110"
                  }`}
                >
                  {item.icon}
                </div>

                <span className="font-medium text-lg">
                  {item.name}
                </span>

              </Link>
            );
          })}

        </nav>

      </div>

      {/* Bottom */}

      <div className="p-5 border-t border-white/10">

        <div className="bg-white/5 rounded-2xl p-4 mb-5">

          <p className="text-sm text-slate-400">
            Logged in as
          </p>

          <h3 className="font-bold mt-1">
            Rupasree
          </h3>

        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition rounded-2xl py-4 font-semibold flex justify-center items-center gap-3 shadow-lg"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;