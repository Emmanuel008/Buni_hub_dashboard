/* eslint-disable no-unused-vars */
import React from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./components/Main";
import Member from "./components/Member";
import Visitor from "./components/Visitor";
import AttendanceLogs from "./components/AttendanceLogs";
import SheetReport from "./components/SheetReport";
import SignTime from "./components/signTime";
import { MemberContextProvider } from "./context/MemberContext";

function App() {
  return (
    <>
      <Router>
        <MemberContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Main />} />
            <Route path="/dashboard/member" element={<Member />} />
            <Route path="/dashboard/visitor" element={<Visitor />} />
            <Route path="/dashboard/attendance" element={<AttendanceLogs />} />
            <Route path="/dashboard/memberReport" element={<SheetReport/>} />
            <Route path="/dashboard/settings" element={<SignTime/>} />
          </Route>
        </Routes>
        </MemberContextProvider>
      </Router>
    </>
  );
}

export default App;
