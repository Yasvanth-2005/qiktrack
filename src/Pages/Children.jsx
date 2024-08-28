import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import child from "../assets/child.png";

const ChildrenCard = () => {
  return (
    <div className="mt-4 p-2 bg-white mx-2 rounded">
      <div className="px-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={child} alt="children" className="rounded" />
          <h1 className="text-xl font-semibold text-[#113870]">Dravin Pal</h1>
        </div>
        <h3 className="text-[#113870] font-[600]">
          Class: <span className="text-[#29A7E4]">8th B</span>
        </h3>
      </div>
      <div className="flex justify-between items-center px-2 my-3">
        <Link to="/attendence">
          <h2 className="cursor-pointer hover:underline">Attendence</h2>
        </Link>
        <Link to="/studentteacher">
          <h2 className="cursor-pointer hover:underline">Teachers</h2>
        </Link>
        <Link to="/homework">
          <h2 className="cursor-pointer hover:underline">Homework</h2>
        </Link>
      </div>
    </div>
  );
};

const Children = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC]">
        <div className="cursor-pointer flex items-center gap-3">
          <img
            src={back}
            alt="back"
            className="pt-1"
            style={{ transform: "scale(0.9)" }}
          />
          <h2 className="text-lg font-semibold text-[#113870]">Childrens</h2>
        </div>
      </div>

      {/* Cards */}
      <ChildrenCard />
      <ChildrenCard />
      <ChildrenCard />
    </>
  );
};

export default Children;
