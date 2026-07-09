import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowUpRight } from "react-icons/fi";

function FloatingActivitiesButton() {
  const location = useLocation();

  // Hide the button on the Activities page
  if (location.pathname === "/activities") {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="fixed bottom-6 right-3 z-50"
    >
      <NavLink
        to="/activities"
        title="Explore our event portfolio"
        aria-label="Explore Events"
        className="group relative flex items-center gap-2 overflow-hidden rounded-full
                   border border-white/10 bg-violet-700 px-3 py-2
                   text-sm font-medium text-violet-50! backdrop-blur-xl
                   shadow-[0_8px_30px_rgba(168,85,247,0.18)]
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:border-violet-400/40
                   hover:bg-purple-950
                   hover:shadow-[0_12px_40px_rgba(168,85,247,0.35)]"
      >
        {/* Background Glow */}
        <span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Calendar Icon */}
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-violet-500  transition-colors duration-300 group-hover:bg-violet-500/30">
          <FiCalendar size={18} />
        </span>

        {/* Text */}
        <span className="relative sm:hidden">
          Events
        </span>

        <span className="relative hidden sm:block">
          Explore Events
        </span>

        {/* Arrow */}
        <FiArrowUpRight
          size={18}
          className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </NavLink>
    </motion.div>
  );
}

export default FloatingActivitiesButton;