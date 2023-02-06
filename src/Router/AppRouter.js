import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  SchoolDashboard,
  TeacherDashboard,
  StudentDashboard,
  NotFound,
} from "../Pages";

import {
  Classes,
  Students,
  SubjectTeacher,
  Marks,
} from "../Components/Teacher";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school/classes" element={<SchoolDashboard />} />
        <Route path="/school/queries" element={<SchoolDashboard />} />
        <Route path="/school/notices" element={<SchoolDashboard />} />
        <Route path="/school/events" element={<SchoolDashboard />} />
        <Route path="/school/teachers" element={<SchoolDashboard />} />
        <Route path="/teacher/classes" element={<TeacherDashboard />} />
        <Route path="/teacher/students" element={<TeacherDashboard />} />
        <Route path="/teacher/subject-teacher" element={<TeacherDashboard />} />

        <Route path="/teacher/study-material" element={<TeacherDashboard />} />
       
        <Route path="/teacher/events" element={<TeacherDashboard />} />
        <Route path="/teacher/marks" element={<TeacherDashboard />} />
        <Route path="/teacher/attendance" element={<TeacherDashboard />} />
        <Route path="/teacher/notices" element={<TeacherDashboard />} />
        <Route path="/student/class-dashboard" element={<StudentDashboard />} />
        <Route path="/student/queries" element={<StudentDashboard />} />
        <Route path="/student/notices" element={<StudentDashboard />} />
        <Route path="/student/events" element={<StudentDashboard />} />
        <Route path="/student/diary" element={<StudentDashboard />} />
        <Route path="/student/report" element={<StudentDashboard />} />
        <Route path="/student/achievements" element={<StudentDashboard />} />
        <Route
          path="/student/diary/subject-info"
          element={<StudentDashboard />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
