import React from "react";
import { ReactComponent as ArrowIcon } from "../../Images/ArrowIcon.svg";

const EventCard = ({ title, description, date, link }) => {
  return (
    <div className=" bg-lightGreen w-[350px] p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
      <h3 className="text-xl font-medium ">{title}</h3>
      <h2 className="text-sm font-medium">{description}</h2>
      <h2 className="text-sm font-medium">{date}</h2>
      <hr className=" border-black " />
      <a href={link} className="flex items-center">
        Meet Link
        <ArrowIcon className="" />
      </a>
    </div>
  );
};

export default EventCard;
