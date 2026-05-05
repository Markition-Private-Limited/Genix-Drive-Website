import React from "react";
import { Clock, Map } from "lucide-react";

type TripRowProps = {
  score: number;
  distanceKm: number;
  durationMin: number;
  startDate: string;
  endDate: string;
};

const ringColor = (score: number) => {
  if (score >= 70) return "#6C63FF";
  if (score >= 40) return "#FFCC00";
  return "#FF3B30";
};

const TripRow: React.FC<TripRowProps> = ({
  score,
  distanceKm,
  durationMin,
  startDate,
  endDate,
}) => {
  const percent = Math.min(Math.max(score, 0), 100);
  const color = ringColor(score);
  const ringStyle: React.CSSProperties = {
    backgroundImage: `conic-gradient(${color} ${
      percent * 3.6
    }deg, #EAEAEA 0deg)`,
  };

  return (
    <div className="flex justify-between items-center px-5 py-4">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full grid place-items-center"
          style={ringStyle}
        >
          <div className="w-8 h-8 rounded-full bg-white grid place-items-center text-xs font-bold text-gray-900">
            {score}
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600 text-xs">
          <span className="inline-flex items-center gap-1">
            <Map className="w-4 h-4" />
            {distanceKm.toFixed(1)} km
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {durationMin} min
          </span>
        </div>
      </div>
      <div className="text-gray-900 text-sm">{startDate}</div>
      <div className="text-gray-900 text-sm text-right">{endDate}</div>
    </div>
  );
};

export default TripRow;
