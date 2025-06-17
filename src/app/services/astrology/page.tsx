import { Star, CheckCircle } from "lucide-react";

export default function AstrologyPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #250C3B 0%, #140013 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Vedic Astrology
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Unlock the mysteries of your life through comprehensive Vedic
            astrological analysis
          </p>
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

      {/* What is Vedic Astrology */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-800">
                What is Vedic Astrology?
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Vedic astrology, also known as Jyotisha, is the ancient Indian
                  system of astrology that has been practiced for over 5,000
                  years. Unlike Western astrology, Vedic astrology uses the
                  sidereal zodiac and incorporates unique techniques for precise
                  predictions and spiritual guidance.
                </p>
                <p>
                  Our comprehensive astrological analysis examines your birth
                  chart (Kundali) to reveal insights about your personality,
                  relationships, career, health, and spiritual path. We use
                  traditional calculation methods combined with modern
                  interpretation techniques for maximum accuracy.
                </p>
                <p>
                  Each consultation includes detailed analysis of planetary
                  positions, house interpretations, dasha (planetary periods),
                  and personalized remedial measures to enhance positive
                  influences and mitigate challenges.
                </p>
              </div>
            </div>

            {/* Right Content - Birth Chart */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 flex items-center justify-center">
                <img
                  src="/services/astrology.webp"
                  alt="Vedic Birth Chart"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Your Reading */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              What's Included in Your Reading
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Comprehensive analysis covering all aspects of your cosmic
              blueprint
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Reading Items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Detailed birth chart reading
                  </h3>
                  <p className="text-slate-600">
                    Detailed analysis and interpretation with practical guidance
                    for your life journey.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Planetary period analysis
                  </h3>
                  <p className="text-slate-600">
                    Detailed analysis and interpretation with practical guidance
                    for your life journey.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Life predictions and guidance
                  </h3>
                  <p className="text-slate-600">
                    Detailed analysis and interpretation with practical guidance
                    for your life journey.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Remedial measures
                  </h3>
                  <p className="text-slate-600">
                    Detailed analysis and interpretation with practical guidance
                    for your life journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Sample Chart */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800 text-center">
                Sample Birth Chart Analysis
              </h3>
              <div className="w-full h-64 bg-black rounded-lg mb-6"></div>
              <p className="text-slate-600 text-center leading-relaxed">
                Your personalized birth chart will include detailed planetary
                positions, house analyses, and comprehensive predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Consultation Process */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Our Consultation Process
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              A structured approach to deliver accurate and meaningful insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                1
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Birth Details Collection
              </h3>
              <p className="text-white/80 leading-relaxed">
                Accurate birth date, time, and place for precise calculations
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                2
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Chart Preparation
              </h3>
              <p className="text-white/80 leading-relaxed">
                Creating your detailed birth chart using traditional methods
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                3
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Analysis & Interpretation
              </h3>
              <p className="text-white/80 leading-relaxed">
                Expert analysis of planetary positions and their influences
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                4
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Guidance & Remedies
              </h3>
              <p className="text-white/80 leading-relaxed">
                Personalized guidance with remedial measures for enhancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Astrological Guidance */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Benefits of Astrological Guidance
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Discover how cosmic wisdom can transform your life journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Star className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Understand your life purpose and destiny
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Star className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Navigate challenging periods with confidence
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Star className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Make informed decisions about career and relationships
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg lg:col-start-1 lg:col-end-2">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Star className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Discover your natural talents and abilities
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg lg:col-start-2 lg:col-end-4">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Star className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Find the best timing for important life events
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
