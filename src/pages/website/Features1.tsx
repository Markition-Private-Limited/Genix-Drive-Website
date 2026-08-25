import { useState } from "react";
import { motion } from "framer-motion";
import frame from "../../assets/featursabot/b11.png";

import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import StoreActionsButtons from "../../components/web/StoreActionsButtons";
import SectionHeading from "../../components/web/SectionHeading";

import kf1 from "../../assets/features/2k11.png";
import kf2 from "../../assets/features/2kf2.png";
import kf3 from "../../assets/features/2k3.png";
import kf4 from "../../assets/features/2k44.png";
import FeatureSplitCard from "../../components/web/FeatureGridContainer";

import riskfree from "../../assets/featursabot/22.png";
import grnstr from "../../assets/grnstr.png";
import bluestr from "../../assets/bluestr.png";
// import grystr from "../../assets/grystr.png";

import icon1 from "../../assets/icons/2.png";
import icon2 from "../../assets/icons/1.png";
import icon3 from "../../assets/icons/3.png";
const Features1 = () => {
  /*
  const faqs = [
      {
        q: "How do speed and driving alerts work?",
        a: "Yes. Friends must accept your request before you can track them, and the connection lasts for a maximum of 8 hours.",
      },
      {
        q: "What is geo-fencing?",
        a: "Yes. Your driving behavior is analyzed to generate a safety score with insights such as speed, braking, and cornering.",
      },
      {
        q: "How does anti-theft protection work?",
        a: "Yes. You can download GenixDrive from the Play Store and App Store.",
      },
      {
        q: "Is my data safe?",
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
      {/* MOBILE BANNER */}
      <motion.div
        className="md:hidden font-cairo"
        style={{ background: 'linear-gradient(to bottom, #D9D5F5 0%, #AE97EE 100%)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-6 pt-10 pb-4 text-center">
          <SubHeading size="3xl" className="mb-4 mainheading text-black">
            Safety & <span className="text-secondary">Protection</span>
          </SubHeading>
          <p className="text-black/80 text-sm leading-relaxed mb-6">
            Your safety is our priority. With driving score, detailed insights and geo-fencing, GenixDrive helps you stay safe on the road and gives your loved ones peace of mind.
          </p>
          <StoreActionsButtons small />
        </div>
        <div className="w-full overflow-hidden relative" style={{ height: 'clamp(460px, 120vw, 560px)' }}>
          <img src={frame} alt="Safety & Protection" style={{ position: 'absolute', height: '120%', width: 'auto', maxWidth: 'none', left: '50%', top: '50%', transform: 'translate(-68%, -58%)' }} />
        </div>
      </motion.div>

      {/* BANNER — desktop only */}
      <motion.section
        className="banner hidden md:block md:min-h-[calc(90vh-0px)] overflow-hidden relative"
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
          src={frame}
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
            <SubHeading size="4xl" className="mb-3 mainheading">
              Safety & <p className="text-secondary inline">Protection</p>
            </SubHeading>

            <Paragraph size="xs" className="featuerHerText2">
              Your safety is our priority. With driving score, detailed insights for each trip and geo fencing feature, GenixDrive helps you stay safe on the road, improve your driving habits, and gives your loved ones peace of mind.
            </Paragraph>

            <StoreActionsButtons small />
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURE */}
      <motion.section
        className="features section-px py-[70px] bg-white padding-50"
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
            Safety & Protection <p className="text-secondary">KEY HIGHLIGHTS</p>
          </SectionHeading>

          {/* ......... */}

          <FeatureSplitCard
            id="saftyScoring"
            title="1. Safety Comes First"
            image={kf1}
            description="On every journey, safety is the top priority. GenixDrive’s Safety & Protection feature keeps you connected with your loved ones through real-time location updates and arrival notifications, helping you stay informed and enjoy greater peace of mind every day."
            overlay
          />

          {/* .............. */}
          <FeatureSplitCard
            id="Gooog"
            title="2. Smarter Safety Insights After Every Drive"
            image={kf2}
            description="Each trip is assigned a Safety Score based on how you drive—specifically focusing on acceleration, speeding, braking, and cornering. These insights help you understand your driving style so you can improve your road safety over time."
            reverse
            containerBg="bg-light-green"
            textColor="text-dark"
            overlay
          />

          {/* ......... */}

          <FeatureSplitCard
            title="3. Geo-Fencing for Added Security"
            image={kf3}
            description="Set up safe zones (geo-fences) for your vehicle or family
                members. Whether it’s your child arriving at school, your car
                leaving home, or entering an unknown location, you’ll get
                immediate notifications so you always know what’s happening."
            id="geofencing"
          />

          {/* .............. */}
          <FeatureSplitCard
            title=" 4. Device-Based Safety Monitoring"
            image={kf4}
            description="GenixDrive supports driving safety monitoring through the in-vehicle device, ensuring every trip is monitored with accuracy and consistency. It analyzes key driving behaviors to promote safer driving habits. GenixDrive helps improve driving awareness and enhance overall road safety for every trip."
            reverse
            containerBg="bg-light-green"
            textColor="text-dark"
            id="deviceMonitoring"
            overlay
          />
        </div>
      </motion.section>

      <motion.section className="bg-white  section-px py-[25px] pb-[60px] padding-50">
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
                Always-On <span className="text-secondary">Protection</span>
              </SubHeading>
              <div className="featureabout">
                <p className="flex items-center gap-4 mb-3">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={icon1} />
                  </span>
                  <div className="flex-2">
                    <Paragraph
                      size="xs"
                      color="default"
                      weight="medium"
                      className="leading-7 featureabouttext"
                    >
                      <strong>Background Monitoring:</strong> Safety features run
                      quietly without disturbing your drive.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-3">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={icon2} />
                  </span>
                  <div className="flex-2">
                    <Paragraph
                      size="xs"
                      color="default"
                      weight="medium"
                      className="leading-7 featureabouttext"
                    >
                      <strong>Family Travel Security:</strong> Get updates when
                      loved ones are on solo trips or late-night drives.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-3">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={icon3} />
                  </span>
                  <div className="flex-2">
                    <Paragraph
                      size="sm"
                      color="default"
                      weight="medium"
                      className="leading-8 featureabouttext !text-black"
                    >
                      <strong>24/7 Coverage:</strong> Whether short commutes or
                      long road trips, protection never switches off.
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
        className="faqs bg-surface-light section-px pt-[70px] pb-[90px] padding-50"
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
        </div>
      </motion.section>
    </div>
  );
};

export default Features1;
