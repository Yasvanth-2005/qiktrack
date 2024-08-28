import { useState } from "react";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SideBar open={open} setOpen={setOpen} />
      <div className="mt-4 px-4">
        <button
          className="px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setOpen(true)}
        >
          Open Sidebar
        </button>
        <br />
        <Link to="/trips">
          <button className="mt-3 px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">
            Go to Trips Page
          </button>
        </Link>
        <br />
        <Link to="/pickup">
          <button className="mt-3 px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">
            Go to Pickup Page
          </button>
        </Link>
        <br />
        <br />
        <h5 className="text-sm">Teachers</h5>
        <Link to="/teachers">
          <button className="mt-3 px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">
            Teacher Home Page
          </button>
        </Link>
        <br />
        <Link to="/bus">
          <button className="mt-3 px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">
            School Bus
          </button>
        </Link>
        <br />
        <Link to="/children">
          <button className="mt-3 px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">
            Childrens Page
          </button>
        </Link>
        <br />
        <Link to="/homework">
          <button className="mt-3 px-2 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">
            Homework
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
