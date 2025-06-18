import CosmicCTA from "@/components/common/common-cta";
import { Flame, CheckCircle, Sun, Star, Shield, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

export default function GrahShantiPoojaPage() {
  const t = useTranslations("solutions.grahShantiPooja");
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
              <Flame className="w-4 h-4 mr-2" />
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
      {/* Benefits of Graha Shanti */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="text-center mb-16">
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
              </div>{" "}
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {t("benefits.items.2")}
              </h3>
            </div>{" "}
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
      {/* Types of Graha Shanti Poojas */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("types.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("types.subtitle")}
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.0.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.0.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">
                  Available Poojas:
                </h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.0.options.0")}</li>
                  <li>• {t("types.items.0.options.1")}</li>
                  <li>• {t("types.items.0.options.2")}</li>
                  <li>• {t("types.items.0.options.3")}</li>
                  <li>• {t("types.items.0.options.4")}</li>
                  <li>• {t("types.items.0.options.5")}</li>
                  <li>• {t("types.items.0.options.6")}</li>
                  <li>• {t("types.items.0.options.7")}</li>
                  <li>• {t("types.items.0.options.8")}</li>
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.1.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.1.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.1.keyBenefits.0")}</li>
                  <li>• {t("types.items.1.keyBenefits.1")}</li>
                  <li>• {t("types.items.1.keyBenefits.2")}</li>
                  <li>• {t("types.items.1.keyBenefits.3")}</li>
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.2.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.2.description")}
              </p>
              <div className="mb-4">
                {" "}
                <h4 className="text-white font-semibold mb-2">
                  Dosha Solutions:
                </h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.2.doshaSolutions.0")}</li>
                  <li>• {t("types.items.2.doshaSolutions.1")}</li>
                  <li>• {t("types.items.2.doshaSolutions.2")}</li>
                  <li>• {t("types.items.2.doshaSolutions.3")}</li>
                  <li>• {t("types.items.2.doshaSolutions.4")}</li>
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("types.items.3.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("types.items.3.description")}
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">
                  Ceremony Types:
                </h4>
                <ul className="text-white/70 space-y-1">
                  <li>• {t("types.items.3.ceremonyTypes.0")}</li>
                  <li>• {t("types.items.3.ceremonyTypes.1")}</li>
                  <li>• {t("types.items.3.ceremonyTypes.2")}</li>
                  <li>• {t("types.items.3.ceremonyTypes.3")}</li>
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
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("afflictions.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("afflictions.subtitle")}
            </p>
          </div>
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Sun (Surya) */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {" "}
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                {t("afflictions.planets.0.name")}
              </h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Common Problems:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• {t("afflictions.planets.0.problems.0")}</li>
                    <li>• {t("afflictions.planets.0.problems.1")}</li>
                    <li>• {t("afflictions.planets.0.problems.2")}</li>
                    <li>• {t("afflictions.planets.0.problems.3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Quick Solutions:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• {t("afflictions.planets.0.solutions.0")}</li>
                    <li>• {t("afflictions.planets.0.solutions.1")}</li>
                    <li>• {t("afflictions.planets.0.solutions.2")}</li>
                    <li>• {t("afflictions.planets.0.solutions.3")}</li>
                  </ul>
                </div>
                <div>
                  {" "}
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Pooja Ceremony:
                  </h4>
                  <p className="text-slate-600">
                    {t("afflictions.planets.0.pooja")}
                  </p>
                </div>
              </div>
            </div>

            {/* Moon (Chandra) */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {" "}
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                {t("afflictions.planets.1.name")}
              </h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Common Problems:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• {t("afflictions.planets.1.problems.0")}</li>
                    <li>• {t("afflictions.planets.1.problems.1")}</li>
                    <li>• {t("afflictions.planets.1.problems.2")}</li>
                    <li>• {t("afflictions.planets.1.problems.3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Quick Solutions:
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• {t("afflictions.planets.1.solutions.0")}</li>
                    <li>• {t("afflictions.planets.1.solutions.1")}</li>
                    <li>• {t("afflictions.planets.1.solutions.2")}</li>
                    <li>• {t("afflictions.planets.1.solutions.3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Pooja Ceremony:
                  </h4>
                  <p className="text-slate-600">
                    {t("afflictions.planets.1.pooja")}
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
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("package.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("package.subtitle")}
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
              </div>{" "}
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("package.items.0.title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("package.items.0.description")}
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
              </div>{" "}
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("package.items.1.title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("package.items.1.description")}
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
              </div>{" "}
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("package.items.2.title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("package.items.2.description")}
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
              </div>{" "}
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("package.items.3.title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("package.items.3.description")}
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
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("ceremonyProcess.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("ceremonyProcess.subtitle")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.0")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.1")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.2")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.3")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.4")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.5")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.6")}
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
                {" "}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("ceremonyProcess.steps.7")}
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
