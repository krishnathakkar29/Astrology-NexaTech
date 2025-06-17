import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Star,
  Twitter,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer
      className="text-white py-20"
      style={{
        background: `linear-gradient(135deg, #2A114A 0%, #1A011C 100%)`,
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                }}
              >
                <Star className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-serif font-bold">
                Astrology Website
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Illuminating your path through ancient wisdom and cosmic guidance.
              Discover your destiny with our expert astrological services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full transition-colors duration-300 hover:bg-white/20"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full transition-colors duration-300 hover:bg-white/20"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full transition-colors duration-300 hover:bg-white/20"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3
              className="text-lg font-serif font-semibold"
              style={{ color: "#DFB6B2" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/services/astrology"
                >
                  Astrology
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/book-appointment"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3
              className="text-lg font-serif font-semibold"
              style={{ color: "#DFB6B2" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/services/palmistry"
                >
                  Palmistry
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/services/numerology"
                >
                  Numerology
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/solutions/gemstones"
                >
                  Gemstones
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  href="/solutions/grah-shanti-pooja"
                >
                  Grah Shanti Pooja
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3
              className="text-lg font-serif font-semibold"
              style={{ color: "#DFB6B2" }}
            >
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" style={{ color: "#DFB6B2" }} />
                <span className="text-white/80">info@astro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" style={{ color: "#DFB6B2" }} />
                <span className="text-white/80">+91 9876543210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" style={{ color: "#DFB6B2" }} />
                <span className="text-white/80">
                  123 Aditya Lane
                  <br />
                  House 546
                  <br />
                  Thane, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">Astrology Website Watermark.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              href="/terms-conditions"
            >
              Terms & Conditions
            </a>
            <a
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
