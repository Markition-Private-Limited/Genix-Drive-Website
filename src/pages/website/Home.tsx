import Hero from "../../components/Hero";
import FeaturesStrip from "../../components/FeaturesStrip";
import AboutSection from "../../components/AboutSection";
// import BenefitsSection from "../../components/BenefitsSection";
import FeaturesBuild from "../../components/FeaturesBuild";
import SignupFlow from "../../components/web/SignupFlow";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import SectionHeading from "../../components/web/SectionHeading";
import cric from "../../assets/circ.png";
import user1 from "../../assets/bloguser1.png";
import user2 from "../../assets/bloguser2.png";

import blog1 from "../../assets/blogs/1.png";
import blog2 from "../../assets/blogs/2.png";
import grnstr from "../../assets/grnstr.png";
// import bluestr from "../../assets/bluestr.png";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate } from "react-router-dom";
// import { Timer } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
  const BlogsRecords = [
    {
      blogImg: blog1,
      category: "Telematics",
      title:
        "How GenixDrive is Redefining Family Safety and Smarter Driving in Pakistan",
      description:
        "Discover how GenixDrive uses advanced AI technology to monitor driving habits, ensuring your family's safety on the road. From real-time insights to smart risk prevention, we are bringing a new era of secure and efficient driving to Pakistan.",
      user: {
        userName: "Muhammad Sohaib",
        userImg: user1,
        date: "2026-02-10",
        readTime: "4 min read",
      },
    },
    {
      blogImg: blog2,
      category: "Maintenance",
      title: "What Makes Genix Drive Different",
      description:
        "What truly sets GenixDrive apart is our relentless commitment to merging cutting-edge AI technology with real-world safety needs. While many apps provide basic tracking, we dive deeper into driver behavior analytics, risk assessment, and proactive protection.",
      user: {
        userName: "Umar Riaz",
        userImg: user2,
        date: "2026-02-08",
        readTime: "5 min read",
      },
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <Hero />
      <FeaturesStrip />
      <AboutSection bg="white" />
      {/* <BenefitsSection /> */}
      <FeaturesBuild />
      <SignupFlow />
      {/* BLOGS */}
      <section className="px-6 py-0 md:px-12 md:py-24 lg:px-[100px] lg:py-16 bg-surface-light padding-50">
        <div className="max-w-[1450px] mx-auto">
          <SectionHeading
            className="mb-10 md:mb-12 lg:mb-12 paratExt"
            paraText="Stay updated with the latest tips, insights, and stories on safe driving, family protection, and smart vehicle care. Our blog is designed to help drivers and families make every journey smarter, safer, and more rewarding."
          >
            From the GenixDrive
            <div className="inline-block relative ml-2 md:ml-5 p-0">
              <p className="max-lg:m-0 max-lg:leading-none">Blog</p>
              <img
                src={cric}
                alt="circle"
                className="lg:hidden absolute pointer-events-none select-none"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '75px', maxWidth: 'none', height: '46px' }}
              />
              <img
                src={cric}
                alt="circle"
                className="hidden lg:block absolute left-[70px] top-65/100 -translate-1/2 max-w-[173px] h-[112px]"
              />
              <img src={grnstr} alt="" className="hidden md:block absolute pointer-events-none select-none"
                style={{ top: 0, left: 175, width: 48, opacity: 1 }} />
              <img src={grnstr} alt="" className="hidden md:block absolute pointer-events-none select-none"
                style={{ top: 0, left: -575, width: 48, opacity: 1 }} />
              {/* <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
                style={{ top: -30, left: -535, width: 28, opacity: 0.3 }} /> */}
            </div>
          </SectionHeading>

          <div className="flex flex-col md:flex-row justify-center gap-5 items-center md:items-stretch">
            {BlogsRecords.map((blog, index) => (
              <div
                onClick={() => navigate(`/blogs/${index}`)}
                key={index}
                className="w-full md:flex-1 max-w-[450px] blog-card-container cursor-pointer bg-white p-5 rounded-2xl shadow-2xl flex flex-col"
              >
                <div className="blog-img mb-4">
                  <img
                    className="w-full h-[240px]  object-cover object-[50%_0%] rounded-2xl"
                    src={blog.blogImg}
                    alt=""
                  />
                </div>
                <div className="blog-deta flex-grow">
                  {/* <strong className="text-primary leading-5 mb-3 block blog-category">
                    {blog.category}
                  </strong> */}
                  <SubHeading className="mb-5" size="2xl">
                    {blog.title}
                  </SubHeading>
                  <Paragraph color="muted" size="sm" className="text-gray-600">
                    {blog.description}
                  </Paragraph>
                </div>
                <div className="user-details mt-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                        src={blog.user.userImg}
                        alt=""
                      />
                      <div>
                        <Paragraph
                          className="blog-user"
                          color="default"
                          size="sm"
                          weight="bold"
                        >
                          {blog.user.userName}
                        </Paragraph>
                        <Paragraph
                          color="muted"
                          size="sm"
                          className="text-gray-600 blog-date"
                        >
                          {blog.user.date}
                        </Paragraph>
                      </div>
                    </div>
                    {/* <p className="text-xs text-gray-600 flex items-center gap-1 justify-center">
                      <Timer size={16} /> {blog.user.readTime}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReadytoDrive />
      {/* FAQs */}
      <motion.section
        className="faqs bg-surface-light section-px pt-[70px] pb-[90px] padding-50"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading paraText="Find answers to the most common questions about setting up and using the Genix Drive application.">
            Frequently Asked <p className="text-secondary">Questions</p>
          </SectionHeading>

          <div className="mt-10 space-y-6">
            {faqs.map((item, i) => {
              const active = openFaq === i;
              return (
                <motion.button
                  key={i}
                  className="w-full text-left relative bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all"
                  onClick={() => setOpenFaq(active ? null : i)}
                  aria-expanded={active}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.995 }}
                >
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
                    <div className="ml-12 mt-2 text-sm md:text-base text-gray-600 leading-7">
                      {item.a}
                    </div>
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

export default Home;
