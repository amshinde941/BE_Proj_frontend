import React, { useState } from "react";
import { HrLayout } from "../Components/Layout";
import { AddEmployee, Appraisals, Onboarding, Recruitment, Retention, Dashboard } from "../Components/Hr"

const HrDashboard = () => {
  const [current, setCurrent] = useState("classes");
  console.log(current);

  const renderComp = () => {
    switch (current) {
      case "dashboard":
        return <Dashboard />;
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
          <div className="text-bold text-black">
            <Dashboard />
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
