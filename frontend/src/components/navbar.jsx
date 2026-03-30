import React, { useState } from "react";
import logo from "../assets/logoa.png"; 
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="bg-blue-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-full py-3 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-blue-600 font-semibold text-xl font-poppins">
            Neurovia
          </span>
        </div>
        <button
          className="md:hidden text-2xl text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden md:flex items-center space-x-4 md:space-x-6 text-[#1F2937] font-semibold font-poppins">
          <a
            href="/dashboard"
            className="px-3 py-2 rounded-md transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="/skrining"
            className="px-3 py-2 rounded-md transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Skrining
          </a>
          <a
            href="/"
            className="px-4 py-2 rounded-md transition duration-200 bg-blue-100 hover:bg-blue-600 hover:text-white"
          >
            Logout
          </a>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-blue-50 px-4 py-3 space-y-2 text-[#1F2937] font-semibold font-poppins shadow">
          <a
            href="/dashboard"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md transition hover:bg-blue-600 hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="/skrining"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md transition hover:bg-blue-600 hover:text-white"
          >
            Skrining
          </a>
          <a
            href=""
            onClick={closeMenu}
            className="block px-4 py-2 rounded-md bg-blue-100 transition hover:bg-blue-600 hover:text-white"
          >
            Logout
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
