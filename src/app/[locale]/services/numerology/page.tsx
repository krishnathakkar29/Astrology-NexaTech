import CosmicCTA from "@/components/common/common-cta";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

export default function NumerologyPage() {
  const t = useTranslations("services.numerology");
  
  return (
    <>
      {" "}
      {/* Hero Section */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #250C3B 0%, #140013 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
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

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-4 h-4 rounded-full opacity-70 animate-float"
          style={{
            background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 rounded-full opacity-50 animate-float"
          style={{
            background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-2 h-2 rounded-full opacity-60 animate-float"
          style={{
            background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-5 h-5 rounded-full opacity-40 animate-float"
          style={{
            background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
            animationDelay: "1s",
          }}
        ></div>
      </section>{" "}
      {/* The Science of Numbers */}
      <section
        className="py-20 bg-white"
        // style={{
        //   background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        // }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-800">
                {t("science.title")}
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>{t("science.paragraphs.0")}</p>
                <p>{t("science.paragraphs.1")}</p>
                <p>{t("science.paragraphs.2")}</p>
              </div>
            </div>

            {/* Right Content - Mathematical Formulas */}
            <div className="bg-white rounded-2xl shadow-lg">
              <div className="w-full h-96 bg-black rounded-lg flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=800"
                  alt="Numerology Calculations"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Understanding Number Vibrations */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #DFB7B3 0%, #FDFAFA 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("vibrations.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("vibrations.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Number 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">
                    {String(t("vibrations.numbers.0.digit"))}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  {t("vibrations.numbers.0.name")}
                </h3>
              </div>{" "}
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.0.traits.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.0.traits.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.0.traits.2")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.0.traits.3")}
                </li>
              </ul>
            </div>{" "}
            {/* Number 2 */}{" "}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">
                    {String(t("vibrations.numbers.1.digit"))}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  {t("vibrations.numbers.1.name")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.1.traits.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.1.traits.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.1.traits.2")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.1.traits.3")}
                </li>
              </ul>
            </div>
            {/* Number 3 */}{" "}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">
                    {String(t("vibrations.numbers.2.digit"))}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  {t("vibrations.numbers.2.name")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.2.traits.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.2.traits.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.2.traits.2")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.2.traits.3")}
                </li>
              </ul>
            </div>
            {/* Number 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">
                    {String(t("vibrations.numbers.3.digit"))}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  {t("vibrations.numbers.3.name")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.3.traits.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.3.traits.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.3.traits.2")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.3.traits.3")}
                </li>
              </ul>
            </div>{" "}
            {/* Number 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">
                    {String(t("vibrations.numbers.4.digit"))}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  {t("vibrations.numbers.4.name")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.4.traits.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.4.traits.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.4.traits.2")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.4.traits.3")}
                </li>
              </ul>
            </div>{" "}
            {/* Number 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">
                    {t("vibrations.numbers.5.digit")}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  {t("vibrations.numbers.5.name")}
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.5.traits.0")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.5.traits.1")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.5.traits.2")}
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  {t("vibrations.numbers.5.traits.3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Your Complete Numerology Profile */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("profile.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("profile.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Profile Items */}
            <div className="space-y-8">
              {/* Life path number calculation */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t("profile.items.0")}
                  </h3>
                  <p className="text-white/80">{t("profile.items.1")}</p>
                </div>
              </div>

              {/* Destiny number analysis */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t("profile.items.2")}
                  </h3>
                  <p className="text-white/80">{t("profile.items.3")}</p>
                </div>
              </div>

              {/* Lucky numbers and dates */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t("profile.items.4")}
                  </h3>
                  <p className="text-white/80">{t("profile.items.5")}</p>
                </div>
              </div>

              {/* Name numerology */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t("profile.items.6")}
                  </h3>
                  <p className="text-white/80">{t("profile.items.7")}</p>
                </div>
              </div>
            </div>{" "}
            {/* Right Content - Sample Chart */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white text-center">
                {t("profile.items.8")}
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    {t("profile.items.9")}
                  </span>
                  <span className="text-rose-300 font-bold text-xl">
                    {t("profile.items.10")}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    {t("profile.items.11")}
                  </span>
                  <span className="text-rose-300 font-bold text-xl">
                    {t("profile.items.12")}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    {t("profile.items.13")}
                  </span>
                  <span className="text-rose-300 font-bold text-xl">
                    {t("profile.items.14")}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    {t("profile.items.15")}
                  </span>
                  <span className="text-rose-300 font-bold text-xl">
                    {t("profile.items.16")}
                  </span>
                </div>
              </div>
              <p className="text-white/80 text-center text-sm">
                {t("profile.items.17")}
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Benefits of Numerological Guidance */}
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

          <div className="max-w-6xl mx-auto">
            {/* Top row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Benefit 1 */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: "#B08A8B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <p className="text-slate-800 font-medium">
                  {t("benefits.items.0")}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: "#B08A8B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <p className="text-slate-800 font-medium">
                  {t("benefits.items.1")}
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: "#B08A8B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <p className="text-slate-800 font-medium">
                  {t("benefits.items.2")}
                </p>
              </div>
            </div>

            {/* Bottom row - 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Benefit 4 */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: "#B08A8B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <p className="text-slate-800 font-medium">
                  {t("benefits.items.3")}
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ background: "#B08A8B" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <p className="text-slate-800 font-medium">
                  {t("benefits.items.4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* How Numerology Analysis Works */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(to bottom, #DFB7B3 0%, #FDFAFA 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("howItWorks.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "#B08A8B" }}
              >
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-800">
                {t("howItWorks.steps.0")}
              </h3>
              <p className="text-slate-600">{t("howItWorks.steps.1")}</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "#B08A8B" }}
              >
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-800">
                {t("howItWorks.steps.2")}
              </h3>
              <p className="text-slate-600">{t("howItWorks.steps.3")}</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "#B08A8B" }}
              >
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-800">
                {t("howItWorks.steps.4")}
              </h3>
              <p className="text-slate-600">{t("howItWorks.steps.5")}</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "#B08A8B" }}
              >
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-slate-800">
                {t("howItWorks.steps.6")}
              </h3>
              <p className="text-slate-600">{t("howItWorks.steps.7")}</p>
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
