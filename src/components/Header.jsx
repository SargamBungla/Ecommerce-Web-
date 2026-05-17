// export default Header;
import { useSelector } from "react-redux";
import { useTheme } from "../context/themeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoCartOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const { theme, toggleTheme } = useTheme();

  // ✅ Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md transition-all duration-300 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" className="h-10 w-auto" />
        </NavLink>

        {/* ✅ Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}

          {/* Cart */}
          <li className="relative">
            <NavLink to="/cart">
              <IoCartOutline className="text-2xl text-gray-600 dark:text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </li>

          {/* Dark/Light Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-600 dark:text-yellow-400 hover:scale-110 transition-transform duration-300"
            >
              {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </li>

          {/* Auth0 */}
          <li>
            {isLoading ? (
              <span className="text-sm text-gray-400">Loading...</span>
            ) : isAuthenticated ? (
              <div className="flex items-center gap-3">
                <img src={user.picture} className="w-8 h-8 rounded-full" />
                <span className="text-sm dark:text-white hidden lg:block">
                  {user.name}
                </span>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-purple-600 text-white text-sm px-4 py-1.5 rounded-md"
              >
                Login
              </button>
            )}
          </li>
        </ul>

        {/* ✅ Mobile Right Side — Cart + Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <IoCartOutline className="text-2xl text-gray-600 dark:text-gray-300" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl text-gray-600 dark:text-yellow-400"
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-600 dark:text-gray-300"
          >
            {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu — Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-6 py-4 flex flex-col gap-4 transition-all duration-300">
          {/* Nav Links */}
          {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map((item) => (
            <NavLink
              key={item}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold text-lg"
                  : "text-gray-600 dark:text-gray-300 font-medium text-lg"
              }
            >
              {item}
            </NavLink>
          ))}

          {/* Auth0 */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
            {isLoading ? (
              <span className="text-sm text-gray-400">Loading...</span>
            ) : isAuthenticated ? (
              <div className="flex items-center gap-3">
                <img src={user.picture} className="w-8 h-8 rounded-full" />
                <span className="text-sm dark:text-white">{user.name}</span>
                <button
                  onClick={() => {
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    });
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  loginWithRedirect();
                  setMenuOpen(false);
                }}
                className="bg-purple-600 text-white text-sm px-4 py-1.5 rounded-md w-full"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
