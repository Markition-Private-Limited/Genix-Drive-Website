import InfoCard from "../../components/sharedui/InfoCard";
import SubHeading from "../../components/sharedui/SubHeading";
import Badge from "../../components/sharedui/Badge";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BadgeCheck,
  CarFront,
  Phone,
  Smartphone,
} from "lucide-react";
import img1 from "../../assets/admin/1.png";
import img2 from "../../assets/admin/2.png";
import Paragraph from "../../components/sharedui/Paragraph";
import Button from "../../components/Button";

const Order = () => {
  return (
    <div>
      <div className=" border-b border-gray-300 mb-5 flex item-center justify-between pb-5">
        <SubHeading className="lato-font" size="2xl" weight="bold">
          Active Your Plan
          <span className="block text-xs font-light text-gray-400 lato-font">
            After Signup
          </span>
        </SubHeading>
        <div className="steps flex gap-20 items-center">
          <div className="step-container active-step">
            <span></span>
            <p className="lato-font">1. Device Selection</p>
          </div>
          <div className="step-container active-step">
            <span></span>
            <p className="lato-font">2. Choose Plan</p>
          </div>
          <div className="step-container">
            <span></span>
            <p className="lato-font">3. Payment</p>
          </div>
          <div className="step-container">
            <span></span>
            <p className="lato-font">4. Setup Completed</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3">
          <div className="flex items-center  gap-5 mb-[20px]">
            <span className="w-[44px] h-[44px] light-purple-color flex items-center justify-center text-white rounded-full">
              1
            </span>
            <SubHeading weight="bold" className="lato-font" size="xl">
              Device Selection
            </SubHeading>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex items-center  gap-5 mb-[20px]">
            <span className="w-[44px] h-[44px] light-purple-color flex items-center justify-center text-white rounded-full">
              2
            </span>
            <SubHeading weight="bold" className="lato-font" size="xl">
              Choose Plan
            </SubHeading>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 ">
        {/* section left */}
        <div className="col-span-3 px-5 pb-5 pt-10 rounded-lg bg-white overflow-visible">
          <div className="flex gap-5">
            {/* CARD 1 */}
            <div
              id="lato-font"
              className="bg-purple-50 flex-1 px-5 pb-5 pt-10 border-2 border-purple-200 rounded-2xl relative"
            >
              <span className="w-[64px] h-[64px] bg-white border-2 border-purple-200 rounded-full flex absolute -top-8 left-1/2 -translate-x-1/2 items-center justify-center shadow-sm">
                <Smartphone size={24} className="text-purple-500" />
              </span>
              <div className="text-center">
                <SubHeading className="text-center sub" weight="medium" size="lg">
                  Option 1: Smartphone Tracking
                </SubHeading>
                <SubHeading className="text-center mt-3 main" weight="bold" size="xl">
                  Use Smartphone
                </SubHeading>
                <div className="mt-6">
                  <img className="block m-auto max-h-[220px] object-contain" src={img1} alt="" />
                </div>
                <Paragraph className="mt-4">
                  You can start using Genix Drive right away with your
                  smartphone to record trips and driving insights.
                </Paragraph>
              </div>
              {/* checkbox */}
              <div className="check bg-white border border-gray-200 p-3 rounded-xl mt-5 flex items-center gap-3">
                <input
                  type="checkbox"
                  name=""
                  id="smphone"
                  className="w-5 h-5 accent-gray-900 cursor-pointer flex-shrink-0"
                />
                <label htmlFor="smphone" className="cursor-pointer text-sm leading-snug">
                  Use my smartphone as primary tracking device.
                </label>
              </div>
              {/* disclaimer */}
              <div className="mt-4 text-center text-gray-400 flex items-center gap-2 justify-center">
                <AlertTriangle size={13} />
                <span className="text-xs">Disclaimer: Lower accuracy (GPS based).</span>
              </div>
            </div>
            {/* CARD 2 */}
            <div
              id="lato-font"
              className="bg-green-25 flex-1 px-5 pb-5 pt-10 border-2 border-green-300 rounded-2xl relative"
            >
              <span className="w-[64px] h-[64px] bg-white border-2 border-green-300 rounded-full flex absolute -top-8 left-1/2 -translate-x-1/2 items-center justify-center shadow-sm">
                <CarFront size={24} className="text-gray-800" />
              </span>
              <div className="text-center">
                <Badge variant="warning">Recommended</Badge>
                <SubHeading className="text-center mt-4 sub" weight="medium" size="lg">
                  Option 2: Dedicated Device
                </SubHeading>
                <SubHeading className="text-center mt-3 main" weight="bold" size="xl">
                  Dedicated Monitoring Device
                </SubHeading>
                <div className="mt-6">
                  <img className="block m-auto max-h-[220px] object-contain" src={img2} alt="" />
                </div>
                <Paragraph className="mt-4">
                  To unlock maximum accuracy, real-time precision, and enhanced
                  reliability, we highly recommend installing our dedicated
                  monitoring device.
                </Paragraph>
              </div>
              {/* key benefits */}
              <div className="mt-5 border-t border-gray-200 pt-4">
                <strong className="text-sm">Key Benefits:</strong>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-sm text-gray-700">
                  <li>Ensures more consistent data capture.</li>
                  <li>Improved driving analysis and reporting.</li>
                  <li>Better overall app experience and reliability.</li>
                </ul>
              </div>
              {/* checkbox */}
              <div className="check bg-white border border-gray-200 p-3 rounded-lg mt-5 flex items-center gap-3">
                <input
                  type="checkbox"
                  name=""
                  id="device"
                  className="w-5 h-5 accent-gray-900 cursor-pointer rounded"
                />
                <label htmlFor="device" className="cursor-pointer">Order Your Device</label>
              </div>
            </div>
          </div>
        </div>
        {/* section-right */}
        <div className="col-span-2 p-5 rounded-lg bg-white ">
          <div className="bg-orange-100  p-2 border border-orange-400 rounded-lg text-center">
            <Badge variant="warning">PRIME</Badge>
            <SubHeading
              weight="bold"
              size="lg"
              className="mt-[10px] text-[14px]"
            >
              GenixPrime
            </SubHeading>
          </div>
          {/* features list */}
          <div className="mt-[10px] rounded-lg border border-gray-400 overflow-hidden">
            <div className="features-head featurprime p-2 relative overflow-hidden border-b border-gray-400">
              <strong>Features</strong>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <Badge variant="warning">PRIME</Badge>
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Driving Score</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Trip Monitoring</p>
              <span className="bg-orange-100 text-xs absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                30 Days
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">
                Device Integration
                <span className="block text-gray-400">
                  Device Charges, $100
                </span>
              </p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Event Planning & Monitoring</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Emergency Response</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Real-Time Driving Alerts</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Route History</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden border-b border-gray-400">
              <p className="text-sm">Driver Rewards</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
            <div className="features-head  p-2 relative overflow-hidden ">
              <p className="text-sm">Live Location</p>
              <span className="bg-orange-100 absolute right-0 top-0 h-full w-[80px] flex items-center justify-center">
                <BadgeCheck size={18} className="text-green-500" />
              </span>
            </div>
          </div>
          {/* pricing */}
          <div className="pricing relative mt-[20px] rounded-lg  border border-purple-700 p-3">
            <span className="text-center text-xs rounded-full -translate-y-1/2 absolute left-1/2 -translate-x-1/2 top-0 p-2 text-white bg-purple-600">
              Best Value
            </span>
            <div>
              <strong>1 year, $191.99</strong>
              <Paragraph>$15.99/ month + One-time $100 for device</Paragraph>
            </div>
            <input
              name="price"
              type="radio"
              className="absolute top-1/2 -translate-y-1/2 right-5"
            />
          </div>
          <div className="pricing relative mt-[10px] rounded-lg  border border-gray-400 p-3">
            <div>
              <strong>1 year, $191.99</strong>
              <Paragraph>One-time $100 for device</Paragraph>
            </div>
            <input
              name="price"
              type="radio"
              className="absolute top-1/2 -translate-y-1/2 right-5"
            />
          </div>
          <Button isFullBtn className="!max-w-full w-full rounded-full bg-secondary text-white font-bold py-4 text-base tracking-wide mt-5" variant="secondary">Checkout - $19.99</Button>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoCard title="Active Plan">
            <SubHeading size="lg" weight="bold">
              GenixDrive Premium
            </SubHeading>
            <div className="mt-2">
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Next Renewal: 15 March 2026
            </p>
          </InfoCard>
          <InfoCard title="Quick Actions">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Phone className="w-4 h-4" />
                Contact Support
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Smartphone className="w-4 h-4" />
                Open App
              </a>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Order;
