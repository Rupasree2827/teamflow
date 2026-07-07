import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
}

function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 transition-all"
    >
      {/* Decorative Gradient */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative flex justify-between items-start">

        <div>

          <p className="text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-5 text-green-600">

            <TrendingUp size={18} />

            <span className="text-sm font-semibold">
              Live Data
            </span>

          </div>

        </div>

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${color}`}
        >
          {icon}
        </motion.div>

      </div>
    </motion.div>
  );
}

export default StatCard;