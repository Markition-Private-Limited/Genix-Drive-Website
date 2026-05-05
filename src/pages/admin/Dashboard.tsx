import { MapPin, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import AlertBanner from "../../components/sharedui/AlertBanner";
import InfoCard from "../../components/sharedui/InfoCard";
import Badge from "../../components/sharedui/Badge";
import SimpleTable from "../../components/sharedui/SimpleTable";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import masterCArd from "../../assets/masterCArd.png";
import { useEffect, useState } from "react";
import img4 from "../../assets/admin/4.png";
import img3 from "../../assets/admin/3.png";
import Paragraph from "../../components/sharedui/Paragraph";
import DateTimeStep from "../../components/admin/DateTimeStep";
const Dashboard = () => {
  const [isModal, setIsModal] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setIsModal(false);
      }, 3000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [step]);
  return (
    <>
      <div className="">
        <div className="space-y-6">
          <AlertBanner
            message="Your last payment failed. Please update your billing info"
            actionLabel="PAY NOW"
            actionTo="/admin/settings"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="Vehicle Status">
              <div className="flex items-center gap-3">
                <Badge variant="success">Connected</Badge>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Next Renewal: 15 March 2026
              </p>
            </InfoCard>

            <InfoCard
              title="Current Location"
              right={<MapPin className="w-5 h-5 text-gray-400" />}
            >
              <p className="font-medium text-gray-900">
                Karachi Distribution Center
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Last update 5 mins ago
              </p>
            </InfoCard>

            <InfoCard title="Payment Method">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-6 rounded shadow-md">
                  <img
                    src={masterCArd}
                    alt="MasterCard"
                    className="w-8 h-6 object-contain"
                  />
                </span>
                <p className="font-medium tracking-wider">
                  **** **** **** 4242
                </p>
              </div>
            </InfoCard>
          </div>
        </div>

        <div className="mt-8">
          <SimpleTable
            title="Order & Installation"
            columns={[
              { title: "Status Stage" },
              { title: "Date & Time", align: "center" },
              { title: "Status", align: "right" },
            ]}
            rows={[
              [
                <span key="s1">Payment Confirmed</span>,
                <span key="d1" className="text-gray-700">
                  28 Oct • 02:17 PM
                </span>,
                <span key="st1">
                  <Badge variant="success">Completed</Badge>
                </span>,
              ],
              [
                <span key="s2">Processing / Packaging</span>,
                <span key="d2" className="text-gray-700">
                  29 Oct • 10:10 AM
                </span>,
                <span key="st2">
                  <Badge variant="success">Completed</Badge>
                </span>,
              ],
              [
                <span key="s3">Shipped</span>,
                <span key="d3" className="text-gray-700">
                  30 Oct • 08:35 PM
                </span>,
                <span key="st3">
                  <Badge variant="success">Completed</Badge>
                </span>,
              ],
            ]}
            footer={
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => {
                    setIsModal(true);
                    setStep(1);
                  }}
                  className="!w-full"
                  variant="secondary"
                  size="md"
                >
                  Schedule Installation Now
                </Button>
                <Button
                  className="!w-full"
                  disabled
                  variant="secondary"
                  size="md"
                >
                  View Order Details
                </Button>
              </div>
            }
          />
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
      {/* modal */}
      {isModal && (
        <div className="fixed top-0 left-0 z-10 h-full w-full bg-gray-900/30 flex items-center justify-center">
          {/* step1 */}
          {step === 1 && (
            <div className="bg-white p-5 w-2/5 border border-gray-400 rounded-lg">
              <SubHeading
                className="text-center lato-font mb-[20px] text-[24px]"
                weight="bold"
              >
                Schedule Installation
              </SubHeading>
              <div className="flex items-center justify-center gap-5 mb-[20px]">
                <span className="w-[30px] h-[30px] light-purple-color  flex items-center justify-center text-white rounded-full">
                  1
                </span>
                <SubHeading
                  weight="bold"
                  className="lato-font text-[16px]"
                  size="lg"
                >
                  Customer Information
                </SubHeading>
              </div>
              {/* form1 */}
              <div>
                <div className="flex gap-5">
                  <div className="border rounded-lg border-gray-400 relative form-area ">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      placeholder="For registration and official records."
                      className="admininput"
                    />
                  </div>
                  <div className="border rounded-lg border-gray-400 relative form-area">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      placeholder="For registration and official records."
                      className="admininput"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="border rounded-lg border-gray-400 relative form-area">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      placeholder="For notifications."
                      className="admininput"
                    />
                  </div>
                  <div className="border rounded-lg border-gray-400 relative form-area">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder="FNumber with Active Whats app (For updates, delivery, or installation coordination.)"
                      className="admininput"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="border rounded-lg flex-1 border-gray-400 relative form-area">
                    <label htmlFor="">Address</label>
                    <input
                      type="text"
                      placeholder="For device delivery or installation scheduling."
                      className="admininput"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 my-[20px]">
                <span className="w-[30px] h-[30px] light-purple-color  flex items-center justify-center text-white rounded-full">
                  2
                </span>
                <SubHeading
                  className="lato-font text-[16px] "
                  weight="bold"
                  size="lg"
                >
                  Vehicle Information
                </SubHeading>
              </div>
              {/* form2 */}
              <div className="mb-[30px]">
                <div className="flex gap-5">
                  <div className="border rounded-lg border-gray-400 relative form-area ">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      placeholder="For registration and official records."
                      className="admininput"
                    />
                  </div>
                  <div className="border rounded-lg border-gray-400 relative form-area">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      placeholder="For registration and official records."
                      className="admininput"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="border rounded-lg border-gray-400 relative form-area">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      placeholder="For notifications."
                      className="admininput"
                    />
                  </div>
                  <div className="border rounded-lg border-gray-400 relative form-area">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder="FNumber with Active Whats app (For updates, delivery, or installation coordination.)"
                      className="admininput"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="border rounded-lg flex-1 border-gray-400 relative form-area">
                    <label htmlFor="">Address</label>
                    <input
                      type="text"
                      placeholder="For device delivery or installation scheduling."
                      className="admininput"
                    />
                  </div>
                </div>
              </div>

              {/* button */}
              <Button
                onClick={() => setStep(2)}
                isFullBtn
                className="w-full !bg-blue-600 text-white "
              >
                Next
              </Button>
            </div>
          )}
          {step === 2 && (
            <div className="bg-white p-5 w-2/5 border border-gray-400 rounded-lg">
              <DateTimeStep />
              {/* button */}
              <Button
                onClick={() => setStep(3)}
                isFullBtn
                className="w-full !bg-blue-600 mt-5 text-white"
              >
                Continue
              </Button>
            </div>
          )}
          {step === 3 && (
            <div className="bg-white p-5 w-2/5 border border-gray-400 rounded-lg text-center">
              <img className="m-auto" src={img4} alt="" />
              <Paragraph>
                You will receive a call from our customer service department to
                confirm the delivery time.
              </Paragraph>
              <img className="m-auto" src={img3} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
