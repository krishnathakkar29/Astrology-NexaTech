import {
  Clock,
  CheckCircle,
  Star,
  Calendar,
  Building,
  Sun,
  Moon,
  AlertTriangle,
} from "lucide-react";

export default function MuhuratTimingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 text-center"
        style={{
          background: `linear-gradient(135deg, #250C3B 0%, #140013 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-6">
            <span
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(218, 177, 174, 0.2)",
                color: "#DAB1AE",
              }}
            >
              <Clock className="w-4 h-4 mr-2" />
              Muhurat & Timings
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Perfect Timing for Life's Important Moments
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Align your important life events with cosmic energies through
            precise muhurat calculations and auspicious timing selection for
            maximum success and prosperity.
          </p>
        </div>
      </section>

      {/* Muhurat Benefits */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Muhurat Benefits
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Harness cosmic timing for life's most important moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Choose auspicious timing for important events
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Maximize success probability
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Align with cosmic energies
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Avoid inauspicious periods
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Enhance positive outcomes
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Create harmonious beginnings
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Muhurat */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Types of Muhurat
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Specialized timing for every important occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Wedding Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Wedding Muhurat
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Perfect timing for marriage ceremonies to ensure lifelong
                happiness and prosperity.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Wedding ceremony</li>
                  <li>• Engagement</li>
                  <li>• Ring ceremony</li>
                  <li>• Reception</li>
                </ul>
              </div>
            </div>

            {/* Business Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Business Muhurat
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Auspicious timing for business ventures, office inauguration,
                and financial decisions.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Business launch</li>
                  <li>• Office opening</li>
                  <li>• Partnership</li>
                  <li>• Investment decisions</li>
                </ul>
              </div>
            </div>

            {/* Spiritual Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Sun className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Spiritual Muhurat
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Sacred timing for religious ceremonies, temple visits, and
                spiritual practices.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Pooja ceremonies</li>
                  <li>• Temple visits</li>
                  <li>• Spiritual initiations</li>
                  <li>• Religious festivals</li>
                </ul>
              </div>
            </div>

            {/* Personal Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Moon className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Personal Muhurat
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Favorable timing for personal milestones and important life
                decisions.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• House warming</li>
                  <li>• Vehicle purchase</li>
                  <li>• Education start</li>
                  <li>• Travel planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Considerations */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Timing Considerations
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Factors analyzed for perfect muhurat selection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Planetary Positions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Planetary Positions
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Analysis of favorable planetary alignments and their influence
                on success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Beneficial planet positions
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Avoiding malefic influences
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Strength of ascendant
                </li>
              </ul>
            </div>

            {/* Lunar Calendar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Lunar Calendar
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Consideration of moon phases and lunar days for optimal timing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Waxing vs waning moon
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Tithi calculations
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Lunar mansion influence
                </li>
              </ul>
            </div>

            {/* Nakshatra Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Nakshatra Analysis
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Selection based on favorable star constellations and their
                energies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Ruling deity influence
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Constellation compatibility
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Star-based predictions
                </li>
              </ul>
            </div>

            {/* Weekday Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Weekday Selection
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Choosing the most auspicious day of the week for specific
                activities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Planetary day rulers
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Activity-specific days
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Personal compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Periods to Avoid */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Periods to Avoid
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Inauspicious timings that should be avoided
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Rahu Kaal */}
            <div
              className="rounded-2xl p-6 border-2 border-red-400/50"
              style={{ background: "#382144" }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-serif font-bold text-white">
                  Rahu Kaal
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Inauspicious time period ruled by shadow planet Rahu
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">1.5 hours daily</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">Delays and obstacles</p>
                </div>
              </div>
            </div>

            {/* Yamaganda Kaal */}
            <div
              className="rounded-2xl p-6 border-2 border-red-400/50"
              style={{ background: "#382144" }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-serif font-bold text-white">
                  Yamaganda Kaal
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Period associated with death deity, unfavorable for new
                beginnings
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">1.5 hours daily</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">Negative outcomes</p>
                </div>
              </div>
            </div>

            {/* Gulika Kaal */}
            <div
              className="rounded-2xl p-6 border-2 border-red-400/50"
              style={{ background: "#382144" }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-serif font-bold text-white">
                  Gulika Kaal
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Time influenced by malefic energies causing hindrances
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">1.5 hours daily</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">Financial losses</p>
                </div>
              </div>
            </div>

            {/* Void of Course Moon */}
            <div
              className="rounded-2xl p-6 border-2 border-red-400/50"
              style={{ background: "#382144" }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-serif font-bold text-white">
                  Void of Course Moon
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                When moon makes no major aspects before changing signs
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">Variable</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">Lack of progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Muhurat Consultation Process */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Our Muhurat Consultation Process
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Systematic approach to finding perfect timing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Analysis of your birth chart and current planetary periods
                </h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Understanding the nature and importance of your planned event
                </h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Calculation of most favorable dates and times based on cosmic
                  influences
                </h3>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Providing alternative dates in case of scheduling conflicts
                </h3>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Detailed timing recommendations with do's and don'ts for the
                  occasion
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
