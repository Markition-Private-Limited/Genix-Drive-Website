import { motion } from "framer-motion";
import React from "react";

interface FeatureSplitCardProps {
  title: string;
  description: string;
  image: string;

  reverse?: boolean;

  containerBg?: string; // bg-secondary / bg-light-green etc
  textColor?: string; // text-white / text-dark
  overlay?: boolean; // dark overlay on image
  id?: string;
}
const FeatureSplitCard: React.FC<FeatureSplitCardProps> = ({
  title,
  description,
  image,
  reverse = false,
  containerBg = "bg-secondary",
  textColor = "text-white",
  overlay = false,
  id,
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      id={id}
    >
      {/* Text Section */}
      <div
        className={`${
          reverse ? "md:col-span-2" : "md:col-span-2 md:order-2"
        } p-5 md:p-10 ${containerBg} rounded-2xl flex items-center justify-center`}
      >
        <div>
          <h3 className={`text-3xl font-medium  mb-4 ${textColor}`}>{title}</h3>
          <p className={`text-sm leading-5 aboutcontainertext !${textColor}`}>
            {description}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`${
          reverse ? "md:col-span-4 md:order-2" : "md:col-span-4 md:order-1"
        } min-h-[404px] md:h-auto p-5 ${containerBg} rounded-2xl relative overflow-hidden`}
      >
        <motion.img
          className={`absolute top-0 left-0 w-full object-cover ${image === "/src/assets/features/ak47.png" ? "" : "h-full"}`}
          src={image}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        {overlay && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        )}
      </div>
    </motion.div>
  );
};

export default FeatureSplitCard;
