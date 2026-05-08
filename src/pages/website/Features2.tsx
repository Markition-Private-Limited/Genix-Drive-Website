import { useState } from "react";
import { motion } from "framer-motion";
import frame from "../../assets/featursabot/b22.png";
import frameMobile from "../../assets/FrameMobile.png";

import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import kf1 from "../../assets/features/33kf2.png";
import kf2 from "../../assets/features/3kf2.png";
import kf3 from "../../assets/features/33kf3.png";
import kf4 from "../../assets/features/3k4.png";
import FeatureSplitCard from "../../components/web/FeatureGridContainer";
import riskfree from "../../assets/featursabot/3.png";

import icon1 from "../../assets/icons/2.png";
import icon2 from "../../assets/icons/1.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";
const Features2 = () => {
  const faqs = [
    {
      q: "How does the driving score improve safety?",
      a: "The score reflects safe or risky behaviors, showing you where small changes can make driving much safer.",
    },
    {
      q: "Can I see risky events from my past trips?",
      a: "Yes. Your driving behavior is analyzed to generate a safety score with insights such as speed, braking, and cornering.",
    },
    {
      q: "Does it work for motorcycles?",
      a: "Yes. You can download GenixDrive from the Play Store and App Store.",
    },
    {
      q: "Do I need extra devices for safety insights?",
      a: "Core features require internet for live tracking and syncing. Some data is cached and updates when connectivity is restored.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {/* BANNER */}
      <motion.section
        className="banner h-screen md:h-[900px] overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
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
          className="block md:hidden absolute top-0 left-0 h-full w-full object-cover featurebanner"
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
            Driving
            <span className="text-secondary"> Insights</span>
          </SubHeading>

          <Paragraph size="sm" className="featuerHerText">
            Drive smarter, safer, and more confidently with GenixDrive. By
            transforming your driving data into meaningful insights, GenixDrive
            helps you understand your habits, improve safety, and protect what
            truly matters.
          </Paragraph>

          <StoreActionsButtons />
        </motion.div>
      </motion.section>

      {/* FEATURE */}
      <motion.section
        className="features px-[56px] py-[120px] bg-white padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          className="mb-10 uppercase !w-full"
          paraText="GenixDrive by AiGenix (Private) Limited is a smart telematics solution designed to make driving safer and more intelligent. It monitors driving habits, provides safety scores."
        >
          Driving Insights <p className="text-secondary inline">- KEY HIGHLIGHTS</p>
        </SectionHeading>

        {/* ......... */}
        <FeatureSplitCard
          title="1. Turning Data Into Safer Journeys"
          image={kf1}
          description="GenixDrive transforms telematics data into practical safety insights. By analyzing speed, braking, acceleration, and cornering, it reveals patterns that affect your safety on the road. These insights help you make smarter driving choices and create a habit of safer mobility every day."
          overlay
        />

        {/* .............. */}
        <FeatureSplitCard
          title="2. Safety Scoring on Every Trip"
          image={kf2}
          description="Every journey is tracked and scored with safety as the priority. The score reflects how responsibly you handle your vehicle, showing where you’re doing well and where improvement is needed. Over time, these scores encourage safer driving and reduce the risk of accidents."
          reverse
          containerBg="bg-light-green"
          textColor="text-dark"
          overlay
          id="saftyScoring"
        />

        {/* ......... */}

        <FeatureSplitCard
          title="3. Spotting Risky Behaviors"
          image={kf3}
          description="Many unsafe habits go unnoticed while driving, but GenixDrive brings them to light. The app highlights risky events like over-speeding, sudden braking, or harsh cornering, making you aware of potential dangers. By identifying these patterns, it empowers you to drive more responsibly."
          overlay
        />

        {/* .............. */}
        <FeatureSplitCard
          title="4. Insights for Every Vehicle"
          image={kf4}
          description="Safety should never depend on the type of vehicle you are using. With GenixDrive, every trip is analyzed to ensure accurate and reliable safety feedback, tailored to real driving behavior. GenixDrive helps you understand how safely you are driving by providing clear insights."
          reverse
          containerBg="bg-light-green"
          textColor="text-dark"
          overlay
          id="insightForEvery"
        />
      </motion.section>

      <motion.section className="bg-white pt-[50px]  px-[56px] py-[120px] padding-50">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="content">
            <SubHeading
              size="4xl"
              color="dark"
              className="mainheading mb-[70px]"
            >
              A Safer Future With Every Trip
            </SubHeading>
            <div className="featureabout">
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                  <img src={icon1} alt="" />
                </span>
                <div className="flex-2">
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-8 featureabouttext"
                  >
                    <strong>Build safe habits:</strong> GenixDrive encourages
                    long-term responsible driving.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                  <img src={icon4} alt="" />
                </span>
                <div className="flex-2">
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-8 featureabouttext"
                  >
                    <strong>Protect what matters:</strong> Helps safeguard you,
                    your passengers, and others on the road.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                  <img src={icon2} alt="" />
                </span>
                <div className="flex-2">
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-8 featureabouttext !text-black"
                  >
                    <strong>Smart data use:</strong> Combines smartphones and
                    telematics devices for accurate insights.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                  <img src={icon3} alt="" />
                </span>
                <div className="flex-2">
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-8 featureabouttext !text-black"
                  >
                    <strong>Reliable feedback:</strong> Provides consistent
                    safety reports for every journey.
                  </Paragraph>
                </div>
              </p>
            </div>
          </div>
          <div className="img">
            <img
              src={riskfree}
              alt="Drive & Earn"
              className="w-full h-full  rounded-xl"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="faqs bg-surface-light px-[56px] py-[120px] padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading paraText="Choose a plan that fits your driving lifestyle and enjoy all the safety, connectivity, and performance features GenixDrive has to offer.">
          Frequently Asked <p className="text-secondary">Questions</p>
        </SectionHeading>

        <div className="mt-10 space-y-6">
          {faqs.map((item, i) => {
            const active = open === i;
            return (
              <motion.button
                key={i}
                className="w-full text-left relative bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all"
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.995 }}
              >
                {/* <span className="absolute left-6 top-6 w-6 h-1 bg-primary rounded-full"></span> */}
                <span
                  className={`inline-flex absolute text-4xl items-center justify-center w-8 h-8 rounded-full ${active ? " text-secondary" : " text-gray-900"
                    }`}
                >
                  {active ? "-" : "+"}
                </span>
                <div className="ml-12 flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Q{i + 1}: {item.q}
                  </h3>
                </div>
                {active && (
                  <p className="ml-12 mt-2 text-sm md:text-base text-gray-600 leading-7">
                    {item.a}
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Features2;
