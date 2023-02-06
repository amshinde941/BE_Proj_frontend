import React from "react";
import { SubjectCard } from "../Card";
import { Link } from "react-router-dom";

const Diary = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-wrap justify-between gap-4 w-full">
        <Link to="/student/diary/subject-info">
          <SubjectCard std="10th" subjectName="Science" link="/" />
        </Link>
        <Link to="/student/diary/subject-info">
          <SubjectCard std="10th" subjectName="Math" link="/" />
        </Link>
        <Link to="/student/diary/subject-info">
          <SubjectCard std="10th" subjectName="History" link="/" />
        </Link>
        <Link to="/student/diary/subject-info">
          <SubjectCard std="10th" subjectName="English" link="/" />
        </Link>
      </div>
    </div>
  );
};

export default Diary;
