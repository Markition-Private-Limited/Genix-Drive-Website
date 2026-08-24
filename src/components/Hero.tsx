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
      /* ─── DESKTOP: exactly as original ─── */
      className="bg-primary lg:min-h-[calc(100vh-100px)] w-full text-white font-cairo overflow-x-clip relative flex items-center py-0 lg:py-0 -mb-4 lg:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative stars — mobile only */}
      <img src={grnstr} alt="" className="lg:hidden absolute top-[38%] right-3 w-5 opacity-70 pointer-events-none select-none z-10" />
      <img src={grystr} alt="" className="lg:hidden absolute bottom-[22%] left-3 w-5 opacity-75 pointer-events-none select-none z-10" />
      <img src={grnstr} alt="" className="lg:hidden absolute bottom-[3%] right-4 w-5 opacity-80 pointer-events-none select-none z-10" />

      {/* Center Image — absolute, desktop only (unchanged) */}
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
        {/* ── Left: Heading ──
            Mobile: order-1 (first), bigger text, centered
            Desktop: unchanged (col-span-4, left-aligned) */}
        <motion.div
          className="lg:col-span-4 flex flex-col gap-5 relative z-10 order-1 lg:order-none pt-6 lg:pt-0"
          variants={item}
        >
          <motion.h1
            /* Mobile: 2.6rem · Desktop: unchanged lg:text-5xl xl:text-[48px] */
            className="text-[2.6rem] sm:text-[2.6rem] lg:text-5xl xl:text-[48px] font-bold leading-tight lg:leading-[1.1] text-center lg:text-left main-heading"
            variants={item}
          >
            <p className="relative inline-block text-white/60">
              Drive Smart
              <img
                className="absolute -top-4 left-[calc(100%+6px)] lg:top-auto lg:left-[300px] lg:bottom-[20px] xl:bottom-[20px]"
                src={grnstr}
                alt=""
              />
            </p>
            <p>
              Stay Safe. <br />
              Feel <span className="text-light-green">Close.</span>
            </p>
          </motion.h1>

          {/* Get Started — desktop only (unchanged) */}
          <motion.div
            className="hidden lg:flex flex-wrap gap-4 mt-4 justify-center lg:justify-start"
            variants={item}
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate("/interactive-demo")}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Scroll indicator — desktop only (unchanged) */}
          <motion.div
            className="hidden lg:flex scroll-indication gap-5 mt-5"
            variants={item}
          >
            <motion.div
              className="scroll-linee-indicator"
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-base text-white/60">
              Scroll to <span className="block">Explore</span>
            </p>
            <img src={grystr} alt="" className="absolute pointer-events-none select-none"
              style={{ bottom: 78, left: 110, width: 30, opacity: 0.8 }} />
          </motion.div>
        </motion.div>

        {/* ── Mobile Image — order-3 (last on mobile), hidden on desktop ──
            Bigger (62vh), shifted left so the phone aligns under store buttons,
            negative margin pulls panels up so no gap */}
        <motion.div
          className="lg:hidden relative order-3 mt-0"
          variants={item}
        >
          <div className="flex justify-center">
            <motion.img
              src={centerMobile}
              alt="App Mockup"
              className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl -translate-x-[15%]"
              animate={{ y: [0, -8, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Spacer — desktop only (unchanged) */}
        <div className="hidden lg:block lg:col-span-4 -left-[20px]"></div>

        {/* ── Right: Stats + description + download ──
            Mobile: order-2 (shows ABOVE image), slightly bigger text
            Desktop: all classes exactly as original */}
        <motion.div
          className="lg:col-span-4 lg:col-start-9 text-center lg:text-left lg:flex flex-col items-center lg:items-start gap-5 order-2 lg:order-none mt-6 lg:mt-0 lg:pl-[50px]"
          variants={item}
        >
          <motion.div
            className="flex items-center hero-banner-right justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16"
            variants={item}
          >
            <div>
              {/* Mobile: text-sm · Desktop: md:text-xs xl:text-sm (original) */}
              <p className="text-sm label md:text-xs xl:text-sm text-light-purple mb-1">
                Downloads
              </p>
              {/* Mobile: text-3xl · Desktop: md:text-2xl xl:text-3xl (original) */}
              <p className="text-3xl value md:text-2xl xl:text-3xl font-bold">15K+</p>
            </div>
            <div className="divider"></div>
            <div>
              <p className="text-sm label md:text-xs xl:text-sm text-light-purple mb-1">
                Active Users
              </p>
              <p className="text-3xl value md:text-2xl xl:text-3xl font-bold">10K+</p>
              <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
                style={{ top: -20, right: 450, width: 28, opacity: 0.6 }} />
            </div>
          </motion.div>

          {/* Mobile: text-base · Desktop: lg:text-base xl:text-[18px] (original) */}
          <motion.p
            className="text-base lg:text-base xl:text-[18px] text-white/90 leading-relaxed font-light"
            variants={item}
          >
            From driving insights and real-time location sharing to family safety features and exciting rewards, GenixDrive is your complete companion for safer and smarter journeys.
          </motion.p>

          <motion.div className="mb-0 lg:mb-auto" variants={item}>
            {/* Mobile: text-[0.85rem] · Desktop: lg:text-sm xl:text-[22px] (original) */}
            <p className="text-[0.85rem] lg:text-sm xl:text-[22px] font-bold uppercase mb-4 tracking-widest text-white">
              Download Now On:
            </p>
            <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
              style={{ bottom: -30, right: 72, width: 34, opacity: 0.9 }} />
            <StoreActionsButtons className="!mt-0" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
