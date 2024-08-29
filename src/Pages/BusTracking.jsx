import { Link } from "react-router-dom";
import back from "../assets/Images/back.svg";
import driver from "../assets/Images/driver.svg";
import phone from "../assets/Images/call.svg";
import user from "../assets/Images/user.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const BusTracking = () => {
  const position = [28.6139, 77.209];

  return (
    <div className="relative w-full h-[100vh]">
      {/* Header Section */}
      <div className="flex px-2 py-3 justify-between items-center bg-[#EBF2FC] absolute top-0 right-0 left-0 z-[2]">
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
        <div className="flex items-center gap-2">
          <h2 className="text-[#113870] text-lg font-semibold">
            HR 34 56C 123
          </h2>
        </div>
      </div>

      {/* Map */}
      <div className="absolute w-full h-[100vh] top-0 left-0 right-0 z-[1]">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 w-full left-0 right-0 px-4 py-3 bg-white z-[2] flex ites-center justify-center gap-5">
        <div className="border-[0.5px] border-[#29A7E4] rounded p-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 px-4">
            <img src={driver} alt="driver" />
            <div className="flex flex-col">
              <h5 className="text-xs">Driver Name</h5>
              <h4 className="text-sm font-semibold text-[#29A7E4]">
                Rahul Singh
              </h4>
            </div>
          </div>
          <div className="w-full cursor-pointer text-white rounded flex justify-center items-center gap-2 bg-[#138808] py-1.5">
            <img src={phone} alt="phone" />
            <h3>Call</h3>
          </div>
        </div>

        <div className="border-[0.5px] border-[#29A7E4] rounded-lg p-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 px-4">
            <img src={user} alt="driver" />
            <div className="flex flex-col">
              <h5 className="text-xs">Helper Name</h5>
              <h4 className="text-sm font-semibold text-[#29A7E4]">
                Rahul Singh
              </h4>
            </div>
          </div>
          <div className="w-full cursor-pointer text-white rounded flex justify-center items-center gap-2 bg-[#138808] py-1.5">
            <img src={phone} alt="phone" />
            <h3>Call</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTracking;
