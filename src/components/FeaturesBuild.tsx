import doodle from "../assets/Doodle.png";
import feature1 from "../assets/fs/f11.png";
import feature2 from "../assets/features/22.png";
import feature3 from "../assets/fs/3a.png";
import feature4 from "../assets/fs/44.png";
import feature5 from "../assets/fs/f5.png";
import feature6 from "../assets/fs/61.png";
import feature7 from "../assets/fs/f9.png";
import feature8 from "../assets/fs/f8.png";
import path from "../assets/path.png";
import grystr from "../assets/grystr.png";
import grnstr from "../assets/grnstr.png";
// import bluestr from "../assets/bluestr.png";
import Button from "./Button";
import Paragraph from "./sharedui/Paragraph";
import SubHeading from "./sharedui/SubHeading";
import { useNavigate } from "react-router-dom";

const FeaturesBuild = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-secondary text-white font-cairo padding-50 py-16 px-6 md:py-20 md:px-10 lg:py-24 lg:px-[100px] relative overflow-hidden">
      <img
        src={path}
        className="absolute top-0 right-0 opacity-50 h-[200px]"
        alt=""
      />
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-[6%]">
        <div className="flex flex-col items-center text-center mb-12 md:mb-12 lg:mb-20">
          <SubHeading
            color="white"
            weight="bold"
            size="3xl"
            className="text-center mainheading lg:text-4xl xl:text-5xl"
          >
            <div className="relative z-10">
              <p>
                <span className="relative inline-block">
                  Features
                  <img
                    className="lg:hidden absolute -z-10 w-[135px] h-[56px] -top-[15px] -left-[12px] sm:w-[170px] sm:h-[70px] sm:-top-[18px] sm:-left-[15px] md:w-[210px] md:h-[86px] md:-top-[22px] md:-left-[18px]"
                    style={{ transform: 'rotate(180deg)' }}
                    src={doodle}
                    alt=""
                  />
                  <img
                    className="hidden lg:block absolute doodle -z-10 -top-[35px] -left-[20px] w-[272px] h-[93px] rotate-180"
                    src={doodle}
                    alt=""
                  />
                </span>
                <span className="lg:hidden">&nbsp;Build for your</span>
                <span className="hidden lg:inline">&nbsp;&nbsp; Build for your</span>
              </p>
            </div>
            <p className="whitespace-nowrap lg:whitespace-normal max-lg:text-xl">Safety | Connection | Convenience</p>
          </SubHeading>
        </div>
        {/* Feature1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, left: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grnstr} alt="" className="absolute left-2 w-10 opacity-100" />
          </div>
          <div className="build-container max-lg:order-1 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start ">
            <SubHeading className="mainheading" color="white" weight="semibold">
              Social & Family
              <p>Connect</p>
            </SubHeading>

            <Paragraph color="white">
              <span className="block">
                Feel peace of mind, stay protected, and keep your loved ones
                just a tap away. GenixDrive gives you the confidence of knowing your loved ones
                are safe.
              </span>
              {/* <span className="block">
                GenixDrive gives you the confidence of knowing your loved ones
                are safe.
              </span> */}
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features-social");
                window.scrollTo(0, 0);
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className="relative max-lg:order-0 lg:order-none">
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature1}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-right rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grystr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, right: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grystr} alt="" className="absolute right-2 w-10 opacity-100" />
          </div>
          <div className="relative  lg:order-none">
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature7}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-right rounded-xl"
              />
            </div>
          </div>
          <div className="build-container max-lg:order-1 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Driving Insights
            </SubHeading>
            <Paragraph size="sm" color="white">
              Every journey reveals a pattern, GenixDrive turns it into smart,
              meaningful insights. GenixDrive transforms raw trip data into
              easy‑to‑understand safety scores and actionable insights. It’s
              your personal driving coach, helping you drive smarter and safer
            </Paragraph>

            <Button
              onClick={() => {
                (navigate("../features-insights"), window.scrollTo(0, 0));
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Feature3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, left: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grnstr} alt="" className="absolute left-2 w-10 opacity-100" />
          </div>
          <div className="build-container max-lg:order-1 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Place Notifications
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
                navigate("../features-safety");
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
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature5}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-right rounded-xl"
              />
            </div>
            {/* <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 35, right: 70, width: 42, opacity: 0.7 }} /> */}
          </div>
        </div>
        {/* Feature4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grystr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, right: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grystr} alt="" className="absolute right-2 w-10 opacity-100" />
          </div>
          <div className="relative order-0">
            <div className=" w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[440px] bg-transparent md-bg-white/50 rounded-2xl"></div>
            <div className="rounded-2xl w-full h-[170px] absolute top-0 left-0 md:h-[300px] lg:h-[400px] xl:h-[400px] overflow-hidden ">
              <img
                src={feature2}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-left rounded-xl"
              />
            </div>
            {/* <img src={bluestr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: 15, left: 30, width: 52, opacity: 0.8 }} /> */}
          </div>
          <div className="build-container text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
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
                (navigate("../features-rewards"), window.scrollTo(0, 0));
              }}
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Feature5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, left: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grnstr} alt="" className="absolute left-2 w-10 opacity-100" />
          </div>
          <div className="build-container max-lg:order-1 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Organize Meetups
            </SubHeading>
            <Paragraph size="sm" color="white">
              Connection, coordination, and adventure—all in one place.
              Turn plans into experiences with GenixMeet—create a meetup, bring
              everyone together in one chat, and watch the group’s movement
              unfold in real time with the race screen.
            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features-social");
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
          <div className="relative max-lg:order-0 lg:order-none">
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature4}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-left rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grystr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, right: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grystr} alt="" className="absolute right-2 w-10 opacity-100" />
          </div>
          <div className="relative  lg:order-none">
            {/* <img className="absolute -right-10 -top-10" src={grystr} /> */}
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature3}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-right rounded-xl"
              />
            </div>
          </div>
          <div className="build-container max-lg:order-1 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
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
                navigate("../features-safety");
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
        </div>
        {/* Feature7 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-20 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grnstr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, left: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grnstr} alt="" className="absolute left-2 w-10 opacity-100" />
          </div>
          <div className="build-container max-lg:order-1 text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
            <SubHeading
              className="mainheading"
              color="white"
              weight="bold"
              size="3xl"
            >
              Smart Vehicle Insights
            </SubHeading>
            <Paragraph size="sm" color="white">
              GenixDrive provides real-time insights into your vehicle usage and driving behavior. Monitor driving patterns, track key events, and gain a better understanding of your journeys to support safer driving and improved vehicle performance.            </Paragraph>
            <Button
              onClick={() => {
                navigate("../features-insights");
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
          <div className="relative max-lg:order-0 lg:order-none">
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature6}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-left rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Feature8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-3 lg:gap-12 mt-12 items-center mb-0 relative max-lg:bg-white/10 max-lg:backdrop-blur-md max-lg:border max-lg:border-white/15 max-lg:rounded-2xl max-lg:p-4 max-lg:shadow-lg">
          <img src={grystr} alt="" className="hidden lg:block absolute pointer-events-none select-none"
            style={{ top: -10, right: -55, width: 48, opacity: 1 }} />
          <div className="lg:hidden absolute -top-3 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-20">
            <img src={grystr} alt="" className="absolute right-2 w-10 opacity-100" />
          </div>
          <div className="relative max-lg:order-0 lg:order-none">
            <div className="w-full h-[170px] md:h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl">
              <img
                src={feature8}
                alt="Drive & Earn"
                className="w-full h-full object-contain object-center lg:object-left rounded-xl"
              />
            </div>
            {/* <img src={grnstr} alt="" className="absolute pointer-events-none select-none"
              style={{ top: -15, left: -35, width: 38, opacity: 0.8 }} /> */}
          </div>
          <div className="build-container text-center lg:text-left flex flex-col gap-4 items-center lg:items-start">
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
                navigate("../features-safety");
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
