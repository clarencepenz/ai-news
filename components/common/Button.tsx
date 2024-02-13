import React from "react";
import cn from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "icon";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({
  variant,
  size,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const getVariantClass = (): string => {
    switch (variant) {
      case "primary":
        return "bg-evfy-primary text-evfy-secondary hover:bg-evfy-primary/90";
      case "secondary":
        return "bg-evfy-outline text-evfy-primary hover:bg-evfy-secondary/80";
      default:
        return "bg-transparent text-black";
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case "small":
        return "h-9 rounded-md px-3";
      case "medium":
        return "w-[171px] h-[51.169px] px-4 py-2";
      case "icon":
        return "h-10 w-10";
      default:
        return "w-[171px] h-[51.169px] px-4 py-2";
    }
  };

  return (
    <button
      type="button"
      className={cn(
        `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors ring-0 focus-visible:outline-none focus-visible:ring-0 0 disabled:pointer-events-none disabled:opacity-50 focus:ring-${variant}-400 ${getVariantClass()} ${getSizeClass()}`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
