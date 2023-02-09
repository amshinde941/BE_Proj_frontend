import React, { useState } from "react";
import { HrLayout } from "../Components/Layout";
import { AddEmployee, Appraisals, Onboarding, Recruitment, Retention } from "../Components/Hr"

const HrDashboard = () => {
  const [current, setCurrent] = useState("classes");
  console.log(current);

  const renderComp = () => {
    switch (current) {
      case "dashboard":
        return <div className="text-4xl text-bold text-black">Dashboard Open</div>;
        break;

      case "add-employee":
        return <AddEmployee />;
        break;

      case "recruitment":
        return <Recruitment />;
        break;

      case "onboarding":
        return <Onboarding />;
        break;

      case "appraisals":
        return <Appraisals />

      case "retention":
        return <Retention />

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
      <HrLayout setCurrent={setCurrent}>{renderComp()}</HrLayout>
    </>
  );
};

export default HrDashboard;
