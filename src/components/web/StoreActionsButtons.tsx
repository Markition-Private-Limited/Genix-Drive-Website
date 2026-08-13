import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";

interface StoreActionsButtonsProps {
  className?: string;
  small?: boolean;
}
const StoreActionsButtons = ({ className = "", small = false }: StoreActionsButtonsProps) => {
  const widthClass = small ? "w-[100px] lg:w-[120px]" : "w-[120px] md:w-[110px] lg:w-[170px]";
  return (
    <div
      className={`actions flex items-center justify-center lg:justify-start gap-3 mt-5 ${className}`}
    >
      <div
        className={`${className.includes("!block") ? "mb-5 mx-auto lg:mx-0" : "mb-auto"
          } cursor-pointer ${widthClass} h-[auto] overflow-hidden bg-white rounded-xl`}
      >
        {/* <a href="#" className="block w-full h-full"> */}
        <img src={appStore} alt="App Store" />
        {/* </a> */}
      </div>
      <div className={`${className.includes("!block") ? "mx-auto lg:mx-0" : ""} cursor-pointer ${widthClass} h-[auto] overflow-hidden bg-white rounded-xl`}>
        <a href="https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en" className="block w-full h-full">
          <img src={playStore} alt="Play Store" />
        </a>
      </div>
    </div>
  );
};

export default StoreActionsButtons;
