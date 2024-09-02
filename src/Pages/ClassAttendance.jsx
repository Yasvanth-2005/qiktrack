import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import calendar from "../assets/Images/calender.svg";
import user from "../assets/Images/user.svg";
import correct from "../assets/Images/correct.svg";
import wrong from "../assets/Images/wrong.svg";
import dottedline from "../assets/Images/dottedline.svg";
import phone from "../assets/Images/phone.svg";
import person from "../assets/person.png";

const AttendanceCard = () => {
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
          <h2 className="bg-[#113870] hover:bg-[#1D4F8C] mt-2 px-2 py-1 rounded font-medium text-white cursor-pointer">
            Submit
          </h2>
        </div>
      </div>
      <div className="mt-2"></div>
      <img src={dottedline} alt="Dotted Line" className="pb-4" />
      {/* Line Card */}
      <div className="rounded-lg mx-3 mb-3 overflow-hidden flex items-center justify-between border-[0.5px] border-[#113870] bg-[#EBF2FC]">
        <div className="flex gap-2 items-center">
          <img src={person} alt="person" className="h-[60px] w-[60px]" />
          <div>
            <h2 className="font-semibold text-lg">
              Ayush Tiwari{" "}
              <span className="text-sm text-[#00000080]">(8th B)</span>
            </h2>
            <div className="flex gap-4 mt-1 pb-2 text-sm items-center">
              <h5 className="px-2 py-0.5 rounded text-white bg-red-700">
                Absent
              </h5>
              <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Leave</h5>
              <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Present</h5>
            </div>
          </div>
        </div>
        <img src={phone} alt="call" className="pr-3 cursor-pointer" />
      </div>
      <div className="rounded-lg mx-3 mb-3 overflow-hidden flex items-center justify-between border-[0.5px] border-[#113870] bg-[#EBF2FC]">
        <div className="flex gap-2 items-center">
          <img src={person} alt="person" className="h-[60px] w-[60px]" />
          <div>
            <h2 className="font-semibold text-lg">
              Ayush Tiwari{" "}
              <span className="text-sm text-[#00000080]">(8th B)</span>
            </h2>
            <div className="flex gap-4 mt-1 pb-2 text-sm items-center">
              <h5 className="px-2 py-0.5 rounded text-white bg-red-700">
                Absent
              </h5>
              <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Leave</h5>
              <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Present</h5>
            </div>
          </div>
        </div>
        <img src={phone} alt="call" className="pr-3 cursor-pointer" />
      </div>
      <div className="rounded-lg mx-3 mb-3 overflow-hidden flex items-center justify-between border-[0.5px] border-[#113870] bg-[#EBF2FC]">
        <div className="flex gap-2 items-center">
          <img src={person} alt="person" className="h-[60px] w-[60px]" />
          <div>
            <h2 className="font-semibold text-lg">
              Ayush Tiwari{" "}
              <span className="text-sm text-[#00000080]">(8th B)</span>
            </h2>
            <div className="flex gap-4 mt-1 pb-2 text-sm items-center">
              <h5 className="px-2 py-0.5 rounded text-white bg-red-700">
                Absent
              </h5>
              <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Leave</h5>
              <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Present</h5>
            </div>
          </div>
        </div>
        <img src={phone} alt="call" className="pr-3 cursor-pointer" />
      </div>
    </div>
  );
};

const ClassAttendance = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC]">
        <Link to="/myclasses">
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
        <AttendanceCard />
        <AttendanceCard />
      </div>
    </>
  );
};

export default ClassAttendance;
