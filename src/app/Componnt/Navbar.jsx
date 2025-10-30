"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";

const navitems = [
  { path: "/", label: "Furniture" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/login", label: "Login" },
];

const NavItems = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-left">
      {navitems.map((item, index) => {
        const isActive = pathname === item.path;
        return (
          <li key={index}>
            <Link
              href={item.path}
              onClick={onClick}
              className={`relative transition-all duration-300 text-white font-medium ${
                isActive
                  ? "text-[#00bf8f] after:w-full"
                  : "hover:text-[#00bf8f] hover:after:w-full"
              } after:content-[''] after:block after:w-0 after:h-1 after:bg-[#00bf8f] after:rounded-full after:mt-1 after:transition-all`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on window resize (e.g., rotate phone)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 shadow-lg transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-screen-2xl container flex justify-between items-center py-4 px-6 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl text-[#00bf8f] hover:text-[#1cd8d2] transition-colors duration-300"
        >
          Shazzed
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <div className="relative cursor-pointer text-2xl text-white hover:text-[#00bf8f] transition-colors duration-300">
            <HiCodeBracket />
            
            
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-white hover:text-[#00bf8f] transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-[#00bf8f]/30 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 px-6 space-y-6">
          <NavItems onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
