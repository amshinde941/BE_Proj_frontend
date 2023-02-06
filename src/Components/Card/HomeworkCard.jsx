import React from "react";

const HomeworkCard = ({ time, text, author }) => {
  return (
    <div
      className={`p-3 rounded-md shadow hover:shadow-md cursor-pointer bg-white w-2/5 ${
        author === "Student" ? "bg-gray-200 self-end" : "bg-blue-200"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-base">{text}</h3>
        <h3 className="text-base">{time}</h3>
      </div>
      <h3 className="text-base font-bold">{author}</h3>
    </div>
  );
};

export default HomeworkCard;
