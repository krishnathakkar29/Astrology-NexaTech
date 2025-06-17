import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-purple-800/60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Discover Your Cosmic Destiny
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-up">
          Unlock the secrets of your future with ancient Vedic wisdom and modern
          astrological insights. Find clarity, purpose, and guidance for your
          life's journey.
        </p>
        <div className="animate-scale-in">
          <Button
            className="text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-300/30"
            style={{
              background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
            }}
          >
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-4 h-4 rounded-full opacity-70 animate-float"
        style={{
          background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
        }}
      ></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 rounded-full opacity-50 animate-float"
        style={{
          background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
          animationDelay: "2s",
        }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-2 h-2 rounded-full opacity-60 animate-float"
        style={{
          background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
          animationDelay: "4s",
        }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-5 h-5 rounded-full opacity-40 animate-float"
        style={{
          background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
          animationDelay: "1s",
        }}
      ></div>
    </section>
  );
}

export default Hero;
