import userImg from "../assets/Images/user.svg";
import dropdown from "../assets/Images/dropdown.svg";

import poster1 from "../assets/teacher/poster.png";
import poster2 from "../assets/teacher/poster2.png";
import bus from "../assets/teacher/bus.svg";
import mic from "../assets/teacher/mic.svg";
import students from "../assets/teacher/students.svg";

const Teacher_home = () => {
  return (
    <>
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC]">
        <div className="name flex items-center gap-2">
          <img src={userImg} alt="user" />
          <h2 className="text-lg font-semibold text-[#113870]">Driver Name</h2>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-[#113870]">Aatreya Academey</h3>
          <img src={dropdown} alt="dd" className="pt-1" />
        </div>
      </div>

      <div className="mt-2 p-2 w-full flex justify-center">
        <img src={poster1} alt="poster" />
      </div>

      <div className="p-2 w-full flex justify-center">
        <img src={poster2} alt="poster" />
      </div>

      <div className="mt-3 px-2">
        <div className="bg-white p-5 shadow">
          <h2 className="text-lg text-[#113870] font-semibold">
            GPS Based Tracking
          </h2>
          <div className="p-3 mt-2 flex items-center justify-between">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <img
                style={{ width: "50px", height: "50px" }}
                src={bus}
                alt="bus"
              />
              <h6 className="text-xs">School bus</h6>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <img
                style={{ width: "50px", height: "50px" }}
                src={students}
                alt="classes"
              />
              <h6 className="text-xs">My classes</h6>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <img
                style={{ width: "50px", height: "50px" }}
                src={mic}
                alt="classes"
              />
              <h6 className="text-xs">Announcements</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher_home;
