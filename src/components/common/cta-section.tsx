"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define the button variant types
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

// Define the action types
type CTAAction =
  | { type: "link"; href: string }
  | { type: "function"; onClick: () => void };

// Define the component props
interface CTASectionProps {
  title: string;
  description: string;
  button: {
    label: string;
    variant?: ButtonVariant;
    action: CTAAction;
  };
  background?: {
    type: "gradient" | "solid" | "image";
    value: string;
    overlay?: string;
  };
  textColor?: "white" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CTASection({
  title,
  description,
  button,
  background = {
    type: "gradient",
    value: "linear-gradient(135deg, #3E1E53 0%, #2E144E 35%, #4E2859 100%)",
  },
  textColor = "white",
  className = "",
  size = "md",
}: CTASectionProps) {
  // Size configurations
  const sizeConfig = {
    sm: {
      padding: "py-12",
      titleSize: "text-3xl md:text-4xl",
      descriptionSize: "text-lg",
      buttonSize: "px-6 py-3 text-base",
      maxWidth: "max-w-2xl",
    },
    md: {
      padding: "py-16 md:py-20",
      titleSize: "text-4xl md:text-5xl",
      descriptionSize: "text-xl",
      buttonSize: "px-8 py-4 text-lg",
      maxWidth: "max-w-3xl",
    },
    lg: {
      padding: "py-20 md:py-24",
      titleSize: "text-5xl md:text-6xl",
      descriptionSize: "text-xl md:text-2xl",
      buttonSize: "px-10 py-5 text-xl",
      maxWidth: "max-w-4xl",
    },
  };

  const config = sizeConfig[size];

  // Button variant styles
  const getButtonStyles = (variant: ButtonVariant) => {
    const baseStyles = `${config.buttonSize} rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105`;

    switch (variant) {
      case "primary":
        return `${baseStyles} text-white border-0`;
      case "secondary":
        return `${baseStyles} bg-white text-purple-900 hover:bg-gray-100`;
      case "outline":
        return `${baseStyles} border-2 ${
          textColor === "white"
            ? "border-white text-white hover:bg-white hover:text-purple-900"
            : "border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
        }`;
      case "ghost":
        return `${baseStyles} ${
          textColor === "white"
            ? "text-white hover:bg-white/10"
            : "text-slate-800 hover:bg-slate-100"
        }`;
      default:
        return `${baseStyles} text-white border-0`;
    }
  };

  // Background styles
  const getBackgroundStyles = () => {
    switch (background.type) {
      case "gradient":
        return { background: background.value };
      case "solid":
        return { backgroundColor: background.value };
      case "image":
        return {
          backgroundImage: `url(${background.value})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        };
      default:
        return { background: background.value };
    }
  };

  // Render button based on action type
  const renderButton = () => {
    const buttonStyles = getButtonStyles(button.variant || "primary");
    const primaryGradient =
      button.variant === "primary"
        ? {
            background: `linear-gradient(135deg, #D2A7A8 0%, #8A5570 100%)`,
          }
        : {};

    if (button.action.type === "link") {
      return (
        <Link href={button.action.href}>
          <Button className={buttonStyles} style={primaryGradient}>
            {button.label}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          onClick={button.action.onClick}
          className={buttonStyles}
          style={primaryGradient}
        >
          {button.label}
        </Button>
      );
    }
  };

  return (
    <section
      className={`${config.padding} ${
        textColor === "white" ? "text-white" : "text-slate-800"
      } relative overflow-hidden ${className}`}
      style={getBackgroundStyles()}
    >
      {/* Overlay for image backgrounds */}
      {background.type === "image" && background.overlay && (
        <div
          className="absolute inset-0"
          style={{ background: background.overlay }}
        />
      )}

      <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
        <div className={`${config.maxWidth} mx-auto`}>
          <h2
            className={`${config.titleSize} font-serif font-bold mb-6 leading-tight`}
          >
            {title}
          </h2>
          <p
            className={`${config.descriptionSize} mb-8 leading-relaxed opacity-90`}
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {renderButton()}
          </div>
        </div>
      </div>
    </section>
  );
}
