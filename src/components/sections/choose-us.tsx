import { Clock, Heart, Shield, Star, Users } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <section
      className="py-20 text-white"
      style={{
        background: `radial-gradient(ellipse at center, #250C3B 0%, #291046 35%, #1B021F 100%)`,
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
            Why Choose Cosmic Insights?
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Experience the difference that authentic expertise and genuine care
            can make in your spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expert Astrologers */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              <Star className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h3
              className="text-xl font-serif font-semibold mb-4"
              style={{ color: "#CDA2A4" }}
            >
              Expert Astrologers
            </h3>
            <p className="text-white/80 leading-relaxed">
              Our team consists of highly experienced and certified Vedic
              astrologers with decades of practice.
            </p>
          </div>

          {/* Accurate Predictions */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-xl font-serif font-semibold mb-4"
              style={{ color: "#CDA2A4" }}
            >
              Accurate Predictions
            </h3>
            <p className="text-white/80 leading-relaxed">
              We pride ourselves on providing precise and reliable astrological
              insights based on ancient wisdom.
            </p>
          </div>

          {/* Personalized Guidance */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-xl font-serif font-semibold mb-4"
              style={{ color: "#CDA2A4" }}
            >
              Personalized Guidance
            </h3>
            <p className="text-white/80 leading-relaxed">
              Every consultation is tailored to your unique birth chart and
              individual circumstances.
            </p>
          </div>

          {/* Confidential Service */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-xl font-serif font-semibold mb-4"
              style={{ color: "#CDA2A4" }}
            >
              Confidential Service
            </h3>
            <p className="text-white/80 leading-relaxed">
              Your personal information and consultations are kept strictly
              confidential and secure.
            </p>
          </div>

          {/* Holistic Approach */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-xl font-serif font-semibold mb-4"
              style={{ color: "#CDA2A4" }}
            >
              Holistic Approach
            </h3>
            <p className="text-white/80 leading-relaxed">
              We combine traditional astrology with modern understanding for
              comprehensive life guidance.
            </p>
          </div>

          {/* Ongoing Support */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3
              className="text-xl font-serif font-semibold mb-4"
              style={{ color: "#CDA2A4" }}
            >
              Ongoing Support
            </h3>
            <p className="text-white/80 leading-relaxed">
              We provide continuous support and follow-up guidance for your
              spiritual journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
