import React from "react";
import { StudentLayout } from "../Components/Layout";
import { Dashboard } from "../Components/Class";
// import {
//   Diary,
//   ReportCard,
//   Achievements,
//   SubjectInfo,
// } from "../Components/Student";

function EmployeeDashboard() {
  let Component;

  switch (window.location.pathname) {
    case "/student/class-dashboard":
      Component = <Dashboard />;

      break;
    case "/student/queries":
      Component = (
        <div className="text-4xl text-bold text-black">Student Queries</div>
      );
      break;
    case "/student/notices":
      Component = (
        <div className="text-4xl text-bold text-black">Notice Board</div>
      );
      break;
    case "/student/events":
      Component = (
        <div className="text-4xl text-bold text-black">Event/Meets</div>
      );
      break;

   /* case "/student/diary":
      Component = <Diary />;
      break;

    case "/student/report":
      Component = <ReportCard />;
      break;

    case "/student/achievements":
      Component = <Achievements />;
      break;

    case "/student/diary/subject-info":
      Component = <SubjectInfo />;
      break;*/

    default:
      break;
  }

  return (
    <>
      <StudentLayout>{Component}</StudentLayout>
    </>
  );
}

export default EmployeeDashboard;
