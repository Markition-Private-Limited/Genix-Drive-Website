import { useState } from "react";
import ab1 from "../../assets/login.png";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import axios, { AxiosError } from "axios";
import { Lock, EyeOff, Eye, RectangleEllipsis, Check, X } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const { identifier, type } = location.state || { identifier: "", type: "email" };

  // Workflow Control Step: 1 = OTP Verification, 2 = Set New Password
  const [step, setStep] = useState<1 | 2>(1);

  // States
  const [otpCode, setOTPCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  // Baseline API Base Endpoint Mapping Context
  const API_BASE = "https://aigenix-api-app-services.three-shelves.com";
  const apiHeaders = { "x-account-id": "aigenix-uat" };

  // Frontend Live Passwords Rules Criteria Verification Checklist Match
  const checks = {
    length: password.length >= 8,
    specialChar: /[!@#$%^&*(),.?":{}|<>_]/.test(password),
    number: /[0-9]/.test(password),
    uppercase: /[A-Z]/.test(password),
    match: password.length > 0 && password === confirmPassword,
  };

  const isAllCriteriaValid = Object.values(checks).every(Boolean);

  // STEP 1: Verify OTP API Call
  const handleVerifyOTP = async () => {
    if (!otpCode) {
      setError("Please enter the OTP code");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        [type === "email" ? "email" : "phone"]: identifier,
        otp: otpCode,
      };

      const response = await axios.post(`${API_BASE}/auth/verify-otp`, payload, {
        headers: apiHeaders,
      });

      if (response.data.success || response.status === 200) {
        toast.success("OTP verified successfully", { position: "top-center" });
        setStep(2); // Proceed to setting new password
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      setError(error.response?.data?.msg || "Invalid OTP code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Password Reset API Call
  const handleResetPassword = async () => {
    if (!isAllCriteriaValid) {
      setError("Please satisfy all password validation conditions");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        [type === "email" ? "email" : "phone"]: identifier,
        password,
        otp: otpCode, // Retained seamlessly from step 1
      };

      const response = await axios.post(`${API_BASE}/users/reset-password`, payload, {
        headers: apiHeaders,
      });

      if (response.data.success || response.status === 200) {
        toast.success("Password reset successfully", { position: "top-center" });
        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      setError(error.response?.data?.msg || "Reset failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          <div className="bg-white rounded-2xl p-8 shadow-xs border border-gray-50">
            <SubHeading size="4xl" weight="bold">
              Reset Password
            </SubHeading>
            {/* <p className="text-gray-600 mb-6">
              {step === 1 ? "Step 1: Verify your identity code" : "Step 2: Create your new secure password"}
            </p> */}

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              {/* STEP 1 VIEW: OTP COMPONENT FORM */}
              {step === 1 && (
                <>
                  <TextField
                    maxLength={6}
                    type="text"
                    placeholder="Enter 6-digit OTP code"
                    leftIcon={<RectangleEllipsis className="w-5 h-5" />}
                    onChange={(e) => setOTPCode(e.target.value)}
                    value={otpCode}
                  />

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <Button
                    size="lg"
                    variant="secondary"
                    isFullBtn={true}
                    className="w-full"
                    onClick={handleVerifyOTP}
                    type="button"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </Button>
                </>
              )}

              {/* STEP 2 VIEW: CHOOSE NEW PASSWORD FIELDS & LIVE CRITERIA VISUALS */}
              {step === 2 && (
                <>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    placeholder="New password"
                    leftIcon={<Lock className="w-5 h-5" />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    rightIcon={
                      <button
                        type="button"
                        className="text-gray-500"
                        onClick={() => setShowPassword((v) => !v)}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    }
                  />

                  <TextField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    leftIcon={<Lock className="w-5 h-5" />}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    rightIcon={
                      <button
                        type="button"
                        className="text-gray-500"
                        onClick={() => setShowConfirmPassword((v) => !v)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    }
                  />

                  {/* LIVE VALIDATION CHECKLIST COMPONENT CONTAINER */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2 mt-2 text-xs">
                    <p className="font-semibold text-gray-700 mb-1">Password Requirements:</p>

                    <div className="flex items-center gap-2">
                      {checks.length ? <Check className="w-3.5 h-3.5 text-green-600" /> : <X className="w-3.5 h-3.5 text-red-400" />}
                      <span className={checks.length ? "text-green-700 font-medium" : "text-gray-500"}>Must contain at least 8 characters</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {checks.uppercase ? <Check className="w-3.5 h-3.5 text-green-600" /> : <X className="w-3.5 h-3.5 text-red-400" />}
                      <span className={checks.uppercase ? "text-green-700 font-medium" : "text-gray-500"}>One uppercase letter (A-Z)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {checks.number ? <Check className="w-3.5 h-3.5 text-green-600" /> : <X className="w-3.5 h-3.5 text-red-400" />}
                      <span className={checks.number ? "text-green-700 font-medium" : "text-gray-500"}>One number (0-9)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {checks.specialChar ? <Check className="w-3.5 h-3.5 text-green-600" /> : <X className="w-3.5 h-3.5 text-red-400" />}
                      <span className={checks.specialChar ? "text-green-700 font-medium" : "text-gray-500"}>One special character (e.g., @, !, #, $)</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-gray-200/60">
                      {checks.match ? <Check className="w-3.5 h-3.5 text-green-600" /> : <X className="w-3.5 h-3.5 text-red-400" />}
                      <span className={checks.match ? "text-green-700 font-medium" : "text-gray-500"}>Passwords must match perfectly</span>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <Button
                    size="lg"
                    variant="secondary"
                    isFullBtn={true}
                    className="w-full mt-2"
                    onClick={handleResetPassword}
                    type="button"
                    disabled={loading || !isAllCriteriaValid}
                  >
                    {loading ? "Updating..." : "Reset Password"}
                  </Button>
                </>
              )}

              <p className="text-center text-sm text-gray-600 pt-2">
                Don't have an account?{" "}
                <Link className="text-primary font-medium" to="/admin/signup">
                  Sign up
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT HERO DECORATIVE PORTION */}
          <div className="rounded-2xl overflow-hidden h-full hidden md:block">
            <img
              src={ab1}
              alt="Login visual"
              className="w-full h-full object-cover rounded-2xl max-h-[520px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResetPassword;