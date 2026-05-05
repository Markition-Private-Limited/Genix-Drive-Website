import { Outlet } from "react-router-dom";
// import Navbar from "../components/NavbarClean";
import Navbar from "../components/Navbar";
import WebFooter from "../components/web/Footer";

const WebsiteLayout = () => {
  return (
    <div className="min-h-screen bg-primaryy flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <WebFooter />
    </div>
  );
};

export default WebsiteLayout;
