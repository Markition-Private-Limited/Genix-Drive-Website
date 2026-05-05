import { Eye, EyeOff, Lock } from "lucide-react";
import ab1 from "../../assets/ab1.jpg";
import { TextField } from "../../components/sharedui/Input";
import SubHeading from "../../components/sharedui/SubHeading";
import { useState } from "react";
import Button from "../../components/Button";
import axios, { AxiosError } from "axios";
import type { SignupResponse } from "./Signup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const PasswordSet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  // Validation checks
  const validations = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isMatch = confirmPassword && password === confirmPassword;

  const handleSignup = async () => {
    setError("");
    setLoading(true);
    if (!isMatch) {
      setError("Please enter password");
      return;
    }
    const payload = {
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      password: password,
      userName: localStorage.getItem("username"),
      fullName:
        localStorage.getItem("firstName") +
        " " +
        localStorage.getItem("lastName"),
      gender: "",
      tracking: true,
      status: "ACTIVE",
    };

    try {
      const response = await axios.post<SignupResponse>(
        "https://aigenix-api-app-services.three-shelves.com/auth/signup",
        payload,
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );
      toast.success(response.data?.msg || "Signup successful");
      navigate("/admin/login");
    } catch (err) {
      const error = err as AxiosError<any>;

      let message = "Signup failed";

      if (error.response) {
        const resData = error.response.data;

        if (Array.isArray(resData?.msg)) {
          message = resData.msg.join(", ");
        } else {
          message = resData?.msg || "Signup failed";
        }
      }

      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }

    console.log("payload : ", payload);
  };
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-8 ">
            <SubHeading size="4xl" weight="bold">
              Set your pasword
            </SubHeading>

            <form className="space-y-4">
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                leftIcon={<Lock className="w-5 h-5" />}
                rightIcon={
                  <button
                    type="button"
                    className="text-gray-500"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label="Toggle password visibility"
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
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                leftIcon={<Lock className="w-5 h-5" />}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                rightIcon={
                  <button
                    type="button"
                    className="text-gray-500"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
              />

              {/* Validation List */}
              <div className="text-sm space-y-1">
                <p
                  className={
                    validations.length ? "text-green-500" : "text-gray-400"
                  }
                >
                  ✓ At least 8 characters
                </p>

                <p
                  className={
                    validations.upper ? "text-green-500" : "text-gray-400"
                  }
                >
                  ✓ At least 1 uppercase letter
                </p>

                <p
                  className={
                    validations.lower ? "text-green-500" : "text-gray-400"
                  }
                >
                  ✓ At least 1 lowercase letter
                </p>

                <p
                  className={
                    validations.special ? "text-green-500" : "text-gray-400"
                  }
                >
                  ✓ At least 1 special character
                </p>

                <p className={isMatch ? "text-green-500" : "text-gray-400"}>
                  ✓ Passwords match
                </p>
              </div>
              <Button
                onClick={handleSignup}
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full"
                type="button"
                disabled={loading}
              >
                {loading ? "Wait..." : "Get Started"}
              </Button>
              {error && <p className="text-red-500 text-xs">{error}</p>}
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

export default PasswordSet;
