import React, { useState } from "react";
import ab1 from "../../assets/login.png";
import { Eye, EyeOff, Lock, Mail, Phone } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import axios, { AxiosError } from "axios";
// https://aigenix-api-app-services.three-shelves.com/auth/login
import { Link, useNavigate } from "react-router-dom";

//? INTERFACE
interface LoginResponse {
  success: boolean;

  data?: {
    subscription: string;
    token: string;
  };
  msg?: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //? STATES
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [data, setData] = useState<string>("email");

  const navigate = useNavigate();

  const handleToggle = (data: string) => {
    setData(data);
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Dynamic validation
    if (!password) {
      setError("Password is required");
      return;
    }

    if (data === "email" && !email) {
      setError("Email is required");
      return;
    }

    if (data === "phone" && !phone) {
      setError("Phone is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        password,

        // ✅ Conditional field
        ...(data === "email" ? { email } : { phone: "+92" + phone }),
      };

      console.log("Login payload:", payload);

      const response = await axios.post<LoginResponse>(
        "https://aigenix-api-app-services.three-shelves.com/auth/login",
        payload,
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ Success
      const apidata = response.data;

      // Store token (choose your strategy)
      // localStorage.setItem("accessToken", data.accessToken);

      console.log("Login Success:", apidata);

      // TODO: redirect user
      if (apidata.success) {
        localStorage.setItem("accessToken", apidata.data?.token || "");
        navigate("/admin/dashboard");
      }
    } catch (err) {
      // ✅ Handle errors properly
      const error = err as AxiosError<any>;

      if (error.response) {
        // Server responded with error
        console.log(data !== "email" ? "Phone Login Error:" : "Email Login Error:");
        if (data !== "email") {
          setError("Invalid Phone number or password");
        }
        else {
          setError(error.response.data?.msg || "Login failed");
        }
        // setError(error.response.data?.msg || "Login failed");
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
              Login to Your Account
            </SubHeading>
            <p className="text-gray-600 mb-6">
              Login to access your GenixDrive account
            </p>
            <Switch onClick={handleToggle} />

            <form className="space-y-4">
              {data === "email" ? (
                <>
                  <TextField
                    type="email"
                    placeholder="Email"
                    leftIcon={<Mail className="w-5 h-5" />}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </>
              ) : (
                <div className="relative">
                  <TextField
                    type="text"
                    placeholder="Phone"
                    leftIcon={<Phone className="w-5 h-5" />}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    containerClassName="m-auto"
                    className="pl-[80px]"
                  />
                  <span className="text-[10px]">
                    Phone number must start with +92
                  </span>
                  <span className="text-[10px] block">
                    phone number should be registered on WhatsApp
                  </span>
                  <span className="absolute top-[15px] pl-[50px] text-sm text-gray-700">
                    +92
                  </span>
                </div>
              )}

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
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <Link
                  to="/admin/forget-password"
                  state={{ loginType: data }}
                  className="text-secondary text-sm"
                >
                  Forgot Password
                </Link>
              </div>
              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full"
                onClick={handleLogin}
                type="button"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link className="text-primary" to="/admin/signup">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src={ab1}
              alt="Login visual"
              className="w-full h-[550px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

type Props = {
  onClick: (data: string) => void;
};

const Switch = ({ onClick }: Props) => {
  const [mode, setMode] = useState<"with" | "without">("with");
  return (
    <div className="flex items-center justify-center mb-5">
      <div className="relative inline-flex items-center w-[420px] h-14 rounded-full border border-black/10 bg-white shadow-sm p-1">
        <div
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-secondary transition-transform duration-300 ${mode === "with" ? "translate-x-0" : "translate-x-full"
            }`}
        />
        <button
          type="button"
          onClick={() => {
            (setMode("with"), onClick("email"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${mode === "with" ? "text-white" : "text-black"
            }`}
        >
          Login with email
        </button>
        <button
          type="button"
          onClick={() => {
            (setMode("without"), onClick("phone"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${mode === "without" ? "text-white" : "text-black"
            }`}
        >
          Login with phone
        </button>
      </div>
    </div>
  );
};
