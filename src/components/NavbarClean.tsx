import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const NavbarClean = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [featuresHoverOpen, setFeaturesHoverOpen] = useState(false);

  const getLinkClasses = (active: boolean) =>
    `transition-colors ${isHome
      ? active
        ? "text-light-green"
        : "text-white hover:text-light-green"
      : active
        ? "text-primary"
        : "text-gray-700 hover:text-primary"
    }`;

  useEffect(() => {
    setOpen(false);
    setFeaturesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <nav
      className={`w-full py-6 px-8 flex items-center justify-between font-cairo transition-colors duration-300 ${isHome ? "bg-primary text-white" : "bg-white text-black shadow-sm"
        }`}
    >
      <div className="flex gap-10 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-32 rounded flex items-center justify-center text-sm font-bold tracking-wider">
            <img src={isHome ? logo : logo2} alt="Genix Drive Logo" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            About us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setFeaturesHoverOpen(true)}
            onMouseLeave={() => setFeaturesHoverOpen(false)}
          >
            <button
              className={`transition-colors ${isHome
                ? "text-white hover:text-light-green"
                : "text-gray-700 hover:text-primary"
                } inline-flex items-center gap-1`}
            >
              Features
              <ChevronRight className="w-4 h-4" />
            </button>
            <div
              className={`absolute left-0 top-full mt-3 w-[420px] bg-white text-black shadow-lg rounded-xl ring-1 ring-black/5 p-4 z-50 transition-all duration-200 ease-out ${featuresHoverOpen
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                }`}
            >
              <div className="space-y-1">
                <NavLink
                  to="/features-social"
                  className="block px-4 py-2 text-sm hover:text-primary transition-colors duration-150"
                >
                  Social & Family Connect
                </NavLink>
                <NavLink
                  to="/features-safety"
                  className="block px-4 py-2 text-sm hover:text-primary transition-colors duration-150"
                >
                  Safety & Protection
                </NavLink>
                <NavLink
                  to="/features-insights"
                  className="block px-4 py-2 text-sm hover:text-primary transition-colors duration-150"
                >
                  Driving Insights
                </NavLink>
                <NavLink
                  to="/features-rewards"
                  className="block px-4 py-2 text-sm hover:text-primary transition-colors duration-150"
                >
                  Gamification & Rewards
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink
            to="/pricing"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Demo
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Blogs
          </NavLink>
        </div>
      </div>

      <div className="action-butto hidden md:flex gap-2">
        <Button size="lg" variant={"primary"}>
          {isHome ? "Sign Up/ Login" : "get started"}
        </Button>
        {!isAbout && !isHome && (
          <Button size="lg" variant={"secondary"}>
            Download Now
          </Button>
        )}
      </div>

      <button
        aria-label="Open menu"
        className={`md:hidden inline-flex items-center justify-center rounded-lg p-2 ${isHome ? "text-white" : "text-black"
          }`}
        onClick={() => setOpen(true)}
      >
        <Menu className="w-7 h-7" />
      </button>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm ${isHome ? "bg-primary" : "bg-white"
            } shadow-xl rounded-l-2xl transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <img
              src={isHome ? logo : logo2}
              alt="Genix Drive Logo"
              className="h-8"
            />
            <button
              aria-label="Close menu"
              className={`rounded-lg p-2 ${isHome ? "text-white" : "text-black"
                }`}
              onClick={() => setOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="px-6">
            <div
              className={`flex flex-col items-start gap-6 text-lg ${isHome ? "text-white" : "text-black"
                }`}
            >
              <NavLink
                to="/"
                className={({ isActive }) => getLinkClasses(isActive)}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => getLinkClasses(isActive)}
                onClick={() => setOpen(false)}
              >
                About us
              </NavLink>
              <NavLink
                to="/features-social"
                className={({ isActive }) => getLinkClasses(isActive)}
                onClick={() => setOpen(false)}
              >
                Features
              </NavLink>
              <button
                className={`transition-colors inline-flex items-center justify-between ${isHome ? "text-white" : "text-black"
                  }`}
                onClick={() => setFeaturesOpen((v) => !v)}
              >
                Explore
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${featuresOpen ? "rotate-90" : ""
                    }`}
                />
              </button>
              {featuresOpen && (
                <div className="pl-3 border-l border-black/10 space-y-2 flex flex-col">
                  <NavLink
                    to="/features-social"
                    className={({ isActive }) => getLinkClasses(isActive)}
                    onClick={() => setOpen(false)}
                  >
                    Social & Family Connect
                  </NavLink>
                  <NavLink
                    to="/features-safety"
                    className={({ isActive }) => getLinkClasses(isActive)}
                    onClick={() => setOpen(false)}
                  >
                    Safety & Protection
                  </NavLink>
                  <NavLink
                    to="/features-insights"
                    className={({ isActive }) => getLinkClasses(isActive)}
                    onClick={() => setOpen(false)}
                  >
                    Driving Insights
                  </NavLink>
                  <NavLink
                    to="/features-rewards"
                    className={({ isActive }) => getLinkClasses(isActive)}
                    onClick={() => setOpen(false)}
                  >
                    Gamification & Rewards
                  </NavLink>
                </div>
              )}
              <NavLink
                to="/pricing"
                className={({ isActive }) => getLinkClasses(isActive)}
                onClick={() => setOpen(false)}
              >
                Demo
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) => getLinkClasses(isActive)}
                onClick={() => setOpen(false)}
              >
                Blogs
              </NavLink>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-4">
              <Button size="lg" variant={isHome ? "primary" : "secondary"}>
                {isHome ? "Sign Up/ Login" : "get started"}
              </Button>
              {!isAbout && !isHome && (
                <Button size="lg" variant={"secondary"}>
                  Download Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarClean;
