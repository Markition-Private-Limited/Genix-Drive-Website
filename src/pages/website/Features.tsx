import { useState } from "react";
import { motion } from "framer-motion";
import frame from "../../assets/7thsky.png";
import frameMobile from "../../assets/FrameMobile.png";

import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import ab1 from "../../assets/keyfeatureB.jpg";
import ab2 from "../../assets/ff.png";
import ab3 from "../../assets/ff3.jpg";
import ab4 from "../../assets/ff44.png";

import riskfree from "../../assets/featursabot/1.png";

import icon1 from "../../assets/icons/2.png";
import icon2 from "../../assets/icons/1.png";
import icon3 from "../../assets/icons/3.png";

const Features = () => {
  const faqs = [
    {
      q: "Do I need permission to track a friend?",
      a: "Yes. Friends must accept your request before you can track them, and the connection lasts for a maximum of 8 hours.",
    },
    {
      q: "Can I track my family members all the time?",
      a: "Yes. Your driving behavior is analyzed to generate a safety score with insights such as speed, braking, and cornering.",
    },
    {
      q: "What is a supplementary user?",
      a: "Yes. You can download GenixDrive from the Play Store and App Store.",
    },
    {
      q: "Is my location data secure?",
      a: "Core features require internet for live tracking and syncing. Some data is cached and updates when connectivity is restored.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {/* BANNER */}
      <section className="banner h-screen md:h[900px] overflow-hidden relative">
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
            Social & Family
            <p className="text-secondary">Connect</p>
          </SubHeading>

          <Paragraph className="featuerHerText" size="sm">
            Stay close to what matters most — your loved ones. With AiGenix
            Social & Family Connect, you can track, share, and ensure your
            family’s safety in real time, no matter where life takes you.
          </Paragraph>

          <StoreActionsButtons />
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

      {/* FEATURE */}
      <motion.section
        className="features px-[56px] py-[120px] bg-white padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          className="mb-10"
          paraText="GenixDrive by AiGenix (Private) Limited is a smart telematics solution designed to make driving safer and more intelligent. It monitors driving habits, provides safety scores."
        >
          SOCIAL AND FAMILY CONNECT
          <p className="text-secondary">- KEY HIGHLIGHTS</p>
        </SectionHeading>

        {/* ......... */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-3 p-5 min-h-[404px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
              <SubHeading size="lg" color="white" weight="medium">
                Real-Time School Tracking for Parents
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="light"
                className="leading-5"
              >
                A mother can easily track her child’s journey to school in real
                time through GenixDrive, ensuring peace of mind and safety every
                step of the way.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-2 p-5 md:p-10 bg-secondary rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="3xl"
                color="white"
                weight="semibold"
                className="mb-4"
              >
                1. Always Stay
                <p>Connected</p>
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-5 aboutcontainertext !text-white"
              >
                Life can take your loved ones in different directions, but with
                GenixDrive, you’re never truly apart. Our Social & Family
                Connect feature keeps families and friends linked through
                real-time location sharing. Whether it’s your child on the way
                to school, your spouse driving home late, or a friend traveling
                across town — you’ll know they’re safe and exactly where they
                should be.
              </Paragraph>
            </div>
          </div>
        </motion.div>

        {/* .............. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2 p-5  md:p-10 bg-light-green rounded-2xl flex items-center justify-center">
            <div>
              <SubHeading
                size="3xl"
                color="dark"
                weight="medium"
                className="mb-4"
              >
                2. Temporary Friend Monitoring
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-5 aboutcontainertext"
              >
                Heading to meet a friend? Or want to make sure they get home
                safely? With GenixDrive, you can add a friend and track their
                location for up to 8 hours. This short-term connection is
                perfect for one-time trips, outings, or times when safety
                reassurance matters most. After the time expires, tracking ends
                automatically — giving peace of mind while respecting privacy.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 min-h-[404px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab2}
              alt=""
            />
          </div>
        </motion.div>

        {/* ......... */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-3 p-5 min-h-[404px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab3}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
              <SubHeading size="lg" color="white" weight="medium">
                Real-Time School Tracking for Parents
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="light"
                className="leading-5"
              >
                A mother can easily track her child’s journey to school in real
                time through GenixDrive, ensuring peace of mind and safety every
                step of the way.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-2 p-5 md:p-10 bg-secondary rounded-2xl flex items-center justify-center" id="deviceMonitoring">
            <div>
              <SubHeading
                size="3xl"
                color="white"
                weight="medium"
                className="mb-4"
              >
                3. Family Safety at the Core
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="medium"
                className="leading-5 aboutcontainertext !text-white"
              >
                GenixDrive is a smart telematics solution developed by AiGenix
                (Private) Limited, a technology-driven company based in Karachi,
                Pakistan. Designed for both mobile and in-vehicle devices,
                GenixDrive tracks and analyzes driving behavior to generate
                clear safety scores. From speed and braking to cornering and
                acceleration, it provides drivers with meaningful insights into
                how responsibly they drive.
              </Paragraph>
            </div>
          </div>
        </motion.div>

        {/* .............. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2 p-5  md:p-10 bg-light-green rounded-2xl flex items-center justify-center" id="genixsmart">
            <div>
              <SubHeading
                size="3xl"
                color="dark"
                weight="medium"
                className="mb-4"
              >
                GenixMeet – Smart
                <p>Group Tracking</p>
                Made Simple
              </SubHeading>
              <Paragraph
                size="sm"
                color="default"
                weight="medium"
                className="leading-5 aboutcontainertext"
              >
                Meet Location allows users to create a meet, invite
                participants, and share live location, trip progress, and
                driving score — all in one place.
              </Paragraph>
            </div>
          </div>
          <div className="md:col-span-3 min-h-[404px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab4}
              alt=""
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="bg-white  px-[56px] py-[120px] padding-50">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
          <div className="content">
            <SubHeading
              size="4xl"
              color="dark"
              className="mainheading mb-[70px]"
            >
              Smarter <span className="text-secondary">Connections</span> &
              Alerts
            </SubHeading>
            <div className="featureabout">
              <p className="flex items-center gap-4 mb-5">
                <span className="flex justify-center max-w-[70px] h-[70px] flex-1 items-center bg-light-green rounded-2xl">
                  <img src={icon1} alt="" />
                </span>
                <div className="flex-2">
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-8 featureabouttext"
                  >
                    Coordinate meet-ups with friends or family directly through
                    the app.
                  </Paragraph>
                </div>
              </p>
              <p className="flex items-center gap-4 mb-5">
                <span className="flex  justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                  <img src={icon2} alt="" />
                </span>
                <div className="flex-2">
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="medium"
                    className="leading-8 featureabouttext"
                  >
                    Receive place-based alerts when someone arrives or leaves a
                    specific location.
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
                    Get instant notifications for critical driving events that
                    may affect your loved ones.
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
        className="faqs bg-surface-light pt-[50px] px-[56px] py-[120px] padding-50"
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
              <button
                key={i}
                className="w-full text-left relative bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all"
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
              >
                {/* <span className="absolute left-6 top-6 w-6 h-1 bg-primary rounded-full"></span> */}
                <span
                  className={`inline-flex absolute text-4xl items-center justify-center w-8 h-8 rounded-full ${
                    active ? " text-secondary" : " text-gray-900"
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
              </button>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Features;
