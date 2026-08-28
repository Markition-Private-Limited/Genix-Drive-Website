import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import { useNavigate } from "react-router-dom";

import demoMobile from "../../assets/demoDesktop11.png";
import demoDesktop from "../../assets/demoDesktop11.png";

import { motion } from "framer-motion";

// import frame from "../../assets/7th sec copy.png";
import frame from "../../assets/featursabot/demo.png";
// import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import Button from "../../components/Button";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* BANNER */}
      {/* BANNER */}
      <section className="banner bg-white md:min-h-[calc(100vh-100px)] overflow-hidden relative flex flex-col md:block">
        {/* Desktop Image */}
        <motion.img
          src={frame}
          alt="Features banner"
          className="hidden md:block absolute top-0 left-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Mobile background gradient */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-br from-white via-[#f0edff] to-[#e0f7d4]" />

        {/* Mobile content — flows naturally so phone always sits right below button */}
        <motion.div
          className="block md:hidden relative z-10 pt-6 px-2 text-center"
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

          <Button variant="primary" size="lg" className="mt-8 whitespace-nowrap" onClick={() => navigate("/interactive-demo")}>
            Experience the Demo
          </Button>
        </motion.div>

        {/* Mobile phone image — flows below content, always right under button */}
        <div className="block md:hidden relative">
          <motion.img
            src={frame}
            alt="Features banner"
            className="w-full object-cover"
            style={{
              height: 'clamp(400px, 120vw, 90vh)',
              objectPosition: '93% center',
              marginTop: '-80px',
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Cover hard bottom edge without fading the phone */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '70px', background: 'linear-gradient(to bottom, transparent 0%, #f4f5ff 100%)', zIndex: 10 }} />
        </div>

        {/* Desktop content — absolute positioned, unchanged */}
        <div className="hidden md:block absolute inset-0 max-w-[1440px] mx-auto w-full pointer-events-none">
          <motion.div
            className="content absolute w-1/3 top-5/10 p-0 text-left left-[100px] transform -translate-y-1/2 text-white pointer-events-auto"
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

            <Button variant="primary" size="lg" className="mt-8 whitespace-nowrap" onClick={() => navigate("/interactive-demo")}>
              Experience the Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Mobile: fade bottom of banner into next section */}
      </section>

      <div className="relative overflow-x-hidden -mt-[80px] md:mt-0 z-20">
        {/* Seam gradient — sits behind image content, covers hard break */}
        <div className="block md:hidden absolute top-0 left-0 w-full pointer-events-none" style={{ height: '100px', background: 'linear-gradient(to bottom, #f4f5ff 0%, transparent 100%)', zIndex: 0 }} />
        <div className="hidden md:block">
          <img className="w-full" src={demoDesktop} alt="" loading="lazy" />
        </div>
        <div className="block md:hidden overflow-hidden relative z-[1]" style={{ width: '140%', marginLeft: '-20%', marginRight: '-20%' }}>
          <img
            className="w-full block"
            src={demoMobile}
            alt="Explore GenixDrive features"
            loading="lazy"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 97%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 97%, transparent 100%)',
            }}
          />
        </div>
      </div>

      <ReadytoDrive />
    </div>
  );
};

export default Demo;
