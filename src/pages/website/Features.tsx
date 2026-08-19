import { useState } from "react";
import { motion } from "framer-motion";
import frame from "../../assets/7thsky.png";
import frameMobile from "../../assets/FrameMobile.png";

import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import ab1 from "../../assets/ff1.png";
import ab2 from "../../assets/f2.png";
import ab3 from "../../assets/ff3.png";
import ab4 from "../../assets/ff44.png";

import riskfree from "../../assets/featursabot/11.png";
import grnstr from "../../assets/grnstr.png";
import bluestr from "../../assets/bluestr.png";
// import grystr from "../../assets/grystr.png";

import icon1 from "../../assets/icons/2.png";
import icon2 from "../../assets/icons/1.png";
import icon3 from "../../assets/icons/3.png";

const Features = () => {
  /*
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
  */
  const faqs = [
    {
      q: "How to download and set up your account on the Genix Drive application?",
      a: (
        <>
          <p className="mb-4">Getting started is simple. Download the Genix Drive application from the Google Play Store or Apple App Store and create your account by following the registration process. Once registered, grant the required permissions to enable accurate trip tracking and driving analysis.</p>
          <p className="mb-4">After completing the setup, you can start using the application immediately. Your driving score will begin to appear within 24 hours after completing a trip. Remember to confirm your trips through the Mark Trips section available on the dashboard, it helps us in identifying if the the trip was driven by you or not.</p>
          <p>Once you have registered, you can invite connections to monitor their trips and driving behaviour and use our social features such as GenixMeet.</p>
        </>
      ),
    },
    {
      q: "How is my driving score calculated, and why is it not showing yet?",
      a: (
        <>
          <p className="mb-4">Your driving score is calculated by analyzing your driving behavior during each trip, including speeding, harsh braking, rapid acceleration, and sharp cornering. The time of day you drive also affects your score, with driving during rush hours or at night having a negative impact.</p>
          <p>If you're a new user, your driving score will be available within 24 hours after completing your first trip in the dashboard.</p>
        </>
      ),
    },
    {
      q: "How do I select a plan or order a device from the website?",
      a: (
        <>
          <p className="mb-4">Once you log in to your account on the website using your credentials, you will be directed to your dashboard. From there, select the <strong>Activate Plan</strong> option to view and choose your preferred plan. Proceed to checkout and complete the payment to activate your plan. Your plan will be activated as soon as the payment is successfully processed.</p>
          <p>You can choose between the <strong>mobile application</strong> or a <strong>device-based</strong> solution. If you select the device option, you will be asked to choose your preferred date and time for installation. After the request is submitted, you will be asked to make the payment. Once payment is confirmed a customer service representative will contact you to confirm the time for installation of the device, you can track the status from the dashboard.</p>
        </>
      ),
    },
    {
      q: "What should I do if the app feels \"stuck\" or is acting glitchy?",
      a: (
        <>
          <p className="mb-2"><strong>A:</strong> Try these three quick steps:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Update:</strong> Make sure you have the newest version from the App Store or Play Store.</li>
            <li><strong>Refresh:</strong> Close the app completely and reopen it.</li>
            <li><strong>Restart:</strong> Restarting your phone is the fastest way to fix small technical "hiccups" and get background tracking running again.</li>
          </ol>
        </>
      ),
    },
    {
      q: "What app permissions are required for Genix Drive to function properly?",
      a: (
        <>
          <p className="mb-2">The following settings are essential for the app's core functionality:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Location Services:</strong> This must be set to "Always" for both Android and iOS devices. Setting this to "Only while using the app" will prevent the app from tracking journeys in the background or providing updates to your Companions once the app is closed.</li>
            <li><strong>Physical Motion/Activity:</strong> You must "Allow" this permission. This enables the app to automatically detect when you are in a moving vehicle so it can start and end trip recordings without manual intervention.</li>
            <li><strong>Battery Optimization (Android):</strong> This should be set to "Not optimized". Disabling battery saving restrictions for GenixDrive ensures the operating system does not "kill" the app while it is running in the background during a trip.</li>
            <li><strong>Background App Refresh:</strong> Ensure this is enabled so the app can sync data and update your driving score even when it isn't the active window on your screen.</li>
          </ul>
        </>
      ),
    }
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {/* BANNER */}
      <section className="banner min-h-[calc(100vh-80px)] md:min-h-[calc(90vh-0px)] overflow-hidden relative">
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
          className="block md:hidden absolute top-[-120px] left-0 h-full w-full object-cover featurebanner"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 max-w-[1440px] mx-auto w-full pointer-events-none">
          <motion.div
            className="content absolute w-full md:w-1/3 top-25 md:top-1/2 p-2 md:p-0 text-center md:text-left left-0 md:left-[100px] transform md:-translate-y-1/2 text-white pointer-events-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubHeading size="4xl" className="mb-5 mainheading">
              Social & Family
              <p className="text-secondary">Connect</p>
            </SubHeading>

            <Paragraph className="featuerHerText2" size="xs">
              Stay connected with people who matter the most, with GenixDrive, you can monitor and ensure your family’s safety with real time updates, no matter where life takes you.
            </Paragraph>

            <StoreActionsButtons small />
          </motion.div>
        </div>
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
        className="features px-[10px] md:px-[100px] py-[70px] bg-white padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            className="mb-10 uppercase !w-full"
            paraText="GenixDrive by AiGenix (Private) Limited is a smart telematics solution designed to make driving safer and more intelligent. It monitors driving habits, provides safety scores."
          >
            SOCIAL AND FAMILY CONNECT <p className="text-secondary">KEY HIGHLIGHTS</p>
          </SectionHeading>

          {/* ......... */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-3 p-5 min-h-[364px] lg:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative order-2 lg:order-1">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ab1}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/0 z-10"></div>
              {/* <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
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
            </div> */}
            </div>
            <div className="lg:col-span-2 p-5 lg:p-10 bg-secondary rounded-2xl flex items-center justify-center order-1 lg:order-2">
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
            className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-2 p-5  lg:p-10 bg-light-green rounded-2xl flex items-center justify-center">
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
                  Not every check-in needs to be permanent. Add any contact and follow their journey for a limited window of time — ideal for one-time trips or making sure someone you care about arrived safely. Simple, respectful, and exactly what you need in the moment.
                </Paragraph>
              </div>
            </div>
            <div className="lg:col-span-3 min-h-[364px] lg:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ab2}
                alt=""
              />
            </div>
          </motion.div>

          {/* ......... */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-3 p-5 min-h-[364px] lg:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative order-2 lg:order-1">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ab3}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/0 z-10"></div>
              {/* <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
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
            </div> */}
            </div>
            <div className="lg:col-span-2 p-5 lg:p-10 bg-secondary rounded-2xl flex items-center justify-center order-1 lg:order-2" id="deviceMonitor">
              <div>
                <SubHeading
                  size="3xl"
                  color="white"
                  weight="medium"
                  className="mb-4"
                >
                  3. Smart Location Check-ins
                </SubHeading>
                <Paragraph
                  size="sm"
                  color="white"
                  weight="medium"
                  className="leading-5 aboutcontainertext !text-white"
                >
                  GenixDrive allows you to define important locations for your loved ones—like home, school, or the office—and stay automatically updated without the need for constant check-ins. By creating custom Points of Interest, you’ll receive notification whenever someone arrives or leaves a designated location, giving you peace of mind while allowing everyone to go about their day uninterrupted.
                </Paragraph>
              </div>
            </div>
          </motion.div>

          {/* .............. */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-2 p-5  lg:p-10 bg-light-green rounded-2xl flex items-center justify-center" id="genixsmart">
              <div>
                <SubHeading
                  size="3xl"
                  color="dark"
                  weight="medium"
                  className="mb-4"
                >
                  4. GenixMeet – Smart
                  <p>Group Tracking</p>
                  Made Simple
                </SubHeading>
                <Paragraph
                  size="sm"
                  color="default"
                  weight="medium"
                  className="leading-5 aboutcontainertext"
                >
                  GenixMeet transforms the way you organize and experience group meetups. Coordinate plans effortlessly, track participants in real time, and receive instant arrival notifications—all from one intuitive experience. Stay connected, reduce the hassle of coordination, and make every meetup smoother, safer, and more enjoyable.
                </Paragraph>
              </div>
            </div>
            <div className="lg:col-span-3 min-h-[364px] lg:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ab4}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="bg-white px-[10px] md:px-[100px] py-[25px] pb-[60px] padding-50">
        <div className="relative max-w-[1240px] mx-auto">
          <img src={bluestr} alt="" className="hidden lg:block absolute -top-12 -left-12 w-12 opacity-60 pointer-events-none select-none" />
          <img src={bluestr} alt="" className="hidden lg:block absolute -top-12 left-162 w-12 opacity-60 pointer-events-none select-none" />
          <motion.div className="grid grid-cols-1 lg:grid-cols-5 gap-2 items-center">
            <div className="content lg:col-span-3">
              <SubHeading
                size="4xl"
                color="dark"
                className="mainheading mb-[30px]"
              >
                Organize meetups, receive location updates and safety insight
              </SubHeading>
              <div className="featureabout">
                <p className="flex items-center gap-4 mb-3">
                  <span className="flex justify-center max-w-[70px] h-[70px] flex-1 items-center bg-light-green rounded-2xl">
                    <img src={icon1} alt="" />
                  </span>
                  <div className="flex-2">
                    <Paragraph
                      size="xs"
                      color="default"
                      weight="medium"
                      className="leading-7 featureabouttext"
                    >
                      Coordinate meet-ups with friends or family directly through the app.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-3">
                  <span className="flex  justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={icon2} alt="" />
                  </span>
                  <div className="flex-2">
                    <Paragraph
                      size="xs"
                      color="default"
                      weight="medium"
                      className="leading-7 featureabouttext"
                    >
                      Receive place-based notifications when someone arrives at or leaves a specific location.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-3">
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
                      Enhance family safety by analyzing driving behavior of your connection.
                    </Paragraph>
                  </div>
                </p>
              </div>
            </div>
            <div className="relative flex justify-end items-center lg:col-span-2">
              {/* Artifacts to fill space */}
              <img src={grnstr} alt="" className="hidden lg:block absolute -top-12 -right-14 w-12 opacity-70 pointer-events-none select-none" />
              {/* <img src={bluestr} alt="" className="absolute -top-10 left-12 w-6 opacity-50 pointer-events-none select-none" />
              <img src={grystr} alt="" className="absolute top-1/4 -right-10 w-7 opacity-40 pointer-events-none select-none" />
              <img src={grnstr} alt="" className="absolute -bottom-16 left-16 w-12 opacity-60 pointer-events-none select-none" />
              <img src={bluestr} alt="" className="absolute -bottom-10 right-12 w-6 opacity-40 pointer-events-none select-none" />
              <img src={grystr} alt="" className="absolute bottom-1/4 -left-8 w-6 opacity-30 pointer-events-none select-none" /> */}

              <div className="rounded-2xl w-full lg:w-[90%] overflow-hidden">
                <img
                  src={riskfree}
                  alt="Drive & Earn"
                  className="w-full h-[400px] rounded-xl object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="faqs bg-surface-light px-[10px] md:px-[100px] pt-[70px] pb-[90px] padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1240px] mx-auto">
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
                </button>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Features;
