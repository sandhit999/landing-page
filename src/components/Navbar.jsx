import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang]             = useState("EN");
  const location                    = useLocation();
  const { isDark, toggleTheme }     = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const navLinks = [
    { label: "Home", to: "/" },
    {
      label: "Services", to: "/services",
      dropdown: [
        { label: "IT Services",          to: "/services/it" },
        { label: "Manpower Consulting",  to: "/services/manpower" },
      ],
    },
    { label: "Industries", to: "/industries" },
    { label: "Careers",    to: "/careers"    },
    { label: "About Us",   to: "/about"      },
    { label: "Contact Us", to: "/contact"    },
  ];

  /* ── dynamic nav colours ── */
  const navBg    = isDark
    ? scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20"
               : "bg-slate-900/80 backdrop-blur-sm"
    : scrolled ? "bg-white/97 backdrop-blur-md shadow-lg shadow-slate-200/60"
               : "bg-white/90 backdrop-blur-sm";

  const logoColor   = isDark ? "text-white"       : "text-slate-900";
  const linkColor   = isDark ? "text-slate-300"   : "text-slate-700";
  const linkHover   = isDark ? "hover:text-cyan-400" : "hover:text-blue-600";
  const activeColor = isDark ? "text-cyan-400"    : "text-blue-600";
  const activeLine  = isDark ? "bg-cyan-400"      : "bg-blue-600";
  const mobileMenuBg = isDark ? "bg-slate-900 border-slate-700/50" : "bg-white border-slate-100";
  const mobileLinkActive = isDark ? "bg-slate-800 text-cyan-400" : "bg-blue-50 text-blue-600";
  const mobileLinkBase   = isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50";
  const dropdownBg = isDark
    ? "bg-slate-900 border-slate-700/50 shadow-2xl"
    : "bg-white border-slate-100 shadow-xl";
  const dropdownItem = isDark
    ? "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600";
  const dropdownActive = isDark
    ? "bg-slate-800 text-cyan-400 font-medium"
    : "bg-blue-50 text-blue-600 font-medium";
  const hamburgColor = isDark ? "text-slate-300" : "text-slate-700";
  const langBtnClass = isDark
    ? "text-slate-400 border-slate-600 hover:bg-slate-800 hover:text-white"
    : "text-slate-600 border-slate-300 hover:bg-slate-50";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-black tracking-widest transition-colors duration-300 ${logoColor}`}
            >
              AIM
            </motion.div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2
                    ${isActive(link.to) ? activeColor : `${linkColor} ${linkHover}`}`}
                >
                  {link.label}
                  {link.dropdown && (
                    <motion.svg
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </Link>

                {/* Active underline */}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${activeLine}`}
                  />
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 mt-1 w-52 rounded-xl border overflow-hidden ${dropdownBg}`}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to} to={item.to}
                            className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors
                              ${location.pathname === item.to ? dropdownActive : dropdownItem}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* ── Right Controls ── */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
              className={`text-xs font-semibold border rounded-lg px-3 py-1.5 transition-colors ${langBtnClass}`}
            >
              {lang === "EN" ? "EN | AR" : "AR | EN"}
            </button>

            {/* Phone icon */}
            <button className={`p-2 rounded-full transition-colors ${isDark ? "text-slate-400 hover:bg-slate-800 hover:text-white" : "text-slate-500 hover:bg-slate-100"}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>

            {/* ── THEME TOGGLE ── */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.88 }}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`relative w-14 h-7 rounded-full transition-colors duration-400 flex items-center px-1
                ${isDark ? "bg-slate-700" : "bg-slate-200"}`}
            >
              {/* Track icons */}
              <span className="absolute left-1.5 text-[10px]">🌙</span>
              <span className="absolute right-1.5 text-[10px]">☀️</span>

              {/* Knob */}
              <motion.div
                animate={{ x: isDark ? 0 : 28 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`relative z-10 w-5 h-5 rounded-full shadow-md flex items-center justify-center
                  ${isDark ? "bg-slate-900" : "bg-white"}`}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.svg key="moon"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                      exit={{    opacity: 0, rotate:  90, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="w-2.5 h-2.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </motion.svg>
                  ) : (
                    <motion.svg key="sun"
                      initial={{ opacity: 0, rotate: 90,  scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                      exit={{    opacity: 0, rotate: -90, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="w-2.5 h-2.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${hamburgColor}
              ${isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden border-t overflow-hidden shadow-lg ${mobileMenuBg}`}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors
                      ${isActive(link.to) ? mobileLinkActive : mobileLinkBase}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to} to={item.to}
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors
                            ${location.pathname === item.to
                              ? (isDark ? "text-cyan-400 font-medium" : "text-blue-600 font-medium")
                              : (isDark ? "text-slate-400 hover:text-cyan-400" : "text-slate-500 hover:text-blue-600")}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile theme toggle */}
              <div className={`flex items-center justify-between pt-3 mt-2 border-t
                ${isDark ? "border-slate-700/50" : "border-slate-100"}`}>
                <span className={`text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {isDark ? "Dark Mode" : "Light Mode"}
                </span>
                <motion.button
                  onClick={toggleTheme}
                  whileTap={{ scale: 0.88 }}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1
                    ${isDark ? "bg-slate-700" : "bg-slate-200"}`}
                >
                  <span className="absolute left-1.5 text-[10px]">🌙</span>
                  <span className="absolute right-1.5 text-[10px]">☀️</span>
                  <motion.div
                    animate={{ x: isDark ? 0 : 28 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={`relative z-10 w-5 h-5 rounded-full shadow-md ${isDark ? "bg-slate-900" : "bg-white"}`}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
