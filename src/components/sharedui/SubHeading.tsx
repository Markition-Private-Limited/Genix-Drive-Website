import React from "react";

type Size = "lg" | "xl" | "2xl" | "3xl" | "4xl";

type Weight = "medium" | "semibold" | "bold" | "extrabold" | "black";

type Color = "default" | "white" | "muted" | "primary" | "dark";

interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: Size;
  weight?: Weight;
  color?: Color;
}

const sizeMap: Record<Size, string> = {
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const weightMap: Record<Weight, string> = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const colorMap: Record<Color, string> = {
  default: "text-gray-900",
  white: "text-white",
  muted: "text-gray-500",
  primary: "text-blue-600",
  dark: "text-gray-900",
};

const SubHeading = ({
  children,
  size = "2xl",
  weight = "bold",
  color = "default",
  className = "",
  style,
  ...rest
}: SubHeadingProps) => {
  const classes = `
    sub-heading
    ${sizeMap[size]}
    ${weightMap[weight]}
    ${colorMap[color]}
    ${className}
  `;

  return (
    <h3
      className={classes.trim()}
      style={{ fontFamily: "'Poppins', sans-serif", ...style }}
      {...rest}
    >
      {children}
    </h3>
  );
};

export default SubHeading;
