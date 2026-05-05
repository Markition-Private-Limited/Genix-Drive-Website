import ab1 from "../../assets/admin/5.png";
import { Home, Settings, CreditCard } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import toast from "react-hot-toast";

const AdminSidebar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.endsWith("/admin/dashboard");
  // const isMyTrips = location.pathname.endsWith("/admin/my-trips");
  // const isDrivingScore = location.pathname.endsWith("/admin/driving-score");
  const isSettings = location.pathname.endsWith("/admin/settings");
  const isSubscriptions = location.pathname.endsWith("/admin/subscriptions");
  const isOrder = location.pathname.endsWith("/admin/order");
  // const isSubscriptions = location.pathname.endsWith("/admin/subscriptions");

  const navigate = useNavigate();
  return (
    <aside className="bg-white md:h-screen md:sticky md:top-0 p-6 md:p-8 border-r border-gray-100 md:col-span-2">
      <div className="flex flex-col items-center gap-2 border-b border-gray-100 pb-10">
        <img src={ab1} alt="" className="w-16 h-16 rounded-full object-cover" />
        <p className="text-sm font-semibold text-gray-900">Ali Hamza</p>
        <a href="#" className="text-primary text-xs font-semibold">
          Profile
        </a>
      </div>
      <nav className="mt-8 space-y-3">
        <Link
          to="/admin/dashboard"
          className={`relative flex items-center text-sm gap-3 rounded-lg px-3 py-2 ${
            isDashboard
              ? "text-secondary"
              : "text-gray-700 hover:text-secondary"
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
          <span>Active Plan</span>
        </Link>

        {/* <Link
          to="/admin/my-trips"
          className={`text-sm relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isMyTrips ? "text-secondary" : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isMyTrips && (
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-tr-full rounded-br-full"></span>
          )}
          <Map size={18} />
          <span>My Trips</span>
        </Link> */}
        {/* <Link
          to="/admin/driving-score"
          className={`text-sm relative flex items-center gap-3 rounded-lg px-3 py-2 ${
            isDrivingScore
              ? "text-secondary"
              : "text-gray-700 hover:text-secondary"
          }`}
        >
          {isDrivingScore && (
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-10 bg-primary rounded-tr-full rounded-br-full"></span>
          )}
          <Gauge size={18} />
          <span>Driving Score</span>
        </Link> */}
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
          <span>Setting</span>
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
        className="!text-gray-900 !border !border-gray-900 mt-10  w-full"
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
