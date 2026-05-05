import { useState } from "react";
import ab1 from "../../assets/login.png";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import axios, { AxiosError } from "axios";
import { Mail, Lock, EyeOff, Eye, RectangleEllipsis } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otpCode, setOTPCode] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email || !password || !otpCode) {
      setError("Please enter all required fields");
      return;
    }
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/users/reset-password",
        {
          email,
          password,
          otp: otpCode,
        },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );
      const data = response.data;
      if (data.success) {
        toast.success("Password reset successfully");
        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      }
    } catch (err) {
      // ✅ Handle errors properly
      const error = err as AxiosError<any>;
      if (error.response) {
        const resData = error.response.data;
        // Server responded with error
        setError(resData.msg || "Login failed");
      } else if (error.request) {
        // No response from server
        setError("No response from server. Please try again.");
      } else {
        // Something else
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-8 ">
            <SubHeading size="4xl" weight="bold">
              Reset Password
            </SubHeading>
            <p className="text-gray-600 mb-6">Reset your password</p>
            <form className="space-y-4">
              <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                leftIcon={<Lock className="w-5 h-5" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rightIcon={
                  <button
                    type="button"
                    className="text-gray-500"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
              />
              <TextField
                maxLength={6}
                type="text"
                placeholder="Enter OTP code"
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
                onClick={handleResetPassword}
                type="button"
                disabled={loading}
              >
                {loading ? "Loading..." : "Reset"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link className="text-primary" to="/admin/signup">
                  Sign up
                </Link>
              </p>
              {/* <div className="pt-4">
                <p className="text-center text-sm text-gray-500 mb-3">
                  Or login with
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <button className="border rounded-lg py-2 text-sm">
                    Facebook
                  </button>
                  <button className="border rounded-lg py-2 text-sm">
                    Google
                  </button>
                  <button className="border rounded-lg py-2 text-sm">
                    Apple
                  </button>
                </div>
              </div> */}
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src={ab1}
              alt="Login visual"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
