import CosmicCTA from "@/components/common/common-cta";
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
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

export default function MuhuratTimingsPage() {
  const t = useTranslations("remedies.muhuratTimings");
  return (
    <>
      <div className="flex justify-end p-4">
        <LanguageSwitcher />
      </div>
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
              {" "}
              <Clock className="w-4 h-4 mr-2" />
              {t("hero.badge")}
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: "#DAB1AE" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            {t("hero.subtitle")}
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
            {" "}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("benefits.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>{" "}
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.0")}
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.1")}
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.2")}
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.3")}
              </h3>
            </div>

            {/* Benefit 5 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.4")}
              </h3>
            </div>

            {/* Benefit 6 */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.5")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Types of Muhurat */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("types.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("types.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Wedding Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-white mr-3" />{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.0.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.0.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.0.perfectFor.0")}</li>
                  <li>• {t("types.items.0.perfectFor.1")}</li>
                  <li>• {t("types.items.0.perfectFor.2")}</li>
                  <li>• {t("types.items.0.perfectFor.3")}</li>
                </ul>
              </div>
            </div>

            {/* Business Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.1.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.1.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.1.perfectFor.0")}</li>
                  <li>• {t("types.items.1.perfectFor.1")}</li>
                  <li>• {t("types.items.1.perfectFor.2")}</li>
                  <li>• {t("types.items.1.perfectFor.3")}</li>
                </ul>
              </div>
            </div>

            {/* Spiritual Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Sun className="w-6 h-6 text-white mr-3" />{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.2.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.2.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.2.perfectFor.0")}</li>
                  <li>• {t("types.items.2.perfectFor.1")}</li>
                  <li>• {t("types.items.2.perfectFor.2")}</li>
                  <li>• {t("types.items.2.perfectFor.3")}</li>
                </ul>
              </div>
            </div>

            {/* Personal Muhurat */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <div className="flex items-center mb-4">
                <Moon className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.3.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.3.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Perfect for:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.3.perfectFor.0")}</li>
                  <li>• {t("types.items.3.perfectFor.1")}</li>
                  <li>• {t("types.items.3.perfectFor.2")}</li>
                  <li>• {t("types.items.3.perfectFor.3")}</li>
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
            {" "}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("timingConsiderations.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("timingConsiderations.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Planetary Positions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {" "}
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("timingConsiderations.items.0.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("timingConsiderations.items.0.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.0.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.0.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.0.features.2")}
                </li>
              </ul>
            </div>

            {/* Lunar Calendar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("timingConsiderations.items.1.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("timingConsiderations.items.1.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.1.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.1.features.1")}{" "}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.1.features.2")}
                </li>
              </ul>
            </div>

            {/* Nakshatra Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("timingConsiderations.items.2.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("timingConsiderations.items.2.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.2.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.2.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.2.features.2")}
                </li>
              </ul>
            </div>

            {/* Weekday Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("timingConsiderations.items.3.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("timingConsiderations.items.3.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.3.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.3.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("timingConsiderations.items.3.features.2")}
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
            {" "}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("periodsToAvoid.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("periodsToAvoid.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Rahu Kaal */}
            <div
              className="rounded-2xl p-6 border-2 border-red-400/50"
              style={{ background: "#382144" }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />{" "}
                <h3 className="text-xl font-serif font-bold text-white">
                  {t("periodsToAvoid.items.0.title")}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                {t("periodsToAvoid.items.0.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.0.duration")}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.0.impact")}
                  </p>
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
                  {t("periodsToAvoid.items.1.title")}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                {t("periodsToAvoid.items.1.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.1.duration")}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.1.impact")}
                  </p>
                </div>
              </div>
            </div>

            {/* Gulika Kaal */}
            <div
              className="rounded-2xl p-6 border-2 border-red-400/50"
              style={{ background: "#382144" }}
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />{" "}
                <h3 className="text-xl font-serif font-bold text-white">
                  {t("periodsToAvoid.items.2.title")}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                {t("periodsToAvoid.items.2.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.2.duration")}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.2.impact")}
                  </p>
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
                  {t("periodsToAvoid.items.3.title")}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                {t("periodsToAvoid.items.3.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Duration:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.3.duration")}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Impact:
                  </h4>
                  <p className="text-white/70 text-sm">
                    {t("periodsToAvoid.items.3.impact")}
                  </p>
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
            {" "}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("consultationProcess.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("consultationProcess.subtitle")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("consultationProcess.steps.0")}
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
                  {t("consultationProcess.steps.1")}
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
                  {t("consultationProcess.steps.2")}
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
                  {t("consultationProcess.steps.3")}
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
                  {t("consultationProcess.steps.4")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <CosmicCTA
        title={t("cta.title")}
        description={t("cta.description")}
        button={{
          label: t("cta.buttonLabel"),
          action: { type: "link", href: t("cta.buttonLink") },
        }}
      />
    </>
  );
}
