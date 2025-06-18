"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define the action types for the button
type CTAAction =
  | { type: "link"; href: string }
  | { type: "function"; onClick: () => void };

// Define the component props interface
interface CosmicCTAProps {
  title: string;
  description: string;
  button: {
    label: string;
    action: CTAAction;
  };
  className?: string;
}

export default function CosmicCTA({
  title,
  description,
  button,
  className = "",
}: CosmicCTAProps) {
  // Render button based on action type
  const renderButton = () => {
    const buttonStyles =
      "text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-300/30";
    const buttonGradient = {
      background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
    };

    if (button.action.type === "link") {
      return (
        <Link href={button.action.href}>
          <Button className={buttonStyles} style={buttonGradient}>
            {button.label}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          onClick={button.action.onClick}
          className={buttonStyles}
          style={buttonGradient}
        >
          {button.label}
        </Button>
      );
    }
  };

  return (
    <section
      className={`py-16 md:py-20 text-white relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, #512A5B 0%, #2E144D 100%)`,
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 leading-tight text-white">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed mx-auto">
            {description}
          </p>
          <div className="flex justify-center">{renderButton()}</div>
        </div>
      </div>
    </section>
  );
}
