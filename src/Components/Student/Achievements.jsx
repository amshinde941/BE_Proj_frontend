import React, { useState } from "react";
import { InputField } from "../InputField";
import { SecondaryButton } from "../Button";
import EventCard from "../Card/EventCard";

const Achievements = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const achievementsInfo = () => {
    console.log(
      "Achievements Name : " + name + ", " + "Date of Achievements : " + date
    );
  };

  return (
    <div className="m-10">
      <div className=" flex gap-2 flex-col my-8">
        <h1 className="text-2xl font-bold">Achievements</h1>
        <hr />
        <InputField
          label="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="date"
          label="Date"
          placeholder="Enter Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <SecondaryButton
          style={{ marginTop: "1rem" }}
          onClick={achievementsInfo}
        >
          Submit
        </SecondaryButton>
      </div>

      <div className=" flex gap-2 flex-col mt-16">
        <h1 className="text-2xl font-bold">Previusly Added Achievements</h1>
        <hr />
      </div>
      <div className="flex items-center my-5">
        <div className="flex flex-wrap justify-between w-full">
          <EventCard
            date="2020-04-01"
            title="Achievement 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link=""
          />
          <EventCard
            date="2020-04-01"
            title="Achievement 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link=""
          />
          <EventCard
            date="2020-04-01"
            title="Achievement 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link=""
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
