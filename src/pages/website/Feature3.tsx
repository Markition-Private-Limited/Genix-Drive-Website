import { useState } from "react";
import { motion } from "framer-motion";
import frame from "../../assets/featursabot/banner3.png";
import frameMobile from "../../assets/FrameMobile.png";

import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import kf1 from "../../assets/features/4kf1.png";
import kf2 from "../../assets/features/4ff22.png";
// import kf2 from "../../assets/features/4kf2.png";
import kf3 from "../../assets/features/4k3.png";
import kf4 from "../../assets/features/4k4.png";
// import kf4 from "../../assets/features/4kf4.png";
import FeatureSplitCard from "../../components/web/FeatureGridContainer";

import riskfree from "../../assets/featursabot/4.png";

import icon1 from "../../assets/icons/2.png";
import icon2 from "../../assets/icons/1.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";

const Feature3 = () => {
  const faqs = [
    {
      q: "How do I earn rewards?",
      a: "You earn rewards by driving safely — avoiding over-speeding, harsh braking, and risky maneuvers. The safer your trips, the more points you accumulate.",
    },
    {
      q: "What kind of rewards can I get?",
      a: "Yes. Your driving behavior is analyzed to generate a safety score with insights such as speed, braking, and cornering.",
    },
    {
      q: "Does every trip give me points?",
      a: "Yes. You can download GenixDrive from the Play Store and App Store.",
    },
    {
      q: "Can I compete with friends or family?",
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
            Gamification &<p className="text-secondary">Rewards</p>
          </SubHeading>

          <Paragraph size="sm" className="featuerHerText">
            Turn every drive into a rewarding experience with GenixDrive. By
            blending safety with fun, GenixDrive transforms your everyday
            journeys into exciting challenges where good driving truly pays off.
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
          Gamification & Rewards <p className="text-secondary inline">- KEY HIGHLIGHTS</p>
        </SectionHeading>

        {/* ......... */}
        <FeatureSplitCard
          title="1. Making Safe Driving Fun"
          image={kf1}
          description="At GenixDrive, we believe safety should never feel like a burden. That’s why we’ve built gamification into every journey. Each time you drive, the app tracks your behavior and transforms it into points, milestones, and achievements. This approach doesn’t just help you stay engaged — it makes safe driving enjoyable, motivating you to keep improving trip after trip."
          overlay
        />

        {/* .............. */}
        <FeatureSplitCard
          title="2. Driving Scores That Pay Off"
          image={kf2}
          description="Every driver receives a unique safety score based on factors like speed, acceleration, braking, and cornering. This score reflects how safe and responsible your driving habits are. The higher your score, the more points you earn. Instead of simply tracking performance, GenixDrive turns your efforts into a system that pays off — rewarding you for making safety a priority."
          reverse
          containerBg="bg-light-green"
          textColor="text-dark"
          overlay
        />

        {/* ......... */}
        <FeatureSplitCard
          title="3. Redeemable Rewards"
          image={kf3}
          description="Safe driving doesn’t just keep you and your loved ones secure — it also comes with real, tangible benefits. The points you collect can be redeemed for cash, gift vouchers, discount coupons, scratch cards, or exclusive offers. With GenixDrive, every safe decision on the road contributes to something valuable, making it easier to stay motivated and committed to better driving habits."
          overlay
        />

        {/* .............. */}
        <FeatureSplitCard
          title="4. Motivation Through Gamification"
          image={kf4}
          description="GenixDrive uses gamified elements like levels, challenges, and achievements to keep you inspired. Whether you’re aiming to beat your personal best, unlock a new badge, or even compare scores with friends, the app transforms driving safety into a challenge you’ll actually look forward to. By blending safety with fun, GenixDrive ensures that the process of becoming a better driver never feels dull."
          reverse
          containerBg="bg-light-green"
          textColor="text-dark"
          overlay
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
              Safer Roads, Bigger Rewards
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
                    <strong>Earn as you drive:</strong> Collect points every
                    time you choose safer driving habits.
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
                    <strong>Turn safety into savings: </strong>Redeem your
                    points for rewards that matter most to you.
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
                    <strong>Drive better, win more:</strong> The safer your
                    behavior, the greater the benefits.
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
                    <strong>Build a culture of safety:</strong> Encourages
                    drivers to value safety not just for themselves, but for
                    everyone on the road.
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

export default Feature3;
