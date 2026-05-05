import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import { useNavigate } from "react-router-dom";

import demoMobile from "../../assets/demoMobile.png";
import demoDesktop from "../../assets/demoDEsktopt1.png";
import { motion } from "framer-motion";

// import frame from "../../assets/7th sec copy.png";
import frame from "../../assets/featursabot/demo.png";
import frameMobile from "../../assets/FrameMobile.png";
// import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import Button from "../../components/Button";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* BANNER */}
      {/* BANNER */}
      <section className="banner bg-white h-screen overflow-hidden relative">
        {/* Desktop Image */}
        <motion.img
          src={frame}
          alt="Features banner"
          className="hidden md:block absolute top-0 left-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Mobile Image */}
        <motion.img
          src={frameMobile}
          alt="Features banner"
          className="block md:hidden absolute top-0 left-0 h-full w-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="content absolute md:w-1/3 top-5 md:top-1/2 p-2 md:p-0 text-center md:text-left md:left-[58px] transform md:-translate-y-1/2  text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <SubHeading size="4xl" className="mb-5 mainheading">
            Experience GenixDrive
            <p className="text-gray-500">in Action</p>
          </SubHeading>

          <Paragraph size="sm">
            From real-time safety alerts to family location sharing and exciting
            rewards — GenixDrive is your complete driving companion.
          </Paragraph>

          <Button variant="primary" size="lg" className="mt-8" onClick={() => navigate("/interactive-demo")}>
            GET STARTED
          </Button>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" /> */}
        </motion.div>
      </section>

      <div className="relative ">
        <div className="hidden md:block">
          <img className="w-full" src={demoDesktop} alt="" />
        </div>
        <div className="block md:hidden">
          <img className="w-full" src={demoMobile} alt="" />
        </div>
      </div>

      <ReadytoDrive />
    </div>
  );
};

export default Demo;
