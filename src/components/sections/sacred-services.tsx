import React from "react";
import { Button } from "../ui/button";

import { Star, Users, Brain, Heart } from "lucide-react";

function SacredServices() {
  return (
    <section
      className="py-20"
      style={{
        background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Discover the ancient wisdom through our comprehensive range of
            mystical services, each designed to illuminate different aspects of
            your cosmic journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vedic Astrology Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Vedic Astrology
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Comprehensive birth chart analysis revealing your life path,
                strengths, challenges, and cosmic influences.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Detailed birth chart reading
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Planetary period analysis
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Life predictions and guidance
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Remedial measures
              </li>
            </ul>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-2 border-rose-300 text-rose-400 hover:bg-rose-50 hover:border-rose-400 px-8 py-2 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Palmistry Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Palmistry
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Ancient art of reading palms to reveal personality traits, life
                events, and future possibilities.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Life line analysis
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Heart and head line reading
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Mount interpretation
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Finger and nail analysis
              </li>
            </ul>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-2 border-rose-300 text-rose-400 hover:bg-rose-50 hover:border-rose-400 px-8 py-2 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Numerology Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Numerology
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mystical study of numbers and their influence on your life,
                personality, and destiny.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Life path number calculation
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Destiny number analysis
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Lucky numbers and dates
              </li>
              <li className="flex items-center text-slate-600">
                <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                Name numerology
              </li>
            </ul>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-2 border-rose-300 text-rose-400 hover:bg-rose-50 hover:border-rose-400 px-8 py-2 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SacredServices;
