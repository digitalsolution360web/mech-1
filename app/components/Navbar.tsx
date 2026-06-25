"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="w-full bg-[#1a5f9e] py-4 text-center overflow-hidden">
        <p className="text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 animate-pulse">
          <span>⚡</span>
          FLASH SALE ALERT: Flat 10% off on Power Weeders
          <span>⚡</span>
        </p>
      </div>

      {/* Main Navbar */}
      <div className=" border-b border-gray-100">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <Image
                  src="/logo.webp"
                  alt="Mechnova Logo"
                  width={200}
                  height={50}
                  className="h-8 sm:h-10 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-1">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Spare Parts", href: "/spare-parts" },
                { name: "About Us", href: "/about-us" },
                { name: "Dealer", href: "/dealer" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 h-25 flex items-center text-base lg:text-[1.1rem] font-bold group transition-colors duration-300 ${link.name === "Home" ? "text-primary" : "text-gray-600 hover:text-primary"
                    }`}
                >
                  <span className="relative py-1">
                    {link.name}
                    {/* Sliding Underline Effect - Now right under text */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left transition-transform duration-300 ${link.name === "Home" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    ></span>
                  </span>
                </Link>
              ))}
            </nav>

            {/* Icons & Actions */}
            <div className="flex items-center space-x-5">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors p-2 rounded-full ${isSearchOpen ? "bg-gray-100 text-primary" : "text-gray-600 hover:text-primary"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <Link href="/cart" className="text-gray-600 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>



              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 p-2"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar - Slide Down */}
      {isSearchOpen && (
        <div className="bg-white border-b border-gray-100 py-6 animate-in slide-in-from-top duration-300">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="relative flex items-center gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <i className="fa-solid fa-search absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products (e.g. Brush Cutter, Power Weeder...)"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-14 pr-6 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:bg-white transition-all text-lg shadow-inner"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="bg-[#236da9] hover:bg-[#1a5a8f] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-primary font-medium py-2">Home</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Products</Link>
          <Link href="/spare-parts" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Spare Parts</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">About Us</Link>
          <Link href="/dealer" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Dealer</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Contact</Link>

        </div>
      )}
    </header>
  );
}
