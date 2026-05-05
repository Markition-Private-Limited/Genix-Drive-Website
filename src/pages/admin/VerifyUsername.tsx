import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import { User } from "lucide-react";
import Button from "../../components/Button";
import ab1 from "../../assets/ab1.jpg";

const VerifyUsername = () => {
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleVerifyUserName = async () => {
    if (!userName.trim()) {
      setError("Username is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/validate-username",
        { userName },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ API success response
      const generatedUsername = res.data?.msg;
      setUserName("");

      toast.success(`Username: ${generatedUsername}`);

      // ✅ Navigate AFTER toast duration
      if (res.data?.success) {
        setTimeout(() => {
          navigate("/admin/generate-otp");
        }, 2000); // match toast duration
      }
    } catch (err) {
      const error = err as AxiosError<any>;

      if (error.response) {
        const resData = error.response.data;

        if (Array.isArray(resData?.msg)) {
          setError(resData.msg.join(", "));
        } else {
          setError(resData?.message || "Failed to generate username");
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
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-8 ">
            <SubHeading size="4xl" weight="bold">
              Confirm Your Username
            </SubHeading>
            <p className="text-gray-600 mb-6">
              Please review and confirm your generated username to continue.
            </p>
            <form className="space-y-4">
              <TextField
                type="email"
                placeholder="UserName"
                leftIcon={<User className="w-5 h-5" />}
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full"
                onClick={handleVerifyUserName}
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

export default VerifyUsername;
