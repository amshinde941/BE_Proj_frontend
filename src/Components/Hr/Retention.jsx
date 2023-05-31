import React, { useState } from "react";
import { RetentionData } from "../../Models/RetentionData";
import { SecondaryButton } from "../Button";
import { Table } from "../Table";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const getData = () => {
  return [...RetentionData];
};



const Retention = () => {

  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const handleViewClick = async (row) => {
    try {
      console.log(row);
      setSelectedRow(row);

      // console.log(row.name);

      const requestData = {
        Age: row.Age,
        DistanceFromHome: row.DistanceFromHome,
        EnvironmentSatisfaction: row.EnvironmentSatisfaction,
        Gender: row.Gender,
        HourlyRate: row.HourlyRate,
        JobInvolvement: row.JobInvolvement,
        JobLevel: row.JobLevel,
        JobSatisfaction: row.JobSatisfaction,
        MonthlyIncome: row.MonthlyIncome,
        NumCompaniesWorked: row.NumCompaniesWorked,
        OverTime: row.OverTime,
        PercentSalaryHike: row.PercentSalaryHike,
        PerformanceRating: row.PerformanceRating,
        RelationshipSatisfaction: row.RelationshipSatisfaction,
        StockOptionLevel: row.StockOptionLevel,
        TotalWorkingYears: row.TotalWorkingYears,
        TrainingTimesLastYear: row.TrainingTimesLastYear,
        WorkLifeBalance: row.WorkLifeBalance,
        YearsAtCompany: row.YearsAtCompany,
        YearsInCurrentRole: row.YearsInCurrentRole,
        YearsSinceLastPromotion: row.YearsSinceLastPromotion,
        YearsWithCurrManager: row.YearsWithCurrManager,
        AVG_POS: row.AVG_POS,
        AVG_NEG: row.AVG_NEG,
        BusinessTravel_Non_Travel: row.BusinessTravel_Non_Travel,
        BusinessTravel_Travel_Frequently: row.BusinessTravel_Travel_Frequently,
        BusinessTravel_Travel_Rarely: row.BusinessTravel_Travel_Rarely,
        MaritalStatus_Divorced: row.MaritalStatus_Divorced,
        MaritalStatus_Married: row.MaritalStatus_Married,
        MaritalStatus_Single: row.MaritalStatus_Single,
        JobRole_AESP: row.JobRole_AESP,
        JobRole_Corporate: row.JobRole_Corporate,
        JobRole_Director: row.JobRole_Director,
        JobRole_ESP: row.JobRole_ESP,
        JobRole_Manager: row.JobRole_Manager,
        JobRole_Sales: row.JobRole_Sales,
      };

      console.log(requestData);

      // Send the POST request
      const response = await fetch("http://127.0.0.1:8000/getresult", {
        method: "post",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        navigate(`/hr/retention/employee/${row.name}`, { state: { employee: data } });
        // console.log(employee);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const columns = React.useMemo(
    () => [
      {
        Header: "Full Name",
        accessor: "name",
      },
      {
        Header: "Role",
        accessor: "jobRole",
      },
      {
        Header: "Office",
        accessor: "location",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <Link to={`/hr/retention/employee/${row.original.name}`}>
            <SecondaryButton onClick={() => handleViewClick(row.original)}>View</SecondaryButton>
          </Link>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="m-10">
        {/* Filters  */}
        <h1 className="text-2xl font-bold">Employee List</h1>
        <hr className="my-2" />
        <div className="flex gap-2 flex-col">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Retention;