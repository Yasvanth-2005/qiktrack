import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import calendar from "../assets/Images/calender.svg";
import user from "../assets/Images/user.svg";
import correct from "../assets/Images/correct.svg";
import wrong from "../assets/Images/wrong.svg";

const ClassCard = () => {
  return (
    <div className="border-[0.5px] mb-4 rounded-md border-[#29A7E4]">
      <div className="py-4 px-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[#113870] font-semibold text-2xl">Lecture 1</h3>
          <h4 className="text-[#29A7E4] font-medium text-lg">Class-11 C</h4>
        </div>
        <div className="flex mt-2 items-center justify-between">
          <h5 className="text-[#113870] font-medium">
            Timing: <span className="text-[#29A7E4]">11:00 Am - 11:45 Am</span>
          </h5>
          <h5 className="text-[#113870] font-medium">
            Duration: <span className="text-[#29A7E4]">45 min</span>
          </h5>
        </div>
        <div className="flex items-center mt-1 justify-between">
          <div className="flex mt-2 gap-3">
            <div className="flex gap-1 items-center">
              <img alt="user" src={user} style={{ transform: "scale(0.9)" }} />{" "}
              <h3 className="font-semibold text-[#113870]">42</h3>
            </div>
            <div className="flex gap-1 items-center">
              <img alt="crct" src={correct} />{" "}
              <h3 className="font-semibold text-[#138808]">0</h3>
            </div>
            <div className="flex gap-1 items-center">
              <img alt="incrct" src={wrong} />{" "}
              <h3 className="font-semibold text-[#B53D3E]">30</h3>
            </div>
          </div>
          <Link to="/class/attendance">
            <h2 className="text-[#113870]  font-medium pt-2 underline cursor-pointer">
              View Attendance
            </h2>
          </Link>
        </div>
      </div>
      <div className="bg-[#EBF2FC] px-3 py-5 flex justify-between items-center">
        <Link to="/class/attendance">
          <h3 className="text-xs hover:underline font-medium">Attendance</h3>
        </Link>
        <Link to="/class/homework">
          <h3 className="text-xs hover:underline font-medium">Homework</h3>
        </Link>
        <Link to="/class/result">
          <h3 className="text-xs hover:underline font-medium">Result</h3>
        </Link>
        <Link to="/class/notice">
          <h3 className="text-xs hover:underline font-medium">Notice</h3>
        </Link>
        <Link to="/class/reminder">
          <h3 className="text-xs hover:underline font-medium">Remainder</h3>
        </Link>
      </div>
    </div>
  );
};

const MyClasses = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC]">
        <Link to="/">
          <div className="cursor-pointer flex items-center gap-3">
            <img
              src={back}
              alt="back"
              className="pt-1"
              style={{ transform: "scale(0.9)" }}
            />
            <h2 className="text-lg font-semibold text-[#113870]">My Classes</h2>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <img src={calendar} alt="calendar" />
          <h2 className="text-[#113870] text-lg font-semibold">15-04-2024</h2>
        </div>
      </div>

      {/* Lectures */}
      <div className="px-3 my-5">
        {/* Cards */}
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </>
  );
};

export default MyClasses;
