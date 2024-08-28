import userImg from "../assets/Images/user.svg";
import dropdown from "../assets/Images/dropdown.svg";
import sidedrop from "../assets/Images/sidedrop.svg";
import bus from "../assets/Images/bus.svg";
import travel from "../assets/Images/travel.svg";
import dottedline from "../assets/Images/dottedline.svg";

import user from "../assets/Images/user.svg";
import correct from "../assets/Images/correct.svg";
import wrong from "../assets/Images/wrong.svg";
import location from "../assets/Images/location.svg";

const TripCard = () => {
  return (
    <div className="p-3 bg-white border border-1 border-[#29A7E4] rounded mb-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Trip</h1>
        <div className="flex items-center gap-2 text-[#29A7E4]">
          Pickup <img src={sidedrop} alt="chevron-left" />
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <img src={bus} alt="bus" />
        <h2 className="font-semibold">Bus Number 1</h2>
      </div>

      <div className="mt-2 w-full flex justify-between items-center">
        <h2 className="w-[80px]">8:30 AM</h2>
        <img src={travel} alt="line" style={{ width: "calc(100% - 160px)" }} />
        <h2 className="text-right w-[80px]">9:30 AM</h2>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center">
            <img alt="user" src={user} style={{ transform: "scale(0.9)" }} />{" "}
            <h3>42</h3>
          </div>
          <div className="flex gap-1 items-center">
            <img alt="crct" src={correct} /> <h3>0</h3>
          </div>
          <div className="flex gap-1 items-center">
            <img alt="incrct" src={wrong} /> <h3>30</h3>
          </div>
        </div>
        <button className="px-4 py-1 rounded text-white bg-green-600">
          Start
        </button>
      </div>

      <div className="mt-3">
        <img src={dottedline} alt="dottedline" />
      </div>

      <div className="mt-3 px-3 flex justify-between">
        <div className="py-1 px-2 pr-3 cursor-pointer rounded text-white bg-[#113870] flex items-center gap-2">
          <img
            src={location}
            alt="location"
            style={{ transform: "scale(0.8)" }}
          />{" "}
          Navigate
        </div>
        <div className="py-1 px-2 cursor-pointer rounded text-white bg-[#F3B807] flex items-center justify-center">
          <h1>Mark Completed</h1>
        </div>
      </div>
    </div>
  );
};

const Trips = () => {
  return (
    <>
      {/* Header Section */}
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

      <h1 className="font-semibold text-xl pt-5 px-3">
        Today Trip :- <span className="text-[#113870]">05/05/2024</span>
      </h1>

      {/* cards */}
      <div className="flex flex-col my-3 px-3 mt-5">
        <TripCard />
        <TripCard />
        <TripCard />
      </div>
    </>
  );
};

export default Trips;
