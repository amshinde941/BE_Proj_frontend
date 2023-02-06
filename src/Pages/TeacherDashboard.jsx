import React from "react";
import { TeacherLayout } from "../Components/Layout";
import { Classes, Marks, Students, StudyMaterial, SubjectTeacher } from "../Components/Teacher";

const TeacherDashboard = () => {
  let Component;

  switch (window.location.pathname) {
    case "/teacher/classes":
      Component = <Classes />;
      break;
    case "/teacher/students":
      Component = <Students />;
      break;
    case "/teacher/subject-teacher":
      Component = <SubjectTeacher />;
      break;
    case "/teacher/study-material":
      Component =<StudyMaterial/>;
      break;

    case "/teacher/events":
      Component = (
        <div className="text-4xl text-bold text-black">Events/Meets</div>
      );
      break;

    case "/teacher/marks":
      Component = <Marks/>;
      break;

    case "/teacher/attendance":
      Component = (
        <div className="text-4xl text-bold text-black">Attendance</div>
      );
      break;

    case "/teacher/notices":
      Component = <div className="text-4xl text-bold text-black">Notices</div>;
      break;

    default:
      break;
  }

  return (
    <>
      <TeacherLayout>{Component}</TeacherLayout>
    </>
  );
};

export default TeacherDashboard;
