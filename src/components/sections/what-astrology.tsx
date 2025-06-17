import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function WhatAstrology() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 to-rose-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 leading-tight">
              What is Astrology?
            </h2>

            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                Astrology is the ancient science that studies the correlation
                between celestial movements and earthly events. For thousands of
                years, this sacred knowledge has helped humanity understand the
                deeper patterns of life, revealing insights about personality,
                relationships, career, and spiritual growth.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our expert astrologers combine traditional Vedic wisdom with
                modern understanding to provide you with accurate, personalized
                guidance that can transform your life's journey.
              </p>
            </div>

            <Button
              variant="outline"
              className="border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
            >
              Learn More About Our Approach
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cosmic landscape with purple nebula and stars"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatAstrology;
