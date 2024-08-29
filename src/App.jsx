import { Routes, Route } from "react-router-dom";
import {
  Home,
  Trips,
  Pickup,
  TeacherHome,
  SchoolBus,
  Children,
  Homework,
  Teachers,
  Attendance,
  BusTracking,
} from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/teachers" element={<TeacherHome />} />
        <Route path="/bus" element={<SchoolBus />} />
        <Route path="/bus-tracking" element={<BusTracking />} />
        <Route path="/children" element={<Children />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/studentteacher" element={<Teachers />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
    </>
  );
}

export default App;
