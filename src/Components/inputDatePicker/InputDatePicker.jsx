import { useState } from "react";
import Calendar from "react-calendar";
import "./style.css";

export default function InputDatePicker() {
  const [value, onChange] = useState(new Date());

  const currentDate = new Date();

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      // Add class for dates after the current date
      if (date > currentDate) {
        return "text-YellowColor";
      } else {
        return "text-YellowColor/50";
      }
    }
    return "";
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="bg-transparent border-none"
        tileClassName={tileClassName} // 1 - 30/31 Dates box Style
        tileContent="" // 1 - 30/31 Date Content
      />
    </div>
  );
}
