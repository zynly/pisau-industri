"use client";

import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for blur navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Product", href: "#products" },
    { name: "Feedback", href: "#Testimonials" },
    { name: "Service", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF0D9]/80 backdrop-blur-xl shadow-md"
          : "bg-[#FFF0D9]"
      }`}
    >
      <div className="w-full h-20 flex items-center">
        {/* Logo Shape - mepet kiri */}
        <a
          href="#home"
          className="flex items-center gap-3 bg-[#F59E0B] h-16 pl-6 pr-7 rounded-r-full shadow-sm"
        >
          <div className="w-11 h-11 rounded-full bg-white/10 border border-white/50 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Wrapper menu + search */}
        <div className="flex-1 flex items-center justify-between px-6 lg:px-14">
          {/* Desktop Menu - tengah */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-10 text-gray-900 text-[15px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-[#F59E0B] ${
                  link.name === "Home" ? "font-bold" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search - kanan */}
          <div className="hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-72 h-12 pl-6 pr-12 rounded-full bg-white/80 border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 text-sm"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto mr-4 p-3 rounded-full bg-white/70 hover:bg-white transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#fff0d9]">
          <div className="px-4 py-5 space-y-4">
            {/* Search Mobile */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-12 pl-6 pr-12 rounded-full bg-white/80 border border-white/70 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 text-sm"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-900 font-medium hover:text-[#F59E0B]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}