import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import ab1 from "../../assets/logup.png";
import { Mail, Phone, User, RectangleEllipsis } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface SignupPayload {
  email?: string;
  userName: string;
  firstName: string;
  lastName: string;
  fullName: string;
  password: string;
  gender: string;
  phone?: string;
  tracking: boolean;
  status: string;
}

export interface SignupResponse {
  msg: string;
  user?: {
    id: string;
    email: string;
  };
  success?: boolean;
}

const Signup = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [otpCode, setOTPCode] = useState("");

  const navigate = useNavigate();

  const [form, setForm] = useState<SignupPayload>({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    fullName: "",
    password: "",
    gender: "",
    phone: "",
    tracking: true,
    status: "ACTIVE",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success] = useState("");
  const [data, setData] = useState<string>("email");
  const [generatedUsername, setGeneratedUsername] = useState<string>("");

  const [signupPayload, setSignupPayload] = useState<SignupPayload | null>(
    null,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleToggle = (data: string) => {
    console.log("Toggle : ", data);
    setData(data);
  };

  // handle generate OTP
  const handleGenerateOTP = async () => {
    if (!form.phone?.trim()) {
      setError("Phone is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/generate-otp",
        { phone: "+92" + form.phone },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ API success response
      const generatedUsername = res.data?.msg;
      // setEmail("");

      const payload = {
        userName: form.userName,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        gender: form.gender,
        tracking: form.tracking,
        status: form.status,

        // ✅ Conditional field
        ...(data === "email"
          ? { email: form.email }
          : { phone: "+92" + form.phone }),
      };

      localStorage.setItem("payload", JSON.stringify(payload));

      setSignupPayload(payload);

      toast.success(`Username: ${generatedUsername}`);
      if (res.data?.success) {
        setTimeout(() => {}, 2000); // match toast duration
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      setIsSuccess(false);
      if (error.response) {
        const resData = error.response.data;

        if (Array.isArray(resData?.msg)) {
          setError(resData.msg.join(", "));
        } else {
          setError(
            resData?.message || resData.msg || "Failed to generate username",
          );
        }
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // handle verify otp code
  const handleVerifyOTPcode = async () => {
    // ✅ Frontend validation
    // Get the string from localStorage
    const userPayload = JSON.parse(localStorage.getItem("payload") || "");

    // Convert the string back into an object

    if (!otpCode.trim()) {
      toast.error("OTP is required");
      return;
    }

    if (otpCode.length > 6) {
      toast.error("OTP must be at most 6 characters");
      return;
    }

    console.log("paylaod to signup:", signupPayload);

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/verify-otp",
        {
          phone: userPayload.phone,
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
        // await callSignUpAPI();
        setTimeout(() => {
          navigate("/admin/set-passworrd");
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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // NEW
    if (data === "email" && !form.email) {
      setError("Email is required");
      return;
    }
    if (!generatedUsername) {
      setError("Username is required");
      return;
    }

    localStorage.setItem("firstName", form.firstName);
    localStorage.setItem("lastName", form.lastName);
    localStorage.setItem("email", form.email || "");

    // CALL GENERATE API
    try {
      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/generate-otp",
        { email: form.email },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );
      console.log(res);
    } catch (error) {}

    navigate("/admin/verify-otp");
  };

  // Generate username API
  const generateUsernameAPI = async () => {
    try {
      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/generate-username",
        { email: form.email },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );
      // ✅ API success response
      console.log("Generated res:", res);
      const generatedUsername = res.data?.data;

      localStorage.setItem("username", generatedUsername);

      setGeneratedUsername(generatedUsername);
    } catch (error:any) {
      console.log("API Error:", error.response ||  error.message);
      if (error.response) {
        const resData = error.response.data;

        if (Array.isArray(resData?.msg)) {
          setError(resData.msg.join(", "));
        } else {
          setError(resData?.msg || "Failed to generate username");
        }
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError("Something went wrong");
      }
    }
  };

  // EFFECTS
  useEffect(() => {
    if (!form.email) return;
    // ✅ simple email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!isValidEmail) return;

    const timer = setTimeout(() => {
      generateUsernameAPI();
    }, 500); // wait 500ms after typing stops

    return () => clearTimeout(timer);
  }, [form.email]);
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* left section */}
        <div className="bg-white rounded-2xl p-8 ">
          {isSuccess && data === "phone" ? (
            <>
              <SubHeading size="4xl" weight="bold">
                Verify Your Phone
              </SubHeading>
              <p className="text-gray-600 mb-6">
                Enter the 6-digit verification code sent to your phone number to
                continue.
              </p>
              <TextField
                maxLength={6}
                type="text"
                placeholder="Enter OTP code"
                leftIcon={<RectangleEllipsis className="w-5 h-5" />}
                onChange={(e) => setOTPCode(e.target.value)}
                value={otpCode}
              />

              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full mt-5"
                onClick={handleVerifyOTPcode}
                type="button"
                disabled={loading}
              >
                {loading ? "Wait..." : "Verify"}
              </Button>
            </>
          ) : (
            <>
              <SubHeading size="4xl" weight="bold">
                Sign up
              </SubHeading>
              <p className="text-gray-600 mb-6">
                Let's get you all set up so you can access your personal
                account.
              </p>

              <Switch onClick={handleToggle} />

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    placeholder="First Name"
                    leftIcon={<User className="w-5 h-5" />}
                    value={form.firstName}
                    onChange={handleChange}
                    name="firstName"
                  />
                  <TextField
                    placeholder="Last Name"
                    leftIcon={<User className="w-5 h-5" />}
                    value={form.lastName}
                    onChange={handleChange}
                    name="lastName"
                  />
                </div>
                <div className="">
                  {data === "email" && (
                    <TextField
                      type="email"
                      placeholder="Email"
                      leftIcon={<Mail className="w-5 h-5" />}
                      value={form.email}
                      onChange={handleChange}
                      name="email"
                    />
                  )}
                  {data === "phone" && (
                    <div className="relative ">
                      <TextField
                        type="tel"
                        placeholder="Mobile Number"
                        leftIcon={<Phone className="w-5 h-5" />}
                        value={form.phone}
                        onChange={handleChange}
                        name="phone"
                        className="pl-[80px]"
                      />
                      {/* <span className="text-[10px]">
                        Phone number must start with +92
                      </span> */}
                      <span className="text-[10px] block">
                        phone number should be registered on WhatsApp
                      </span>
                      <span className="absolute top-[15px] pl-[50px] text-sm text-gray-700">
                        +92
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  {data === "email" && (
                    <TextField
                      placeholder="User Name"
                      leftIcon={<User className="w-5 h-5" />}
                      value={generatedUsername}
                      name="userName"
                      onChange={(e) => {
                        setGeneratedUsername(e.target.value);
                        localStorage.setItem("username", e.target.value);
                      }}
                    />
                  )}
                  {data === "phone" && (
                    <TextField
                      placeholder="User Name"
                      leftIcon={<User className="w-5 h-5" />}
                      value={form.userName}
                      name="userName"
                      onChange={handleChange}
                    />
                  )}
                </div>

                {/* <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />I
                  agree to all the{" "}
                  <a href="#" className="text-primary">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary">
                    Privacy Policies
                  </a>
                </label> */}
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}

                {data === "email" ? (
                  <Button
                    size="lg"
                    variant="secondary"
                    isFullBtn={true}
                    className="w-full"
                    disabled={loading}
                    type="button"
                    onClick={handleSignup}
                  >
                    {loading ? "Waiting..." : "Next - Verify OTP"}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="secondary"
                    isFullBtn={true}
                    className="w-full"
                    disabled={loading}
                    type="button"
                    onClick={handleGenerateOTP}
                  >
                    {loading ? "Sending.." : "Send OTP"}
                  </Button>
                )}

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link className="text-primary" to="/admin/login">
                    Login
                  </Link>
                </p>
                {/* <p className="text-center text-sm text-gray-600">
                  Dont have username?{" "}
                  <Link className="text-primary" to="/admin/generate-username">
                    Generate username
                  </Link>
                </p> */}
              </form>
            </>
          )}
        </div>

        {/* right section */}
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src={ab1}
            alt="Signup visual"
            className={`w-full ${isSuccess ? "h-[410px]" : "h-[550px]"} object-cover rounded-2xl`}
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;

type Props = {
  onClick: (data: string) => void;
};

const Switch = ({ onClick }: Props) => {
  const [mode, setMode] = useState<"with" | "without">("with");
  return (
    <div className="flex items-center justify-center mb-5">
      <div className="relative inline-flex items-center w-[420px] h-14 rounded-full border border-black/10 bg-white shadow-sm p-1">
        <div
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-secondary transition-transform duration-300 ${
            mode === "with" ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          type="button"
          onClick={() => {
            (setMode("with"), onClick("email"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "with" ? "text-white" : "text-black"
          }`}
        >
          Signup with email
        </button>
        <button
          type="button"
          onClick={() => {
            (setMode("without"), onClick("phone"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "without" ? "text-white" : "text-black"
          }`}
        >
          signup with phone
        </button>
      </div>
    </div>
  );
};
