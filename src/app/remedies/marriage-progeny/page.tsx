import CosmicCTA from "@/components/common/common-cta";
import { Heart, Star, Users, Baby, CheckCircle } from "lucide-react";

export default function MarriageProgenyPage() {
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
              <Heart className="w-4 h-4 mr-2" />
              Marriage & Family
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Blissful Marriage & Divine Progeny
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Find your life partner, strengthen marital bonds, and receive divine
            blessings for progeny through powerful Vedic remedies and ancient
            wisdom.
          </p>
        </div>
      </section>

      {/* Marriage & Progeny Benefits */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Marriage & Progeny Benefits
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Transform your relationship journey through cosmic guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Overcome delays in marriage
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Improve relationship compatibility
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Resolve family conflicts
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Enhance fertility and conception
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Strengthen marital bonds
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Remove obstacles in love life
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Marriage & Progeny Remedies */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Marriage & Progeny Remedies
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Sacred solutions for love, marriage, and family
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vedic Rituals */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Vedic Rituals
              </h3>
              <p className="text-white/80 leading-relaxed">
                Specific pujas and ceremonies to invoke divine blessings for
                marriage and progeny.
              </p>
            </div>

            {/* Gemstone Therapy */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Gemstone Therapy
              </h3>
              <p className="text-white/80 leading-relaxed">
                Wearing specific gemstones to strengthen Venus and enhance love
                relationships.
              </p>
            </div>

            {/* Mantra Chanting */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Mantra Chanting
              </h3>
              <p className="text-white/80 leading-relaxed">
                Powerful mantras to remove obstacles and attract the right life
                partner.
              </p>
            </div>

            {/* Fertility Enhancing */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Fertility Enhancing
              </h3>
              <p className="text-white/80 leading-relaxed">
                Special remedies and practices to overcome conception
                difficulties and bless with children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Areas */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Specialized Areas
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Comprehensive support for all relationship aspects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Marriage Timing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Marriage Timing
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Find the most auspicious time for marriage through careful
                astrological analysis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Muhurat selection
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Planetary alignment
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Compatible timing
                </li>
              </ul>
            </div>

            {/* Partner Compatibility */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Partner Compatibility
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Assess compatibility between partners for a harmonious married
                life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Kundali matching
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Guna Milan analysis
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Manglik considerations
                </li>
              </ul>
            </div>

            {/* Relationship Issues */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Relationship Issues
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Resolve conflicts and strengthen bonds between partners and
                families.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Communication remedies
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Trust building practices
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Family harmony rituals
                </li>
              </ul>
            </div>

            {/* Progeny Concerns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Progeny Concerns
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Address fertility issues and bless couples with healthy
                children.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Fertility enhancement
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Conception timing
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Child health protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Consultation Process */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Our Consultation Process
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Step-by-step guidance for your relationship journey
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
                  Detailed birth chart analysis for marriage and progeny
                  prospects
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
                  Assessment of planetary influences affecting relationships
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
                  Customized remedial plan including mantras, gemstones, and
                  rituals
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
                  Guidance on timing for marriage ceremonies and conception
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
                  Ongoing support throughout your relationship journey
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CosmicCTA
        title="Ready to Find Your Soulmate?"
        description="Take the first step towards a blissful marriage and divine progeny with our personalized astrological guidance and sacred remedies."
        button={{
          label: "Book Marriage Consultation",
          action: { type: "link", href: "/book-appointment" },
        }}
      />
    </>
  );
}
