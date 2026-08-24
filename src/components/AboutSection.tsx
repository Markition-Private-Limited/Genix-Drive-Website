// import centerMobile from "../assets/HomeCenterMobile.png";
import ill from "../assets/aboutIll.png";
import ill2 from "../assets/about2nd.png";
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
      className={`bg-${bg} text-black font-cairo pt-20 px-6 py-0 lg:py-12 md:px-10 lg:px-[100px]`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center max-w-[1240px] m-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <motion.div
          className="lg:col-span-6 flex-1 text-center lg:text-left"
          variants={{
            hidden: { opacity: 0, x: -24 },
            visible: { opacity: 1, x: 0 },
          }}
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
            <img src={grnstr} alt="" className="hidden md:block absolute pointer-events-none select-none"
              style={{ bottom: -352, right: -130, width: 40, opacity: 0.8 }} />
            {/* <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 438, left: 422, width: 32, opacity: 0.8 }} /> */}
            <SubHeading color="dark" weight="semibold" size="4xl" className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
              What is GenixDrive?
            </SubHeading>
          </div>
          <Paragraph
            color="default"
            weight="light"
            size="base"
            className="leading-6.5 md:!text-justify"
          >
            GenixDrive is a smart driving companion designed to make every
            journey safer, smarter, and more rewarding. It uses advanced
            telematics and AI to track driving behavior, monitor vehicle
            performance, and provide real-time safety alerts. Families can stay
            connected through location sharing and place notifications, while
            drivers gain valuable insights to improve their driving habits.
            Additionally, GenixDrive makes safe driving a rewarding experience
            with points, vouchers, and other incentives.
          </Paragraph>
          <div className="flex justify-center lg:justify-start">
            <Button variant="primary" className="mt-[27px]" size="md" onClick={() => { navigate("../demo"); window.scrollTo(0, 0); }}>
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-6 flex-1 relative lg:self-end lg:-mb-16"
          variants={{
            hidden: { opacity: 0, x: 24 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="hidden lg:block relative">
            <motion.img
              src={ill}
              alt="GenixDrive app"
              className="w-[90%] lg:w-[90%] object-contain drop-shadow-xl ml-auto block"
            />
            <motion.img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: -40, right: -20, width: 48, opacity: 0.7 }} />
            {/* <motion.img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 48, right: 82, width: 32, opacity: 0.6 }} />
            <motion.img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 88, left: 30, width: 30, opacity: 0.15 }} /> */}
          </motion.div>
          <motion.img
            src={ill2}
            alt="GenixDrive app"
            className="block lg:hidden h-full w-auto object-contain drop-shadow-xl m-auto"
          />
          <div className="relative">
            {/* <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 0, right: 30, width: 38, opacity: 0.7 }} />
            <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 48, right: 82, width: 32, opacity: 0.6 }} />
            <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 88, left: 30, width: 30, opacity: 0.15 }} /> */}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
