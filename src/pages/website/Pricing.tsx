// import frame from "../../assets/fframe.png";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { CircleCheck } from "lucide-react";
import Button from "../../components/Button";
import ReadytoDrive from "../../components/web/ReadytoDrive";

import grnstr from "../../assets/grnstr.png";
import bluestr from "../../assets/bluestr.png";
import grystr from "../../assets/grystr.png";
import riskfree from "../../assets/riskFreeStar1.png";
import SectionHeading from "../../components/web/SectionHeading";

import cash from "../../assets/icons/cash.jpeg";
import help from "../../assets/icons/help.jpeg";
import stop from "../../assets/icons/stop.jpeg";
import heart from "../../assets/icons/heart.jpeg";

const Pricing = () => {
  return (
    <div className="pricing">
      {/* <div className="banner relative">
        <img src={frame} alt="Pricing banner" className="w-full" />
        <SubHeading
          weight="medium"
          size="4xl"
          className="absolute text-[35px] md:text-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
        >
          <p>Our Pricing Plans </p>
          <p>
            for <span className="text-light-green">Every Driver</span>
          </p>
        </SubHeading>
      </div> */}

      {/* PRICE CARDS SECTION */}
      <section className="bg-white price-cards section-px pt-[40px] pb-[80px] padding-40">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            className="relative paratExt !mb-[40px]"
            paraText="Choose a plan that fits your driving lifestyle and enjoy all the
            safety, connectivity, and performance features GenixDrive has to
            offer."
          >
            <img
              className="absolute left-30 top-0 translate-y-1/2"
              src={grnstr}
              alt=""
            />
            <h2
              className="font-semibold leading-tight tracking-tight text-black"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Explore Our{" "}

              <span style={{
                background: "linear-gradient(135deg, #524de5 0%, #7875fb 55%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                <br /> Pricing Plans
              </span>
            </h2>
            <img
              className="absolute right-30 top-0 translate-y-1/2"
              src={grnstr}
              alt=""
            />
          </SectionHeading>

          {/* cARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[950px] mx-auto">
            {/* FREE PLAN */}
            <div className="card-container w-full relative bg-primary p-7 rounded-3xl text-white flex flex-col h-full shadow-xl">
              <div className="text-right">
                <div className="price bg-white/20 backdrop-blur-md inline-block p-2 px-4 rounded-full mb-1">
                  <span className="text-white text-sm font-medium">$0/month</span>
                </div>
              </div>

              <SubHeading weight="semibold" size="4xl" color="white" className="mb-2 !text-white">
                Free Plan
              </SubHeading>
              <SubHeading weight="semibold" size="xl" color="white" className="mb-2 !text-white">
                GenixAlpha
              </SubHeading>
              <Paragraph
                size="base"
                color="white"
                weight="medium"
                className="leading-5 !text-white opacity-90 mb-3"
              >
                Perfect for new users who want to explore GenixDrive’s core
                features before upgrading.
              </Paragraph>

              <div className="benefits mb-4 flex-grow">
                <SubHeading weight="semibold" size="xl" color="white" className="mb-5 !text-white">
                  Includes :
                </SubHeading>

                <div className="flex flex-col gap-3">
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} className="text-white" /> <span>Driving Score</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} className="text-white" /> <span>7 days past trip details</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} className="text-white" />{" "}
                    <span className="leading-tight">Add connections and monitor your loved ones</span>
                  </p>
                </div>
              </div>

              <div className="text-center mt-auto">
                <Button
                  size="lg"
                  isFullBtn={true}
                  className="!rounded-full w-full bg-white !text-primary hover:bg-gray-100 border-none py-0 font-bold"
                >
                  Start for free
                </Button>
              </div>
            </div>

            {/* PREMIUM PLAN */}
            <div className="card-container w-full relative bg-light-green p-7 rounded-3xl flex flex-col h-full shadow-xl">
              <div className="text-right">
                <div className="price bg-gray-700 inline-block p-2 px-4 rounded-full mb-1">
                  <span className="text-white text-sm">$19.99/month</span>
                </div>
              </div>

              <SubHeading weight="semibold" size="4xl" className="mb-2">
                Premium Plan
              </SubHeading>
              <SubHeading weight="semibold" size="xl" className="mb-2">
                GenixPrime
              </SubHeading>
              <Paragraph
                size="base"
                color="default"
                weight="medium"
                className="leading-5 mb-3"
              >
                For those who want complete control, safety, and rewards in one
                place.
              </Paragraph>

              <div className="benefits mb-4 flex-grow">
                <SubHeading weight="semibold" size="xl" className="mb-3">
                  Includes :
                </SubHeading>

                <div className="flex flex-col gap-3">
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} /> <span>30-Day Trip Tracking</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} /> <span>Real-Time Driving Alerts</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} />{" "}
                    <span>Route History & Live Location</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} />{" "}
                    <span>Driver Rewards & Emergency Response</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <CircleCheck size={20} />{" "}
                    <span>Event Planning & Monitoring</span>
                  </p>
                </div>
              </div>

              <div className="text-center mt-auto">
                <Button
                  size="lg"
                  variant={"dark"}
                  isFullBtn={true}
                  className="!rounded-full w-full py-4 font-bold"
                >
                  $19.99/month
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION */}
      <section className="bg-surface-light  section-px py-[60px] padding-50">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1 lg:order-none flex items-center">
              {/* Artifacts to fill space */}
              <img src={grnstr} alt="" className="absolute -top-16 left-6 w-10 opacity-70 pointer-events-none select-none" />
              <img src={bluestr} alt="" className="absolute -top-10 right-12 w-6 opacity-50 pointer-events-none select-none" />
              <img src={grystr} alt="" className="absolute -top-7 -left-0 w-7 opacity-40 pointer-events-none select-none" />
              <img src={grnstr} alt="" className="absolute -bottom-16 right-12 w-12 opacity-60 pointer-events-none select-none" />
              {/* <img src={bluestr} alt="" className="absolute -bottom-10 left-12 w-6 opacity-40 pointer-events-none select-none" />
              <img src={grystr} alt="" className="absolute bottom-1/4 -right-8 w-6 opacity-30 pointer-events-none select-none" /> */}

              <div className="rounded-2xl w-full md:w-[90%] overflow-hidden">
                <img
                  src={riskfree}
                  alt="Drive & Earn"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-4">
              <img src={bluestr} alt="" className="absolute -top-7 -right-12 w-12 opacity-60 pointer-events-none select-none" />
              <SubHeading
                className="mb-[20px] mainheading"
                color="dark"
                weight="semibold"
                size="3xl"
              >
                Risk Free Plans
              </SubHeading>

              <div className="featureabout">
                <p className="flex items-center gap-4 mb-4">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={cash} alt="" />
                  </span>
                  <div className="flex-2">
                    <SubHeading color="dark" weight="medium" size="xl">
                      14-Day Money Back Guarantee
                    </SubHeading>
                    <Paragraph
                      size="sm"
                      color="default"
                      weight="medium"
                      className="leading-5 riskfreetext"
                    >
                      If the product does not perform as advertised, you are
                      eligible for a full refund within 14 days of your purchase.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-5">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={help} alt="" />
                  </span>
                  <div className="flex-2">
                    <SubHeading color="dark" weight="medium" size="xl">
                      24/7 Fast Support
                    </SubHeading>
                    <Paragraph
                      size="sm"
                      color="default"
                      weight="medium"
                      className="leading-5 riskfreetext"
                    >
                      Our Customer Service team is available around the clock to
                      assist with any questions or concerns you may have.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-5">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={stop} alt="" />
                  </span>
                  <div className="flex-2">
                    <SubHeading color="dark" weight="medium" size="xl">
                      Cancel Anytime
                    </SubHeading>
                    <Paragraph
                      size="sm"
                      color="default"
                      weight="medium"
                      className="leading-5 riskfreetext"
                    >
                      You can cancel your subscription at any time, for any
                      reason, with no strings attached.
                    </Paragraph>
                  </div>
                </p>
                <p className="flex items-center gap-4 mb-5">
                  <span className="flex justify-center items-center bg-light-green max-w-[70px] h-[70px] flex-1 rounded-2xl">
                    <img src={heart} alt="" />
                  </span>
                  <div className="flex-2">
                    <SubHeading color="dark" weight="medium" size="xl">
                      Secure & Private Purchase
                    </SubHeading>
                    <Paragraph
                      size="sm"
                      color="default"
                      weight="medium"
                      className="leading-5 riskfreetext"
                    >
                      We prioritize your privacy and use advanced measures to
                      protect all your personal and financial information.
                    </Paragraph>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO DRIVE */}
      <ReadytoDrive isPricingPage={true} />
    </div>
  );
};

export default Pricing;
