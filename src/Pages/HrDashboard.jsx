import React, { useEffect, useState } from "react";
import { HrLayout } from "../Components/Layout";
import { AddEmployee, Appraisals, Onboarding, Recruitment, Retention, Dashboard } from "../Components/Hr"
import { Login, SignUp } from "../Components/Authentication";

import { useNavigate } from "react-router-dom";

const HrDashboard = () => {

  const navigate = useNavigate();

  const [current, setCurrent] = useState("classes");
  console.log(current);

  const addToLocalStorage = (data) => {
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const getStateFromLocalStorage = () => {
    let data = localStorage.getItem("employees");
    if (data) {
      // console.log(data);
      return data;
    } else {
      localStorage.setItem("employees", JSON.stringify([]));
      return [];
    }
  };

  const fetchEmployees = async (row) => {
    try {
      const response = await fetch("http://localhost:4000/employee/getallemployees", {
        method: "get",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log('-> ', data);
        // navigate(`/hr/retention/`, { state: { employee: data } });
        addToLocalStorage(data);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
    getStateFromLocalStorage();
  });

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
