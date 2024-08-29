import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import phone from "../assets/Images/phone.svg";

const TeacherCard = () => {
  return (
    <div className="my-4 mx-2 rounded-md py-3 px-2 bg-white border-[0.5px] border-[#29A7E4] shadow-md">
      <h2 className="text-xl text-[#113870] font-semibold ">Class Incharge</h2>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-5">
            <h5 className="text-sm font-semibold text-[#113870]">
              Name:- <span className="text-[#29A7E4]">Rahul Yadav</span>
            </h5>
            <h5 className="text-sm font-semibold text-[#113870]">
              Subject:- <span className="text-[#29A7E4]">Maths</span>
            </h5>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <h5 className="text-sm font-semibold text-[#113870]">
              Ph no:- <span className="text-[#29A7E4]">8888888888</span>
            </h5>
          </div>
        </div>
        <div className="flex flex-col hover:underline items-center gap-1 cursor-pointer">
          <img src={phone} alt="phone" />
          <h6 className="text-xs text-[#113870]">Call Incharge</h6>
        </div>
      </div>
    </div>
  );
};

const Teachers = () => {
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
            <h2 className="text-lg font-semibold text-[#113870]">Teachers</h2>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <h2 className="text-[#113870] text-lg font-semibold">
            Class: <span className="text-[#29A7E4]">8th B</span>
          </h2>
        </div>
      </div>

      {/* cards */}
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </>
  );
};

export default Teachers;
