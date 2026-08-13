import { useState } from "react";
import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";

import step1 from "../../assets/signup/1.png";
import step2 from "../../assets/deviceInstall.png";
import step3 from "../../assets/signup/3.png";
import step4 from "../../assets/signup/4.png";
import cric from "../../assets/circ.png";
import grnstr from "../../assets/grnstr.png";
import grystr from "../../assets/grystr.png";
import bluestr from "../../assets/bluestr.png";


import SectionHeading from "./SectionHeading";

const SignupFlow = () => {
  const [data, setData] = useState<string>("with");
  const handleChildClick = (data: string) => {
    console.log("data from child compoment : ", data);
    setData(data);
  };
  return (
    <section className="bg-white text-black font-cairo py-16 px-6 md:py-24 md:px-12 lg:py-16 lg:px-[100px] padding-50 ">
      <SectionHeading
        className="paratExt w-full md:w-[560px]"
        paraText="Get started in minutes download the app or use our optional device,
          and begin protecting your loved ones with smart monitoring and peace
          of mind."
      >
        Sign-up
        <div className="inline-block relative ml-5 p-2">
          <p>Process</p>
          <img
            src={cric}
            alt="circle"
            className="absolute left-1/2 top-[62%] signdoodle -translate-1/2 w-[241px] h-[112px] rotate-[-5deg]"
          />
          <img src={grnstr} alt="" className="hidden md:block absolute pointer-events-none select-none"
            style={{ top: 15, left: -345, width: 38, opacity: 1 }} />
          <img src={bluestr} alt="" className="hidden md:block absolute pointer-events-none select-none"
            style={{ top: -5, left: -368, width: 18, opacity: 0.8 }} />
          <img src={grnstr} alt="" className="hidden md:block absolute pointer-events-none select-none"
            style={{ top: 15, left: 275, width: 38, opacity: 1 }} />
          <img src={grystr} alt="" className="hidden md:block absolute pointer-events-none select-none"
            style={{ top: 55, left: 315, width: 18, opacity: 0.8 }} />
        </div>
      </SectionHeading>
      <div className="mt-[30px] max-w-[1450px] m-auto">
        <Switch onClick={handleChildClick} />

        <div className="steps sigup-flows grid grid-cols-1 md:grid-cols-2 gap-10 mt-[40px] place-items-center">
          {data === "with" ? (
            <>
              {/* STEP1 */}
              <div className="w-full max-w-[450px] h-full justify-self-center md:justify-self-end step-container relative p-8 lg:p-10 rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-center md:text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 1
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Download the app & Sign up
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    First, download GenixDrive app from the Google Play
                    Store or App Store and sign up through email or phone number.
                  </Paragraph>
                  <img
                    src={step1}
                    alt="step 1"
                    className="w-full h-[200px] mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP2 */}
              <div className="w-full max-w-[450px] justify-self-center md:justify-self-start step-container p-8 lg:p-10 relative rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-center md:text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 2
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Start monitoring your score
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    Once you have logged in to your account and provided required permissions you will be able to record trips, your driving score will be visible within 24 hours after your first trip. In meantime, you can start adding connections and places to help monitor the safety of your loved ones.
                  </Paragraph>
                  <img
                    src={step4}
                    alt="step 4"
                    className="w-full h-[200px]  mt-[20px] object-contain"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* STEP1 */}
              <div className="w-full max-w-[450px] h-full justify-self-center md:justify-self-end step-container relative p-8 lg:p-10 rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-center md:text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 1
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Download the app & Sign up
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    First, download the GenixDrive app from the Google Play Store or App Store, sign up through email or phone number, and grant the required permissions.
                  </Paragraph>
                  <img
                    src={step1}
                    alt="step 1"
                    className="w-full h-[200px] mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP2 */}
              <div className="w-full max-w-[450px] h-full justify-self-center md:justify-self-start step-container relative p-8 lg:p-10 rounded-2xl bg-surface-light border">
                <div className="step-details text-center md:text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 2
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Order Your Device
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    Once you’ve signed up to GenixDrive, visit the{" "}
                    <strong className="font-bold">“Order a Device”</strong>{" "}
                    section from the menu , confirm your request to order the
                    device and select a preferred date and time for device
                    installation.
                  </Paragraph>
                  <img
                    src={step3}
                    alt="step 2"
                    className="w-full h-[200px] mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP3 */}
              <div className="w-full max-w-[450px] justify-self-center md:justify-self-end step-container relative p-8 lg:p-10 rounded-2xl bg-surface-light border">
                <div className="step-details text-center md:text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 3
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Easy Installation
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    After confirmation, our representative will call to schedule your installation. A certified technician will then ensure a safe, damage-free setup at your location.
                  </Paragraph>
                  <img
                    src={step2}
                    alt="step 3"
                    className="w-full h-[200px]  mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP4 */}
              <div className="w-full max-w-[450px] justify-self-center md:justify-self-start step-container p-8 lg:p-10 relative rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-center md:text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 4
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Start monitoring your score
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    Once everything is set up and device is activated, you can monitor driving behavior,
                    receive safety alerts, and monitor your family’s safety.
                  </Paragraph>
                  <img
                    src={step4}
                    alt="step 4"
                    className="w-full h-[200px]  mt-[50px] object-contain"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupFlow;

type Props = {
  onClick: (data: string) => void;
};

const Switch = ({ onClick }: Props) => {
  const [mode, setMode] = useState<"with" | "without">("with");
  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-flex items-center w-[420px] h-14 rounded-full border border-black/10 bg-white shadow-sm p-1">
        <div
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-primary transition-transform duration-300 ${mode === "with" ? "translate-x-0" : "translate-x-full"
            }`}
        />
        <button
          type="button"
          onClick={() => {
            (setMode("with"), onClick("with"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${mode === "with" ? "text-white" : "text-black"
            }`}
        >
          WITHOUT DEVICE
        </button>
        <button
          type="button"
          onClick={() => {
            (setMode("without"), onClick("without"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${mode === "without" ? "text-white" : "text-black"
            }`}
        >
          WITH DEVICE
        </button>
      </div>
    </div>
  );
};
