import centerMobile from "../assets/homeMobile1.png";
import grnstr from "../assets/grnstr.png";
import grystr from "../assets/grystr.png";

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
      className="bg-primary min-h-[calc(100vh-100px)] w-full text-white font-cairo overflow-hidden relative flex items-center py-0 lg:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Center Image (Absolute Positioned) */}
      <div className="absolute -left-[5%] xl:-left-[150px] -bottom-2 sm:-bottom-6 inset-0 z-0 hidden lg:flex items-center justify-center pointer-events-none">
        <motion.img
          src={centerMobile}
          alt="App Mockup"
          className="h-[50vh] lg:h-[80vh] xl:h-[85vh] object-contain drop-shadow-2xl relative z-10 -bottom-[0px] lg:-bottom-[20px] xl:-bottom-[40px]"
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="w-full max-w-[1450px] mx-auto px-6 md:px-10 lg:px-[100px] grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 lg:items-center relative z-30"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div
          className="lg:col-span-4 flex flex-col gap-5 relative z-10 left-0 lg:left-0"
          variants={item}
        >
          <motion.h1
            className="text-4xl sm:text-4xl lg:text-5xl xl:text-[48px] font-bold leading-tight lg:leading-[1.1] text-center lg:text-left main-heading"
            variants={item}
          >
            <p className="relative inline-block text-white/60">
              Drive Smart
              <img
                className="absolute left-[-30px] lg:left-[300px] bottom-[-180px] lg:bottom-[20px] xl:bottom-[20px] "
                src={grnstr}
                alt=""
              />
            </p>
            <p>
              Stay Safe. <br />
              Feel <span className="text-light-green">Close.</span>
            </p>
          </motion.h1>

          <motion.div
            className="hidden lg:flex flex-wrap gap-4 mt-4 justify-center lg:justify-start"
            variants={item}
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate("/interactive-demo")}
            // onClick={() => navigate("../admin/signup")}
            >
              Get Started
            </Button>
          </motion.div>
          {/* <div className="w-12 h-[1px] bg-white rotate-90 absolute -left-0 -bottom-[45px]"></div> */}
          {/* <div className="w-12 h-[1px] bg-white rotate-90 absolute -left-0 -bottom-[55px]"></div> */}
          <motion.div
            className="hidden lg:flex scroll-indication  gap-5 mt-5"
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
            <img src={grystr} alt="" className="absolute pointer-events-none select-none"
              style={{ bottom: 78, left: 110, width: 30, opacity: 0.8 }} />
            {/* <img src={grystr} alt="" className="absolute pointer-events-none select-none"
              style={{ bottom: 218, right: 22, width: 18, opacity: 0.5 }} /> */}
          </motion.div>
        </motion.div>

        {/* Mobile Center Image (Inline) */}
        <motion.div className="lg:hidden relative z-10 mt-6" variants={item}>
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
        <div className="hidden lg:block lg:col-span-4 -left-[20px]"></div>

        {/* Right Content */}
        <motion.div
          className="lg:col-span-4 lg:col-start-9 text-center lg:text-left lg:flex flex-col items-center lg:items-start gap-5 mt-12 lg:mt-0 lg:pl-[50px]"
          variants={item}
        >
          <motion.div
            className="flex items-center hero-banner-right justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16"
            variants={item}
          >
            <div>
              <p className="text-[10px] label md:text-xs xl:text-sm text-light-purple mb-1">
                Downloads
              </p>
              <p className="text-xl value md:text-2xl xl:text-3xl font-bold">15K+</p>
            </div>
            <div className="divider"></div>
            <div>
              <p className="text-[10px] label md:text-xs xl:text-sm text-light-purple mb-1">
                Active Users
              </p>
              <p className="text-xl value md:text-2xl xl:text-3xl font-bold">10K+</p>
              <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
                style={{ top: -20, right: 450, width: 28, opacity: 0.6 }} />
            </div>
          </motion.div>

          <motion.p
            className="text-sm lg:text-base xl:text-[18px] text-white/90 leading-relaxed font-light"
            variants={item}
          >
            From driving insights and real-time location sharing to family safety features and exciting rewards, GenixDrive is your complete companion for safer and smarter journeys.
          </motion.p>

          <motion.div className="mb-[24px] lg:mb-auto" variants={item}>
            <p className="text-xs lg:text-sm xl:text-[22px] font-bold uppercase mb-4 tracking-widest text-white">
              Download Now On:
            </p>
            <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ bottom: -30, right: 72, width: 34, opacity: 0.9 }} />
            <StoreActionsButtons className="!mt-0" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
