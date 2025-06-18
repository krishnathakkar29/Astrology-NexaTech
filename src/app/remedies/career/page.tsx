import CosmicCTA from "@/components/common/common-cta";
import {
  Briefcase,
  TrendingUp,
  Target,
  Users,
  Building,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function CareerPage() {
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
              <Briefcase className="w-4 h-4 mr-2" />
              Career Remedies
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Accelerate Your Career Success
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Unlock your professional potential with powerful astrological
            remedies designed to boost career growth, overcome obstacles, and
            achieve lasting success.
          </p>
        </div>
      </section>

      {/* Career Benefits */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Career Benefits
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Transform your professional life with ancient wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Accelerate career growth
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Overcome professional obstacles
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Enhance leadership qualities
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Improve work relationships
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Increase financial prosperity
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Find ideal career path
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Career Remedies */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Career Remedies
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Powerful solutions for professional advancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Career Enhancement Rituals */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Career Enhancement Rituals
              </h3>
              <p className="text-white/80 leading-relaxed">
                Specific pujas and ceremonies to remove career obstacles and
                attract new opportunities.
              </p>
            </div>

            {/* Success Mantras */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Success Mantras
              </h3>
              <p className="text-white/80 leading-relaxed">
                Powerful mantras to boost professional growth, leadership
                skills, and career advancement.
              </p>
            </div>

            {/* Business Remedies */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Business Remedies
              </h3>
              <p className="text-white/80 leading-relaxed">
                Special solutions for entrepreneurs and business owners to
                ensure growth and prosperity.
              </p>
            </div>

            {/* Recognition Therapy */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Recognition Therapy
              </h3>
              <p className="text-white/80 leading-relaxed">
                Remedies to gain recognition, appreciation, and respect in your
                professional field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Specializations */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Career Specializations
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Tailored solutions for every professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Job Seekers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-rose-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Job Seekers
                </h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Find the perfect job opportunity aligned with your skills and
                planetary influences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Interview success remedies
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Job attraction mantras
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Timing for applications
                </li>
              </ul>
            </div>

            {/* Corporate Professionals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-rose-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Corporate Professionals
                </h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Advance in your corporate career with remedies for promotion and
                leadership roles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Promotion enhancement
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Leadership development
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Workplace harmony
                </li>
              </ul>
            </div>

            {/* Entrepreneurs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-rose-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Entrepreneurs
                </h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Build and grow your business with astrological guidance and
                success remedies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Business launch timing
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Partnership compatibility
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Financial growth
                </li>
              </ul>
            </div>

            {/* Career Transition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <ArrowRight className="w-6 h-6 text-rose-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-slate-800">
                  Career Transition
                </h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Navigate career changes smoothly with proper timing and
                planetary support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Career change guidance
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Skill development
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  New field adaptation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planetary Career Influences */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Planetary Career Influences
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Understanding cosmic forces in your professional life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sun */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                Sun
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Leadership, Authority, Government Jobs
              </p>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Sun mantras</li>
                <li>• Ruby gemstone</li>
                <li>• Sunday fasting</li>
              </ul>
            </div>

            {/* Moon */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                Moon
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Public Relations, Healthcare, Hospitality
              </p>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Moon mantras</li>
                <li>• Pearl gemstone</li>
                <li>• Monday rituals</li>
              </ul>
            </div>

            {/* Mars */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                Mars
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Military, Sports, Engineering, Real Estate
              </p>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Mars mantras</li>
                <li>• Red Coral</li>
                <li>• Tuesday worship</li>
              </ul>
            </div>

            {/* Mercury */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                Mercury
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Communication, IT, Business, Education
              </p>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Mercury mantras</li>
                <li>• Emerald gemstone</li>
                <li>• Wednesday prayers</li>
              </ul>
            </div>

            {/* Jupiter */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                Jupiter
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Teaching, Law, Banking, Spirituality
              </p>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Jupiter mantras</li>
                <li>• Yellow Sapphire</li>
                <li>• Thursday rituals</li>
              </ul>
            </div>

            {/* Venus */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                Venus
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Arts, Entertainment, Fashion, Luxury
              </p>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Venus mantras</li>
                <li>• Diamond/White Sapphire</li>
                <li>• Friday worship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Career Consultation Process */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Our Career Consultation Process
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Systematic approach to professional success
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
                  Career chart analysis to identify professional strengths and
                  challenges
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
                  Assessment of current career situation and future goals
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
                  Planetary influence evaluation on career prospects
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
                  Customized remedy plan for specific career objectives
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
                  Implementation guidance with proper timing and procedures
                </h3>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start space-x-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)",
                }}
              >
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Regular progress monitoring and remedy adjustments
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CosmicCTA
        title="Ready to Transform Your Career?"
        description="Take charge of your professional destiny with our expert career guidance and powerful remedies."
        button={{
          label: "Book Career Consultation",
          action: { type: "link", href: "/book-appointment" },
        }}
      />
    </>
  );
}
