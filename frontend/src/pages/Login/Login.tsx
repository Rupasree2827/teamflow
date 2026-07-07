import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth.service";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import {
  Mail,
  Lock,
  Users,
  ArrowRight,
} from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await loginUser(email, password);

     localStorage.setItem("token", response.data.token);

// Save user info
localStorage.setItem(
  "name",
  response.data.user?.name || "User"
);

localStorage.setItem(
  "email",
  response.data.user?.email || ""
);

      toast.success("Welcome to TeamFlow 🚀");

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[160px] opacity-30 -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[160px] opacity-30 bottom-0 right-0"></div>

      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-[130px] opacity-20 top-1/2 left-1/2"></div>

      <div className="min-h-screen grid lg:grid-cols-2 items-center px-8 lg:px-24">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col text-white">

          <div className="flex items-center gap-4">

            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
              <Users size={42} />
            </div>

            <div>
              <h1 className="text-6xl font-extrabold">
                TeamFlow
              </h1>

              <p className="text-purple-200 mt-3 text-xl">
                Work together. Achieve more.
              </p>
            </div>

          </div>

          <div className="mt-20 max-w-lg">

            <h2 className="text-5xl font-bold leading-tight">
              Manage Teams,
              <br />
              Projects &
              <br />
              Tasks Effortlessly
            </h2>

            <p className="mt-8 text-purple-200 text-lg leading-8">
              TeamFlow helps teams collaborate,
              organize projects, assign tasks and
              track progress with a beautiful,
              modern workspace.
            </p>

          </div>

        </div>

        {/* Login Card */}

        <div className="flex justify-center">

          <div className="w-full max-w-md backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10">

            <div className="text-center">

              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg">

                <Lock className="text-white" size={34} />

              </div>

              <h2 className="text-4xl font-bold text-white">
                Welcome Back 👋
              </h2>

              <p className="text-gray-300 mt-3">
                Login to continue your journey
              </p>

            </div>

            {/* Email */}

            <div className="mt-10 relative">

              <Mail
                size={20}
                className="absolute left-4 top-4 text-gray-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            {/* Password */}

            <div className="mt-5 relative">

              <Lock
                size={20}
                className="absolute left-4 top-4 text-gray-300"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>

            <button
              onClick={handleLogin}
              className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Login

              <ArrowRight size={20} />

            </button>
            <p className="text-center mt-6 text-white">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="font-semibold underline"
  >
    Register
  </Link>
</p>

            <div className="text-center mt-8 text-gray-300 text-sm">
              © 2026 TeamFlow • Full Stack Project by Rupa
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;