import CosmicCTA from "@/components/common/common-cta";
import {
  Gem,
  CheckCircle,
  Crown,
  Diamond,
  Sparkles,
  Shield,
} from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

export default function GemstonesPage() {
  const t = useTranslations("solutions.gemstones");
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
              <Gem className="w-4 h-4 mr-2" />
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
      {/* Gemstone Benefits */}
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
              </div>
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
      {/* Gemstone Categories */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("categories.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("categories.subtitle")}
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("categories.items.0.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("categories.items.0.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.0.examples.0")}</li>
                    <li>• {t("categories.items.0.examples.1")}</li>
                    <li>• {t("categories.items.0.examples.2")}</li>
                    <li>• {t("categories.items.0.examples.3")}</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.0.examples.4")}</li>
                    <li>• {t("categories.items.0.examples.5")}</li>
                    <li>• {t("categories.items.0.examples.6")}</li>
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("categories.items.1.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("categories.items.1.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.1.examples.0")}</li>
                    <li>• {t("categories.items.1.examples.1")}</li>
                    <li>• {t("categories.items.1.examples.2")}</li>
                    <li>• {t("categories.items.1.examples.3")}</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.1.examples.4")}</li>
                    <li>• {t("categories.items.1.examples.5")}</li>
                    <li>• {t("categories.items.1.examples.6")}</li>
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("categories.items.2.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("categories.items.2.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.2.examples.0")}</li>
                    <li>• {t("categories.items.2.examples.1")}</li>
                    <li>• {t("categories.items.2.examples.2")}</li>
                    <li>• {t("categories.items.2.examples.3")}</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.2.examples.4")}</li>
                    <li>• {t("categories.items.2.examples.5")}</li>
                    <li>• {t("categories.items.2.examples.6")}</li>
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
                </div>{" "}
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("categories.items.3.title")}
                </h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("categories.items.3.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.3.examples.0")}</li>
                    <li>• {t("categories.items.3.examples.1")}</li>
                    <li>• {t("categories.items.3.examples.2")}</li>
                    <li>• {t("categories.items.3.examples.3")}</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white/70 space-y-1">
                    <li>• {t("categories.items.3.examples.4")}</li>
                    <li>• {t("categories.items.3.examples.5")}</li>
                    <li>• {t("categories.items.3.examples.6")}</li>
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
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("planetaryGemstones.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("planetaryGemstones.subtitle")}
            </p>
          </div>
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Sun - Ruby */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div>
                  {" "}
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    {t("planetaryGemstones.items.0.planet")}
                  </h3>
                  <p className="text-rose-400 font-medium text-lg">
                    {t("planetaryGemstones.items.0.gem")}
                  </p>
                  <ul className="mt-4 space-y-1 text-slate-600">
                    <li>• {t("planetaryGemstones.items.0.benefits.0")}</li>
                    <li>• {t("planetaryGemstones.items.0.benefits.1")}</li>
                    <li>• {t("planetaryGemstones.items.0.benefits.2")}</li>
                    <li>• {t("planetaryGemstones.items.0.benefits.3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Wearing Instructions:
                  </h4>
                  <p className="text-slate-600">
                    {t("planetaryGemstones.items.0.wear")}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Sacred Mantra:
                  </h4>
                  <p className="text-rose-400 italic">
                    {t("planetaryGemstones.items.0.mantra")}
                  </p>
                </div>
              </div>
            </div>

            {/* Moon - Pearl */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div>
                  {" "}
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    {t("planetaryGemstones.items.1.planet")}
                  </h3>
                  <p className="text-rose-400 font-medium text-lg">
                    {t("planetaryGemstones.items.1.gem")}
                  </p>
                  <ul className="mt-4 space-y-1 text-slate-600">
                    <li>• {t("planetaryGemstones.items.1.benefits.0")}</li>
                    <li>• {t("planetaryGemstones.items.1.benefits.1")}</li>
                    <li>• {t("planetaryGemstones.items.1.benefits.2")}</li>
                    <li>• {t("planetaryGemstones.items.1.benefits.3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Wearing Instructions:
                  </h4>
                  <p className="text-slate-600">
                    {t("planetaryGemstones.items.1.wear")}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Sacred Mantra:
                  </h4>
                  <p className="text-rose-400 italic">
                    {t("planetaryGemstones.items.1.mantra")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mars - Red Coral */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                <div>
                  {" "}
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    {t("planetaryGemstones.items.2.planet")}
                  </h3>
                  <p className="text-rose-400 font-medium text-lg">
                    {t("planetaryGemstones.items.2.gem")}
                  </p>
                  <ul className="mt-4 space-y-1 text-slate-600">
                    <li>• {t("planetaryGemstones.items.2.benefits.0")}</li>
                    <li>• {t("planetaryGemstones.items.2.benefits.1")}</li>
                    <li>• {t("planetaryGemstones.items.2.benefits.2")}</li>
                    <li>• {t("planetaryGemstones.items.2.benefits.3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Wearing Instructions:
                  </h4>
                  <p className="text-slate-600">
                    {t("planetaryGemstones.items.2.wear")}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Sacred Mantra:
                  </h4>
                  <p className="text-rose-400 italic">
                    {t("planetaryGemstones.items.2.mantra")}
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
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("qualityAssessment.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("qualityAssessment.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Clarity */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              {" "}
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                {t("qualityAssessment.items.0.title")}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {t("qualityAssessment.items.0.description")}
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  {t("qualityAssessment.items.0.highlight")}
                </span>
              </div>
            </div>

            {/* Color */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              {" "}
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                {t("qualityAssessment.items.1.title")}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {t("qualityAssessment.items.1.description")}
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  {t("qualityAssessment.items.1.highlight")}
                </span>
              </div>
            </div>

            {/* Cut */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              {" "}
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                {t("qualityAssessment.items.2.title")}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {t("qualityAssessment.items.2.description")}
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  {t("qualityAssessment.items.2.highlight")}
                </span>
              </div>
            </div>

            {/* Carat Weight */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              {" "}
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                {t("qualityAssessment.items.3.title")}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {t("qualityAssessment.items.3.description")}
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  {t("qualityAssessment.items.3.highlight")}
                </span>
              </div>
            </div>

            {/* Origin */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              {" "}
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                {t("qualityAssessment.items.4.title")}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {t("qualityAssessment.items.4.description")}
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  {t("qualityAssessment.items.4.highlight")}
                </span>
              </div>
            </div>

            {/* Treatment */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "#382144" }}
            >
              {" "}
              <h3 className="text-xl font-serif font-bold mb-4 text-white">
                {t("qualityAssessment.items.5.title")}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {t("qualityAssessment.items.5.description")}
              </p>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="text-rose-300 text-sm">
                  {t("qualityAssessment.items.5.highlight")}
                </span>
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
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("selectionProcess.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("selectionProcess.subtitle")}
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
                  {t("selectionProcess.steps.0")}
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
              </div>{" "}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {t("selectionProcess.steps.3")}
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
                  {t("selectionProcess.steps.4")}
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
                  {t("selectionProcess.steps.5")}
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
