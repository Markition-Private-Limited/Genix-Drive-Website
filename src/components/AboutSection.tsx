import ill from "../assets/aboutIll.png";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/SubHeading";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import grnstr from "../assets/grnstr.png";
import bluestr from "../assets/bluestr.png";
import grystr from "../assets/grystr.png";

const AboutSection = ({ bg }: { bg: string }) => {
  const navigate = useNavigate();
  return (
    <motion.section
      className={`bg-${bg} text-black font-cairo overflow-hidden`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── MOBILE layout ── */}
      <div className="lg:hidden flex flex-col items-center pt-12 pb-0 px-6 text-center relative">
        {/* Decorative stars */}
        <img src={bluestr} alt="" className="absolute pointer-events-none select-none" style={{ top: 28, left: 24, width: 28, opacity: 0.35 }} />
        <img src={grnstr} alt="" className="absolute pointer-events-none select-none" style={{ top: 18, right: 18, width: 34, opacity: 0.55 }} />
        <img src={grnstr} alt="" className="absolute pointer-events-none select-none" style={{ top: 72, right: 54, width: 16, opacity: 0.4 }} />
        <img src={grystr} alt="" className="absolute pointer-events-none select-none" style={{ top: 80, left: 54, width: 14, opacity: 0.5 }} />

        {/* Heading */}
        <motion.h2
          className="font-bold leading-tight mb-5 font-cairo whitespace-nowrap"
          style={{ fontSize: 'clamp(1.5rem, 6vw, 2.75rem)', color: '#1a1a2e' }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          What is GenixDrive?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base leading-relaxed text-black/75 font-light mb-6 w-full max-w-[340px] sm:max-w-[480px] md:max-w-[600px]"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          GenixDrive is a smart driving companion designed to make every journey safer, smarter, and more rewarding. It uses advanced telematics and AI to track driving behavior, monitor vehicle performance, and provide real-time safety alerts. Families can stay connected through location sharing and place notifications, while drivers gain valuable insights to improve their driving habits. Additionally, GenixDrive makes safe driving a rewarding experience with points, vouchers, and other incentives.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="primary" size="md" onClick={() => { navigate("../demo"); window.scrollTo(0, 0); }}>
            Learn More
          </Button>
        </motion.div>

        {/* Stars near bottom */}
        <img src={grnstr} alt="" className="absolute pointer-events-none select-none" style={{ bottom: 220, right: 18, width: 18, opacity: 0.5 }} />
        <img src={bluestr} alt="" className="absolute pointer-events-none select-none" style={{ bottom: 180, left: 16, width: 16, opacity: 0.35 }} />

        {/* Illustration — same as desktop */}
        <motion.img
          src={ill}
          alt="GenixDrive app"
          className="w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] object-contain mt-8 translate-x-[3%]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
        />
      </div>

      {/* ── DESKTOP layout (unchanged) ── */}
      <motion.div
        className="hidden lg:flex flex-row gap-8 items-center max-w-[1240px] m-auto pt-20 py-12 px-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <motion.div
          className="lg:col-span-6 flex-1 text-left"
          variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-6">
            <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: -18, left: -46, width: 30, opacity: 0.35 }} />
            <img src={grystr} alt="" className="absolute pointer-events-none select-none"
              style={{ bottom: -12, right: -40, width: 24, opacity: 0.7 }} />
            <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: -32, right: 32, width: 38, opacity: 0.5 }} />
            <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 18, left: -22, width: 12, opacity: 0.8 }} />
            <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ bottom: -352, right: -130, width: 40, opacity: 0.8 }} />
            <SubHeading color="dark" weight="semibold" size="4xl" className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
              What is GenixDrive?
            </SubHeading>
          </div>
          <Paragraph color="default" weight="light" size="base" className="leading-6.5 md:!text-justify">
            GenixDrive is a smart driving companion designed to make every
            journey safer, smarter, and more rewarding. It uses advanced
            telematics and AI to track driving behavior, monitor vehicle
            performance, and provide real-time safety alerts. Families can stay
            connected through location sharing and place notifications, while
            drivers gain valuable insights to improve their driving habits.
            Additionally, GenixDrive makes safe driving a rewarding experience
            with points, vouchers, and other incentives.
          </Paragraph>
          <div className="flex justify-start">
            <Button variant="primary" className="mt-[27px]" size="md" onClick={() => { navigate("../demo"); window.scrollTo(0, 0); }}>
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-6 flex-1 relative self-end -mb-16"
          variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.img src={ill} alt="GenixDrive app" className="w-[90%] object-contain drop-shadow-xl ml-auto block" />
            <motion.img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: -40, right: -20, width: 48, opacity: 0.7 }} />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
