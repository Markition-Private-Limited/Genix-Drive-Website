import centerMobile from "../assets/homeMobile1.png";
import grenStr from "../assets/grnstr.png";

import Button from "./Button";
import StoreActionsButtons from "./web/StoreActionsButtons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  return (
    <motion.section
      className="bg-primary min-h-[calc(100vh+40px)] w-full text-white font-cairo overflow-hidden relative flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Center Image (Absolute Positioned) */}
      <div className="absolute -left-[150px] -bottom-2 sm:-bottom-6 inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none">
        <motion.img
          src={centerMobile}
          alt="App Mockup"
          className="h-[65vh] lg:h-[100%] object-contain drop-shadow-2xl relative z-10 -bottom-[20px]"
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full relative z-30"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div
          className="md:col-span-4 flex flex-col gap-5 relative z-10"
          variants={item}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.1] text-center md:text-left main-heading"
            variants={item}
          >
            <p className="relative inline-block text-white/60">
              Drive Smart
              <img
                className="absolute left-full bottom-[70px]"
                src={grenStr}
                alt=""
              />
            </p>
            <p>
              Stay Safe. <br />
              Feel <span className="text-light-green">Close.</span>
            </p>
          </motion.h1>

          <motion.div
            className="hidden md:flex flex-wrap gap-4 mt-4 justify-center md:justify-start"
            variants={item}
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate("../admin/signup")}
            >
              Get Started
            </Button>
          </motion.div>
          {/* <div className="w-12 h-[1px] bg-white rotate-90 absolute -left-0 -bottom-[45px]"></div> */}
          {/* <div className="w-12 h-[1px] bg-white rotate-90 absolute -left-0 -bottom-[55px]"></div> */}
          <motion.div
            className="hidden md:flex scroll-indication  gap-5 mt-5"
            variants={item}
          >
            <motion.div
              className="scroll-linee-indicator"
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-base text-white/60">
              Scroll to <span className="block">Explore</span>{" "}
            </p>
          </motion.div>
        </motion.div>

        {/* Mobile Center Image (Inline) */}
        <motion.div className="md:hidden relative z-10 mt-6" variants={item}>
          <div className="flex justify-center">
            <motion.img
              src={centerMobile}
              alt="App Mockup"
              className="h-[42vh] object-contain drop-shadow-2xl"
              animate={{ y: [0, -8, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Spacer for Center Image */}
        <div className="hidden lg:block md:col-span-4"></div>

        {/* Right Content */}
        <motion.div
          className="md:col-span-4 text-center md:text-left  md:flex flex-col gap-5 lg:pl-10 mt-8 md:mt-0"
          variants={item}
        >
          <motion.div
            className="flex items-center hero-banner-right justify-center md:justify-start gap-12 lg:gap-16"
            variants={item}
          >
            <div>
              <p className="text-xs label md:text-sm text-light-purple mb-1">
                Active Users
              </p>
              <p className="text-2xl value md:text-3xl font-bold">10K+</p>
            </div>
            <div className="divider"></div>
            <div>
              <p className="text-xs label md:text-sm text-light-purple mb-1">
                Downloads
              </p>
              <p className="text-2xl value md:text-3xl font-bold">50K+</p>
            </div>
          </motion.div>

          <motion.p
            className="text-xs  md:text-[20px] text-white/90 leading-relaxed font-light"
            variants={item}
          >
            From real-time safety alerts to family location sharing and exciting
            rewards — GenixDrive is your complete driving companion.
          </motion.p>

          <motion.div className="mb-[24px] md:mb-auto" variants={item}>
            <p className="text-xs md:text-[20px] font-bold uppercase mb-4 tracking-widest text-white">
              Download Now On:
            </p>
            <StoreActionsButtons className="!mt-0" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
