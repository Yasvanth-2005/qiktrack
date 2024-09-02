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
  MyClasses,
  ClassAttendance,
  ClassHomework,
  ClassResult,
  ClassNotice,
  ClassRemainder,
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
        <Route path="/myclasses" element={<MyClasses />} />
        <Route path="/class/attendance" element={<ClassAttendance />} />
        <Route path="/class/homework" element={<ClassHomework />} />
        <Route path="/class/result" element={<ClassResult />} />
        <Route path="/class/notice" element={<ClassNotice />} />
        <Route path="/class/reminder" element={<ClassRemainder />} />
      </Routes>
    </>
  );
}

export default App;
