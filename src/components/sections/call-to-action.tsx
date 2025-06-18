import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function CallToAction() {
  return (
    <section
      className="py-20 text-white"
      style={{
        background: `radial-gradient(ellipse at center, #3E1E53 0%, #2E144E 35%, #4E2859 100%)`,
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Unlock Your Cosmic Potential?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards a more enlightened future. Book your
            personalized consultation today and discover what the stars have in
            store for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "text-white text-lg px-8 py-4 md:py-8 rounded-full hover:shadow-lg transition-all duration-300 border-0 hover:scale-105"
              )}
              style={{
                background: `linear-gradient(135deg, #CDA2A4 0%, #97637A 100%)`,
              }}
            >
              Book Your Consultation
            </Link>
            <Button
              variant="outline"
              className="border-2 bg-transparent text-white hover:bg-white hover:text-cosmic-purple-dark text-lg px-8 py-4 md:py-8 rounded-full transition-all duration-300"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
