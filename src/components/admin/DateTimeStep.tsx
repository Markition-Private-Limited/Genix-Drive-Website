import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import SubHeading from "../sharedui/SubHeading";

const DateTimeStep = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-5 mb-4">
        <div className="w-[30px] h-[30px] light-purple-color  flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">
          3
        </div>
        <SubHeading className="lato-font text-[16px]" size="lg">
          Select Date and Time
        </SubHeading>
      </div>

      {/* Container */}
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-6">
        {/* Calendar */}
        <div className="flex-1">
          <DatePicker
            selected={date}
            onChange={(d:any) => setDate(d)}
            inline
            calendarClassName="!border-none"
          />
        </div>

        {/* Time Picker (Custom UI) */}
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Time Display */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-500 text-white px-3 py-2 rounded-lg text-lg">
              {date?.getHours().toString().padStart(2, "0")}
            </div>
            <span className="text-xl">:</span>
            <div className="bg-gray-200 px-3 py-2 rounded-lg text-lg">
              {date?.getMinutes().toString().padStart(2, "0")}
            </div>
          </div>

          {/* Clock (Simple Version) */}
          <input
            type="time"
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

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Installation is scheduled for {date?.toDateString()} at{" "}
          {date?.toLocaleTimeString()}
        </p>

        {/* <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg">
            Continue
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DateTimeStep;
