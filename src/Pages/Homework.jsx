import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import calendar from "../assets/Images/calender.svg";
import { useState } from "react";

import download from "../assets/Images/download.svg";
import phone from "../assets/Images/phone.svg";

const HomeworkCard = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="mb-4">
      <div className="bg-white p-2 rounded">
        <div className="flex items-center justify-between">
          <h3 className="text-[#113870] font-semibold">
            Student Name: <span className="text-[#29A7E4]">Dravin Paul</span>
          </h3>
          <h3 className="text-[#113870] font-semibold">
            Date: <span className="text-[#29A7E4]">15/04/2024</span>
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[#113870] font-semibold">
            Class: <span className="text-[#29A7E4]">8th B</span>
          </h3>
          <h3 className="text-[#113870] font-semibold">
            Subject: <span className="text-[#29A7E4]">Maths</span>
          </h3>
        </div>
        {!viewMore ? (
          <p className="text-xs mt-3 text-[#00000080]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            reprehenderit quos, magnam delectus atque sed! Et, quaerat fugit
            dict Lorem ipsum dolor sit amet.
          </p>
        ) : (
          <p className="text-xs mt-3 text-[#00000080]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo
            aspernatur officia quia quos. Aliquid, doloremque delectus pariatur
            asperiores enim fugit porro dolores voluptatum architecto
            repellendus voluptas alias magni libero eos sint debitis laboriosam
            sequi culpa nam mollitia sunt cum veritatis odio. Esse repellendus
            tenetur repudiandae sed voluptatem consequatur debitis.
          </p>
        )}
        <div className="flex justify-between pb-1">
          <div></div>
          <h2
            onClick={() => setViewMore((p) => !p)}
            className="text-sm hover:underline cursor-pointer text-[#113870]"
          >
            View More
          </h2>
        </div>
      </div>
      {/* Blue section */}
      <div className="flex px-5 py-2 justify-between items-center bg-[#EBF2FC]">
        <div className="flex flex-col items-center cursor-pointer">
          <img src={download} alt="download" />
          <h1 className="text-sm">Download</h1>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={phone} alt="phone" style={{ transform: "scale(0.8)" }} />
          <h1 className="text-sm">Teacher</h1>
        </div>
      </div>
    </div>
  );
};

const Homework = () => {
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
            <h2 className="text-lg font-semibold text-[#113870]">Homework</h2>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <img src={calendar} alt="calendar" />
          <h2 className="text-[#113870] text-lg font-semibold">04-02-2024</h2>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 px-2">
        <HomeworkCard />
        <HomeworkCard />
        <HomeworkCard />
      </div>
    </>
  );
};

export default Homework;
