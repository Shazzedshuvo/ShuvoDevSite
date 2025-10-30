"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const navitems = [
  { path: "/", label: "Furniture" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/login", label: "Login" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-8">
      {navitems.map((item, index) => {
        const isActive = pathname === item.path;
        return (
          <li key={index}>
            <Link
              href={item.path}
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

        {/* Menu items */}
        <div>
          <NavItems />
        </div>

        {/* Cart */}
        <div className="cursor-pointer text-2xl relative text-white hover:text-[#00bf8f] transition-colors duration-300">
          <FaShoppingBag className="text-2xl" />
          <sup className="absolute -top-1 -right-1 bg-[#00bf8f] text-black w-4 h-4 rounded-full flex items-center justify-center text-xs shadow-lg">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
