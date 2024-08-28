import back from "../assets/Images/back.svg";
import dottedline from "../assets/Images/dottedline.svg";
import locsvg from "../assets/Images/locsvg.svg";
import arrowdrop from "../assets/Images/arrowdrop.svg";
import phone from "../assets/Images/phone.svg";

import user from "../assets/Images/user.svg";
import correct from "../assets/Images/correct.svg";
import wrong from "../assets/Images/wrong.svg";
import { useState } from "react";

import person from "../assets/person.png";

const PickupCard = () => {
  const [down, setDown] = useState(false);
  return (
    <div className="p-3 bg-white border border-1 border-[#29A7E4] rounded mb-4">
      <h2 className="text-lg font-semibold mb-1">Start Point</h2>
      <div className="flex gap-2 items-start mt-1">
        <img alt="stop" src={locsvg} className="pt-1" />
        <div>
          <h3 className="text-base font-medium">Location Name</h3>
          <p className="text-sm text-[#00000080]">
            i tech Park , Sector 49 , Gurgaon , Haryana , 122018 , India
          </p>
        </div>
      </div>

      <div className="mt-3">
        <img src={dottedline} alt="dottedline" />
      </div>

      <div
        className="mt-2 flex items-center justify-between cursor-pointer"
        onClick={() => setDown((p) => !p)}
      >
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
        <img
          src={arrowdrop}
          alt="drop"
          className="transition"
          style={{ transform: `rotate(${down ? "180deg" : "0"})` }}
        />
      </div>

      {/* Details */}
      <div
        className={`flex gap-2 flex-col transition-[2s] ${
          down ? "h-auto mt-2" : "h-0"
        } overflow-hidden`}
      >
        {/* Card */}
        <div className="rounded-lg overflow-hidden flex items-center justify-between border-[0.5px] border-[#113870] bg-[#EBF2FC]">
          <div className="flex gap-2 items-center">
            <img src={person} alt="image" className="h-[60px] w-[60px]" />
            <div>
              <h2 className="font-semibold text-lg">
                Ayush Tiwari{" "}
                <span className="text-sm text-[#00000080]">(8th B)</span>
              </h2>
              <div className="flex gap-4 mt-1 text-sm items-center">
                <h5 className="px-2 py-0.5 rounded text-white bg-red-700">
                  Absent
                </h5>
                <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Present</h5>
              </div>
            </div>
          </div>
          <img src={phone} alt="call" className="pr-3 cursor-pointer" />
        </div>
        {/* Card */}
        <div className="rounded-lg overflow-hidden flex items-center justify-between border-[0.5px] border-[#113870] bg-[#EBF2FC]">
          <div className="flex gap-2 items-center">
            <img src={person} alt="image" className="h-[60px] w-[60px]" />
            <div>
              <h2 className="font-semibold text-lg">
                Ayush Tiwari{" "}
                <span className="text-sm text-[#00000080]">(8th B)</span>
              </h2>
              <div className="flex gap-4 mt-1 text-sm items-center">
                <h5 className="px-2 py-0.5 rounded text-white bg-red-700">
                  Absent
                </h5>
                <h5 className="px-2 py-0.5 rounded bg-[#D5D5D5]">Present</h5>
              </div>
            </div>
          </div>
          <img src={phone} alt="call" className="pr-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Pickup = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC]">
        <div className="name flex items-center gap-2">
          <img alt="back" src={back} style={{ transform: "scale(0.9)" }} />
          <h2 className="text-lg font-semibold text-[#113870]">Pickup Trip</h2>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-[#113870] font-semibold">HT 78 78 C787</h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col my-3 px-3 mt-5">
        <PickupCard />
        <PickupCard />
        <PickupCard />
      </div>
    </>
  );
};

export default Pickup;
