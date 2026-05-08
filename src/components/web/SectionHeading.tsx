import React from "react";
import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";
interface SectionHeadingProps {
  paraText: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
const SectionHeading = ({
  // paraText,
  children,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`section-heading text-center mb:[50px]  md:w-2/3 m-auto ${className}`}
    >
      <SubHeading size="4xl" color="dark" className="mb-4 mainheading">
        {children}
      </SubHeading>

      {/* <Paragraph
        size="base"
        color="default"
        weight="medium"
        className="leading-5"
      >
        {paraText}
      </Paragraph> */}
    </div>
  );
};

export default SectionHeading;
