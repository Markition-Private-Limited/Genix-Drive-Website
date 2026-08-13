import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/sharedui/InfoCard";
import SubHeading from "../../components/sharedui/SubHeading";
import Badge from "../../components/sharedui/Badge";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  AlertTriangle,
  BadgeCheck,
  CarFront,
  Phone,
  Smartphone,
  XCircle,
  User,
  CreditCard,
  X,
} from "lucide-react";
import img1 from "../../assets/admin/1.png";
import img2 from "../../assets/admin/2.png";
import img4 from "../../assets/admin/4.png";
import img3 from "../../assets/admin/3.png";
import logo2 from "../../assets/logo2.png";
import Paragraph from "../../components/sharedui/Paragraph";
import Button from "../../components/Button";
import DateTimeStep from "../../components/admin/DateTimeStep";

const Order = () => {
  const navigate = useNavigate();

  // States
  const [selectedDevice, setSelectedDevice] = useState<"smartphone" | "device" | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [activeCheckoutTier, setActiveCheckoutTier] = useState<"alpha" | "prime_monthly" | "prime_yearly" | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);
  const [scheduleStep, setScheduleStep] = useState<number>(1);
  const [isFromSchedule, setIsFromSchedule] = useState<boolean>(false);

  // Schedule Step 1 - Customer Info
  const [custInfo, setCustInfo] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "" });
  const [custErrors, setCustErrors] = useState<Record<string, string>>({});

  // Schedule Step 1 - Vehicle Info
  const [vehicleInfo, setVehicleInfo] = useState({ license: "", manufacturer: "", model: "", color: "", year: "" });
  const [vehicleErrors, setVehicleErrors] = useState<Record<string, string>>({});

  // Payment Modal
  const [paymentInfo, setPaymentInfo] = useState({ name: "", cardNumber: "", expiry: "", cvv: "" });
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});

  // Auto-close schedule modal and redirect
  useEffect(() => {
    if (showScheduleModal && scheduleStep === 3) {
      const timer = setTimeout(() => {
        setShowScheduleModal(false);
        navigate("/admin/dashboard");
      }, 3000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [scheduleStep, showScheduleModal, navigate]);

  // Dynamic pricing calculation helper (Adds $100 if hardware device option is selected)
  const getTierPricingDetails = (tier: "alpha" | "prime_monthly" | "prime_yearly" | null) => {
    let subtotal = 0;
    let label = "";
    if (tier === "alpha") { subtotal = 0.00; label = "GenixAlpha"; }
    else if (tier === "prime_monthly") { subtotal = 19.99; label = "GenixPrime (Monthly)"; }
    else if (tier === "prime_yearly") { subtotal = 191.99; label = "GenixPrime (Yearly)"; }
    else { subtotal = 0.00; label = "No Plan Selected"; }

    const deviceCharges = selectedDevice === "device" ? 100 : 0;
    const total = subtotal + deviceCharges;

    return { subtotal, deviceCharges, total, label };
  };

  // Helper to format dates dynamically for plan description
  const getSubscriptionPeriod = (tier: "alpha" | "prime_monthly" | "prime_yearly" | null) => {
    if (!tier) {
      return "No plan selected. You can proceed with device activation.";
    }
    const startDate = new Date();
    const endDate = new Date();

    if (tier === "prime_yearly") {
      endDate.setFullYear(startDate.getFullYear() + 1);
    } else {
      endDate.setMonth(startDate.getMonth() + 1);
    }

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    };

    const planLabel = tier === "alpha" ? "Basic (GenixAlpha)" : tier === "prime_yearly" ? "Yearly (GenixPrime)" : "Monthly (GenixPrime)";
    return `Your ${planLabel} plan starts on ${formatDate(startDate)} and ends on ${formatDate(endDate)}.`;
  };

  // Live total for the specified cards
  const currentPricing = getTierPricingDetails(activeCheckoutTier);

  // Trigger Payment Modal or direct activation or installation
  const handleCheckoutClick = () => {
    if (!selectedDevice) return;
    if (selectedDevice === "smartphone") {
      setIsFromSchedule(false);
      if (activeCheckoutTier === null || activeCheckoutTier === "alpha") {
        setShowSuccessModal(true);
      } else {
        setShowPaymentModal(true);
      }
    } else if (selectedDevice === "device") {
      setIsFromSchedule(false);
      setShowScheduleModal(true);
      setScheduleStep(1);
    }
  };

  // Trigger Success Screen
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!paymentInfo.name.trim()) errors.name = "Name is required.";
    if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, ""))) errors.cardNumber = "Enter a valid 16-digit card number.";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentInfo.expiry)) {
      errors.expiry = "Enter expiry as MM/YY.";
    } else {
      const [mm, yy] = paymentInfo.expiry.split("/").map(Number);
      const expDate = new Date(2000 + yy, mm); // 1st of the month AFTER expiry month
      const now = new Date();
      now.setDate(1); now.setHours(0, 0, 0, 0); // normalize to start of this month
      if (expDate <= now) errors.expiry = "Card has expired. Enter a valid expiry date.";
    }
    if (!/^\d{3,4}$/.test(paymentInfo.cvv)) errors.cvv = "CVV must be 3 or 4 digits.";
    if (Object.keys(errors).length > 0) { setPaymentErrors(errors); return; }
    setPaymentErrors({});
    setShowPaymentModal(false);
    if (isFromSchedule) {
      setShowScheduleModal(true);
      setScheduleStep(3);
    } else {
      setShowSuccessModal(true);
    }
  };

  // Validate & proceed from Schedule Step 1 (sequential — only first error shown at a time)
  const handleStep1Next = () => {
    // Define all checks in order: [condition, fieldGroup, fieldKey, message]
    type FieldGroup = "cust" | "vehicle";
    const checks: [boolean, FieldGroup, string, string][] = [
      [!custInfo.firstName.trim(),                                                          "cust",    "firstName",    "First name is required."],
      [!custInfo.lastName.trim(),                                                           "cust",    "lastName",     "Last name is required."],
      [!custInfo.email.trim(),                                                              "cust",    "email",        "Email is required."],
      [!!custInfo.email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(custInfo.email),     "cust",    "email",        "Enter a valid email address."],
      [!custInfo.phone.trim(),                                                              "cust",    "phone",        "Phone number is required."],
      [!!custInfo.phone.trim() && !/^\d{11}$/.test(custInfo.phone.replace(/\s/g, "")),     "cust",    "phone",        "Phone number must be exactly 11 digits."],
      [!custInfo.address.trim(),                                                            "cust",    "address",      "Address is required."],
      [!vehicleInfo.license.trim(),                                                         "vehicle", "license",      "License plate is required."],
      [!vehicleInfo.manufacturer.trim(),                                                    "vehicle", "manufacturer", "Car manufacturer is required."],
      [!vehicleInfo.model.trim(),                                                           "vehicle", "model",        "Car model is required."],
      [!vehicleInfo.color.trim(),                                                           "vehicle", "color",        "Car color is required."],
      [!vehicleInfo.year.trim(),                                                            "vehicle", "year",         "Year of registration is required."],
      [!!vehicleInfo.year.trim() && !/^\d{4}$/.test(vehicleInfo.year),                     "vehicle", "year",         "Enter a valid 4-digit year."],
      [!!vehicleInfo.year.trim() && /^\d{4}$/.test(vehicleInfo.year) && parseInt(vehicleInfo.year) > new Date().getFullYear(), "vehicle", "year", `Year cannot be in the future (max ${new Date().getFullYear()}).`],
    ];

    // Find first failing check
    const firstFail = checks.find(([failed]) => failed);

    // Clear all previous errors first
    setCustErrors({});
    setVehicleErrors({});

    if (!firstFail) {
      setScheduleStep(2);
      return;
    }

    const [, group, field, message] = firstFail;
    if (group === "cust") setCustErrors({ [field]: message });
    else setVehicleErrors({ [field]: message });
  };

  // Close flow and navigate to Dashboard
  const handleFlowComplete = () => {
    setShowSuccessModal(false);
    navigate("/admin/dashboard");
  };

  const getButtonText = () => {
    if (selectedDevice === "smartphone" && (activeCheckoutTier === null || activeCheckoutTier === "alpha")) {
      return "Activate Plan";
    }
    return "Continue to payment →";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">

      {/* HEADER PORTION (Width is kept untouched as per feedback) */}
      <div className="border-b border-gray-200 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
        <SubHeading className="lato-font" size="2xl" weight="bold">
          Activate Your Plan
          <span className="block text-xs font-light text-gray-400 lato-font mt-1">
            After Signup
          </span>
        </SubHeading>

        {/* Step Indicators */}
        <div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
          <div className="flex items-center gap-1.5 text-purple-600">
            <span className="w-4 h-4 rounded-full border-4 border-purple-600 bg-white"></span>
            <span>1. Choose Plan</span>
          </div>
          <div className={`flex items-center gap-1.5 ${showPaymentModal || showSuccessModal ? 'text-purple-600' : ''}`}>
            <span className={`w-4 h-4 rounded-full border-4 ${showPaymentModal || showSuccessModal ? 'border-purple-600 bg-white' : 'border-gray-200 bg-white'}`}></span>
            <span>2. Payment</span>
          </div>
          <div className={`flex items-center gap-1.5 ${showSuccessModal ? 'text-purple-600' : ''}`}>
            <span className={`w-4 h-4 rounded-full border-4 ${showSuccessModal ? 'border-purple-600 bg-white' : 'border-gray-200 bg-white'}`}></span>
            <span>3. Setup Completed</span>
          </div>
        </div>
      </div>

      {/* LOWER CONTENT SECTION (Increased Left & Right Padding) */}
      <div className="px-2 md:px-2 space-y-10">

        {/* ROW 1: DEVICE SELECTION */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 light-purple-color flex items-center justify-center text-white rounded-full font-bold text-sm">
              1
            </span>
            <SubHeading weight="bold" className="lato-font" size="lg">
              Device Selection
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            {/* SMARTPHONE */}
            <div
              onClick={() => setSelectedDevice(selectedDevice === "smartphone" ? null : "smartphone")}
              className={`flex flex-col justify-between p-5 border-2 rounded-xl relative pt-10 cursor-pointer transition-all ${selectedDevice === "smartphone" ? "bg-purple-50/30 border-purple-500" : "bg-white border-gray-100"
                }`}
            >
              <span className="w-10 h-10 bg-white border border-gray-100 rounded-full flex absolute -top-5 left-[45%] items-center justify-center shadow-sm">
                <Smartphone size={18} className="text-purple-600" />
              </span>
              <div className="text-center flex-1">
                <SubHeading weight="medium" className="text-gray-400" size="base">Option 1: Smartphone Tracking</SubHeading>
                <SubHeading className="mt-1 text-gray-900" weight="bold" size="md">Use Smartphone</SubHeading>
                <div className="my-3 h-52 flex items-center justify-center">
                  <img className="max-h-full object-contain" src={img1} alt="Smartphone option" />
                </div>
                <Paragraph className="text-xs text-gray-500 px-2 md:px-8 leading-relaxed">
                  You can start using Genix Drive right away with your smartphone to record trips and driving insights.
                </Paragraph>
              </div>
              <div className="mt-4 md:mx-8">
                <div className="bg-white border border-gray-200 p-2.5 rounded-lg flex items-center gap-2.5 shadow-sm">
                  <input
                    type="checkbox"
                    id="smphone"
                    checked={selectedDevice === "smartphone"}
                    readOnly
                    className="w-4 h-4 accent-purple-600 cursor-pointer shrink-0"
                  />
                  <span className="text-xs font-semibold text-gray-800">
                    Use my smartphone as primary tracking device.
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 justify-center text-gray-400">
                  <AlertTriangle size={12} className="text-amber-500" />
                  <span className="text-[11px]">Disclaimer: Lower accuracy (GPS based).</span>
                </div>
              </div>
            </div>

            {/* HARDWARE DEVICE */}
            <div
              onClick={() => setSelectedDevice(selectedDevice === "device" ? null : "device")}
              className={`flex flex-col justify-between p-5 border-2 rounded-xl relative pt-10 cursor-pointer transition-all ${selectedDevice === "device" ? "bg-green-50/20 border-green-500" : "bg-white border-gray-100"
                }`}
            >
              <span className="w-10 h-10 bg-white border border-gray-100 rounded-full flex absolute -top-5 left-[45%] items-center justify-center shadow-sm">
                <CarFront size={18} className="text-green-600" />
              </span>
              <div className="text-center flex-1">
                <SubHeading weight="medium" size="base" className="text-gray-400">Option 2: Dedicated Device</SubHeading>
                <SubHeading className="mt-1 text-gray-900" weight="bold" size="md">Dedicated Monitoring Device</SubHeading>
                <div className="my-6 h-42 flex items-center justify-center">
                  <img className="max-h-full object-contain" src={img2} alt="OBD device option" />
                </div>
                <Paragraph className="text-xs text-gray-500 px-2 md:px-8 leading-relaxed">
                  To unlock maximum accuracy, real-time precision, and enhanced reliability, we highly recommend our dedicated monitoring hardware.
                </Paragraph>
              </div>
              <div className="mt-4 md:mx-8">
                <div className="bg-white border border-gray-200 p-2.5 rounded-lg flex items-center gap-2.5 shadow-sm">
                  <input
                    type="checkbox"
                    id="device"
                    checked={selectedDevice === "device"}
                    readOnly
                    className="w-4 h-4 accent-green-600 cursor-pointer shrink-0"
                  />
                  <span className="text-xs font-semibold text-gray-800">
                    Order Your Device
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 justify-center text-gray-400">
                  <AlertCircle size={12} className="text-purple-500" />
                  <span className="text-[11px] font-medium text-purple-700">Device Charges : $100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: CHOOSE PLAN */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 light-purple-color flex items-center justify-center text-white rounded-full font-bold text-sm">
              2
            </span>
            <SubHeading weight="bold" className="lato-font" size="lg">
              Choose Plan
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* CARD 1: GENIX ALPHA */}
            <div className={`p-5 rounded-2xl bg-white border-2 shadow-sm flex flex-col h-full justify-between transition-all ${activeCheckoutTier === "alpha" ? "border-gray-900" : "border-gray-200"
              }`}>
              <div>
                <div className="bg-gray-50 p-2.5 border border-gray-200 rounded-xl text-center">
                  <Badge variant="outline" className="bg-white text-gray-600 text-[10px]">BASIC</Badge>
                  <SubHeading weight="bold" size="md" className="mt-1 text-gray-900">GenixAlpha</SubHeading>
                </div>

                <div className="mt-4 rounded-xl border border-gray-100 overflow-hidden text-xs bg-white">
                  <div className="p-2.5 bg-gray-50 font-bold border-b border-gray-100 flex justify-between">
                    <span>Features</span>
                    <Badge variant="outline" className="text-[9px] px-1 py-0">Basic</Badge>
                  </div>
                  <div className="p-2.5 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Driving Score</span>
                    <BadgeCheck size={16} className="text-green-500" />
                  </div>
                  <div className="p-2.5 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Trip Monitoring</span>
                    <span className="text-[10px] font-bold bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">7 Days</span>
                  </div>
                  {[
                    { name: "Device Integration", sub: "Device Charges, $100" },
                  ].map((feat) => (
                    <div key={feat.name} className="p-2.5 border-b border-gray-100 last:border-none flex justify-between items-center text">
                      <div>
                        <span className="text-gray-400 font-medium block">{feat.name}</span>
                        {feat.sub && <span className="text-[10px] text-gray-400 block">{feat.sub}</span>}
                      </div>
                      <XCircle size={16} className="text-red-400" />
                    </div>
                  ))}
                  {["Event Planning & Monitoring", "Emergency Response", "Real-Time Driving Alerts", "Route History", "Driver Rewards", "Live Location"].map((feat) => (
                    <div key={feat} className="p-2.5 border-b border-gray-100 last:border-none flex justify-between items-center text-gray-400">
                      <span>{feat}</span>
                      <XCircle size={16} className="text-red-400" />
                    </div>
                  ))}
                </div>

                {/* Selectable Alpha Pricing Div */}
                <div
                  onClick={() => setActiveCheckoutTier(activeCheckoutTier === "alpha" ? null : "alpha")}
                  className={`mt-4 p-3 rounded-xl border cursor-pointer transition-all select-none ${activeCheckoutTier === "alpha" ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-white hover:bg-gray-50/50"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-xs text-gray-900 block">1 month, $0.00</strong>
                      <span className="text-[10px] text-gray-400 block mt-0.5">One-time $100 for device (if selected)</span>
                    </div>
                    <input
                      type="radio"
                      name="plan_selection_main"
                      checked={activeCheckoutTier === "alpha"}
                      readOnly
                      className="w-3.5 h-3.5 accent-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: GENIX PRIME */}
            <div className={`p-5 rounded-2xl bg-white border-2 shadow-sm flex flex-col h-full justify-between transition-all ${(activeCheckoutTier === "prime_monthly" || activeCheckoutTier === "prime_yearly") ? "border-purple-600 shadow-xs" : "border-gray-200"
              }`}>
              <div>
                <div className="bg-orange-50 p-2.5 border border-orange-200 rounded-xl text-center">
                  <Badge variant="warning" className="bg-amber-500 text-white border-none text-[10px]">PRIME</Badge>
                  <SubHeading weight="bold" size="md" className="mt-1 text-gray-900">GenixPrime</SubHeading>
                </div>

                <div className="mt-4 rounded-xl border border-gray-100 overflow-hidden text-xs">
                  <div className="p-2.5 bg-orange-50/50 font-bold border-b border-gray-100 flex justify-between">
                    <span>Features</span>
                    <Badge variant="warning" className="text-[9px] px-1 py-0">PRIME</Badge>
                  </div>
                  <div className="p-2.5 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Driving Score</span>
                    <BadgeCheck size={16} className="text-green-500" />
                  </div>
                  <div className="p-2.5 border-b border-gray-100 flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Trip Monitoring</span>
                    <span className="text-[10px] font-bold bg-orange-100 px-1.5 py-0.5 rounded text-orange-800">30 Days</span>
                  </div>
                  {[
                    { name: "Device Integration", sub: "Device Charges, $100" },
                    { name: "Event Planning & Monitoring" },
                    { name: "Emergency Response" },
                    { name: "Real-Time Driving Alerts" },
                    { name: "Route History" },
                    { name: "Driver Rewards" },
                    { name: "Live Location" }
                  ].map((feat) => (
                    <div key={feat.name} className="p-2.5 border-b border-gray-100 last:border-none flex justify-between items-center">
                      <div>
                        <span className="text-gray-700 font-medium block">{feat.name}</span>
                        {feat.sub && <span className="text-[10px] text-gray-400 block">{feat.sub}</span>}
                      </div>
                      <BadgeCheck size={16} className="text-green-500" />
                    </div>
                  ))}
                </div>

                {/* Premium Inner Selectors */}
                <div className="space-y-2 mt-4">
                  <div
                    onClick={() => setActiveCheckoutTier(activeCheckoutTier === "prime_yearly" ? null : "prime_yearly")}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer relative transition-all ${activeCheckoutTier === "prime_yearly" ? "border-purple-500 bg-purple-50/10" : "border-gray-100"
                      }`}
                  >
                    <span className="text-[8px] uppercase font-bold rounded-full absolute -top-2 right-4 px-1.5 py-0.5 text-white bg-purple-600">Best Value</span>
                    <div className="text-xs">
                      <strong className="text-gray-900 block">1 year, $191.99 <span className="text-gray-400 font-normal">($15.99/mo)</span></strong>
                      <span className="text-[10px] text-gray-400 block">One-time $100 for device (if selected)</span>
                    </div>
                    <input
                      name="prime_inner"
                      type="radio"
                      checked={activeCheckoutTier === "prime_yearly"}
                      readOnly
                      className="w-3.5 h-3.5 accent-purple-600"
                    />
                  </div>

                  <div
                    onClick={() => setActiveCheckoutTier(activeCheckoutTier === "prime_monthly" ? null : "prime_monthly")}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${activeCheckoutTier === "prime_monthly" ? "border-purple-500 bg-purple-50/10" : "border-gray-100"
                      }`}
                  >
                    <div className="text-xs">
                      <strong className="text-gray-900 block">1 month, $19.99</strong>
                      <span className="text-[10px] text-gray-400 block">One-time $100 for device (if selected)</span>
                    </div>
                    <input
                      name="prime_inner"
                      type="radio"
                      checked={activeCheckoutTier === "prime_monthly"}
                      readOnly
                      className="w-3.5 h-3.5 accent-purple-600"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CENTRALIZED CHECKOUT CARD */}
        <div className="flex justify-center pt-2">
          <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex flex-col items-center text-center space-y-2 bg-gray-50/50">
              <div className="flex items-center gap-2">
                <img src={logo2} alt="Genix Drive" className="h-8 object-contain" />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Large Amount & Plan Details */}
              <div className="text-center space-y-1">
                <div className="text-4xl font-extrabold text-gray-900">
                  ${currentPricing.total.toFixed(2)}
                </div>
                <div className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  {currentPricing.label}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed px-4 md:px-8">
                  {getSubscriptionPeriod(activeCheckoutTier)}
                </p>
              </div>

              {/* Pricing breakdown box */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2 text-xs">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Plan Charges ({activeCheckoutTier === "prime_yearly" ? "Yearly" : activeCheckoutTier === "prime_monthly" ? "Monthly" : "No Plan"})</span>
                  <span className="font-semibold text-gray-900">${currentPricing.subtotal.toFixed(2)}</span>
                </div>
                {selectedDevice === "device" && (
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Device Charges (One-time Hardware)</span>
                    <span className="font-semibold text-gray-900">${currentPricing.deviceCharges.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 flex justify-between items-center text-sm font-bold text-gray-900">
                  <span>Total Price</span>
                  <span>${currentPricing.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                isFullBtn
                disabled={!selectedDevice}
                onClick={handleCheckoutClick}
                className={`w-full rounded-xl font-semibold py-3 text-xs tracking-wide shadow-md transition-colors ${!selectedDevice
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                  : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                variant="secondary"
              >
                {getButtonText()}
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS */}
        <div className="pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Active Plan">
              <SubHeading size="md" weight="bold">GenixDrive Premium</SubHeading>
              <div className="mt-1.5"><Badge variant="success">Active</Badge></div>
              <p className="mt-2 text-[11px] text-gray-400">***********</p>
            </InfoCard>
            <InfoCard title="Quick Actions">
              <div className="flex gap-3 text-xs font-medium">
                <Link to="/support" className="inline-flex items-center gap-1.5 rounded-lg ring-1 ring-black/5 bg-gray-50 px-3 py-1.5 text-gray-600 hover:bg-gray-100">
                  <Phone className="w-3.5 h-3.5" /> Contact Support
                </Link>
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg ring-1 ring-black/5 bg-gray-50 px-3 py-1.5 text-gray-600 hover:bg-gray-100">
                  <Smartphone className="w-3.5 h-3.5" /> Open App
                </a>
              </div>
            </InfoCard>
          </div>
        </div>

      </div>

      {/* MODAL 1: SECURE PAYMENT DETAILS (As in ss50.PNG) */}
      {showPaymentModal && (
        <div
          onClick={() => {
            setShowPaymentModal(false);
            if (isFromSchedule) {
              setShowScheduleModal(true);
              setScheduleStep(2);
            }
          }}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl space-y-5 border border-gray-50"
          >
            <div className="flex items-center gap-3">
              {/* <span className="w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">2</span> */}
              <h3 className="text-base font-bold text-gray-900">Secure Payment Details</h3>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  value={paymentInfo.name}
                  onChange={(e) => { setPaymentInfo(p => ({ ...p, name: e.target.value })); setPaymentErrors(err => ({ ...err, name: "" })); }}
                  className={`w-full text-xs p-2.5 border rounded-lg focus:outline-purple-500 pl-8 ${paymentErrors.name ? "border-red-400" : "border-gray-200"}`}
                />
                <User className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3.5" />
                {paymentErrors.name && <p className="text-[10px] text-red-500 mt-0.5">{paymentErrors.name}</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Card number (16 digits)"
                  value={paymentInfo.cardNumber}
                  maxLength={19}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
                    const formatted = raw.replace(/(\d{4})/g, "$1 ").trim();
                    setPaymentInfo(p => ({ ...p, cardNumber: formatted }));
                    setPaymentErrors(err => ({ ...err, cardNumber: "" }));
                  }}
                  className={`w-full text-xs p-2.5 border rounded-lg focus:outline-purple-500 pl-8 ${paymentErrors.cardNumber ? "border-red-400" : "border-gray-200"}`}
                />
                <CreditCard className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-3.5" />
                {paymentErrors.cardNumber && <p className="text-[10px] text-red-500 mt-0.5">{paymentErrors.cardNumber}</p>}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={paymentInfo.expiry}
                    maxLength={5}
                    onChange={(e) => {
                      let val = e.target.value.replace(/[^\d/]/g, "");
                      if (val.length === 2 && !val.includes("/") && paymentInfo.expiry.length === 1) val = val + "/";
                      setPaymentInfo(p => ({ ...p, expiry: val }));
                      setPaymentErrors(err => ({ ...err, expiry: "" }));
                    }}
                    className={`w-full text-xs p-2.5 border rounded-lg focus:outline-purple-500 ${paymentErrors.expiry ? "border-red-400" : "border-gray-200"}`}
                  />
                  {paymentErrors.expiry && <p className="text-[10px] text-red-500 mt-0.5">{paymentErrors.expiry}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    maxLength={4}
                    onChange={(e) => { setPaymentInfo(p => ({ ...p, cvv: e.target.value.replace(/\D/g, "") })); setPaymentErrors(err => ({ ...err, cvv: "" })); }}
                    className={`w-full text-xs p-2.5 border rounded-lg focus:outline-purple-500 ${paymentErrors.cvv ? "border-red-400" : "border-gray-200"}`}
                  />
                  {paymentErrors.cvv && <p className="text-[10px] text-red-500 mt-0.5">{paymentErrors.cvv}</p>}
                </div>
              </div>

              {/* Price calculations dynamically adding $100 device if checked */}
              <div className="pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Subtotal ({currentPricing.label}):</span>
                  <span>${currentPricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Device Charges (One Time):</span>
                  <span>${currentPricing.deviceCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-900 font-bold pt-1 text-sm">
                  <span>Total Payable Now:</span>
                  <span>${currentPricing.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-3">
                <Button isFullBtn type="submit" className="w-full bg-purple-50 text-purple-700 font-semibold py-2.5 text-xs rounded-xl hover:bg-purple-100 transition-colors">
                  Pay Now - ${currentPricing.total.toFixed(2)}
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPaymentModal(false);
                    if (isFromSchedule) {
                      setShowScheduleModal(true);
                      setScheduleStep(2);
                    }
                  }}
                  className="w-full bg-purple-50 text-purple-700 font-semibold py-2.5 text-xs rounded-xl hover:bg-purple-100 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: SETUP COMPLETED (As in ss52.PNG) */}
      {showSuccessModal && (
        <div
          onClick={() => setShowSuccessModal(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center space-y-5"
          >
            <div className="flex items-center gap-3 text-left">
              {/* <span className="w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">3</span> */}
              <h3 className="text-base font-bold text-gray-900">Setup Completed</h3>
            </div>

            {/* Structured view matches ss52.PNG structure closely */}
            <div className="flex flex-col items-center py-2 space-y-3">
              <div className="w-20 h-36 border-4 border-gray-800 rounded-2xl relative flex items-center justify-center bg-gray-50 shadow-inner">
                <span className="absolute top-1.5 w-8 h-2 bg-gray-800 rounded-full"></span>
                <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">✓</div>
                <span className="absolute bottom-1 w-6 h-0.5 bg-gray-300 rounded-full"></span>
              </div>
              <h4 className="text-base font-bold text-gray-900">Plan Activated!</h4>
              <p className="text-xs text-gray-500 leading-relaxed px-4">
                Congratulations, Your GenixDrive Premium Plan is now active. <br />
                To complete your vehicle's full setup, please download our app from your app store.
              </p>
            </div>

            {/* Badges Layout matching App Stores */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="w-30 h-10 border border-gray-300 rounded px-2.5 py-1 flex items-center gap-1.5 bg-gray-600 text-white text-[9px] font-semibold text-center justify-center">
                <span></span> <span className="text-left leading-none">Available on <strong className="block text-[10px]">App Store</strong></span>
              </div>
              <div className="w-30 h-10 border border-gray-300 rounded px-2.5 py-1 flex items-center gap-1.5 bg-gray-600 text-white text-[9px] font-semibold text-center justify-center">
                <span>▶</span> <span className="text-left leading-none">Available on <strong className="block text-[10px]">Play Store</strong></span>
              </div>
            </div>

            {/* LOGIN NOW Button matching screen layout properties */}
            <button
              onClick={handleFlowComplete}
              className="w-full bg-[#ccff99] hover:bg-green-300 text-gray-900 font-bold py-2.5 text-xs rounded-xl shadow-xs tracking-wide transition-none"
            >
              COMPLETED
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3: SCHEDULE INSTALLATION */}
      {showScheduleModal && (
        <div
          onClick={() => { if (scheduleStep !== 3) setShowScheduleModal(false); }}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn"
        >
          {/* step 1 */}
          {scheduleStep === 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-5 w-full max-w-lg md:max-w-2xl border border-gray-400 rounded-lg relative"
            >
              {/* Cancel Button */}
              <button
                onClick={() => setShowScheduleModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <SubHeading
                className="text-center lato-font mb-[20px] text-[24px]"
                weight="bold"
              >
                Schedule Installation
              </SubHeading>
              <div className="flex items-center justify-center gap-5 mb-[20px]">
                <span className="w-[30px] h-[30px] light-purple-color flex items-center justify-center text-white rounded-full">
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
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${custErrors.firstName ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="first_name" className="text-xs text-gray-500 block px-1">First Name</label>
                      <input
                        id="first_name"
                        type="text"
                        value={custInfo.firstName}
                        onChange={(e) => { setCustInfo(p => ({ ...p, firstName: e.target.value })); setCustErrors(err => ({ ...err, firstName: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {custErrors.firstName && <p className="text-[10px] text-red-500 mt-0.5 px-1">{custErrors.firstName}</p>}
                  </div>
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${custErrors.lastName ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="last_name" className="text-xs text-gray-500 block px-1">Last Name</label>
                      <input
                        id="last_name"
                        type="text"
                        value={custInfo.lastName}
                        onChange={(e) => { setCustInfo(p => ({ ...p, lastName: e.target.value })); setCustErrors(err => ({ ...err, lastName: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {custErrors.lastName && <p className="text-[10px] text-red-500 mt-0.5 px-1">{custErrors.lastName}</p>}
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${custErrors.email ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="email" className="text-xs text-gray-500 block px-1">Email</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Provide valid email address for updates"
                        value={custInfo.email}
                        onChange={(e) => { setCustInfo(p => ({ ...p, email: e.target.value })); setCustErrors(err => ({ ...err, email: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {custErrors.email && <p className="text-[10px] text-red-500 mt-0.5 px-1">{custErrors.email}</p>}
                  </div>
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${custErrors.phone ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="phone" className="text-xs text-gray-500 block px-1">Phone Number</label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="We will contact you on this number to confirm the installation if required"
                        value={custInfo.phone}
                        onChange={(e) => { setCustInfo(p => ({ ...p, phone: e.target.value })); setCustErrors(err => ({ ...err, phone: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {custErrors.phone && <p className="text-[10px] text-red-500 mt-0.5 px-1">{custErrors.phone}</p>}
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${custErrors.address ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="address" className="text-xs text-gray-500 block px-1">Address</label>
                      <input
                        id="address"
                        type="text"
                        placeholder="Provide complete address for device delivery and installation"
                        value={custInfo.address}
                        onChange={(e) => { setCustInfo(p => ({ ...p, address: e.target.value })); setCustErrors(err => ({ ...err, address: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {custErrors.address && <p className="text-[10px] text-red-500 mt-0.5 px-1">{custErrors.address}</p>}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 my-[20px]">
                <span className="w-[30px] h-[30px] light-purple-color flex items-center justify-center text-white rounded-full">
                  2
                </span>
                <SubHeading
                  className="lato-font text-[16px]"
                  weight="bold"
                  size="lg"
                >
                  Vehicle Information
                </SubHeading>
              </div>
              {/* form2 */}
              <div className="mb-[30px]">
                <div className="flex gap-5">
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${vehicleErrors.license ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="license" className="text-xs text-gray-500 block px-1">License Plate</label>
                      <input
                        id="license"
                        type="text"
                        value={vehicleInfo.license}
                        onChange={(e) => { setVehicleInfo(p => ({ ...p, license: e.target.value })); setVehicleErrors(err => ({ ...err, license: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {vehicleErrors.license && <p className="text-[10px] text-red-500 mt-0.5 px-1">{vehicleErrors.license}</p>}
                  </div>
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${vehicleErrors.manufacturer ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="manuf" className="text-xs text-gray-500 block px-1">Car Manufacturer</label>
                      <input
                        id="manuf"
                        type="text"
                        value={vehicleInfo.manufacturer}
                        onChange={(e) => { setVehicleInfo(p => ({ ...p, manufacturer: e.target.value })); setVehicleErrors(err => ({ ...err, manufacturer: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {vehicleErrors.manufacturer && <p className="text-[10px] text-red-500 mt-0.5 px-1">{vehicleErrors.manufacturer}</p>}
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${vehicleErrors.model ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="model" className="text-xs text-gray-500 block px-1">Car Model</label>
                      <input
                        id="model"
                        type="text"
                        value={vehicleInfo.model}
                        onChange={(e) => { setVehicleInfo(p => ({ ...p, model: e.target.value })); setVehicleErrors(err => ({ ...err, model: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {vehicleErrors.model && <p className="text-[10px] text-red-500 mt-0.5 px-1">{vehicleErrors.model}</p>}
                  </div>
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${vehicleErrors.color ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="color" className="text-xs text-gray-500 block px-1">Car Color</label>
                      <input
                        id="color"
                        type="text"
                        value={vehicleInfo.color}
                        onChange={(e) => { setVehicleInfo(p => ({ ...p, color: e.target.value })); setVehicleErrors(err => ({ ...err, color: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {vehicleErrors.color && <p className="text-[10px] text-red-500 mt-0.5 px-1">{vehicleErrors.color}</p>}
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="flex-1">
                    <div className={`border rounded-lg relative form-area ${vehicleErrors.year ? "border-red-400" : "border-gray-400"}`}>
                      <label htmlFor="year" className="text-xs text-gray-500 block px-1">Year of Registration</label>
                      <input
                        id="year"
                        type="text"
                        maxLength={4}
                        value={vehicleInfo.year}
                        onChange={(e) => { setVehicleInfo(p => ({ ...p, year: e.target.value.replace(/\D/g, "") })); setVehicleErrors(err => ({ ...err, year: "" })); }}
                        className="admininput w-full"
                      />
                    </div>
                    {vehicleErrors.year && <p className="text-[10px] text-red-500 mt-0.5 px-1">{vehicleErrors.year}</p>}
                  </div>
                </div>
              </div>

              {/* button */}
              <Button
                onClick={handleStep1Next}
                isFullBtn
                className="w-full !bg-blue-600 text-white"
              >
                Next
              </Button>
            </div>
          )}

          {/* step 2 */}
          {scheduleStep === 2 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-5 w-full max-w-lg md:max-w-2xl border border-gray-400 rounded-lg relative"
            >
              {/* Cancel Button */}
              <button
                onClick={() => setShowScheduleModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <DateTimeStep />
              {/* button */}
              <Button
                onClick={() => {
                  setShowScheduleModal(false);
                  setIsFromSchedule(true);
                  setShowPaymentModal(true);
                }}
                isFullBtn
                className="w-full !bg-blue-600 mt-5 text-white"
              >
                Continue
              </Button>
            </div>
          )}

          {/* step 3 */}
          {scheduleStep === 3 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-5 w-full max-w-md border border-gray-400 rounded-lg text-center relative"
            >
              {/* Cancel Button */}
              <button
                onClick={() => setShowScheduleModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <img className="m-auto max-h-32 object-contain" src={img4} alt="" />
              <Paragraph className="my-4 text-sm font-semibold text-gray-800">
                You will receive a call from our customer service department to
                confirm the delivery time.
              </Paragraph>
              <img className="m-auto max-h-32 object-contain" src={img3} alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Order;