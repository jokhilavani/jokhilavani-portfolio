import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="backdrop-blur-xl bg-white/5 dark:bg-black/40 border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-lg shadow-purple-500/10">

        {/* Logo */}
        <a
          href="#top"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
        >
          JT
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#certifications" className="hover:text-cyan-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-12 h-12
              rounded-full
              border border-cyan-400/50
              flex items-center justify-center
              hover:scale-110
              transition-all duration-300
            "
          >
            {darkMode ? (
              <FaSun className="text-yellow-300 text-lg" />
            ) : (
              <FaMoon className="text-cyan-400 text-lg" />
            )}
          </button>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="
    md:hidden
    absolute
    top-20
    left-0
    w-full
    bg-black/95 dark:bg-black/95
    backdrop-blur-xl
    border border-white/10
    rounded-3xl
    p-6
    flex flex-col
    gap-6
    text-center
    text-white
    shadow-2xl
  ">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;