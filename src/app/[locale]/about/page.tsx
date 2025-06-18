import { Users, BookOpen, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CosmicCTA from "@/components/common/common-cta";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #250C3B 0%, #140013 100%)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #301931 0%, #261843 50%, #301931 100%)`,
              opacity: 0.85,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {" "}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-white/90">
            {t("subtitle")}
          </p>
          <Button
            className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
            }}
          >
            {t("bookConsultation")}
          </Button>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-4 h-4 rounded-full opacity-70 animate-float"
          style={{
            background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 rounded-full opacity-50 animate-float"
          style={{
            background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-2 h-2 rounded-full opacity-60 animate-float"
          style={{
            background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-5 h-5 rounded-full opacity-40 animate-float"
          style={{
            background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
            animationDelay: "1s",
          }}
        ></div>
      </section>

      {/* Our Sacred Mission */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-800">
                {t("sacredMission.title")}
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>{t("sacredMission.desc1")}</p>
                <p>{t("sacredMission.desc2")}</p>
                <p>{t("sacredMission.desc3")}</p>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              {t("achievements.title")}
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              {t("achievements.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Happy Clients */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>{" "}
              <p className="text-white/80">
                {t("achievements.stats.happyClients")}
              </p>
            </div>

            {/* Years Experience */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <p className="text-white/80">
                {t("achievements.stats.yearsExperience")}
              </p>
            </div>

            {/* Accurate Predictions */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-white/80">
                {t("achievements.stats.accuratePredictions")}
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-white/80">
                {t("achievements.stats.clientSatisfaction")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #DFB7B3 0%, #FDFAFA 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("philosophy.title")}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("philosophy.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {" "}
            {/* Ancient Wisdom */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("philosophy.items.0.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("philosophy.items.0.description")}
              </p>
            </div>
            {/* Compassionate Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("philosophy.items.1.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("philosophy.items.1.description")}
              </p>
            </div>{" "}
            {/* Proven Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-800">
                {t("philosophy.items.2.title")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t("philosophy.items.2.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Expert Astrologers */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #E2BCB9 0%, #FBF5F4 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              {t("meetExpertAstrologers.title")}
            </h2>{" "}
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t("meetExpertAstrologers.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Astrologer 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Pandit Rajesh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>{" "}
              <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                {t("meetExperts.experts.0.name")}
              </h3>
              <p className="text-rose-400 font-medium mb-2">
                {t("meetExperts.experts.0.title")}
              </p>
              <p className="text-slate-600 text-sm mb-4">25+ Years</p>
              <p className="text-slate-600 font-medium mb-4">Lorem Ipsum</p>
              <p className="text-slate-600 leading-relaxed">
                {t("meetExperts.experts.0.description")}
              </p>
            </div>

            {/* Astrologer 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Dr. Sunita Verma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                {t("meetExperts.experts.1.name")}
              </h3>
              <p className="text-rose-400 font-medium mb-2">
                {t("meetExperts.experts.1.title")}
              </p>
              <p className="text-slate-600 text-sm mb-4">20+ Years</p>
              <p className="text-slate-600 font-medium mb-4">Lorem Ipsum</p>
              <p className="text-slate-600 leading-relaxed">
                {t("meetExperts.experts.1.description")}
              </p>
            </div>

            {/* Astrologer 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Acharya Vikram Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                {t("meetExperts.experts.2.name")}
              </h3>{" "}
              <p className="text-rose-400 font-medium mb-2">
                {t("meetExperts.experts.2.title")}
              </p>
              <p className="text-slate-600 text-sm mb-4">15+ Years</p>
              <p className="text-slate-600 font-medium mb-4">Lorem Ipsum</p>
              <p className="text-slate-600 leading-relaxed">
                {t("meetExperts.experts.2.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CosmicCTA
        title="Ready to Begin Your Journey?"
        description="Experience the transformative power of authentic astrological guidance. Our experts are here to illuminate your path forward."
        button={{
          label: "Schedule Your Consultation",
          action: { type: "link", href: "/book-appointment" },
        }}
      />
    </>
  );
}
