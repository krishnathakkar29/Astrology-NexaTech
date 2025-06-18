"use client";

import type React from "react";

import { useState } from "react";
import { User, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function AppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    service: "",
    preferredDate: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

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
            backgroundImage: `url("https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Book Your Cosmic Consultation
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-white/90">
            Take the first step towards understanding your destiny with a
            personalized astrological reading
          </p>
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

      {/* How It Works */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #DFB7B3 0%, #FDFAFA 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              How It Works
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Simple steps to begin your journey of cosmic discovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">
                Fill the Form
              </h3>
              <p className="text-slate-600">
                Provide your birth details and consultation preferences
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">
                Choose Date
              </h3>
              <p className="text-slate-600">
                Select your preferred consultation date and time
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">
                Get Confirmation
              </h3>
              <p className="text-slate-600">
                Receive confirmation and preparation guidelines
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                }}
              >
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                4
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">
                Start Your Journey
              </h3>
              <p className="text-slate-600">
                Begin your cosmic consultation with our experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Consultation Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Choose Your Consultation Style
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Select the format that best suits your needs and comfort level
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* In-Person Consultation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                  In-Person Consultation
                </h3>
                <p className="text-slate-600 mb-4">60-90 minutes</p>
                <div
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#C89CA0" }}
                >
                  $150
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Face-to-face interaction with astrologer
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Detailed birth chart analysis
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Physical chart printout
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Gemstone recommendations
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Follow-up support
                </li>
              </ul>
            </div>

            {/* Video Consultation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                  Video Consultation
                </h3>
                <p className="text-slate-600 mb-4">60 minutes</p>
                <div
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#C89CA0" }}
                >
                  $120
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  High-quality video call
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Screen sharing for chart review
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Digital chart delivery
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Recording available
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Email follow-up
                </li>
              </ul>
            </div>

            {/* Phone Consultation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">
                  Phone Consultation
                </h3>
                <p className="text-slate-600 mb-4">45 minutes</p>
                <div
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#C89CA0" }}
                >
                  $100
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Convenient phone call
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Verbal guidance and insights
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Digital chart via email
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Audio recording option
                </li>
                <li className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-rose-300 rounded-full mr-3"></div>
                  Written summary
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Consultation Form */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, #DFB7B3 0%, #FDFAFA 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Book Your Consultation
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Fill in your details below and we'll contact you to confirm your
              appointment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="text-slate-800 font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-slate-800 font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-slate-800 font-medium"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <Label
                      htmlFor="dateOfBirth"
                      className="text-slate-800 font-medium"
                    >
                      Date of Birth *
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  {/* Time of Birth */}
                  <div>
                    <Label
                      htmlFor="timeOfBirth"
                      className="text-slate-800 font-medium"
                    >
                      Time of Birth
                    </Label>
                    <Input
                      id="timeOfBirth"
                      type="time"
                      value={formData.timeOfBirth}
                      onChange={(e) =>
                        handleInputChange("timeOfBirth", e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>

                  {/* Place of Birth */}
                  <div>
                    <Label
                      htmlFor="placeOfBirth"
                      className="text-slate-800 font-medium"
                    >
                      Place of Birth
                    </Label>
                    <Input
                      id="placeOfBirth"
                      type="text"
                      placeholder="City, State, Country"
                      value={formData.placeOfBirth}
                      onChange={(e) =>
                        handleInputChange("placeOfBirth", e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <Label
                      htmlFor="service"
                      className="text-slate-800 font-medium"
                    >
                      Service Required *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="astrology">
                          Astrology Consultation
                        </SelectItem>
                        <SelectItem value="palmistry">
                          Palmistry Reading
                        </SelectItem>
                        <SelectItem value="numerology">
                          Numerology Analysis
                        </SelectItem>
                        <SelectItem value="gemstone">
                          Gemstone Consultation
                        </SelectItem>
                        <SelectItem value="grah-shanti">
                          Grah Shanti Pooja
                        </SelectItem>
                        <SelectItem value="marriage">
                          Marriage Compatibility
                        </SelectItem>
                        <SelectItem value="career">Career Guidance</SelectItem>
                        <SelectItem value="education">
                          Education Guidance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Consultation Date */}
                  <div>
                    <Label
                      htmlFor="preferredDate"
                      className="text-slate-800 font-medium"
                    >
                      Preferred Consultation Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        handleInputChange("preferredDate", e.target.value)
                      }
                      required
                      className="mt-2"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, #C89CA0 0%, #915C75 100%)`,
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-800">
              Important Information
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Please read carefully before booking your consultation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Before Your Consultation */}
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-800 mb-3">
                    Before Your Consultation
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Ensure accurate birth details (date, time, place)</li>
                    <li>• Prepare specific questions you'd like guidance on</li>
                    <li>• Keep an open mind and positive attitude</li>
                    <li>• Have a notebook ready for important insights</li>
                  </ul>
                </div>

                {/* What to Expect */}
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-800 mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Detailed analysis of your birth chart</li>
                    <li>• Insights into personality and life patterns</li>
                    <li>• Guidance on current and future opportunities</li>
                    <li>• Remedial suggestions for challenges</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                {/* Cancellation Policy */}
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-800 mb-3">
                    Cancellation Policy
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• 24-hour notice required for cancellations</li>
                    <li>• Rescheduling available without additional charges</li>
                    <li>• Emergency cancellations will be accommodated</li>
                    <li>• Refunds processed within 3-5 business days</li>
                  </ul>
                </div>

                {/* Privacy & Confidentiality */}
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-800 mb-3">
                    Privacy & Confidentiality
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• All consultations are strictly confidential</li>
                    <li>• Your personal data is securely protected</li>
                    <li>• No information is shared with third parties</li>
                    <li>• Professional ethics strictly maintained</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppointmentPage;
