// import AboutHero from "../../components/AboutHero";
// import AboutSection from "../../components/AboutSection";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";

import ab1 from "../../assets/ab111.png";
import ab2 from "../../assets/ab22.png";

import kf1 from "../../assets/k1.png";
import kf2 from "../../assets/k2.png";
import kf3 from "../../assets/k3.png";
import kf4 from "../../assets/k4.png";
import kf5 from "../../assets/k5.png";

import grnstr from "../../assets/grnstr.png";
import grystr from "../../assets/grystr.png";
import bluestr from "../../assets/bluestr.png";

import kfborder from "../../assets/KEYpath.png";

import ReadytoDrive from "../../components/web/ReadytoDrive";
import SectionHeading from "../../components/web/SectionHeading";
import BenefitsSection from "../../components/BenefitsSection";
import Button from "../../components/Button";
import AboutCollageSlider from "../../components/web/AboutCollageSlider";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* About Hero Section (Slider) */}
      {/* <AboutHero /> */}
      {/* <section className="about-hero relative z-0 -mt-[100px]">
        <div className="img">
          <img className="w-full" src={aboutHeroImg} alt="" />
        </div>
      </section> */}

      {/* About Collage Slider */}
      <AboutCollageSlider />

      {/* SECTION2 */}
      <section className="bg-surface-light px-[10px] md:px-[100px] py-[70px] pb-[80px] padding-50">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            className="relative paratExt section-heading mb-5 md:mb-2"
            paraText="We are shifting our approach towards a cleaner, more visual
            experience prioritizing impactful screens over heavy text. Excessive
            content can overwhelm users and clutter the interface, diluting the
            effectiveness of our product presentation."
          >
            <img
              className="absolute left-0 top-0 translate-y-1/2"
              src={grnstr}
              alt=""
            />
            Why GenixDrive is a<p className="text-primary">Game-Changer</p>
            <img
              className="absolute right-0 top-0 translate-y-1/2"
              src={grnstr}
              alt=""
            />
          </SectionHeading>

          <div className="grid md:grid-cols-5 gap-5 mt-[50px]">
            <div className="md:col-span-3 p-5 min-h-[330px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ab1}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/0 z-10"></div>
              {/* <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
              <SubHeading size="lg" color="white" weight="medium">
                About AiGenix (Private) Limited
              </SubHeading>
              <Paragraph
                size="sm"
                color="white"
                weight="light"
                className="leading-5"
              >
                AiGenix is a Karachi-based tech company building AI-driven
                solutions like GenixDrive to make mobility smarter, safer, and
                more connected.
              </Paragraph>
            </div> */}
            </div>
            <div className="md:col-span-2 p-5 md:p-10 bg-light-green rounded-2xl flex items-center justify-center">
              <div>
                <SubHeading
                  size="3xl"
                  color="dark"
                  weight="semibold"
                  className="mb-4"
                >
                  Our Vision for a Smarter and Safer Future
                </SubHeading>
                <Paragraph
                  size="sm"
                  color="default"
                  weight="medium"
                  className="leading-5 aboutcontainertext"
                >
                  At GenixDrive, our mission is to make roads safer and journeys smarter for every one. We believe every trip matters—not just for the driver, but also for the family members and friends who care about their safety. By promoting safer driving habits and keeping loved ones connected and informed, we provide greater peace of mind while someone is on the road. Through telematics technology and a rewarding ecosystem, we are building a future where safe driving is encouraged, recognized, and celebrated.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-5 mt-5">
            <div className="md:col-span-2 p-5 md:p-10 bg-secondary rounded-2xl flex items-center justify-center">
              <div>
                <SubHeading
                  size="3xl"
                  color="white"
                  weight="semibold"
                  className="mb-4"
                >
                  Why GenixDrive
                  <p>Matters?</p>
                </SubHeading>
                <Paragraph
                  size="base"
                  color="white"
                  weight="medium"
                  className="leading-5 aboutcontainertextwhite !text-white"
                >
                  We built GenixDrive to make driving safer, smarter, and more
                  rewarding. By turning everyday driving data into simple insights
                  and rewarding good habits, GenixDrive empowers individuals to
                  improve their driving while offering peace of mind to families
                  on the road.
                </Paragraph>
              </div>
            </div>
            <div className="md:col-span-3 min-h-[364px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={ab2}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION4 */}
      <section className="px-[10px] md:px-[100px] py-[80px] pb-[60px] padding-50">
        <div className="max-w-[1240px] mx-auto">
          <div className="section-heading text-center mb-[50px]  w-full md:w-1/2 m-auto">
            <SubHeading
              size="4xl"
              color="dark"
              className="mb-4 mainheading relative"
            >
              <img
                className="absolute doodle w-[370px] h-[80px] left-[0px] xl:left-[25px] 2xl:left-[50px] -top-[22px]"
                src={kfborder}
                alt=""
              />
              <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
                style={{ top: 15, left: -45, width: 38, opacity: 1 }} />
              <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
                style={{ top: -45, left: -108, width: 58, opacity: 0.8 }} />
              <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
                style={{ top: 45, left: 575, width: 38, opacity: 1 }} />
              <img src={grystr} alt="" className="absolute pointer-events-none select-none"
                style={{ top: 85, left: 615, width: 58, opacity: 0.8 }} />
              Key Features &nbsp; &nbsp; That
              <p>Drive the Difference</p>
            </SubHeading>
            <Paragraph
              size="base"
              color="default"
              weight="medium"
              className="leading-5"
            >
              Get started in minutes download the app or use our optional device,
              and begin protecting your loved ones with smart monitoring and peace
              of mind.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-3 gap-5 justify-items-center ">
            <div className="key-feature-container flex flex-col text-center bg-surface-light px-5 rounded-2xl border border-gray-200">
              <SubHeading
                weight="medium"
                size="2xl"
                color="dark"
                className="p-1 px-4 pt-5"
              >
                Trip & Behavior Monitoring
              </SubHeading>
              <Paragraph
                size="base"
                color="default"
                weight="light"
                className="leading-5 keyfeaturetext px-5"
              >
                Monitors speed, harsh braking, rapid acceleration, and sharp
                turns.
              </Paragraph>
              <div className="mt-auto pt-7 text-center">
                <img className="m-auto block h-[230px]" src={kf1} alt="" />
              </div>
            </div>
            <div className="key-feature-container flex flex-col text-center bg-surface-light rounded-2xl px-5 border border-gray-200">
              <SubHeading
                weight="medium"
                size="2xl"
                color="dark"
                className="p-1 px-4 pt-5"
              >
                Family Safety
              </SubHeading>
              <Paragraph
                size="base"
                color="default"
                weight="medium"
                className="leading-5 keyfeaturetext px-5"
              >
                Location sharing, trip history, and place alerts to help families
                stay connected and ensure loved ones’ safety.
              </Paragraph>
              <div className="mt-auto pt-7 text-center">
                <img className="m-auto block h-[230px]" src={kf2} alt="" />
              </div>
            </div>
            <div className="key-feature-container flex flex-col text-center bg-surface-light rounded-2xl px-5 border border-gray-200">
              <SubHeading
                weight="medium"
                size="2xl"
                color="dark"
                className="p-1 px-4 pt-5"
              >
                Scoring & Rewards
              </SubHeading>
              <Paragraph
                size="base"
                color="default"
                weight="medium"
                className="leading-5 keyfeaturetext px-5"
              >
                Generates a driving score and rewards safe drivers with points,
                vouchers, or gift-based incentives.
              </Paragraph>
              <div className="mt-auto pt-7 text-center">
                <img className="m-auto block h-[230px]" src={kf3} alt="" />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-6 gap-5 mt-5">
            <div className="hidden md:block"></div>
            <div className="key-feature-container col-span-2 flex flex-col text-center bg-surface-light rounded-2xl px-5 border border-gray-200">
              <SubHeading
                weight="medium"
                size="2xl"
                color="dark"
                className="p-1 px-4 pt-5"
              >
                Live Monitoring
              </SubHeading>
              <Paragraph
                size="base"
                color="default"
                weight="medium"
                className="leading-5 keyfeaturetext px-5"
              >
                See real‑time movement, monitor trips, and know where your loved
                ones are — instantly and effortlessly.
              </Paragraph>
              <div className="mt-auto pt-7 text-center">
                <img className="m-auto block h-[230px]" src={kf5} alt="" />
              </div>
            </div>
            <div className="key-feature-container col-span-2 flex flex-col text-center bg-surface-light rounded-2xl px-5 border border-gray-200">
              <SubHeading
                weight="medium"
                size="2xl"
                color="dark"
                className="p-1 px-4 pt-5"
              >
                Organize Meetups
              </SubHeading>
              <Paragraph
                size="base"
                color="default"
                weight="medium"
                className="leading-5 keyfeaturetext px-5"
              >
                Plan meetups, chat instantly, and track your group together with
                the shared live race screen.
              </Paragraph>
              <div className="mt-auto pt-7 text-center">
                <img className="m-auto block h-[230px]" src={kf4} alt="" />
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>

          <div className="text-center mt-[50px]">
            <Button size="lg" className="uppercase" variant="primary" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en', '_blank')}>
              Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}

      {/* <AboutSection bg="surface-light" /> */}
      <BenefitsSection />

      <ReadytoDrive />
    </div>
  );
};

export default About;
