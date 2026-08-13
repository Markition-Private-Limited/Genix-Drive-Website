import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import SubHeading from "../sharedui/SubHeading";

// Helper: format time as 12-hour AM/PM
const formatTime12h = (date: Date | null): string => {
  if (!date) return "";
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const DateTimeStep = () => {
  // Default: today's date at 14:00
  const defaultDate = new Date();
  defaultDate.setHours(14, 0, 0, 0);

  const [date, setDate] = useState<Date | null>(defaultDate);

  // Today at midnight — used to block past dates
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-5 mb-4">
        <div className="w-[30px] h-[30px] light-purple-color flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">
          3
        </div>
        <SubHeading className="lato-font text-[16px]" size="lg">
          Select Date and Time
        </SubHeading>
      </div>

      {/* Container */}
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-6">
        {/* Calendar — past dates disabled */}
        <div className="flex-1">
          <DatePicker
            selected={date}
            onChange={(d: Date | null) => {
              if (!d) return;
              // Preserve the currently selected time when date changes
              const newDate = new Date(d);
              if (date) {
                newDate.setHours(date.getHours(), date.getMinutes(), 0, 0);
              } else {
                newDate.setHours(14, 0, 0, 0);
              }
              setDate(newDate);
            }}
            inline
            minDate={today}
            calendarClassName="!border-none"
          />
        </div>

        {/* Time Picker (Custom UI) */}
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Time Display — 24h blocks */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-500 text-white px-3 py-2 rounded-lg text-lg">
              {date?.getHours().toString().padStart(2, "0")}
            </div>
            <span className="text-xl">:</span>
            <div className="bg-gray-200 px-3 py-2 rounded-lg text-lg">
              {date?.getMinutes().toString().padStart(2, "0")}
            </div>
          </div>

          {/* Time Input — editable, defaults to 14:00 */}
          <input
            type="time"
            defaultValue="14:00"
            className="border rounded-lg px-3 py-2"
            onChange={(e) => {
              const [h, m] = e.target.value.split(":");
              const newDate = new Date(date || new Date());
              newDate.setHours(Number(h));
              newDate.setMinutes(Number(m));
              setDate(newDate);
            }}
          />
        </div>
      </div>

      {/* Footer — 12-hour format */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Installation is scheduled for {date?.toDateString()} at{" "}
          {formatTime12h(date)}
        </p>
      </div>
    </div>
  );
};

export default DateTimeStep;
