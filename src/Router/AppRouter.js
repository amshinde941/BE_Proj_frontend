import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, SignUp } from "../Components/Authentication";
import {
  Home,
  HrDashboard,
  EmployeeDashboard,
  AdminDashboard,
  NotFound,
} from "../Pages";
import EmployeeDetails from "../Components/Hr/EmployeeDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/hr/dashboard" element={<HrDashboard />} />
        <Route path="/hr/add-employee" element={<HrDashboard />} />
        {/* <Route path="/hr/recruitment" element={<HrDashboard />} />
        <Route path="/hr/onboarding" element={<HrDashboard />} />
        <Route path="/hr/appraisals" element={<HrDashboard />} /> */}
        <Route path="/hr/retention" element={<HrDashboard />} />
        <Route path="/hr/retention/employee/:name" element={<EmployeeDetails />} />
        <Route path="/hr/login" element={<Login />} />
        <Route path="/hr/register" element={<SignUp />} />

        {/* <Route path="/teacher/classes" element={<EmployeeDashboard />} /> */}
        {/* <Route path="/teacher/students" element={<EmployeeDashboard />} /> */}
        {/* <Route path="/teacher/subject-teacher" element={<EmployeeDashboard />} /> */}
        {/* <Route path="/teacher/study-material" element={<EmployeeDashboard />} /> */}
        <Route path="/teacher/events" element={<AdminDashboard />} />
        {/* <Route path="/teacher/marks" element={<EmployeeDashboard />} /> */}
        <Route path="/teacher/attendance" element={<AdminDashboard />} />
        <Route path="/teacher/notices" element={<AdminDashboard />} />

        <Route path="/student/class-dashboard" element={<EmployeeDashboard />} />
        <Route path="/student/queries" element={<EmployeeDashboard />} />
        <Route path="/student/notices" element={<EmployeeDashboard />} />
        <Route path="/student/events" element={<EmployeeDashboard />} />
        {/* <Route path="/student/diary" element={<AdminDashboard />} /> */}
        {/* <Route path="/student/report" element={<AdminDashboard />} /> */}
        {/* <Route path="/student/achievements" element={<AdminDashboard />} /> */}
        {/* <Route path="/student/diary/subject-info" element={<AdminDashboard />} />*/ }

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
