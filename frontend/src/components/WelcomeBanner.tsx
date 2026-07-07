import { motion } from "framer-motion";

function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white mb-8"
    >
      <h1 className="text-4xl font-bold">
        {greeting}, Rupasree 👋
      </h1>

      <p className="mt-3 text-lg opacity-90">
        Welcome back! Here's what's happening in your workspace today.
      </p>
    </motion.div>
  );
}

export default WelcomeBanner;