"use client";

import { useState, useEffect } from "react";
import { Star, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Helper function to check if any dropdown item is active
  const isDropdownActive = (paths: string[]) => {
    return paths.some((path) => isActivePath(path));
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 ml-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                }}
              >
                <Star className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span
                className="text-2xl font-serif font-bold"
                style={{
                  background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Astrology
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 mr-3">
              <Link
                href="/"
                className={`font-medium transition-colors duration-200 ${
                  isActivePath("/")
                    ? "text-rose-400"
                    : "text-slate-700 hover:text-rose-400"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                    isDropdownActive(["/services"])
                      ? "text-rose-400"
                      : "text-slate-700 hover:text-rose-400"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/services/astrology"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/services/astrology")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Astrology
                    </Link>
                    <Link
                      href="/services/palmistry"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/services/palmistry")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Palmistry
                    </Link>
                    <Link
                      href="/services/numerology"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/services/numerology")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Numerology
                    </Link>
                  </div>
                </div>
              </div>

              {/* Remedies Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                    isDropdownActive(["/remedies"])
                      ? "text-rose-400"
                      : "text-slate-700 hover:text-rose-400"
                  }`}
                >
                  <span>Remedies</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/remedies/marriage-progeny"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/remedies/marriage-progeny")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Marriage & Progeny
                    </Link>
                    <Link
                      href="/remedies/education"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/remedies/education")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Education – Field to Choose
                    </Link>
                    <Link
                      href="/remedies/career"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/remedies/career")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Career
                    </Link>
                    <Link
                      href="/remedies/muhurat-timings"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/remedies/muhurat-timings")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Muhurat & Timings
                    </Link>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                    isDropdownActive(["/solutions"])
                      ? "text-rose-400"
                      : "text-slate-700 hover:text-rose-400"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/solutions/gemstones"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/solutions/gemstones")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Gemstones
                    </Link>
                    <Link
                      href="/solutions/grah-shanti-pooja"
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        isActivePath("/solutions/grah-shanti-pooja")
                          ? "bg-rose-50 text-rose-400"
                          : "text-slate-700 hover:bg-rose-50 hover:text-rose-400"
                      }`}
                    >
                      Grah Shanti Pooja
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActivePath("/about")
                    ? "text-rose-400"
                    : "text-slate-700 hover:text-rose-400"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/book-appointment"
                className="text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                }}
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-rose-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />

          {/* Slide-in menu */}
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                    }}
                  >
                    <Star className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                  <span
                    className="text-xl font-serif font-bold"
                    style={{
                      background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Astrology
                  </span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="px-6 space-y-1">
                  <Link
                    href="/"
                    className={`block py-3 text-lg font-medium transition-colors ${
                      isActivePath("/")
                        ? "text-rose-400"
                        : "text-gray-700 hover:text-rose-400"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>

                  {/* Services */}
                  <div>
                    <button
                      className={`flex items-center justify-between w-full py-3 text-lg font-medium transition-colors ${
                        isDropdownActive(["/services"])
                          ? "text-rose-400"
                          : "text-gray-700 hover:text-rose-400"
                      }`}
                      onClick={() => toggleDropdown("services")}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openDropdown === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "services" && (
                      <div className="ml-4 mt-2 space-y-2 animate-accordion-down">
                        <Link
                          href="/services/astrology"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/services/astrology")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Astrology
                        </Link>
                        <Link
                          href="/services/palmistry"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/services/palmistry")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Palmistry
                        </Link>
                        <Link
                          href="/services/numerology"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/services/numerology")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Numerology
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Remedies */}
                  <div>
                    <button
                      className={`flex items-center justify-between w-full py-3 text-lg font-medium transition-colors ${
                        isDropdownActive(["/remedies"])
                          ? "text-rose-400"
                          : "text-gray-700 hover:text-rose-400"
                      }`}
                      onClick={() => toggleDropdown("remedies")}
                    >
                      <span>Remedies</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openDropdown === "remedies" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "remedies" && (
                      <div className="ml-4 mt-2 space-y-2 animate-accordion-down">
                        <Link
                          href="/remedies/marriage-progeny"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/remedies/marriage-progeny")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Marriage & Progeny
                        </Link>
                        <Link
                          href="/remedies/education"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/remedies/education")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Education – Field to Choose
                        </Link>
                        <Link
                          href="/remedies/career"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/remedies/career")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Career
                        </Link>
                        <Link
                          href="/remedies/muhurat-timings"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/remedies/muhurat-timings")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Muhurat & Timings
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Solutions */}
                  <div>
                    <button
                      className={`flex items-center justify-between w-full py-3 text-lg font-medium transition-colors ${
                        isDropdownActive(["/solutions"])
                          ? "text-rose-400"
                          : "text-gray-700 hover:text-rose-400"
                      }`}
                      onClick={() => toggleDropdown("solutions")}
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openDropdown === "solutions" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === "solutions" && (
                      <div className="ml-4 mt-2 space-y-2 animate-accordion-down">
                        <Link
                          href="/solutions/gemstones"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/solutions/gemstones")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Gemstones
                        </Link>
                        <Link
                          href="/solutions/grah-shanti-pooja"
                          className={`block py-2 text-base transition-colors ${
                            isActivePath("/solutions/grah-shanti-pooja")
                              ? "text-rose-400"
                              : "text-gray-600 hover:text-rose-400"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          Grah Shanti Pooja
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/about"
                    className={`block py-3 text-lg font-medium transition-colors ${
                      isActivePath("/about")
                        ? "text-rose-400"
                        : "text-gray-700 hover:text-rose-400"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-6 border-t border-gray-100">
                <Link
                  href="/book-appointment"
                  className="block w-full text-center text-white py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                  }}
                  onClick={closeMobileMenu}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
