import React from "react";

type Size = "xs" | "sm" | "base" | "lg" | "xl";

type Color = "white" | "muted" | "primary" | "default";

type Weight = "normal" | "medium" | "semibold" | "bold" | "light";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: Size;
  color?: Color;
  weight?: Weight;
}

const sizeMap: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const colorMap: Record<Color, string> = {
  white: "text-white/90",
  muted: "text-gray-500",
  primary: "text-blue-600",
  default: "text-gray-900",
};

const weightMap: Record<Weight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  light: "font-light",
};

const Paragraph = ({
  children,
  size = "base",
  color = "default",
  weight = "normal",
  className = "",
  style,
  ...rest
}: TextProps) => {
  const classes = `
  paragrarh
    ${sizeMap[size]}
    ${colorMap[color]}
    ${weightMap[weight]}
    ${className}
  `;

  return (
    <p
      className={classes.trim()}
      style={{ fontFamily: "'DM Sans', sans-serif", ...style }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
