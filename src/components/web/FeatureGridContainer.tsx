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
  desktopImgMinHeight?: string;
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
  desktopImgMinHeight = "lg:min-h-[450px]",
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-6 gap-5 mt-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      id={id}
    >
      {/* Text Section */}
      <div
        className={`${reverse ? "lg:col-span-2" : "lg:col-span-2 lg:order-2"
          } p-5 lg:p-10 ${containerBg} rounded-2xl flex items-center justify-center`}
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
        className={`${reverse ? "lg:col-span-4 lg:order-2" : "lg:col-span-4 lg:order-1"
          } min-h-[364px] ${desktopImgMinHeight} p-5 ${containerBg} rounded-2xl relative overflow-hidden`}
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
