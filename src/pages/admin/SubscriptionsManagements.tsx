import InfoCard from "../../components/sharedui/InfoCard";
import Badge from "../../components/sharedui/Badge";
import SimpleTable from "../../components/sharedui/SimpleTable";
import Button from "../../components/Button";
import { Download, User, CreditCard } from "lucide-react";
import SubHeading from "../../components/sharedui/SubHeading";
import masterCArd from "../../assets/masterCArd.png";
import { useState } from "react";
import Paragraph from "../../components/sharedui/Paragraph";

const SubscriptionsManagements = () => {
  const [isCancelModal, setIsCancelModal] = useState(false);
  const [isUpgradeModal, setIsUpgradeModal] = useState(false);

  // New States for Flow Step 2 & Step 3
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Triggered when clicking 'Upgrade Now' in the Upgrade Modal
  const handleUpgradeNowClick = () => {
    setIsUpgradeModal(false); // Close original upgrade info modal
    setShowPaymentModal(true); // Open payment gateway modal
  };

  // Triggered when completing payment form
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentModal(false);
    setShowSuccessModal(true); // Open final setup completed screen
  };

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
              Next Renewal: **********
            </p>
            <p className="mt-1 text-xs text-gray-600">Price: **********</p>
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
              <p className="font-medium tracking-wider">**** **** **** ****</p>
            </div>
            <div className="mt-6">
              <div className="rounded-lg ring-1 ring-black/10 bg-gray-50 px-3 py-2 text-sm text-gray-700 block">
                Expires: XX/XX
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">Edit/Change Method</p>
          </InfoCard>
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

      {/* CANCEL MODAL */}
      {isCancelModal && (
        <div className="fixed top-0 left-0 z-10 h-full w-full bg-gray-900/30 flex items-center justify-center">
          <div className="bg-white p-10 w-2/5 shadow-lg rounded-lg">
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
                className="w-full !bg-indigo-600 text-white"
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

      {/* UPGRADE MODAL */}
      {isUpgradeModal && (
        <div className="fixed top-0 left-0 z-10 h-full w-full bg-gray-900/30 flex items-center justify-center">
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
                onClick={handleUpgradeNowClick}
                isFullBtn={true}
                className="w-full !bg-indigo-600 text-white"
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

      {/* STEP 2: SECURE PAYMENT MODAL */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl space-y-5 border border-gray-50">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-bold text-gray-900">Secure Payment Details</h3>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-3">
              <div className="relative">
                <input type="text" required placeholder="Name" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-purple-500 pl-8" />
                <User className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3.5" />
              </div>
              <div className="relative">
                <input type="text" required placeholder="Card number" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-purple-500 pl-8" />
                <CreditCard className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3.5" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" required placeholder="Expiration" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-purple-500" />
                <input type="text" required placeholder="CVV" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-purple-500" />
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Subtotal (Premium Upgrade):</span>
                  <span>$24.99</span>
                </div>
                <div className="flex justify-between text-gray-900 font-bold pt-1 text-sm">
                  <span>Total Payable Now:</span>
                  <span>$24.99</span>
                </div>
              </div>

              <div className="space-y-2 pt-3">
                <Button isFullBtn type="submit" className="w-full bg-purple-50 text-purple-700 font-semibold py-2.5 text-xs rounded-xl hover:bg-purple-100 transition-colors">
                  Pay Now - $24.99
                </Button>
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="w-full bg-purple-50 text-purple-700 font-semibold py-2.5 text-xs rounded-xl hover:bg-purple-100 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* STEP 3: SETUP COMPLETED MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center space-y-5">
            <div className="flex items-center gap-3 text-left">
              <span className="w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-bold text-gray-900">Setup Completed</h3>
            </div>

            <div className="flex flex-col items-center py-2 space-y-3">
              <div className="w-20 h-36 border-4 border-gray-800 rounded-2xl relative flex items-center justify-center bg-gray-50 shadow-inner">
                <span className="absolute top-1.5 w-8 h-2 bg-gray-800 rounded-full"></span>
                <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">✓</div>
                <span className="absolute bottom-1 w-6 h-0.5 bg-gray-300 rounded-full"></span>
              </div>
              <h4 className="text-base font-bold text-gray-900">Plan Activated!</h4>
              <p className="text-xs text-gray-500 leading-relaxed px-4">
                Congratulations! Your GenixDrive Premium Upgrade is now active. <br />
                To complete your vehicle's full setup, please download our app from your app store.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="border border-gray-300 rounded px-2.5 py-1 flex items-center gap-1.5 bg-black text-white text-[9px] font-semibold">
                <span></span> <span className="text-left leading-none">Available on <strong className="block text-[10px]">App Store</strong></span>
              </div>
              <div className="border border-gray-300 rounded px-2.5 py-1 flex items-center gap-1.5 bg-black text-white text-[9px] font-semibold">
                <span>▶</span> <span className="text-left leading-none">Available on <strong className="block text-[10px]">Play Store</strong></span>
              </div>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-[#ccff99] hover:bg-green-300 text-gray-900 font-bold py-2.5 text-xs rounded-xl shadow-xs tracking-wide transition-none"
            >
              COMPLETED
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionsManagements;