"use client";

import { useState } from "react";
import { Star, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 ml-3">
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
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 mr-3">
              <a
                className="font-medium transition-colors duration-200 text-rose-400"
                href="/"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium text-slate-700 hover:text-rose-400 transition-colors duration-200">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/services/astrology"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Astrology
                    </Link>
                    <Link
                      href="/services/palmistry"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Palmistry
                    </Link>
                    <Link
                      href="/services/numerology"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Numerology
                    </Link>
                  </div>
                </div>
              </div>

              {/* Remedies Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium text-slate-700 hover:text-rose-400 transition-colors duration-200">
                  <span>Remedies</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/remedies/marriage-progeny"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Marriage & Progeny
                    </Link>
                    <Link
                      href="/remedies/education"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Education – Field to Choose
                    </Link>
                    <Link
                      href="/remedies/career"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Career
                    </Link>
                    <Link
                      href="/remedies/muhurat-timings"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Muhurat & Timings
                    </Link>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium text-slate-700 hover:text-rose-400 transition-colors duration-200">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/solutions/gemstones"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Gemstones
                    </Link>
                    <Link
                      href="/solutions/grah-shanti-pooja"
                      className="block px-4 py-2 text-slate-700 hover:bg-rose-50 hover:text-rose-400 transition-colors duration-200"
                    >
                      Grah Shanti Pooja
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                className="font-medium transition-colors duration-200 text-slate-700 hover:text-rose-400"
                href="/about"
              >
                About Us
              </Link>

              <Link
                href="/book-appointment"
                style={{
                  background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                }}
                className="text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
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
          <div
            className="fixed inset-0 bg-black/50"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-0 left-0 right-0 bg-white h-full overflow-y-auto">
            <div className="p-4">
              {/* Mobile Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
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
                </div>
                <button onClick={toggleMobileMenu} className="p-2">
                  <X className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-4">
                <a
                  className="block text-lg font-medium text-slate-700 py-2"
                  href="/"
                >
                  Home
                </a>

                {/* Services */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium text-slate-700 py-2"
                    onClick={() => toggleDropdown("services")}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "services" && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a className="block text-slate-600 py-1">Astrology</a>
                      <a className="block text-slate-600 py-1">Palmistry</a>
                      <a className="block text-slate-600 py-1">Numerology</a>
                    </div>
                  )}
                </div>

                {/* Remedies */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium text-slate-700 py-2"
                    onClick={() => toggleDropdown("remedies")}
                  >
                    <span>Remedies</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openDropdown === "remedies" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "remedies" && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a className="block text-slate-600 py-1">
                        Marriage & Progeny
                      </a>
                      <a className="block text-slate-600 py-1">
                        Education – Field to Choose
                      </a>
                      <a className="block text-slate-600 py-1">Career</a>
                      <a className="block text-slate-600 py-1">
                        Muhurat & Timings
                      </a>
                    </div>
                  )}
                </div>

                {/* Solutions */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium text-slate-700 py-2"
                    onClick={() => toggleDropdown("solutions")}
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openDropdown === "solutions" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "solutions" && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a className="block text-slate-600 py-1">Gemstones</a>
                      <a className="block text-slate-600 py-1">
                        Grah Shanti Pooja
                      </a>
                    </div>
                  )}
                </div>

                <a
                  className="block text-lg font-medium text-slate-700 py-2"
                  href="/about"
                >
                  About Us
                </a>

                {/* Mobile Book Consultation Button */}
                <div className="pt-4">
                  <Button
                    className="w-full text-white py-4 rounded-full text-lg font-medium transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
