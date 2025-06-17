import { CheckCircle } from "lucide-react";

export default function NumerologyPage() {
  return (
    <>
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
            Numerology
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#DAB1AE", opacity: 0.9 }}
          >
            Unlock the mystical power of numbers and discover your life's hidden
            patterns and destiny
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
      </section>

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
                The Science of Numbers
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Numerology is the ancient metaphysical science that reveals
                  the mystical relationship between numbers and life events.
                  Based on the belief that numbers carry vibrational energy,
                  numerology can provide profound insights into your
                  personality, destiny, and life purpose.
                </p>
                <p>
                  By analyzing the numbers derived from your birth date and
                  name, we can uncover your life path number, destiny number,
                  soul urge number, and other significant numerical influences
                  that shape your journey through life.
                </p>
                <p>
                  Our numerological analysis provides practical guidance for
                  making important decisions, understanding your natural
                  talents, and choosing the most auspicious timing for
                  significant life events.
                </p>
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
      </section>

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
              Understanding Number Vibrations
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Each number carries unique energy and characteristics that
              influence your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Number 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  Leadership & Independence
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Natural leader
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Pioneer spirit
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Independent
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Creative
                </li>
              </ul>
            </div>

            {/* Number 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  Cooperation & Harmony
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Diplomatic
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Cooperative
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Sensitive
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Peaceful
                </li>
              </ul>
            </div>

            {/* Number 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  Creativity & Expression
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Artistic
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Communicative
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Optimistic
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Social
                </li>
              </ul>
            </div>

            {/* Number 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  Stability & Hard Work
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Practical
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Reliable
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Methodical
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Patient
                </li>
              </ul>
            </div>

            {/* Number 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  Freedom & Adventure
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Adventurous
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Versatile
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Progressive
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Dynamic
                </li>
              </ul>
            </div>

            {/* Number 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-rose-400">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                  Nurturing & Responsibility
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Caring
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Responsible
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Healing
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Family-oriented
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your Complete Numerology Profile */}
      <section className="py-20 text-white" style={{ background: "#280F43" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Your Complete Numerology Profile
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Comprehensive numerical analysis covering all aspects of your
              personal vibrations
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
                    Life path number calculation
                  </h3>
                  <p className="text-white/80">
                    Detailed calculation and interpretation with practical
                    applications for your life.
                  </p>
                </div>
              </div>

              {/* Destiny number analysis */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Destiny number analysis
                  </h3>
                  <p className="text-white/80">
                    Detailed calculation and interpretation with practical
                    applications for your life.
                  </p>
                </div>
              </div>

              {/* Lucky numbers and dates */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Lucky numbers and dates
                  </h3>
                  <p className="text-white/80">
                    Detailed calculation and interpretation with practical
                    applications for your life.
                  </p>
                </div>
              </div>

              {/* Name numerology */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-200">
                  <CheckCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Name numerology
                  </h3>
                  <p className="text-white/80">
                    Detailed calculation and interpretation with practical
                    applications for your life.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Sample Chart */}
            <div className="rounded-2xl p-8" style={{ background: "#382144" }}>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white text-center">
                Sample Numerology Chart
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    Life Path Number:
                  </span>
                  <span className="text-rose-300 font-bold text-xl">7</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    Destiny Number:
                  </span>
                  <span className="text-rose-300 font-bold text-xl">3</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">
                    Soul Urge Number:
                  </span>
                  <span className="text-rose-300 font-bold text-xl">5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/20 rounded">
                  <span className="font-medium text-white">Lucky Number:</span>
                  <span className="text-rose-300 font-bold text-xl">9</span>
                </div>
              </div>
              <p className="text-white/80 text-center text-sm">
                Your personalized chart will include detailed explanations and
                guidance for each number.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              Benefits of Numerological Guidance
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Discover how numbers can illuminate your path and enhance your
              decision-making
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
                  Discover your life purpose through numbers
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
                  Find your lucky numbers and colors
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
                  Understand personality traits numerically
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
                  Choose auspicious dates for events
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
                  Optimize your name for success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              How Numerology Analysis Works
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Simple steps to unlock the power of your personal numbers
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
                Birth Date Analysis
              </h3>
              <p className="text-slate-600">
                We calculate your core numbers from your birth date
              </p>
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
                Name Vibration
              </h3>
              <p className="text-slate-600">
                Analyze the numerical value of your full name
              </p>
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
                Pattern Recognition
              </h3>
              <p className="text-slate-600">
                Identify recurring numbers and their significance
              </p>
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
                Guidance & Application
              </h3>
              <p className="text-slate-600">
                Practical advice for applying numerological insights
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
