import Paragraph from "./sharedui/Paragraph";
import { motion } from "framer-motion";
import SubHeading from "./sharedui/SubHeading";

import icon1 from "../assets/icons/h1.png";
import icon2 from "../assets/icons/h2.png";
import icon3 from "../assets/icons/h3.png";
import icon4 from "../assets/icons/h4.png";
import h1 from "../assets/hover/1.png";
import h2 from "../assets/hover/2.png";
import h3 from "../assets/hover/3.png";
import h4 from "../assets/hover/4.png";

const FeaturesStrip = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "Smarter Driving",
      description:
        "Understand yours and your loved ones driving behavior with safety scores and smart insights calculated based on driving events.",
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "text-black",
      himage: h1,
    },
    {
      id: 2,
      icon: icon2,
      title: "Seamless Meetups",
      description:
        "Create Genix meetups, chat instantly with your group, and be informed about everyone in real time using the live race screen.",
      bgColor: "bg-light-green",
      textColor: "text-black",
      iconColor: "text-black",
      himage: h2,
    },
    {
      id: 3,
      icon: icon3,
      title: "Earn As You Drive",
      description:
        "Safe driving turns into real rewards — collect points, redeem perks, and enjoy benefits every time you drive.",
      bgColor: "bg-white",
      textColor: "text-black",
      iconColor: "text-black",
      himage: h3,
    },
    {
      id: 4,
      icon: icon4,
      title: "Always Connected",
      description:
        "Stay linked with real-time location sharing and trip updates that keep your loved ones close, informed, and protected.",
      bgColor: "bg-secondary",
      textColor: "text-white",
      iconColor: "text-white",
      himage: h4,
    },
  ];

  return (
    <div className="w-full font-cairo">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className={`group stripcontainer relative ${feature.bgColor} ${feature.textColor} p-10 lg:p-12 min-h-[400px] flex flex-col justify-center items-start l ring-1 ring-black/5 shadow-sm`}
          >
            <div
              className="pointer-events-none absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(160px circle at 80% 20%, rgba(0,0,0,0.06), transparent 60%)",
              }}
            />
            <img src={feature.icon ?? ""} alt="" />

            <SubHeading
              color={feature.textColor === "text-white" ? "white" : "dark"}
              weight="bold"
              size="2xl"
              className="mb-6 stri-heading mt-[50px]"
            >
              {feature.title}
            </SubHeading>

            <Paragraph
              color={feature.textColor === "text-white" ? "white" : "default"}
              weight="medium"
              size="sm"
              className="leading-relaxed strip-text"
            >
              {feature.description}
            </Paragraph>
            {/* 🔹 IMAGE (Show on hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <SubHeading
                color={"white"}
                weight="bold"
                size="2xl"
                className="mb-6 stri-heading mt-[50px] absolute z-10"
              >
                {feature.title}
              </SubHeading>
              <img
                src={feature.himage ?? ""}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/75" />
            </div>
            {/* <span className="mt-6 h-1 w-16 rounded-full bg-current/20 transition-all duration-300 group-hover:w-24 group-hover:bg-current/40" /> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesStrip;
