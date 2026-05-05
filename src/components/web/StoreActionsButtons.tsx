import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";

interface StoreActionsButtonsProps {
  className?: string;
}
const StoreActionsButtons = ({ className = "" }: StoreActionsButtonsProps) => {
  return (
    <div
      className={`actions flex items-center justify-center md:justify-start gap-3 mt-10 ${className}`}
    >
      <div
        className={`${
          className == "!block" ? "mb-5" : "mb-auto"
        } cursor-pointer w-[100%] h-[auto] overflow-hidden bg-white rounded-xl`}
      >
        {/* <a href="#" className="block w-full h-full"> */}
          <img src={appStore} alt="App Store" />
        {/* </a> */}
      </div>
      <div className="cursor-pointer w-[100%] h-[auto] overflow-hidden bg-white rounded-xl">
        <a href="https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en" className="block w-full h-full">
          <img src={playStore} alt="Play Store" />
        </a>
      </div>
    </div>
  );
};

export default StoreActionsButtons;
