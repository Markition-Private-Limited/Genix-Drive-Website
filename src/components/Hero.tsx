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
      className="bg-primary lg:min-h-[calc(100vh-100px)] w-full text-white font-cairo overflow-x-clip relative flex items-center py-0 lg:py-0 lg:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative stars — mobile only, alternating green / translucent, big / small */}
      <img src={grnstr} alt="" className="lg:hidden absolute top-[16%] left-10 w-[clamp(18px,4.5vw,24px)] opacity-75 pointer-events-none select-none z-10" />
      <img src={grystr} alt="" className="lg:hidden absolute top-[46%] left-9 w-[clamp(11px,2.5vw,14px)] opacity-45 pointer-events-none select-none z-10" />
      <img src={grnstr} alt="" className="lg:hidden absolute top-[28%] right-10 w-[clamp(11px,2.5vw,14px)] opacity-70 pointer-events-none select-none z-10" />
      <img src={grystr} alt="" className="lg:hidden absolute top-[58%] right-9 w-[clamp(18px,4.5vw,24px)] opacity-45 pointer-events-none select-none z-10" />

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
        className="w-full max-w-[1450px] mx-auto px-5 md:px-10 lg:px-[100px] grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 lg:items-center relative z-30"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left: Heading ──
            Mobile: order-1 (first), bigger text, centered
            Desktop: unchanged (col-span-4, left-aligned) */}
        <motion.div
          className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 relative z-10 order-1 lg:order-none pt-2 lg:pt-0"
          variants={item}
        >
          <motion.h1
            className="text-[clamp(2.1rem,7vw,2.6rem)] lg:text-5xl xl:text-[48px] font-bold leading-[1.1] lg:leading-[1.1] text-center lg:text-left main-heading"
            variants={item}
          >
            <p className="relative inline-block text-white lg:text-white/60">
              Drive Smart
              <img
                className="absolute -top-1 left-[calc(100%+6px)] lg:top-auto lg:left-[300px] lg:bottom-[20px] xl:bottom-[20px] w-[clamp(17px,4vw,22px)] lg:w-auto"
                src={grnstr}
                alt=""
              />
            </p>
            <p>
              Stay Safe. <br />
              Feel <span className="text-light-green">Close.</span>
            </p>
          </motion.h1>

          {/* Get Started — desktop */}
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
          className="lg:hidden relative order-2 -mt-2 flex justify-center"
          variants={item}
        >
          {/* Circular aura — blurred disc behind phone */}
          <div className="absolute pointer-events-none" style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(194,254,158,0.35) 55%, rgba(255,255,255,0) 80%)',
            filter: 'blur(42px)',
            top: '12%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }} />
          <img
            src={centerMobile}
            alt="App Mockup"
            className="w-full max-w-[clamp(300px,82vw,380px)] h-auto object-contain -translate-x-[14%] relative z-10"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 97%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 97%)',
            }}
          />
        </motion.div>

        {/* Spacer — desktop only (unchanged) */}
        <div className="hidden lg:block lg:col-span-4 -left-[20px]"></div>

        {/* ── Right: Stats + description + download ──
            Mobile: order-2 (shows ABOVE image), slightly bigger text
            Desktop: all classes exactly as original */}
        <motion.div
          className="lg:col-span-4 lg:col-start-9 text-center lg:text-left lg:flex flex-col items-center lg:items-start gap-3 lg:gap-5 order-3 lg:order-none -mt-12 lg:mt-0 pb-8 lg:pb-0 lg:pl-[50px]"
          variants={item}
        >
          {/* Mobile: fixed-width container — stats + description stay aligned */}
          <div className="lg:contents flex flex-col items-stretch gap-3 w-[82vw] max-w-[310px] mx-auto lg:w-auto lg:max-w-none lg:mx-0">
            {/* Glass stats card */}
            <motion.div
              className="flex items-center justify-around bg-white/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border border-white/20 lg:border-0 rounded-2xl py-3 px-6 lg:p-0 w-full lg:w-auto hero-banner-right lg:gap-12 xl:gap-16 lg:justify-start"
              variants={item}
            >
              <div className="text-center lg:text-left">
                <p className="text-xs label md:text-xs xl:text-sm text-white/75 lg:text-light-purple mb-1">Downloads</p>
                <p className="text-[1.75rem] value md:text-2xl xl:text-3xl font-bold lg:text-white" style={{ color: '#c2fe9e' }}>15K+</p>
              </div>
              <div className="divider"></div>
              <div className="text-center lg:text-left">
                <p className="text-xs label md:text-xs xl:text-sm text-white/75 lg:text-light-purple mb-1">Active Users</p>
                <p className="text-[1.75rem] value md:text-2xl xl:text-3xl font-bold lg:text-white" style={{ color: '#c2fe9e' }}>10K+</p>
                <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
                  style={{ top: -20, right: 450, width: 28, opacity: 0.6 }} />
              </div>
            </motion.div>

            <motion.p
              className="text-sm lg:text-base xl:text-[18px] text-white/85 leading-relaxed font-light text-center lg:text-left w-full lg:px-0"
              variants={item}
            >
              From driving insights and real-time location sharing to family safety features and exciting rewards, GenixDrive is your complete companion for safer and smarter journeys.
            </motion.p>

            <motion.div className="mb-0 lg:mb-auto w-full text-center lg:text-left" variants={item}>
              <p className="text-xs lg:text-sm xl:text-[22px] font-bold uppercase mb-3 lg:mb-4 tracking-widest lg:text-white" style={{ color: '#c2fe9e' }}>
                Download Now On:
              </p>
              <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
                style={{ bottom: -30, right: 72, width: 34, opacity: 0.9 }} />
              <StoreActionsButtons className="!mt-0" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
