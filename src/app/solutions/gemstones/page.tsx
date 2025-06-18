import CosmicCTA from "@/components/common/common-cta";
import {
  Gem,
  CheckCircle,
  Crown,
  Diamond,
  Sparkles,
  Shield,
} from "lucide-react";

export default function GemstonesPage() {
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
              <Gem className="w-4 h-4 mr-2" />
              Gemstone Therapy
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Cosmic Power of Sacred Gemstones
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Harness the healing energies of precious gemstones to enhance your
            life,
            <br />
            balance planetary influences, and attract prosperity through ancient
            wisdom.
          </p>
        </div>
      </section>

      {/* Gemstone Benefits */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Gemstone Benefits
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Transform your life through the power of sacred stones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Enhance positive planetary energies
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Neutralize negative influences
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Improve health and vitality
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Attract wealth and prosperity
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Strengthen relationships
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Boost confidence and charisma
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstone Categories */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Gemstone Categories
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Different types of stones for various healing purposes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Precious Gemstones */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Precious Gemstones
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                High-powered gems for major planetary influences and life
                transformations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Ruby (Sun)</li>
                    <li>• Red Coral (Mars)</li>
                    <li>• Yellow Sapphire (Jupiter)</li>
                    <li>• Blue Sapphire (Saturn)</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Pearl (Moon)</li>
                    <li>• Emerald (Mercury)</li>
                    <li>• Diamond (Venus)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Semi-Precious Stones */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Diamond className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Semi-Precious Stones
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Effective alternatives with gentle yet powerful healing
                properties.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Garnet</li>
                    <li>• Carnelian</li>
                    <li>• Citrine</li>
                    <li>• Amethyst</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Moonstone</li>
                    <li>• Peridot</li>
                    <li>• White Sapphire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Healing Crystals */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Healing Crystals
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Supportive stones for daily wear and chakra balancing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Clear Quartz</li>
                    <li>• Amethyst</li>
                    <li>• Aventurine</li>
                    <li>• Hematite</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Rose Quartz</li>
                    <li>• Tiger's Eye</li>
                    <li>• Turquoise</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Protective Stones */}
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
                  Protective Stones
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Special gems for protection against negative energies and evil
                eye.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Black Tourmaline</li>
                    <li>• Labradorite</li>
                    <li>• Black Onyx</li>
                    <li>• Jasper</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• Obsidian</li>
                    <li>• Smoky Quartz</li>
                    <li>• Agate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planetary Gemstones */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Planetary Gemstones
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Nine sacred gems for the nine celestial influencers
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Sun - Ruby */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    Sun
                  </h3>
                  <p className="text-rose-400 font-medium text-lg">Ruby</p>
                  <ul className="mt-4 space-y-1 text-slate-600">
                    <li>• Leadership qualities</li>
                    <li>• Confidence boost</li>
                    <li>• Career advancement</li>
                    <li>• Vitality enhancement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Wearing Instructions:
                  </h4>
                  <p className="text-slate-600">
                    Gold ring, Sunday morning, Ring finger
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Sacred Mantra:
                  </h4>
                  <p className="text-rose-400 italic">
                    Om Hraam Hreem Hraum Sah Suryaya Namah
                  </p>
                </div>
              </div>
            </div>

            {/* Moon - Pearl */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    Moon
                  </h3>
                  <p className="text-rose-400 font-medium text-lg">Pearl</p>
                  <ul className="mt-4 space-y-1 text-slate-600">
                    <li>• Emotional balance</li>
                    <li>• Mental peace</li>
                    <li>• Intuition enhancement</li>
                    <li>• Relationship harmony</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Wearing Instructions:
                  </h4>
                  <p className="text-slate-600">
                    Silver ring, Monday evening, Little finger
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Sacred Mantra:
                  </h4>
                  <p className="text-rose-400 italic">
                    Om Shraam Shreem Shraum Sah Chandraya Namah
                  </p>
                </div>
              </div>
            </div>

            {/* Mars - Red Coral */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    Mars
                  </h3>
                  <p className="text-rose-400 font-medium text-lg">Red Coral</p>
                  <ul className="mt-4 space-y-1 text-slate-600">
                    <li>• Courage and strength</li>
                    <li>• Energy boost</li>
                    <li>• Protection from enemies</li>
                    <li>• Success in competition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Wearing Instructions:
                  </h4>
                  <p className="text-slate-600">
                    Gold/Copper ring, Tuesday morning, Ring finger
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Sacred Mantra:
                  </h4>
                  <p className="text-rose-400 italic">
                    Om Kraam Kreem Kraum Sah Bhaumaya Namah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assessment */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Quality Assessment
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Essential factors for selecting powerful gemstones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Clarity */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Clarity
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Natural gems should have minimal inclusions for maximum energy
                transmission
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">Clear energy flow</span>
              </div>
            </div>

            {/* Color */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Color
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Vibrant, natural color intensity indicates strong planetary
                connection
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">Energy intensity</span>
              </div>
            </div>

            {/* Cut */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Cut
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Proper proportions and faceting to optimize light and energy
                reflection
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  Energy amplification
                </span>
              </div>
            </div>

            {/* Carat Weight */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Carat Weight
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Adequate size based on body weight and planetary requirement
                calculations
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">Sufficient power</span>
              </div>
            </div>

            {/* Origin */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Origin
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Authentic sources known for high-quality gems with strong
                vibrations
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  Energy authenticity
                </span>
              </div>
            </div>

            {/* Treatment */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                Treatment
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Natural, untreated stones maintain their original cosmic
                energies
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">Pure vibrations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Gemstone Selection Process */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Our Gemstone Selection Process
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Scientific approach to finding your perfect healing stone
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
                  Detailed birth chart analysis to identify planetary strengths
                  and weaknesses
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
                  Current life situation assessment and specific goals
                  discussion
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
                  Gemstone compatibility testing based on individual energy
                  fields
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
                  Quality selection considering clarity, color, cut, and carat
                  weight
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
                  Proper purification and energization procedures explanation
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
                  Wearing instructions with auspicious timing and mantras
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CosmicCTA
        title="Ready to Find Your Perfect Gemstone?"
        description="Discover the transformative power of authentic gemstones with our expert guidance and personalized selection process."
        button={{
          label: "Book Gemstone Consultation",
          action: { type: "link", href: "/book-appointment" },
        }}
      />
    </>
  );
}
