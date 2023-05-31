import React, { useState } from "react";
import { HrLayout } from "../Components/Layout";
import { AddEmployee, Appraisals, Onboarding, Recruitment, Retention, Dashboard } from "../Components/Hr"
import { Login, SignUp } from "../Components/Authentication";

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

      // case "recruitment":
      //   return <Recruitment />;
      //   break;

      // case "onboarding":
      //   return <Onboarding />;
      //   break;

      // case "appraisals":
      //   return <Appraisals />
      //   break;

      case "retention":
        return <Retention />
        break;

      case "login":
        return <Login />
        break;

      case "register":
        return <SignUp />
        break;

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
