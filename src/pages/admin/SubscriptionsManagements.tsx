import InfoCard from "../../components/sharedui/InfoCard";
import Badge from "../../components/sharedui/Badge";
import AlertBanner from "../../components/sharedui/AlertBanner";
import SimpleTable from "../../components/sharedui/SimpleTable";
import Button from "../../components/Button";
import { Download } from "lucide-react";
import SubHeading from "../../components/sharedui/SubHeading";
import masterCArd from "../../assets/masterCArd.png";
import { useState } from "react";
import Paragraph from "../../components/sharedui/Paragraph";

const SubscriptionsManagements = () => {
  const [isCancelModal, setIsCancelModal] = useState(false);
  const [isUpgradeModal, setIsUpgradeModal] = useState(false);
  return (
    <>
      <div className="">
        <SubHeading className="mb-6" size="2xl" weight="bold">
          Active Plan Summary
        </SubHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="GenixDrive Premium">
            <div className="flex items-center gap-3">
              <Badge variant="success">Active</Badge>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Next Renewal: 15 March 2026
            </p>
            <p className="mt-1 text-xs text-gray-600">Price: $24.99/month</p>
            <div className="mt-4 flex gap-3">
              <Button
                onClick={() => setIsUpgradeModal(true)}
                variant="secondary"
                size="md"
              >
                Upgrade Plan
              </Button>
            </div>

            <p
              onClick={() => setIsCancelModal(true)}
              className="mt-3 text-xs text-red-600 cursor-pointer"
            >
              Cancel Subscription
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
              <p className="font-medium tracking-wider">**** **** **** 4242</p>
            </div>
            <div className="mt-6">
              <div className="rounded-lg ring-1 ring-black/10 bg-gray-50 px-3 py-2 text-sm text-gray-700 block">
                Expires: 12/28
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">Edit/Change Method</p>
          </InfoCard>
        </div>

        <div className="mt-6">
          <AlertBanner message="Your last payment failed. Please update your billing info" />
        </div>

        <div className="mt-6">
          <SimpleTable
            title="Billing History"
            columns={[
              { title: "Date" },
              { title: "Invoice ID" },
              { title: "Amount" },
              { title: "Status", align: "center" },
              { title: "Download", align: "right" },
            ]}
            rows={[
              [
                <span key="d1" className="text-gray-700">
                  13 Feb 2026
                </span>,
                <span key="i1" className="text-gray-700">
                  #436354
                </span>,
                <span key="a1" className="text-gray-700">
                  Rs. 15000
                </span>,
                <span key="s1">
                  <Badge variant="success">Paid</Badge>
                </span>,
                <span
                  key="dl1"
                  className="inline-flex items-center gap-1 text-gray-700"
                >
                  Download <Download className="w-4 h-4" />
                </span>,
              ],
              [
                <span key="d2" className="text-gray-700">
                  13 Feb 2026
                </span>,
                <span key="i2" className="text-gray-700">
                  #436354
                </span>,
                <span key="a2" className="text-gray-700">
                  Rs. 15000
                </span>,
                <span key="s2">
                  <Badge variant="success">Paid</Badge>
                </span>,
                <span
                  key="dl2"
                  className="inline-flex items-center gap-1 text-gray-700"
                >
                  Download <Download className="w-4 h-4" />
                </span>,
              ],
              [
                <span key="d3" className="text-gray-700">
                  13 Feb 2026
                </span>,
                <span key="i3" className="text-gray-700">
                  #436354
                </span>,
                <span key="a3" className="text-gray-700">
                  Rs. 15000
                </span>,
                <span key="s3">
                  <Badge variant="danger">Unpaid</Badge>
                </span>,
                <span
                  key="dl3"
                  className="inline-flex items-center gap-1 text-gray-700"
                >
                  Download <Download className="w-4 h-4" />
                </span>,
              ],
            ]}
          />
        </div>
      </div>
      {/* cancel modal */}
      {isCancelModal && (
        <div className="fixed top-0 left-0 z-10 h-full w-full  bg-gray-900/30 flex items-center justify-center">
          <div className="bg-white p-10 w-2/5  shadow-lg rounded-lg">
            <SubHeading className="text-center lato-font text-[24px]" size="lg">
              Are you sure you want to cancel your subscription?
            </SubHeading>

            <div className="mt-[30px] bg-orange-500 text-white p-4 rounded-lg text-center">
              <Paragraph className="lato-font text-[14px]" color="white">
                Disclaimer: By canceling, you will only be able to use the basic
                version of the app. Features such as Monitoring, Trips, Friends,
                etc will no longer be accessible.
              </Paragraph>
            </div>
            <div className="mt-[30px] p-4 rounded-lg text-center">
              <Paragraph color="default">
                You will continue to have access until the end of your current
                billing cycle. After that, trip recording and premium features
                will be disabled.
              </Paragraph>
            </div>
            <div className="mt-[30px]">
              <Button
                onClick={() => setIsCancelModal(false)}
                isFullBtn={true}
                className="w-full !bg-indigo-600 text-white "
              >
                Keep Subscription
              </Button>
              <Button
                onClick={() => setIsCancelModal(false)}
                isFullBtn={true}
                className="w-full bg-red-100 text-red-400 mt-4"
              >
                Confirm Cancellation
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* upgrade modal */}
      {isUpgradeModal && (
        <div className="fixed top-0 left-0 z-10 h-full w-full  bg-gray-900/30 flex items-center justify-center">
          <div className="bg-white p-10 w-2/5 shadow-lg rounded-lg">
            <SubHeading className="text-center lato-font text-[24px]" size="lg">
              Go Premium & Unlock X, Y, Z!
            </SubHeading>

            <div className="text-center p-10">
              <Paragraph>
                Don’t settle for basic Upgrade now and get access to:
              </Paragraph>
              <Paragraph className="mt-5">
                X: Real-time trip insights Y: Advanced driving analytics Z:
                Personalized recommendations for safer driving
              </Paragraph>
              <Paragraph className="mt-5">
                Upgrade today and supercharge your app experience!
              </Paragraph>
            </div>

            <div className="mt-[30px]">
              <Button
                onClick={() => setIsUpgradeModal(false)}
                isFullBtn={true}
                className="w-full !bg-indigo-600 text-white "
              >
                Upgrade Now
              </Button>
              <Button
                isFullBtn={true}
                onClick={() => setIsUpgradeModal(false)}
                className="w-full bg-purple-200 text-indigo-600 mt-4"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionsManagements;
