import back from "../assets/Images/back.svg";
import route from "../assets/teacher/route.png";

import driver from "../assets/teacher/driver.svg";
import helper from "../assets/teacher/helper.svg";
import school from "../assets/teacher/school.svg";
import { Link } from "react-router-dom";

const BusCard = () => {
  return (
    <div className="mt-5 rounded bg-white shadow-md">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#113870]">HR 47 C 6769</h1>
          <h2 className="text-white px-5 py-1 rounded bg-[#B53D3E]">Stopped</h2>
        </div>
        <div className="mt-3 pl-5">
          i tech Park , Sector 49 , Gurgaon , Haryana , 122018 , India
        </div>
        <div className="mt-2 p-1 rounded border-[0.5px] border-[#29A7E4] bg-[#EBF2FC]">
          <div className="px-2 flex justify-between items-center">
            <h4 className="text-sm font-semibold">Pickup Trip</h4>
            <div className="flex items-center gap-2">
              <h6 className="text-xs">Start time : 08:00 Am</h6>
              <h6 className="text-xs">End time : 08:50 Am</h6>
            </div>
          </div>
          <div className="my-1 w-full flex justify-center">
            <img alt="route" src={route} />
          </div>
        </div>
      </div>
      <div className="rounded w-full flex items-center justify-between bg-[#EBF2FC] py-2 px-5">
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <img src={driver} alt="driver" />
          <h6 className="text-sm text-[#113870]">Driver</h6>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <img src={helper} alt="helper" />
          <h6 className="text-sm text-[#113870]">Helper</h6>
        </div>
        <div className="flex flex-col gap-1 items-center cursor-pointer">
          <img src={school} alt="school" />
          <h6 className="text-sm text-[#113870]">School</h6>
        </div>
      </div>
    </div>
  );
};

const SchoolBus = () => {
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
            <h2 className="text-lg font-semibold text-[#113870]">School Bus</h2>
          </div>
        </Link>
      </div>

      <div className="px-3">
        {/* Cards */}
        <BusCard />
        <BusCard />
      </div>
    </>
  );
};

export default SchoolBus;
