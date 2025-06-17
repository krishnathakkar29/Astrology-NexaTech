import { Users, BookOpen, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-700/60"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            About Cosmic Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-white/90">
            Bridging ancient wisdom with modern understanding to guide you on
            your spiritual journey
          </p>
          <Button
            className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
            }}
          >
            Book Consultation
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-800">
                Our Sacred Mission
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  For over two decades, Cosmic Insights has been a beacon of
                  authentic astrological wisdom, helping thousands of souls
                  discover their true purpose and navigate life's cosmic
                  currents with confidence and clarity.
                </p>
                <p>
                  Founded by a lineage of traditional Vedic astrologers, we
                  honor the ancient scriptures while embracing modern
                  understanding to provide relevant, accurate, and
                  transformative guidance for today's seekers.
                </p>
                <p>
                  Our approach combines rigorous astrological analysis with
                  compassionate counseling, ensuring that each consultation not
                  only reveals cosmic insights but also provides practical
                  guidance for real-world challenges.
                </p>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Our Achievements
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client
              satisfaction
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
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <p className="text-white/80">Happy Clients</p>
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
              <p className="text-white/80">Years Experience</p>
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
              <p className="text-white/80">Accurate Predictions</p>
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
              <p className="text-white/80">Client Satisfaction</p>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Our Philosophy
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Grounded in tradition, guided by compassion, focused on
              transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                Ancient Wisdom
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We honor the timeless teachings of Vedic astrology, passed down
                through generations of enlightened masters.
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
                Compassionate Service
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every consultation is conducted with empathy, understanding, and
                genuine care for your wellbeing and growth.
              </p>
            </div>

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
                Proven Results
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our track record of accurate predictions and successful remedies
                speaks to the effectiveness of our approach.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Meet Our Expert Astrologers
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Our team of certified practitioners brings decades of experience
              and authentic knowledge to every consultation
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
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                Pandit Rajesh Sharma
              </h3>
              <p className="text-rose-400 font-medium mb-2">
                Lead Vedic Astrologer
              </p>
              <p className="text-slate-600 text-sm mb-4">25+ Years</p>
              <p className="text-slate-600 font-medium mb-4">Lorem Ipsum</p>
              <p className="text-slate-600 leading-relaxed">
                Master of Vedic astrology with deep knowledge of ancient texts
                and modern applications.
              </p>
            </div>

            {/* Astrologer 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Pandit Rajesh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                Pandit Rajesh Sharma
              </h3>
              <p className="text-rose-400 font-medium mb-2">
                Lead Vedic Astrologer
              </p>
              <p className="text-slate-600 text-sm mb-4">25+ Years</p>
              <p className="text-slate-600 font-medium mb-4">Lorem Ipsum</p>
              <p className="text-slate-600 leading-relaxed">
                Master of Vedic astrology with deep knowledge of ancient texts
                and modern applications.
              </p>
            </div>

            {/* Astrologer 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Pandit Rajesh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                Pandit Rajesh Sharma
              </h3>
              <p className="text-rose-400 font-medium mb-2">
                Lead Vedic Astrologer
              </p>
              <p className="text-slate-600 text-sm mb-4">25+ Years</p>
              <p className="text-slate-600 font-medium mb-4">Lorem Ipsum</p>
              <p className="text-slate-600 leading-relaxed">
                Master of Vedic astrology with deep knowledge of ancient texts
                and modern applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
