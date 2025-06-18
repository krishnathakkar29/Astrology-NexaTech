import CosmicCTA from "@/components/common/common-cta";
import {
  GraduationCap,
  Target,
  BookOpen,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

function page() {
  const t = useTranslations("remedies.education");
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
              <GraduationCap className="w-4 h-4 mr-2" />
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
      </section>{" "}
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
                {" "}
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
                {" "}
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
                {" "}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("consultationProcess.steps.4")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
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
              {t("expertise.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("expertise.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {" "}
            {/* Academic Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("expertise.categories.0.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("expertise.categories.0.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.0.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.0.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.0.features.2")}
                </li>
              </ul>
            </div>{" "}
            {/* Competitive Exams */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("expertise.categories.1.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("expertise.categories.1.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.1.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.1.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.1.features.2")}
                </li>
              </ul>
            </div>{" "}
            {/* Higher Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("expertise.categories.2.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("expertise.categories.2.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.2.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.2.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.2.features.2")}
                </li>
              </ul>
            </div>{" "}
            {/* Career Transition */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("expertise.categories.3.title")}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t("expertise.categories.3.description")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.3.features.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.3.features.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("expertise.categories.3.features.2")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Educational Remedies */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("remedies.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("remedies.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {" "}
            {/* Saraswati Puja */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {t("remedies.items.0.title")}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t("remedies.items.0.description")}
              </p>
            </div>{" "}
            {/* Mercury Strengthening */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {t("remedies.items.1.title")}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t("remedies.items.1.description")}
              </p>
            </div>{" "}
            {/* Vidya Mantras */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {t("remedies.items.2.title")}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t("remedies.items.2.description")}
              </p>
            </div>{" "}
            {/* Success Rituals */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#382144" }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {t("remedies.items.3.title")}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t("remedies.items.3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
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
              {t("benefits.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {" "}
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.0")}
              </h3>
            </div>
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.1")}
              </h3>
            </div>
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.2")}
              </h3>
            </div>
            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.3")}
              </h3>
            </div>
            {/* Benefit 5 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.4")}
              </h3>
            </div>
            {/* Benefit 6 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.5")}
              </h3>
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

export default page;
