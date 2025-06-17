import CallToAction from "@/components/sections/call-to-action";
import WhyChooseSection from "@/components/sections/choose-us";
import Hero from "@/components/sections/hero";
import SacredServices from "@/components/sections/sacred-services";
import WhatAstrology from "@/components/sections/what-astrology";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatAstrology />
      <SacredServices />
      <WhyChooseSection />
      <CallToAction />
    </div>
  );
}
