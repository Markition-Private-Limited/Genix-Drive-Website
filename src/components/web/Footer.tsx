import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "../../assets/logo.png";
import StoreActionsButtons from "./StoreActionsButtons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="font-cairo foooter text-center md:text-left bg-primary text-white px-[58px] py-12 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 justify-between">
        <div className="space-y-4 md:col-span-2">
          <div className=" rounded flex items-center ">
            <img src={logo} alt="Genix Drive Logo" />
          </div>
          <Paragraph
            size="base"
            color="white"
            className="max-w-xs"
          >
            GenixDrive is your trusted driving companion — built to keep you,
            your family, and your vehicle safe on every journey. Stay connected,
            drive smarter, and enjoy the peace of mind you deserve.
          </Paragraph>
          <div className="flex items-center gap-4">
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

        <div className="footerdivs">
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
            <li>
              <a
                onClick={() => { navigate("../about"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:opacity-90 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a className="hover:opacity-90" href="#">
                Contact
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

        <div className="footerdivs">
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
                onClick={() => { navigate("../features"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Social & Family Connect
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features1"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Safety & Protection
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features2"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Driving Insights
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-90 cursor-pointer"
                onClick={() => { navigate("../features3"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Gamification & Rewards
              </a>
            </li>
          </ul>
        </div>

        <div className="footerdivs">
          <SubHeading
            color="white"
            weight="medium"
            className="mb-4 text-[28px]"
          >
            Download Now
          </SubHeading>
          <StoreActionsButtons className="!block footer0actions" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
