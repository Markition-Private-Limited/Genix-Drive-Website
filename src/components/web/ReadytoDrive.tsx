import vector from "../../assets/Vector 77.png";
import screen from "../../assets/screen 3.png";
import UnionTop from "../../assets/Union-up.png";
import UnionDown from "../../assets/Union-down.png";
import SubHeading from "../sharedui/SubHeading";
import Paragraph from "../sharedui/Paragraph";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const ReadytoDrive = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white text-black font-cairo p-[70px] md:p-[135px] padding-50">
      <div className="bg-secondary mb-[130px] md:mb-0 rounded-2xl relative h-[670px] md:h-[490px] z-10 flex items-start md:items-center ready-to-driver-cotnainer max-w-7xl m-auto">
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
        <div className="content w-full md:w-1/2 p-5 z-10 text-center md:text-left md:px-[130px]">
          <SubHeading className="mb-4" weight="medium" size="4xl" color="white">
            Ready to Drive <p>Smarter?</p>
          </SubHeading>
          <Paragraph color="white">
            Experience the demo and see smarter driving in action. Discover our exclusive features designed to improve every journey and keep your loved ones safe.
          </Paragraph>
          <Button
            variant="outline"
            className="!rounded-full !max-w-[270px] mt-10 bg-white !text-gray-800 hover:bg-white/90"
            size="lg"
            onClick={() => navigate("/interactive-demo")}
          >
            VISIT Demo Now
          </Button>
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
    md:-translate-x-0
    -translate-y-1/2
  "
        />
      </div>
    </section>
  );
};

export default ReadytoDrive;
