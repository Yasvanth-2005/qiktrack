import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import calendar from "../assets/Images/calender.svg";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Attendance = () => {
  // eslint-disable-next-line
  const [attendance, setAttendance] = useState("Present");
  const [attend, setAttend] = useState("Absent");
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC]">
        <Link to="/Children">
          <div className="cursor-pointer flex items-center gap-3">
            <img
              src={back}
              alt="back"
              className="pt-1"
              style={{ transform: "scale(0.9)" }}
            />
            <h2 className="text-lg font-semibold text-[#113870]">Attendance</h2>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <img src={calendar} alt="calendar" />
          <h2 className="text-[#113870] text-lg font-semibold">15-04-2024</h2>
        </div>
      </div>

      {/* Attendance Today */}
      <h1 className="text-2xl text-[#113870] font-semibold mt-2 px-3">
        Mark Today’s Bus Attendance of{" "}
      </h1>
      <div className="flex justify-between w-full px-3 mt-3 font-medium">
        <h2 className="text-[#29A7E4]">Dravin Pal</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-7">
            <button
              onClick={() => setAttend("Absent")}
              className={`${
                attend === "Absent"
                  ? "text-white  bg-[#B53D3E] hover:bg-[#8C2E2F]"
                  : "bg-[#D5D5D5] hover:bg-[#B0B0B0]"
              } px-5 py-0.5 rounded`}
            >
              Absent
            </button>
            <button
              onClick={() => setAttend("Present")}
              className={`${
                attend === "Present"
                  ? "text-white  bg-[#B53D3E] hover:bg-[#8C2E2F]"
                  : "bg-[#D5D5D5] hover:bg-[#B0B0B0]"
              } px-5 py-0.5 rounded`}
            >
              Present
            </button>
          </div>
          <button className="text-white w-full bg-[#113870] hover:bg-[#0D2C5A] py-0.5 rounded">
            Submit
          </button>
        </div>
      </div>

      {/* Attendance History */}
      <h2 className="text-xl font-medium mt-5 px-3">
        Attendance History <span className="text-[#113870]">(Dravin Pal)</span>
      </h2>
      <div className="px-3">
        <div className="calendar-container mt-2">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="my-calendar"
          />
        </div>
      </div>
      <h2 className="mt-3 text-xl px-3 font-medium">
        Result:{" "}
        {attendance === "Present" ? (
          <span className="text-green-600">Present</span>
        ) : (
          <span className="text-red-600">Absent</span>
        )}
      </h2>
    </>
  );
};

export default Attendance;
