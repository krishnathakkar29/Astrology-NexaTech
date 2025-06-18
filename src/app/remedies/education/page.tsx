import CosmicCTA from "@/components/common/common-cta";
import {
  GraduationCap,
  Target,
  BookOpen,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

function page() {
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
              <GraduationCap className="w-4 h-4 mr-2" />
              Educational Excellence
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            Academic Success Through Ancient Wisdom
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Unlock your learning potential and achieve educational excellence
            with time-tested astrological remedies designed to enhance
            concentration, memory, and academic performance.
          </p>
        </div>
      </section>

      {/* Our Educational Consultation Process */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Our Educational Consultation Process
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Structured approach to academic success
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
                  Educational chart analysis to identify learning patterns and
                  obstacles
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
                  Assessment of current academic challenges and goals
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
                  Personalized remedy plan based on planetary influences
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
                  Implementation of mantras, gemstones, and ritual practices
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
                  Ongoing support and guidance throughout the educational
                  journey
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Areas of Expertise
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Comprehensive educational support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Academic Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Academic Performance
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Remedies for improving grades, concentration, and overall
                academic excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Memory enhancement techniques
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Focus improvement mantras
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Study schedule optimization
                </li>
              </ul>
            </div>

            {/* Competitive Exams */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Competitive Exams
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Special guidance for entrance exams, competitive tests, and
                professional certifications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Exam-specific remedies
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Stress reduction techniques
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Confidence building practices
                </li>
              </ul>
            </div>

            {/* Higher Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Higher Education
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Support for college admissions, research work, and advanced
                studies abroad.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  University selection guidance
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Scholarship assistance
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Research enhancement
                </li>
              </ul>
            </div>

            {/* Career Transition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                Career Transition
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Educational guidance for career changes and professional skill
                development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Skill enhancement remedies
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Career transition support
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Professional growth mantras
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Remedies */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Educational Remedies
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Powerful solutions for academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Saraswati Puja */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Saraswati Puja
              </h3>
              <p className="text-white/80 leading-relaxed">
                Special worship of Goddess Saraswati to enhance wisdom,
                knowledge, and learning abilities.
              </p>
            </div>

            {/* Mercury Strengthening */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Mercury Strengthening
              </h3>
              <p className="text-white/80 leading-relaxed">
                Remedies to strengthen Mercury planet for improved intellect and
                communication skills.
              </p>
            </div>

            {/* Vidya Mantras */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Vidya Mantras
              </h3>
              <p className="text-white/80 leading-relaxed">
                Powerful educational mantras to remove obstacles in learning and
                boost academic performance.
              </p>
            </div>

            {/* Success Rituals */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Success Rituals
              </h3>
              <p className="text-white/80 leading-relaxed">
                Special ceremonies performed during auspicious times for
                examination success and career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Benefits */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Educational Benefits
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Achieve academic excellence through ancient wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Improve concentration and memory
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Overcome learning difficulties
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Achieve academic excellence
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Enhance creative abilities
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Reduce exam stress and anxiety
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Unlock hidden potential
              </h3>
            </div>
          </div>
        </div>
      </section>

      <CosmicCTA
        title="Ready to Excel in Your Studies?"
        description="Unlock your full academic potential with our personalized educational remedies and expert guidance for lasting success."
        button={{
          label: "Book Educational Consultation",
          action: { type: "link", href: "/book-appointment" },
        }}
      />
    </>
  );
}

export default page;
