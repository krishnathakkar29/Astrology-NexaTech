import { Flame, CheckCircle, Sun, Star, Shield, Sparkles } from "lucide-react";

export default function GrahShantiPoojaPage() {
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
              <Flame className="w-4 h-4 mr-2" />
              Graha Shanti Pooja
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Sacred Planetary Healing
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Transform negative planetary influences into positive cosmic
            blessings through
            <br />
            powerful Vedic fire ceremonies and sacred rituals.
          </p>
        </div>
      </section>

      {/* Benefits of Graha Shanti */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Benefits of Graha Shanti
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Experience the power of planetary peace ceremonies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Pacify malefic planetary influences
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Remove obstacles and negativity
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Enhance positive cosmic energies
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Improve health and prosperity
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Strengthen beneficial planets
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Create harmony in life
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Graha Shanti Poojas */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Types of Graha Shanti Poojas
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Comprehensive planetary healing ceremonies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Individual Planet Poojas */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Individual Planet Poojas
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Specific worship ceremonies for individual planets causing
                difficulties in your chart.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">
                  Available Poojas:
                </h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Surya Shanti (Sun)</li>
                  <li>• Chandra Shanti (Moon)</li>
                  <li>• Mangal Shanti (Mars)</li>
                  <li>• Budh Shanti (Mercury)</li>
                  <li>• Guru Shanti (Jupiter)</li>
                  <li>• Shukra Shanti (Venus)</li>
                  <li>• Shani Shanti (Saturn)</li>
                  <li>• Rahu Shanti</li>
                  <li>• Ketu Shanti</li>
                </ul>
              </div>
            </div>

            {/* Navagraha Shanti Pooja */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Navagraha Shanti Pooja
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Comprehensive ritual to appease all nine planets for complete
                cosmic harmony.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Overall life balance</li>
                  <li>• Protection from all planetary afflictions</li>
                  <li>• Enhanced positive energies</li>
                  <li>• Spiritual growth and prosperity</li>
                </ul>
              </div>
            </div>

            {/* Special Doshas Poojas */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Special Doshas Poojas
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Targeted ceremonies for specific astrological problems and
                planetary combinations.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">
                  Dosha Solutions:
                </h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Mangal Dosha</li>
                  <li>• Shani Dosha</li>
                  <li>• Rahu-Ketu Dosha</li>
                  <li>• Pitra Dosha</li>
                  <li>• Kalsarpa Dosha</li>
                </ul>
              </div>
            </div>

            {/* Graha Homa/Yagna */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Graha Homa/Yagna
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Fire rituals with specific mantras and offerings for powerful
                planetary appeasement.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">
                  Ceremony Types:
                </h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Daily Homa</li>
                  <li>• Special Occasion Yagna</li>
                  <li>• Nakshatra Chant Homa</li>
                  <li>• Mahamrityunjaya Homa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planetary Afflictions & Solutions */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Planetary Afflictions & Solutions
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Specific remedies for each planetary influence
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Sun (Surya) */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                Sun (Surya)
              </h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Common Problems:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Lack of confidence</li>
                    <li>• Government issues</li>
                    <li>• Father-related problems</li>
                    <li>• Health issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Quick Solutions:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Surya Mantra chanting</li>
                    <li>• Red cloth donation</li>
                    <li>• Offering water to Sun</li>
                    <li>• Ruby gemstone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Pooja Ceremony:
                  </h4>
                  <p className="text-slate-600">
                    Surya Shanti Pooja with 108 mantras, red flowers, and wheat
                    offerings
                  </p>
                </div>
              </div>
            </div>

            {/* Moon (Chandra) */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                Moon (Chandra)
              </h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Common Problems:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Mental stress</li>
                    <li>• Emotional instability</li>
                    <li>• Mother-related issues</li>
                    <li>• Sleep disorders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Quick Solutions:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Chandra Mantra</li>
                    <li>• White cloth donation</li>
                    <li>• Milk offering</li>
                    <li>• Pearl gemstone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Pooja Ceremony:
                  </h4>
                  <p className="text-slate-600">
                    Chandra Shanti Pooja with white flowers, rice, and milk
                    offerings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Pooja Package */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Complete Pooja Package
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Everything included in your planetary healing ceremony
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Package Item 1 */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Sacred Materials
              </h3>
              <p className="text-white/80 text-sm">
                All required puja items, flowers, and offerings
              </p>
            </div>

            {/* Package Item 2 */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Fire Ceremony
              </h3>
              <p className="text-white/80 text-sm">
                Sacred homa with ghee and specific herbs
              </p>
            </div>

            {/* Package Item 3 */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Mantra Chanting
              </h3>
              <p className="text-white/80 text-sm">
                108 repetitions of planetary mantras
              </p>
            </div>

            {/* Package Item 4 */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Energy Blessing
              </h3>
              <p className="text-white/80 text-sm">
                Final prayers and protective blessings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Ceremony Process */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Sacred Ceremony Process
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Step-by-step planetary healing ritual
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Detailed horoscope analysis to identify malefic planetary
                  influences
                </h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Selection of appropriate pooja based on specific planetary
                  problems
                </h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Purification rituals and sacred space preparation
                </h3>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Invocation of deities and planetary energies
                </h3>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Mantra chanting with proper pronunciation and rhythm
                </h3>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Sacred offerings including flowers, grains, and specific items
                </h3>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                7
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Fire ceremony (Homa) with ghee and sacred herbs
                </h3>
              </div>
            </div>

            {/* Step 8 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C89CA0 0%, #915C75 100%)",
                }}
              >
                8
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Final prayers and energy blessing for the devotee
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
