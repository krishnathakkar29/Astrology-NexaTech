import CosmicCTA from "@/components/common/common-cta";
import { Hand, CheckCircle } from "lucide-react";

export default function PalmistryPage() {
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
            Palmistry
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Discover your destiny written in the lines of your palms through
            ancient palmistry wisdom
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

      {/* The Ancient Art of Palm Reading */}
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
                The Ancient Art of Palm Reading
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Palmistry, also known as chiromancy, is an ancient divination
                  practice that has been used for thousands of years to
                  understand personality traits, predict future events, and gain
                  insights into an individual's life path through the study of
                  palm lines, mounts, and hand characteristics.
                </p>
                <p>
                  Your palms contain a detailed map of your life's journey.
                  Every line, mount, and finger formation tells a unique story
                  about your personality, relationships, career prospects,
                  health patterns, and spiritual development.
                </p>
                <p>
                  Our expert palmists combine traditional techniques with modern
                  psychological understanding to provide you with accurate,
                  insightful readings that can guide your decisions and
                  illuminate your path forward.
                </p>
              </div>
            </div>

            {/* Right Content - Palm Diagram */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 flex items-center justify-center">
                <img
                  src="/services/palm.png"
                  alt="Palm Reading Diagram"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Palm Lines */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Understanding Your Palm Lines
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Each line on your palm tells a unique story about different
              aspects of your life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Palm Lines */}
            <div className="space-y-8">
              {/* Life Line */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                    <Hand className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Life Line
                    </h3>
                    <p className="text-slate-600 mb-2">
                      Reveals vitality, health, and major life events
                    </p>
                    <p className="text-rose-400 text-sm">
                      Shows your energy levels and life path
                    </p>
                  </div>
                </div>
              </div>

              {/* Heart Line */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                    <Hand className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Heart Line
                    </h3>
                    <p className="text-slate-600 mb-2">
                      Indicates emotional nature and relationships
                    </p>
                    <p className="text-rose-400 text-sm">
                      Reveals your capacity for love and emotional expression
                    </p>
                  </div>
                </div>
              </div>

              {/* Head Line */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                    <Hand className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Head Line
                    </h3>
                    <p className="text-slate-600 mb-2">
                      Shows intellectual capacity and mental approach
                    </p>
                    <p className="text-rose-400 text-sm">
                      Indicates thinking patterns and decision-making style
                    </p>
                  </div>
                </div>
              </div>

              {/* Fate Line */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                    <Hand className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Fate Line
                    </h3>
                    <p className="text-slate-600 mb-2">
                      Career path and life direction indicators
                    </p>
                    <p className="text-rose-400 text-sm">
                      Shows how external forces shape your destiny
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Palm Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800 text-center">
                Palm Reading Analysis
              </h3>
              <div className="w-full h-64 bg-black rounded-lg mb-6"></div>
              <p className="text-slate-600 text-center leading-relaxed">
                Our detailed palm analysis covers all major lines, mounts, and
                finger characteristics to provide comprehensive insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Your Reading */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              What's Included in Your Reading
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Comprehensive palm analysis covering all aspects of your hand
              characteristics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Life line analysis */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <CheckCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Life line analysis
              </h3>
              <p className="text-white/80 leading-relaxed">
                Detailed examination and interpretation of this palm aspect.
              </p>
            </div>

            {/* Heart and head line reading */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <CheckCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Heart and head line reading
              </h3>
              <p className="text-white/80 leading-relaxed">
                Detailed examination and interpretation of this palm aspect.
              </p>
            </div>

            {/* Mount interpretation */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <CheckCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Mount interpretation
              </h3>
              <p className="text-white/80 leading-relaxed">
                Detailed examination and interpretation of this palm aspect.
              </p>
            </div>

            {/* Finger and nail analysis */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <CheckCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Finger and nail analysis
              </h3>
              <p className="text-white/80 leading-relaxed">
                Detailed examination and interpretation of this palm aspect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Palm Reading */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Benefits of Palm Reading
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Discover how palmistry can provide valuable insights for your life
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Hand className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Understand your personality and character
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Hand className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Gain insights into health and longevity
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Hand className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Discover relationship patterns
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg lg:col-start-1 lg:col-end-2">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Hand className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Identify potential opportunities
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg lg:col-start-2 lg:col-end-4">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-rose-200 rounded-full">
                <Hand className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Learn about your creative abilities
              </h3>
            </div>
          </div>
        </div>
      </section>

      <CosmicCTA
        title="Ready to Read Your Palms?"
        description="Discover the secrets hidden in your palms and gain valuable insights into your personality, relationships, and future possibilities."
        button={{
          label: "Book Your Palmistry Reading",
          action: { type: "link", href: "/book-appointment" },
        }}
      />
    </>
  );
}
