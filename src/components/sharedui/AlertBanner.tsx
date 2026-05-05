import { AlertTriangle } from "lucide-react";
import Button from "../Button";

interface AlertBannerProps {
  message: string;
  actionLabel?: string;
  actionTo?: string;
}

const AlertBanner = ({ message, actionLabel, actionTo }: AlertBannerProps) => {
  return (
    <div className="flex items-center justify-between gap-4 ">
      <div className="w-full flex items-center gap-3 bg-orange-400 text-white rounded-xl px-4 py-4 ring-1 ring-orange-200">
        <AlertTriangle className="w-5 h-5" />
        <p className="text-sm">{message}</p>
      </div>
      {actionLabel && actionTo && (
        <Button variant="secondary" size="lg" className="!w-full">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default AlertBanner;
