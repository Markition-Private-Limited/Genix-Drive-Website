import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/website/Home";
import About from "../pages/website/About";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Pricing from "../pages/website/Pricing";
import Blogs from "../pages/website/Blogs";
import BlogDetails from "../pages/website/BlogDetails";
import Features from "../pages/website/Features";
import AdminAuthLayout from "../layouts/AdminAuthLayout";
import AdminLogin from "../pages/admin/Login";
import AdminSignup from "../pages/admin/Signup";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminMyTrips from "../pages/admin/MyTrips";
import AdminAppLayout from "../layouts/AdminAppLayout";
import AdminSettings from "../pages/admin/Settings";
import Features1 from "../pages/website/Features1";
import Features2 from "../pages/website/Features2";
import Feature3 from "../pages/website/Feature3";
import Demo from "../pages/website/Demo";
import DemoWalkthrough from "../pages/website/DemoWalkthrough";
import InteractiveDemo from "../pages/website/InteractiveDemo";
import DrivingScore from "../pages/admin/DrivingScore";
import SubscriptionsManagements from "../pages/admin/SubscriptionsManagements";
import GenerateUsername from "../pages/admin/GenerateUsername";
import VerifyUsername from "../pages/admin/VerifyUsername";
import GenerateOTP from "../pages/admin/GenerateOTP";
import VerifyOTP from "../pages/admin/VerifyOTP";
import ForgetPassword from "../pages/admin/ForgetPassword";
import ResetPassword from "../pages/admin/ResetPassword";
import ProtectedRoute from "../Protection/ProtectedRoutes";
import PublicRoute from "../Protection/PublicRoute";
import Order from "../pages/admin/Order";
import PasswordSet from "../pages/admin/PasswordSet";
import PasswordSetPhone from "../pages/admin/PasswordSetPhone";

const router = createBrowserRouter([
  {
    element: <WebsiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/demo", element: <Demo /> },
      { path: "/demo-walkthrough", element: <DemoWalkthrough /> },
      { path: "/interactive-demo", element: <InteractiveDemo /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/features-social", element: <Features /> },
      { path: "/features-safety", element: <Features1 /> },
      { path: "/features-insights", element: <Features2 /> },
      { path: "/features-rewards", element: <Feature3 /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <PublicRoute>
        <AdminAuthLayout />
      </PublicRoute>
    ),
    children: [
      { path: "login", element: <AdminLogin /> },
      { path: "signup", element: <AdminSignup /> },
      { path: "generate-username", element: <GenerateUsername /> },
      { path: "verify-username", element: <VerifyUsername /> },
      { path: "generate-otp", element: <GenerateOTP /> },
      { path: "verify-otp", element: <VerifyOTP /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "set-password", element: <PasswordSet /> },
      { path: "set-passworrd", element: <PasswordSetPhone /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminAppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "my-trips", element: <AdminMyTrips /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "driving-score", element: <DrivingScore /> },
      { path: "subscriptions", element: <SubscriptionsManagements /> },
      { path: "order", element: <Order /> },
    ],
  },
]);

export default router;
