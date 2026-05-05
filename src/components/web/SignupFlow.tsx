import { useState } from "react";
import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";

import step1 from "../../assets/signup/1.png";
import step2 from "../../assets/deviceInstall.png";
import step3 from "../../assets/signup/3.png";
import step4 from "../../assets/signup/4.png";
import cric from "../../assets/circ.png";

import SectionHeading from "./SectionHeading";

const SignupFlow = () => {
  const [data, setData] = useState<string>("with");
  const handleChildClick = (data: string) => {
    console.log("data from child compoment : ", data);
    setData(data);
  };
  return (
    <section className="bg-white text-black font-cairo p-[70px] md:p-[135px] padding-50 ">
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
            className="absolute left-1/2 top-1/2 signdoodle -translate-1/2 w-[241px] h-[102px] "
          />
        </div>
      </SectionHeading>
      <div className="mt-[50px] max-w-8xl  m-auto">
        <Switch onClick={handleChildClick} />

        <div className="steps sigup-flows flex items-center flex-wrap justify-center gap-10 mt-[76px]">
          {data === "with" ? (
            <>
              {/* STEP1 */}
              <div className="w-[400px] h-full  step-container relative p-10 rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-left">
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
                    First, download the GenixDrive app from the Google Play
                    Store or App Store and sign up through email or phone
                  </Paragraph>
                  <img
                    src={step1}
                    alt="step 1"
                    className="w-full h-[200px] mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP2 */}
              <div className="w-[400px] h-full step-container relative p-10 rounded-2xl bg-surface-light border">
                <div className="step-details text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 2
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Order a Device
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    Order the GenixDrive device to unlock live vehicle
                    monitoring, real-time safety alerts, and advanced driving
                    insights. Install it, connect to the app, and start
                    monitoring instantly.
                  </Paragraph>
                  <img
                    src={step3}
                    alt="step 2"
                    className="w-full h-[200px] mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP3 */}
              <div className="w-[400px]  step-container relative   p-10 rounded-2xl bg-surface-light border">
                <div className="step-details text-left">
                  <SubHeading
                    size="2xl"
                    weight="black"
                    className="uppercase text-secondary mb-2 mainclass"
                  >
                    step 3
                  </SubHeading>
                  <SubHeading size="lg" weight="bold" className="mb-2 subcalss">
                    Device Installation
                  </SubHeading>
                  <Paragraph
                    size="sm"
                    color="default"
                    weight="light"
                    className="leading-5 text"
                  >
                    Once your order is confirmed, a certified GenixDrive
                    technician will visit your location to professionally
                    install the device in your car. We ensure a seamless setup
                    so you’re ready to hit the road safely.
                  </Paragraph>
                  <img
                    src={step2}
                    alt="step 3"
                    className="w-full h-[200px]  mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP4 */}
              <div className="w-[400px]  step-container p-10 relative rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-left">
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
                    Once everything is set up, you can monitor driving behavior,
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
          ) : (
            <>
              {/* STEP1 */}
              <div className="w-[400px] h-full  step-container relative p-10 rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-left">
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
                    First, download the GenixDrive app from the Google Play
                    Store or App Store and sign up through email or phone
                  </Paragraph>
                  <img
                    src={step1}
                    alt="step 1"
                    className="w-full h-[200px] mt-[50px] object-contain"
                  />
                </div>
              </div>
              {/* STEP4 */}
              <div className="w-[400px]  step-container p-10 relative rounded-2xl bg-surface-light border overflow-hidden">
                <div className="step-details text-left">
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
                    Once everything is set up, you can monitor driving behavior,
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
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-primary transition-transform duration-300 ${
            mode === "with" ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          type="button"
          onClick={() => {
            (setMode("with"), onClick("with"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "with" ? "text-white" : "text-black"
          }`}
        >
          WITH DEVICE
        </button>
        <button
          type="button"
          onClick={() => {
            (setMode("without"), onClick("without"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "without" ? "text-white" : "text-black"
          }`}
        >
          WITHOUT DEVICE
        </button>
      </div>
    </div>
  );
};
