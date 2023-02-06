import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../Images/ArrowIcon.svg";

const SubjectCard = ({ std, subjectName, link }) => {
  return (
    <div className=" bg-lightGreen w-[200px] p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
      <h3 className="text-sm font-medium ">{std}</h3>
      <h2 className="text-xl font-medium">{subjectName}</h2>
      <hr className=" border-black " />
      <Link to={link} className="flex items-center">
        Check Out
        <ArrowIcon className="" />
      </Link>
    </div>
  );
};

export default SubjectCard;
