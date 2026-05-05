import { useState } from "react";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import { Mail } from "lucide-react";
import Button from "../../components/Button";
import ab1 from "../../assets/ab1.jpg";
import type { AxiosError } from "axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GenerateUsername = () => {
  const [email, setEamil] = useState<string>("");
  const [generatedUsername, setGeneratedUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleGenerateUserName = async () => {
    if (!email.trim()) {
      setError("Emails is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/generate-username",
        { email },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ API success response
      const generatedUsername = res.data?.data;
      setEamil("");
      setGeneratedUsername(generatedUsername);

      toast.success(`Username: ${generatedUsername}`);
    } catch (err) {
      const error = err as AxiosError<any>;
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
    } finally {
      // setError(resData?.msg || "Failed to generate username");
      setLoading(false);
    }
  };
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-8 ">
            <SubHeading size="4xl" weight="bold">
              Generate Your Username
            </SubHeading>
            <p className="text-gray-600 mb-6">
              Enter your email address and we’ll create a unique username for
              your account.
            </p>
            <form className="space-y-4">
              <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
                onChange={(e) => setEamil(e.target.value)}
                value={email}
              />
              {generatedUsername && (
                <p className="text-green-500 text-sm">{generatedUsername}</p>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-3 items-center">
                <Button
                  size="lg"
                  variant="secondary"
                  isFullBtn={true}
                  className="w-full flex-2"
                  onClick={handleGenerateUserName}
                  type="button"
                  disabled={loading}
                >
                  {loading ? "Generating..." : "Generate"}
                </Button>
                {generatedUsername && (
                  <Button
                    size="lg"
                    variant="dark"
                    isFullBtn={true}
                    className="w-full flex-1"
                    onClick={() => navigate("/admin/verify-username")}
                    type="button"
                    disabled={loading}
                  >
                    Next
                  </Button>
                )}
              </div>
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

export default GenerateUsername;
