import { useState } from "react";

import type { AxiosError } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import { RectangleEllipsis } from "lucide-react";
import Button from "../../components/Button";
import ab1 from "../../assets/ab1.jpg";

const VerifyOTP = () => {
  const [otpCode, setOTPCode] = useState<string>("");
  // const [email, setEamil] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleVerifyOTPcode = async () => {
    // ✅ Frontend validation
    // if (!email.trim()) {
    //   toast.error("Email is required");
    //   return;
    // }

    if (!otpCode.trim()) {
      toast.error("OTP is required");
      return;
    }

    if (otpCode.length > 6) {
      toast.error("OTP must be at most 6 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/verify-otp",
        {
          email: localStorage.getItem("email"),
          otp: otpCode,
        },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ Success
      setOTPCode("");

      toast.success("OTP verified successfully 🎉");

      if (res.data?.success) {
        setTimeout(() => {
          navigate("/admin/set-password");
        }, 2000); // match toast duration
      }
    } catch (err) {
      const error = err as AxiosError<any>;

      let message = "Verification failed";

      if (error.response) {
        const resData = error.response.data;

        // ✅ Your backend format
        if (Array.isArray(resData?.msg)) {
          message = resData.msg.join(", ");
        } else {
          message = resData?.msg || resData?.message || "Verification failed";
        }
      } else if (error.request) {
        message = "No response from server";
      }

      // ❌ Show error via toast (better UX)
      toast.error(message);

      // Optional: keep state if you still want inline error
      setError(message);
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
              Verify Your Email
            </SubHeading>
            <p className="text-gray-600 mb-6">
              Enter the 6-digit verification code sent to your email address to
              continue.
            </p>
            <form className="space-y-4">
              {/* <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
                onChange={(e) => setEamil(e.target.value)}
                value={email}
              /> */}
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
                onClick={handleVerifyOTPcode}
                type="button"
                disabled={loading}
              >
                {loading ? "Wait..." : "Verify"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                Alread have an account?{" "}
                <a className="text-primary" href="/admin/signin">
                  Sign in
                </a>
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

export default VerifyOTP;
