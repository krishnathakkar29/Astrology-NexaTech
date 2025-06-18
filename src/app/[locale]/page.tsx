"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Heart, Shield, Star, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <div className="min-h-screen">
        {/* hero page  */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, #301931 0%, #261843 50%, #301931 100%)`,
                opacity: 0.85,
              }}
            ></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-up">
              {t("hero.subtitle")}
            </p>
            <div className="animate-scale-in">
              <Button
                className="text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-300/30"
                style={{
                  background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
                }}
              >
                {t("hero.cta")}
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

        {/* what astrology */}
        <section className="py-20 bg-gradient-to-br from-rose-100 to-rose-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 leading-tight">
                  {t("astrology.title")}
                </h2>

                <div className="space-y-6">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {t("astrology.description1")}
                  </p>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {t("astrology.description2")}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
                >
                  {t("astrology.cta")}
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

        {/* sacred services section */}
        <section
          className="py-20"
          style={{
            background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
          }}
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
                {t("sacredServices.title")}
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                {t("sacredServices.subtitle")}
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
                    {t("sacredServices.vedic.title")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {t("sacredServices.vedic.description")}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.vedic.feature1")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.vedic.feature2")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.vedic.feature3")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.vedic.feature4")}
                  </li>
                </ul>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-2 border-rose-300 text-rose-400 hover:bg-rose-50 hover:border-rose-400 px-8 py-2 rounded-full transition-all duration-300"
                  >
                    {t("sacredServices.learnMore")}
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
                    {t("sacredServices.palmistry.title")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {t("sacredServices.palmistry.description")}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.palmistry.feature1")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.palmistry.feature2")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.palmistry.feature3")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.palmistry.feature4")}
                  </li>
                </ul>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-2 border-rose-300 text-rose-400 hover:bg-rose-50 hover:border-rose-400 px-8 py-2 rounded-full transition-all duration-300"
                  >
                    {t("sacredServices.learnMore")}
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
                    {t("sacredServices.numerology.title")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {t("sacredServices.numerology.description")}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.numerology.feature1")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.numerology.feature2")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.numerology.feature3")}
                  </li>
                  <li className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                    {t("sacredServices.numerology.feature4")}
                  </li>
                </ul>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-2 border-rose-300 text-rose-400 hover:bg-rose-50 hover:border-rose-400 px-8 py-2 rounded-full transition-all duration-300"
                  >
                    {t("sacredServices.learnMore")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why choose us section */}
        <section
          className="py-20 text-white"
          style={{
            background: `radial-gradient(ellipse at center, #250C3B 0%, #291046 35%, #1B021F 100%)`,
          }}
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                {t("whyChoose.title")}
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                {t("whyChoose.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Expert Astrologers */}
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  <Star className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-4"
                  style={{ color: "#CDA2A4" }}
                >
                  {t("whyChoose.expert.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("whyChoose.expert.description")}
                </p>
              </div>

              {/* Accurate Predictions */}
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-4"
                  style={{ color: "#CDA2A4" }}
                >
                  {t("whyChoose.accurate.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("whyChoose.accurate.description")}
                </p>
              </div>

              {/* Personalized Guidance */}
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-4"
                  style={{ color: "#CDA2A4" }}
                >
                  {t("whyChoose.personalized.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("whyChoose.personalized.description")}
                </p>
              </div>

              {/* Confidential Service */}
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-4"
                  style={{ color: "#CDA2A4" }}
                >
                  {t("whyChoose.confidential.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("whyChoose.confidential.description")}
                </p>
              </div>

              {/* Holistic Approach */}
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-4"
                  style={{ color: "#CDA2A4" }}
                >
                  {t("whyChoose.holistic.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("whyChoose.holistic.description")}
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-serif font-semibold mb-4"
                  style={{ color: "#CDA2A4" }}
                >
                  {t("whyChoose.support.title")}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t("whyChoose.support.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 text-white"
          style={{
            background: `radial-gradient(ellipse at center, #3E1E53 0%, #2E144E 35%, #4E2859 100%)`,
          }}
        >
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-appointment"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                    }),
                    "text-white text-lg px-8 py-4 md:py-8 rounded-full hover:shadow-lg transition-all duration-300 border-0 hover:scale-105"
                  )}
                  style={{
                    background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
                  }}
                >
                  {t("cta.bookConsultation")}
                </Link>
                <Button
                  variant="outline"
                  className="border-2 bg-transparent text-white hover:bg-white hover:text-cosmic-purple-dark text-lg px-8 py-4 md:py-8 rounded-full transition-all duration-300"
                >
                  {t("cta.exploreServices")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
