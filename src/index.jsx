import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <div className="w-full min-h-[100vh] flex justify-center bg-white">
  //   <div className="w-full max-w-[414px] bg-[#F8F8F8] border border-1 border-[#74777580]">
  //     <App />
  //   </div>
  // </div>
  <BrowserRouter>
    <div className="w-full min-h-[100vh] flex justify-center bg-white">
      <div className="custom-scrollbar w-full max-w-[414px] h-[100vh] overflow-y-scroll  bg-[#F8F8F8] border border-1 border-[#74777580] relative">
        <App />
      </div>
    </div>
  </BrowserRouter>
);
