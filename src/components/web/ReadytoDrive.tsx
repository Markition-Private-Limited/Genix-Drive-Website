import vector from "../../assets/Vector 77.png";
import screen from "../../assets/screen 3.png";
import UnionTop from "../../assets/Union-up.png";
import UnionDown from "../../assets/Union-down.png";
import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const ReadytoDrive = ({ isPricingPage }: { isPricingPage?: boolean }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-white text-black font-cairo pt-16 py-0 px-6 md:py-24 md:px-10 lg:py-32 lg:px-[100px] lg:pt-40 padding-50">
      <div className="bg-secondary mb-[130px] md:mb-0 rounded-2xl relative h-[670px] md:h-[400px] lg:h-[400px] xl:h-[400px] z-10 flex items-start md:items-center ready-to-driver-cotnainer max-w-[1240px] m-auto">
        <img
          src={vector}
          alt=""
          className="absolute w-[90%] -translate-x-1/2 z-0 top-0 left-1/2 h-full "
        />
        <img
          src={UnionTop}
          alt=""
          className="hidden md:block absolute left-[130px] top-0  "
        />
        <img
          src={UnionDown}
          alt=""
          className="hidden md:block absolute right-[15px] bottom-[1px]   "
        />
        <div className="content w-full md:w-1/2 p-5 z-10 text-center md:text-left md:px-12 lg:px-20 xl:px-[80px] py-[25%] md:py-5">
          <SubHeading className="mb-4" weight="medium" size="4xl" color="white">
            {isPricingPage ? (
              "Want to order a device?"
            ) : (
              <>Ready to Drive <p>Smarter?</p></>
            )}
          </SubHeading>
          <Paragraph color="white">
            {isPricingPage 
              ? "Log in using your Genix Drive credentials and choose your preferred plan, or simply order a device to get more precise data analytics and more accurate location sharing." 
              : "Experience the demo and see smarter driving in action. Discover our exclusive features designed to improve every journey and keep your loved ones safe."}
          </Paragraph>
          <div className="flex flex-wrap gap-2 mt-10 justify-center md:justify-start items-center">
            {isPricingPage ? (
              <Button
                size="sm"
                variant="outline"
                className="!rounded-full !max-w-[170px] w-full sm:w-auto bg-white !text-gray-800 hover:bg-white/90 !text-[12px]"
                onClick={() => navigate("/admin/login")}
              >
                LOG IN
              </Button>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className="!rounded-full !max-w-[170px] w-full sm:w-auto bg-white !text-gray-800 hover:bg-white/90 !text-[12px]"
                  onClick={() => navigate("/interactive-demo")}
                >
                  VISIT Demo Now
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="!rounded-full !max-w-[170px] w-full sm:w-auto bg-white !text-gray-800 hover:bg-white/90 !text-[12px]"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en")}
                >
                  Download Now
                </Button>
              </>
            )}
          </div>
        </div>
        <img
          src={screen}
          alt=""
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2

            md:top-1/2
            md:left-auto
            md:right-3
            md:-translate-x-[5%]
            lg:-translate-x-[15%]
            xl:-translate-x-[30%]
            -translate-y-1/2

            w-[240px]
            md:w-[300px]
            lg:w-[350px]
            xl:w-[350px]
            h-auto
            object-contain
          "
        />
      </div>
    </section>
  );
};

export default ReadytoDrive;
