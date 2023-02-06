import React, { useState } from "react";
import { SchoolLayout } from "../Components/Layout";
import Event from "../Components/Event/Event";
import Queries from "../Components/Queries/Queries";
import { eventsdata } from "../Models/events";
import SchoolTeachers from "../Components/SchoolTeachers/SchoolTeachers";
import NoticeBoard from "../Components/NoticeBoard/NoticeBoard";

const SchoolDashboard = () => {
  const [current, setCurrent] = useState("classes");
  console.log(current);

  const renderComp = () => {
    switch (current) {
      case "classes":
        return <div className="text-4xl text-bold text-black">Classes</div>;
        break;

      case "queries":
        return <Queries />;
        break;

      case "notices":
        return <NoticeBoard />;
        break;

      case "events":
        return <Event eventsdata={eventsdata} />;
        break;

      case "teachers":
        return <SchoolTeachers />

      default:
        return (
          <div className="text-4xl text-bold text-black">
            Please select a component
          </div>
        );
    }
  };

  return (
    <>
      <SchoolLayout setCurrent={setCurrent}>{renderComp()}</SchoolLayout>
    </>
  );
};

export default SchoolDashboard;
