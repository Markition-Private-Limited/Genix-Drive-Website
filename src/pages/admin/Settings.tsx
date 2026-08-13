import { useLocation } from "react-router-dom";
import { Mail, Phone, User } from "lucide-react";
import { TextField } from "../../components/sharedui/Input";
import { useUserData } from "../../hooks/useUserData";

const Settings = () => {
  const location = useLocation();

  // If user navigated from sidebar with state, use it; else fall back to API
  const stateData = location.state as {
    username?: string;
    email?: string;
    phone?: string;
    avatar?: string | null;
  } | null;

  // Always load from hook (shared cache — no extra API call if already fetched)
  const { user, loading } = useUserData();

  // Resolve final values: prefer route state if present, else use API data
  const username =
    stateData?.username || user?.fullName || user?.userName || "";
  const email = stateData?.email || user?.email || "";
  const phone = stateData?.phone || user?.phone || "";
  const avatar = stateData?.avatar ?? user?.avatar ?? null;

  // Avatar: image if available, else first letter
  const renderAvatar = () => {
    if (avatar) {
      return (
        <img
          src={avatar}
          alt={username}
          className="w-16 h-16 rounded-full object-cover shadow-sm shrink-0"
        />
      );
    }
    const firstLetter = (username || "U").charAt(0).toUpperCase();
    return (
      <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold uppercase shadow-sm shrink-0">
        {firstLetter}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse shrink-0" />
          <div className="space-y-2">
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-48 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-4">
        {/* Avatar: image or initial */}
        {renderAvatar()}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {username || "Guest User"}
          </h2>
          <p className="text-gray-600 text-sm">{email || "No email provided"}</p>
        </div>
      </div>

      <form
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          label="Full Name"
          placeholder="Your Full Name"
          value={username}
          leftIcon={<User className="w-5 h-5" />}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          leftIcon={<Mail className="w-5 h-5" />}
        />
        <TextField
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          value={phone || ""}
          leftIcon={<Phone className="w-5 h-5" />}
        />
      </form>
    </div>
  );
};

export default Settings;