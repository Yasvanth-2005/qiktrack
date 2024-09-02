import { useState } from "react";
import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import calendar from "../assets/Images/calender.svg";

import user from "../assets/Images/user.svg";
import correct from "../assets/Images/correct.svg";
import wrong from "../assets/Images/wrong.svg";

import image from "../assets/Images/image.svg";

import dottedline from "../assets/Images/dottedline.svg";

const RemainderCard = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

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
          <div className="flex mt-2 gap-4">
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
        </div>
      </div>
      <div className="mt-2"></div>
      <img src={dottedline} alt="Dotted Line" className="pb-2" />
      <div className="px-3 pb-2">
        <h2 className="text-[#113870] text-lg font-medium">Today's Reminder</h2>
        <div className="my-3">
          <form>
            <input
              type="text"
              placeholder="Enter Topic"
              className="px-3 rounded outline-none focus:ring-0 text-sm w-full p-1 bg-[#F8F8F8] border-[0.5px]  border-[rgba(0,0,0,0.2)] hover:border-gray-400"
            />
            <input
              type="file"
              id="fileInput-1"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Custom file upload button */}
            <label
              htmlFor="fileInput-1"
              className="flex items-center justify-center flex-col mt-3 w-full h-64  bg-[#F8F8F8] border-[0.5px]  border-[rgba(0,0,0,0.2)] border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {!fileName ? (
                <>
                  <h6 className="text-gray-500">Describe Reminder here</h6>
                  <h3 className="font-semibold text-lg">OR</h3>
                  <img
                    alt="upload img"
                    src={image}
                    className="mt-[-10px]"
                    style={{ transform: "scale(0.7)" }}
                  />
                  <h5 className="text-white rounded text-sm px-2 py-1 bg-[#113870] hover:bg-[#1D4F8C]">
                    Upload Reminder
                  </h5>
                </>
              ) : (
                <>
                  <h6 className="text-gray-500">{fileName}</h6>
                </>
              )}
            </label>
          </form>
          <h2 className="text-[#113870] text-lg font-medium mt-2">
            Select Student
          </h2>
          <div className="mt-2 flex items-center gap-2">
            <h5 className="text-white rounded text-sm px-2 py-1 bg-[#113870] hover:bg-[#1D4F8C]">
              All Student
            </h5>
            <select className="px-2 py-1 bg-[#EBF2FC] text-gray-600 text-sm">
              <option value="">Select Student</option>
              <option value="Name 1">Name 1</option>
              <option value="Name 2">Name 2</option>
              <option value="Name 3">Name 3</option>
            </select>
          </div>
          <div className="mt-2 flex justify-between">
            <div></div>
            <h2 className="px-4 py-1 cursor-pointer text-white bg-[#29A7E4] hover:bg-[#2b99cf] rounded">
              Upload
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClassReaminder = () => {
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
            <h2 className="text-lg font-semibold text-[#113870]">Reminder</h2>
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
        <RemainderCard />
      </div>
    </>
  );
};

export default ClassReaminder;
