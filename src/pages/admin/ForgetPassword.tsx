import React, { useState } from "react";
import ab1 from "../../assets/login.png";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import axios, { AxiosError } from "axios";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/users/forgot-password",
        {
          email,
        },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ Success
      const data = response.data;
      if (data.success) {
        toast.success("OTP sent to your email");
        setTimeout(() => {
          navigate("/admin/reset-password");
        }, 2000);
      }

      console.log("response : ", data);
    } catch (err) {
      console.log("error : ", err);

      // ✅ Handle errors properly
      const error = err as AxiosError<any>;

      if (error.response) {
        // Server responded with error
        setError(error.message || "Login failed");
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
              Forgot Password
            </SubHeading>
            <p className="text-gray-600 mb-6">
              Enter your email address to recieve OTP
            </p>
            <form className="space-y-4">
              <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full"
                onClick={handleForgotPassword}
                type="button"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <a className="text-primary" href="/admin/signup">
                  Sign up
                </a>
              </p>
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

export default ForgetPassword;
