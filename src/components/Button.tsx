import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "outline" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  isFullBtn?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-6 py-2.5 text-xs",
  md: "px-8 py-3.5 text-sm",
  lg: "px-10 py-4 text-base",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-light-green text-black hover:bg-white shadow-lg",
  secondary: "bg-secondary text-white  shadow-lg",
  dark: "bg-gray-700 text-light-green hover:bg-gray-600 shadow-lg",
  outline: "bg-transparent border border-white text-white hover:bg-white/10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      isFullBtn,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base = `${
      isFullBtn ? "max-w-full" : "max-w-[200px]"
    } inline-flex  text-[12px] items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wide transition-colors cursor-pointer font-cairo`;
    const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";
    const classes = [
      base,
      sizeClasses[size],
      variantClasses[variant],
      disabledClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
