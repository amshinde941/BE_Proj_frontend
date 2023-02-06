import React, { useState } from "react";
import EventCard from "../Card/EventCard";
import InputField from "../InputField/InputField";
import PrimaryButton from "../Button/PrimaryButton";

const Event = ({ eventsdata }) => {
  const d = new Date();

  let day = d.getDate();
  let month = d.getMonth() + 1;
  const year = d.getUTCFullYear();

  if (day <= 9) day = "0" + day;
  if (month <= 9) month = "0" + month;

  const [date, setDate] = useState(`${year}-${month}-${day}`);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Event Details</h1>
      <hr className="my-2" />
      <InputField
        label={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2"
      />
      <InputField
        label={"Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type={"textarea"}
        className="mb-2"
      />
      <InputField
        label={"Date"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type={"date"}
        className="mb-2"
      />
      <InputField
        label={"Link"}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="mb-2"
      />
      <div className="my-2">
        <PrimaryButton>Add Event</PrimaryButton>
      </div>
      <div className="flex flex-wrap">
        {eventsdata.map((val) => {
          return (
            <div key={val.title} className="m-2">
              <EventCard
                date={date}
                title={val.title}
                description={val.description}
                link={val.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
