import React, { useState } from "react";
import { HomeworkCard } from "../Card";
import { InputField } from "../InputField";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { homeworkData } from "../../Models/homeworkData";

const SubjectInfo = () => {
  const [message, setMessage] = useState("");

  const typeMessage = () => {
    console.log(message);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {homeworkData.map((val) => {
          return (
            <HomeworkCard time={val.time} text={val.text} author={val.author} />
          );
        })}
      </div>

      <div className="grid grid-cols-12 fixed bottom-0 w-full mb-1">
        <div className="col-span-8">
          <InputField
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="col-span-4 flex mt-2 items-center">
          <ChevronRightIcon
            className="h-9 w-9 text-gray-400"
            aria-hidden="true"
            onClick={typeMessage}
          />
        </div>
      </div>
    </>
  );
};

export default SubjectInfo;
