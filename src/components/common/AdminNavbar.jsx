import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FullLogo from "../../assets/full-logo.png";
import { AuthContext } from "../../context/AuthContext";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    const { error } = await logout();

    if (!error) {
      navigate("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-violet-300 via-violet-400 to-purple-400 shadow-[0_18px_50px_rgba(15,11,28,0.28)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8">
        <NavLink
          to="/admin"
          className="flex shrink-0 items-center"
        >
          <img
            src={FullLogo}
            alt="DAEHWA Cafe"
            className="h-12 w-auto md:h-16"
          />
        </NavLink>

        <div className="flex items-center gap-3">
          <NavLink
            to="/admin"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 sm:block"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/events"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 sm:block"
          >
            Events
          </NavLink>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full cursor-pointer bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;