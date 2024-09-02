import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import calendar from "../assets/Images/calender.svg";

import user from "../assets/Images/user.svg";
import correct from "../assets/Images/correct.svg";
import wrong from "../assets/Images/wrong.svg";

import person from "../assets/person.png";
import edit from "../assets/Images/edit.svg";
import trash from "../assets/Images/delete.svg";

const ResultCard = () => {
  return (
    <>
      <div className="border-[0.5px] mb-4 rounded-md border-[#29A7E4]">
        <div className="py-4 px-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[#113870] font-semibold text-2xl">Lecture 1</h3>
            <h4 className="text-[#29A7E4] font-medium text-lg">Class-11 C</h4>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <h5 className="text-[#113870] font-medium">
              Timing:{" "}
              <span className="text-[#29A7E4]">11:00 Am - 11:45 Am</span>
            </h5>
            <h5 className="text-[#113870] font-medium">
              Duration: <span className="text-[#29A7E4]">45 min</span>
            </h5>
          </div>
          <div className="flex items-center mt-1 justify-between">
            <div className="flex mt-2 gap-4">
              <div className="flex gap-1 items-center">
                <img
                  alt="user"
                  src={user}
                  style={{ transform: "scale(0.9)" }}
                />{" "}
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
          </div>
        </div>
      </div>

      <h2 className="my-4 text-[#113870] text-lg font-semibold">
        Upload Result
      </h2>
      <div className="rounded-lg mx-3 mb-3 overflow-hidden flex items-center gap-3 border-[0.5px] border-[#113870] bg-[#EBF2FC]">
        <div className="flex gap-2 items-center">
          <img src={person} alt="person" className="h-[70px] w-[70px]" />
        </div>
        <div className="w-full flex items-center justify-between px-3">
          <div className="flex flex-col">
            <h1 className="font-semibold">Ayush Tiwari</h1>
            <h4 className="px-2 cursor-pointer w-[fit-content] mt-3 py-1 text-white rounded bg-[#113870] hover:bg-[#11325f] text-xs">
              Add Result
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-[#113870] font-semibold">
              (Roll No- 12)
            </h3>
            <div className="flex gap-4 w-full items-center">
              <div className="flex flex-col cursor-pointer">
                <img
                  src={edit}
                  alt="edit"
                  style={{ transform: "scale(0.9)" }}
                />
                <h5 className="text-xs text-[#113870]">Edit</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <img
                  src={trash}
                  alt="delete"
                  className="mt-[-5px]"
                  style={{ transform: "scale(0.5)" }}
                />
                <h5 className="text-xs mt-[-7px] text-[#B53D3E]">Delete</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg mx-3 mb-3 overflow-hidden flex items-center gap-3 border-[0.5px] border-[#113870] bg-[#EBF2FC]">
        <div className="flex gap-2 items-center">
          <img src={person} alt="person" className="h-[70px] w-[70px]" />
        </div>
        <div className="w-full flex items-center justify-between px-3">
          <div className="flex flex-col">
            <h1 className="font-semibold">Ayush Tiwari</h1>
            <h4 className="px-2 cursor-pointer w-[fit-content] mt-3 py-1 text-white rounded bg-[#113870] hover:bg-[#11325f] text-xs">
              Add Result
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-[#113870] font-semibold">
              (Roll No- 12)
            </h3>
            <div className="flex gap-4 w-full items-center">
              <div className="flex flex-col cursor-pointer">
                <img
                  src={edit}
                  alt="edit"
                  style={{ transform: "scale(0.9)" }}
                />
                <h5 className="text-xs text-[#113870]">Edit</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <img
                  src={trash}
                  alt="delete"
                  className="mt-[-5px]"
                  style={{ transform: "scale(0.5)" }}
                />
                <h5 className="text-xs mt-[-7px] text-[#B53D3E]">Delete</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg mx-3 mb-3 overflow-hidden flex items-center gap-3 border-[0.5px] border-[#113870] bg-[#EBF2FC]">
        <div className="flex gap-2 items-center">
          <img src={person} alt="person" className="h-[70px] w-[70px]" />
        </div>
        <div className="w-full flex items-center justify-between px-3">
          <div className="flex flex-col">
            <h1 className="font-semibold">Ayush Tiwari</h1>
            <h4 className="px-2 cursor-pointer w-[fit-content] mt-3 py-1 text-white rounded bg-[#113870] hover:bg-[#11325f] text-xs">
              Add Result
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-[#113870] font-semibold">
              (Roll No- 12)
            </h3>
            <div className="flex gap-4 w-full items-center">
              <div className="flex flex-col cursor-pointer">
                <img
                  src={edit}
                  alt="edit"
                  style={{ transform: "scale(0.9)" }}
                />
                <h5 className="text-xs text-[#113870]">Edit</h5>
              </div>
              <div className="flex flex-col cursor-pointer">
                <img
                  src={trash}
                  alt="delete"
                  className="mt-[-5px]"
                  style={{ transform: "scale(0.5)" }}
                />
                <h5 className="text-xs mt-[-7px] text-[#B53D3E]">Delete</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ClassResult = () => {
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
            <h2 className="text-lg font-semibold text-[#113870]">Result</h2>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <img src={calendar} alt="calendar" />
          <h2 className="text-[#113870] text-lg font-semibold">15-04-2024</h2>
        </div>
      </div>

      <div className="px-3 my-5">
        {/* Cards <*/}
        <ResultCard />
      </div>
    </>
  );
};

export default ClassResult;
