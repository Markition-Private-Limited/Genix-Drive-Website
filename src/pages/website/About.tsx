// import AboutHero from "../../components/AboutHero";
// import AboutSection from "../../components/AboutSection";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";

import ab1 from "../../assets/ab11.png";
import ab2 from "../../assets/ab22.png";

import kf1 from "../../assets/k1.png";
import kf2 from "../../assets/k2.png";
import kf3 from "../../assets/k3.png";
import kf4 from "../../assets/k4.png";
import kf5 from "../../assets/k5.png";

import grnstr from "../../assets/grnstr.png";

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
      <section className="bg-surface-light px-[56px] py-[60px] padding-50">
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
          <div className="md:col-span-3 p-5 min-h-[404px] md:h-auto  bg-secondary rounded-2xl overflow-hidden z-10 relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab1}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full  p-5  z-10">
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
            </div>
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
                At GenixDrive, our mission is simple: to make roads safer and
                journeys smarter. We believe every trip matters—not just for
                drivers, but for their families and communities. By combining
                telematics technology with a rewarding ecosystem, we’re building
                a future where safe driving is encouraged, recognized, and
                celebrated.
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
                size="sm"
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
          <div className="md:col-span-3 min-h-[404px] md:h-auto p-5 bg-light-green rounded-2xl relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={ab2}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SECTION4 */}
      <section className="px-[56px] py-[120px] pb-[60px] padding-50">
        <div className="section-heading text-center mb-[50px]  w-full md:w-1/2 m-auto">
          <SubHeading
            size="4xl"
            color="dark"
            className="mb-4 mainheading relative"
          >
            <img
              className="absolute doodle md:w-[358px] h-[90px] left-[60px] -top-[30px]"
              src={kfborder}
              alt=""
            />
            Key Features That
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
              <img className="m-auto block h-[300px]" src={kf1} alt="" />
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
              <img className="m-auto block h-[300px]" src={kf2} alt="" />
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
              <img className="m-auto block h-[300px]" src={kf3} alt="" />
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
              Safety & Security
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
              <img className="m-auto block h-[300px]" src={kf5} alt="" />
            </div>
          </div>
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
              <img className="m-auto block h-[300px]" src={kf4} alt="" />
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>

        <div className="text-center mt-[80px]">
          <Button size="lg" className="uppercase" variant="primary" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en', '_blank')}>
            Download Now
          </Button>
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
