import doodle from "../assets/Doodle.png";

import feature1 from "../assets/fs/f11.png";
import feature2 from "../assets/features/22.png";
import feature3 from "../assets/fs/3.png";
import feature4 from "../assets/fs/44.png";
import feature5 from "../assets/fs/f5.png";
import feature6 from "../assets/fs/61.png";
import feature7 from "../assets/fs/77.png";
import feature8 from "../assets/fs/f8.png";
import path from "../assets/path.png";
import grystr from "../assets/grystr.png";
import Button from "./Button";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/SubHeading";
import { useNavigate } from "react-router-dom";

const FeaturesBuild = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-secondary text-white font-cairo padding-50 py-[116px] px-[58px] relative overflow-hidden">
      <img
        src={path}
        className="absolute top-0 right-0 opacity-50 h-[200px]"
        alt=""
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb:[50px] md:mb-[150px]">
          <SubHeading
            color="white"
            weight="bold"
            size="4xl"
            className="text-center mainheading"
          >
            <div className="relative z-10">
              <p>Features Build for your</p>
              <img
                className="absolute doodle -z-10 -top-[20px] left-[130px] w-[252px] h-[99px]"
                src={doodle}
                alt=""
              />
            </div>
            <p>Safety | Connection | Convenience</p>
          </SubHeading>
        </div>
        {/* Feature1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="build-container order-1 md:order-0 text-center md:text-left flex flex-col gap-4 ">
            <SubHeading className="mainheading" color="white" weight="semibold">
              Social & Family
              <p>Connect</p>
            </SubHeading>

            <Paragraph color="white">
              <span className="block">
                Feel peace of mind, stay protected, and keep your loved ones
                just a tap away.
              </span>
              <span className="block">
                GenixDrive gives you the confidence of knowing your loved ones
                are safe.
              </span>
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features");
                window.scrollTo(0, 0);
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className="relative order-0 md:order-1   lg:order-none">
            {/* <img src={grystr} className="absolute -left-20" alt="" /> */}
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature1}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="relative order-0 md:order-1 lg:order-0">
            <div className=" w-full h-[220px]  md:w-[539px] md:h-[440px] bg-transparent md-bg-white/50 rounded-2xl"></div>
            <div className="rounded-2xl w-full h-[220px]  absolute top-0 left-0 md:w-[539px] md:h-[440px] overflow-hidden ">
              <img
                src={feature2}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="build-container text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Gamification & <p>Rewards</p>
            </SubHeading>

            <Paragraph size="sm" color="white">
              <span className="block">
                GenixDrive turns smart driving into a challenge you’ll want to win—earn points for every safe move you make and unlock exciting rewards like vouchers and gift cards.
              </span>
              {/* <span className="block">
                GenixDrive becomes your smart digital companion, watching over
                every mile with consistent protection.
              </span> */}
            </Paragraph>
            <Button
              onClick={() => {
                (navigate("../features3"), window.scrollTo(0, 0));
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Feature3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="build-container order-1 md:order-0 text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Safety & Protection
            </SubHeading>

            <Paragraph size="sm" color="white">
              <span className="block">
                Always watching out for you and putting your safety first, GenixDrive uses driving insights and behavior analysis to make every trip safer while monitoring your journey every mile of the way.
              </span>
              {/* <span className="block">
                GenixDrive becomes your smart digital companion, watching over
                every mile with constant protection.
              </span> */}
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features2");
                setTimeout(() => {
                  const element = document.getElementById("saftyScoring");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 100,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              }}
              size="lg"
            >
              Learn More
            </Button >
          </div>
          <div className="relative  lg:order-none">
            <img className="absolute -right-10 -top-10" src={grystr} />
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature3}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="relative order-0 md:order-1 lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature4}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="build-container  text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Organize meetups
            </SubHeading>
            <Paragraph size="sm" color="white">
              It’s connection, coordination, and adventure—all in one place.
              Turn plans into experiences with GenixMeet—create a meetup, bring
              everyone together in one chat, and watch the group’s movement
              unfold in real time with the race screen.
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features");
                setTimeout(() => {
                  const element = document.getElementById("genixsmart");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 100,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Feature5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="build-container order-1 md:order-0 text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Place notifications
            </SubHeading>
            <Paragraph size="sm" color="white">
              GenixDrive keeps you informed with real-time alerts about the
              people you monitor, notifying you of their location updates,
              movements, and important events. This ensures you always know
              what’s happening with your loved ones, giving you peace of mind
              while they stay safe and protected.
            </Paragraph>

            <Button
              onClick={() => {
                navigate("../features1");
                setTimeout(() => {
                  const element = document.getElementById("geofencing");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 100,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className="relative  lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature5}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Feature6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="relative order-0 md:order-1 lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature6}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="build-container text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Smart Vehicle Care
            </SubHeading>
            <Paragraph size="sm" color="white">
              GenixDrive keeps you connected to your vehicle through intelligent monitoring and driving insights. It analyzes real-time driving behavior to help you understand vehicle usage and reduce risky driving patterns, improving both safety and performance.
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features2");
                setTimeout(() => {
                  const element = document.getElementById("insightForEvery");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 100,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Feature7 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="build-container order-1 md:order-0 text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Driving Insights
            </SubHeading>
            <Paragraph size="sm" color="white">
              Every journey reveals a pattern GenixDrive turns it into smart,
              meaningful insights. GenixDrive transforms raw trip data into
              easy‑to‑understand safety scores and actionable insights. It’s
              your personal driving coach, helping you drive smarter and safer
            </Paragraph>

            <Button
              onClick={() => {
                (navigate("../features2"), window.scrollTo(0, 0));
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className="relative  lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature7}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center mb-20">
          <div className="relative order-0 md:order-1 lg:order-none">
            <div className="w-full h-[220px]  md:w-[539px] md:h-[440px]  rounded-2xl">
              <img
                src={feature8}
                alt="Drive & Earn"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="build-container text-center md:text-left flex flex-col gap-4">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Device Monitoring
            </SubHeading>
            <Paragraph size="sm" color="white">
              Power up your GenixDrive experience with seamless
              device-to-vehicle connectivity. Install the GenixDrive device and
              tap into the full intelligence of your vehicle monitoring,
              performance monitoring, and safety insights all delivered to your
              app instantly
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features");
                setTimeout(() => {
                  const element = document.getElementById("deviceMonitoring");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 100,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBuild;
