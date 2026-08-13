import React, { useEffect } from "react";
import { Home, Settings, CreditCard } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import toast from "react-hot-toast";
import { useUserData } from "../../hooks/useUserData";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Shared hook — refetches whenever we force it
  const { user, loading, refetch } = useUserData();

  // Only fetch if user data is not yet available (not on every route change)
  useEffect(() => {
    if (!user) {
      refetch();
    }
  }, []);

  const isDashboard = location.pathname.endsWith("/admin/dashboard");
  const isSettings = location.pathname.endsWith("/admin/settings");
  const isSubscriptions = location.pathname.endsWith("/admin/subscriptions");
  const isOrder = location.pathname.endsWith("/admin/order");

  // Avatar: show image if available, else first letter of fullName/userName
  const renderAvatar = () => {
    if (user?.avatar) {
      return (
        <img
          src={user.avatar}
          alt={user.fullName || user.userName}
          className="w-16 h-16 rounded-full object-cover"
        />
      );
    }
    const firstLetter = (user?.fullName || user?.userName || "U")
      .charAt(0)
      .toUpperCase();
    return (
      <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold uppercase shadow-sm">
        {firstLetter}
      </div>
    );
  };

  // Navigate to settings and pass real-time user data via router state
  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/admin/settings", {
      state: {
        username: user?.fullName || user?.userName || "",
        email: user?.email || "",
        phone: user?.phone || "",
        avatar: user?.avatar || null,
      },
    });
  };

  return (
    <aside className="bg-white md:h-screen md:sticky md:top-0 p-6 md:p-8 border-r border-gray-100 md:col-span-2">
      <div className="flex flex-col items-center gap-2 border-b border-gray-100 pb-10">

        {/* Dynamic Avatar */}
        {loading ? (
          <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
        ) : (
          renderAvatar()
        )}

        {/* Dynamic Username */}
        <p className="text-sm font-semibold text-gray-900 mt-2">
          {loading
            ? "Loading..."
            : user?.fullName || user?.userName || "Guest User"}
        </p>

        {/* Profile Link */}
        <button
          onClick={handleProfileClick}
          className="text-primary text-xs font-semibold hover:underline bg-transparent border-none cursor-pointer"
        >
          Profile
        </button>
      </div>

      <nav className="mt-8 space-y-3">
        <Link
          to="/admin/dashboard"
          className={`relative flex items-center text-sm gap-3 rounded-lg px-3 py-2 ${
            isDashboard ? "text-secondary" : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isDashboard && (
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-tr-full rounded-br-full"></span>
          )}
          <Home size={18} />
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/admin/order"
          className={`text-sm relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isOrder ? "text-secondary" : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isOrder && (
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-tr-full rounded-br-full"></span>
          )}
          <CreditCard size={18} />
          <span>Activate Plan</span>
        </Link>

        <Link
          to="/admin/settings"
          className={`text-sm relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isSettings ? "text-secondary" : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isSettings && (
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-tr-full rounded-br-full"></span>
          )}
          <Settings size={18} />
          <span>Settings</span>
        </Link>

        <Link
          to="/admin/subscriptions"
          className={`text-sm relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isSubscriptions
              ? "text-secondary"
              : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isSubscriptions && (
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-tr-full rounded-br-full"></span>
          )}
          <CreditCard size={18} />
          <span>Subscriptions</span>
        </Link>
      </nav>

      <Button
        className="!text-gray-900 !border !border-gray-900 mt-10 w-full"
        variant="outline"
        size="sm"
        isFullBtn
        onClick={() => {
          localStorage.clear();
          toast.success("Logout successfully");
          setTimeout(() => {
            navigate("/admin/login");
          }, 2000);
        }}
      >
        Logout
      </Button>
    </aside>
  );
};

export default AdminSidebar;