import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4 flex justify-between items-center shadow-lg shadow-purple-500/10">

        {/* Logo */}
<a
  href="#top"
  className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
>
  JT
</a>

        {/* Navigation Links */}
        {/* Navigation Links */}
{/* Navigation Links */}
<div className="flex items-center gap-10 text-gray-800 dark:text-gray-300 font-medium">
    

  <a href="#top" className="hover:text-cyan-400 transition">
    Home
  </a>

  <a href="#about" className="hover:text-cyan-400 transition">
    About
  </a>

  <a href="#skills" className="hover:text-cyan-400 transition">
    Skills
  </a>

  <a href="#projects" className="hover:text-cyan-400 transition">
    Projects
  </a>

  <a href="#certifications" className="hover:text-cyan-400 transition">
    Certifications
  </a>

  <a href="#contact" className="hover:text-cyan-400 transition">
    Contact
  </a>

</div>

        {/* Theme Toggle */}
        <button
  onClick={() => setDarkMode(!darkMode)}
  className="
    w-14 h-14
    rounded-full
    border border-cyan-400/50
    flex items-center justify-center
    hover:scale-110
    transition-all duration-300
    hover:shadow-lg hover:shadow-cyan-500/30
  "
>
  {darkMode ? (
    <FaSun className="text-yellow-300 text-xl" />
  ) : (
    <FaMoon className="text-cyan-400 text-xl" />
  )}
</button>

      </div>
    </nav>
  );
}

export default Navbar;