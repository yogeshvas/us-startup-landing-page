/** @format */
"use client";
import React, { useState } from "react";

export const HeroHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative  mx-auto overflow-visible ">
      {/* Header */}
      <header className="relative z-10">
        {/* Glassmorphism navigation bar */}
        <div className="absolute inset-x-0 top-5   rounded-full  mx-4">
          <nav className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-white drop-shadow-sm">
                  Averon
                </span>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center space-x-8 bg-white rounded-full">
                <a
                  href="#"
                  className="relative text-black hover:text-white transition-all duration-300 font-s px-4 py-2 rounded-full hover:bg-white/10 group"
                >
                  <span className="relative z-10">Get started</span>
                  <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white/90 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      isMobileMenuOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 z-50 px-4 mt-2">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                  <a
                    href="#"
                    className="block text-white/90 hover:text-white transition-colors duration-200 font-medium px-4 py-3 rounded-xl hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    @all posts
                  </a>
                  <a
                    href="#"
                    className="block text-white/90 hover:text-white transition-colors duration-200 font-medium px-4 py-3 rounded-xl hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    profile
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeroHeader;
