import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "../../assets/GenixDrive_Logo/GenixDrive Logo (White) - SVG.svg";
import StoreActionsButtons from "./StoreActionsButtons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="font-cairo foooter text-center lg:text-left bg-primary text-white pt-12 pb-5 rounded-t-[50px]">
      <div className="max-w-[1450px] mx-auto px-6 md:px-10 lg:px-[100px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-between">
        <div className="space-y-4 md:col-span-3 lg:col-span-2">
          <div className="rounded flex justify-center lg:justify-start items-center ">
            <img src={logo} alt="Genix Drive Logo" className="md:w-[50%] w-[50%] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]" />
          </div>
          <Paragraph
            size="base"
            color="white"
            className="max-w-xs mx-auto lg:mx-0"
          >
            GenixDrive is your trusted driving companion — built to keep you,
            your family, and your vehicle safe on every journey. Stay connected,
            drive smarter, and enjoy the peace of mind you deserve.
          </Paragraph>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <a
              href="https://www.linkedin.com/company/aigenixofficial/posts/?feedView=all"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/aigenixofficial/"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/aigenix.ai/"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="footerdivs md:pl-16 lg:px-[15px]">
          <SubHeading
            color="white"
            weight="medium"
            className="mb-4 text-[28px]"
          >
            Quick Access
          </SubHeading>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                onClick={() => { navigate(""); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:opacity-90 cursor-pointer"
              >
                Home
              </a>
            </li>
            {/* <li>
              <a
                onClick={() => { navigate("../about"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:opacity-90 cursor-pointer"
              >
                About
              </a>
            </li> */}
            <li>
              <a
                onClick={() => { navigate("interactive-demo"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:opacity-90 cursor-pointer"
              >
                Experience The Demo
              </a>
            </li>
            <li>
              <a
                onClick={() => { navigate("../pricing"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:opacity-90 cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => { navigate("../blogs"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:opacity-90 cursor-pointer"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="footerdivs md:pl-6 lg:px-[15px]">
          <SubHeading
            color="white"
            weight="medium"
            className="mb-4 text-[28px]"
          >
            Features
          </SubHeading>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features-social"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Social & Family Connect
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features-safety"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Safety & Protection
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features-insights"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Driving Insights
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features-rewards"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Gamification & Rewards
              </a>
            </li>
          </ul>
        </div>

        <div className="footerdivs md:pl-6 lg:px-[15px]">
          <SubHeading
            color="white"
            weight="medium"
            className="mb-0 text-[28px]"
          >
            Download Now
          </SubHeading>
          <StoreActionsButtons className="!block footer0actions" />
        </div>
      </div>
      <div className="pt-7"></div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-[1450px] mx-auto border-t border-white/10 pt-5 text-center">
        <Paragraph size="sm" color="white" className="opacity-80">
          © 2026 Genix Drive. All Rights Reserved. Powered by AiGenix.
        </Paragraph>
        <Paragraph size="sm" color="white" className="mt-2 opacity-80">
          Managed by{" "}
          <a
            href="https://www.markition.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-white transition-colors"
          >
            Markition
          </a>
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
