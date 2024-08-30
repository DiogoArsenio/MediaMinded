"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="text-2xl font-semibold text-gray-900 tracking-wide hover:text-gray-700 transition duration-300">
              Sara Jacinto
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 text-lg">
              <a href="/graphic-design" className="relative text-gray-700 hover:text-gray-900 transition duration-300 group">
                Graphic Design
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/interior-design" className="relative text-gray-700 hover:text-gray-900 transition duration-300 group">
                Interior Design
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900 focus:outline-none">
              My work
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden flex flex-col space-y-4 py-4 text-lg">
              <a href="/graphic-design" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Graphic Design
              </a>
              <a href="/interior-design" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Interior Design
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
