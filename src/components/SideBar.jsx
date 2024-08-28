import profile from "../assets/sidebar/profile.svg";
import edit from "../assets/sidebar/edit.svg";
import phone from "../assets/sidebar/call.svg";
import logout from "../assets/sidebar/logout.svg";

import bell from "../assets/sidebar/bell.svg";
import privacy from "../assets/sidebar/privacy.svg";
import lock from "../assets/sidebar/lock.svg";
import support from "../assets/sidebar/support.svg";
import { useEffect, useState } from "react";

// eslint-disable-next-line
const SideBar = ({ open, setOpen }) => {
  const [inside, setInside] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (inside === false && out === true) {
      setOpen(false);
      setInside(false);
      setOut(false);
    } else {
      setInside(false);
      setOut(false);
    }
  }, [inside, out, setOpen]);

  return (
    <div
      className={`${
        open ? "z-[100] opacity-1" : "opacity-0 z-[-1000]"
      } transition-[0.5s] absolute cursor-pointer top-0 left-0 w-full h-[100vh] bg-[#00000052]`}
      onClick={() => {
        setOut(true);
      }}
    >
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-[-100%]"
        } transition-[2.5s] w-[60%] cursor-default min-w-[260px] bg-white h-full px-2 relative`}
        onClick={() => setInside(true)}
      >
        {/* User Name Section */}
        <div className="flex items-center mb-5 gap-1">
          <img
            src={profile}
            alt="profile"
            // style={{ transform: "scale(0.8)" }}
          />
          <div className="flex flex-col w-full">
            <div className="flex gap-4 items-center">
              <h1 className="text-xl text-[#113870] font-semibold">
                Ravi Pal{" "}
                <span className="text-sm text-[#00000080]">(Driver)</span>
              </h1>
              <img src={edit} alt="edit" />
            </div>
            <div className="flex gap-1 mt-1">
              <img src={phone} alt="phone" />
              <h5 className="text-[#113870] font-medium text-sm">8899889955</h5>
            </div>
          </div>
        </div>

        {/* Side Navigation */}
        <div className="mt-5 pt-4 flex gap-4 flex-col">
          <div className="w-full flex items-center gap-2 cursor-pointer hover:text-[#113870]">
            <img src={bell} alt="bell" style={{ transform: "scale(0.95)" }} />
            <h2 className="text-xl font-semibold">Notification</h2>
          </div>
          <div className="w-full flex items-center gap-2 cursor-pointer hover:text-[#113870]">
            <img
              src={privacy}
              alt="bell"
              style={{ transform: "scale(0.95)" }}
            />
            <h2 className="text-xl font-semibold">Privacy</h2>
          </div>
          <div className="w-full flex items-center gap-2 cursor-pointer hover:text-[#113870]">
            <img src={lock} alt="bell" style={{ transform: "scale(0.95)" }} />
            <h2 className="text-xl font-semibold">Change Password</h2>
          </div>
          <div className="w-full flex items-center gap-2 cursor-pointer hover:text-[#113870]">
            <img
              src={support}
              alt="bell"
              style={{ transform: "scale(0.95)" }}
            />
            <h2 className="text-xl font-semibold">Support</h2>
          </div>
        </div>

        {/* logout button */}
        <div className="absolute bottom-[20px] flex gap-2 items-center cursor-pointer w-full hover:underline  text-[#B53D3E]">
          <img src={logout} alt="logout" />
          <h4 className="text-xl font-semibold">Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
