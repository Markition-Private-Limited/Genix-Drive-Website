// import centerMobile from "../assets/HomeCenterMobile.png";
import ill from "../assets/aboutIll.png";
import ill2 from "../assets/about2nd.png";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/SubHeading";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const AboutSection = ({ bg }: { bg: string }) => {
  const navigate = useNavigate();
  return (
    <motion.section
      className={`bg-${bg} text-black font-cairo p-[70px] md:p-[135px] padding-50`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex  items-center max-w-7xl m-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        <motion.div
          className="lg:col-span-6 flex-1"
          variants={{
            hidden: { opacity: 0, x: -24 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <SubHeading color="dark" weight="bold" size="4xl" className="mb-6">
            What is GenixDrive?
          </SubHeading>
          <Paragraph
            color="default"
            weight="light"
            size="base"
            className="leading-8 !text-justify"
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

          <Button variant="primary" className="mt-[27px]" size="md" onClick={() => { navigate("../about"); window.scrollTo(0, 0); }}>
            Learn MOre
          </Button>
        </motion.div>
        <motion.div
          className="lg:col-span-6 flex-1"
          variants={{
            hidden: { opacity: 0, x: 24 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="hidden md:block ">
            <motion.img
              src={ill}
              alt="GenixDrive app"
              className="h-full w-auto object-contain drop-shadow-xl  m-auto block"
              style={{ marginRight: "0px" }}
            />
          </motion.div>
          <motion.img
            src={ill2}
            alt="GenixDrive app"
            className="block md:hidden h-full w-auto object-contain drop-shadow-xl m-auto block"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
