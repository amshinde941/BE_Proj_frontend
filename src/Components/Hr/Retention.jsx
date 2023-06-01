import React, { useState } from "react";
import { RetentionData } from "../../Models/RetentionData";
import { SecondaryButton } from "../Button";
import { Table } from "../Table";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const getData = () => {
  return [...RetentionData];
};



const Retention = () => {



  const getStateFromLocalStorage = () => {
    let data = localStorage.getItem("employees");
    if (data) {
      data = JSON.parse(data);
      console.log("Nice : " + data);
      return data;
    } else {
      localStorage.setItem("employees", JSON.stringify([]));
      return [];
    }
  };

  const [get, SetGet] = useState(getStateFromLocalStorage());

  const location = useLocation();
  const { state } = location;

  const employeeData = state && state.employee;
  // console.log(employeeData.name);

  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const handleViewClick = async (row) => {
    // try {
      console.log(row);
      setSelectedRow(row);

      // console.log(row.name);

      const requestData = {
        Age: row.age,
        DistanceFromHome: row.distanceFromHome,
        EnvironmentSatisfaction: row.environmentSatisfaction,
        Gender: 0,
        HourlyRate: row.hourlyRate,
        JobInvolvement: row.jobInvolvement,
        JobLevel: row.jobLevel,
        JobSatisfaction: row.jobSatisfaction,
        MonthlyIncome: row.monthlyIncome,
        NumCompaniesWorked: row.numCompaniesWorked,
        OverTime: row.overTime,
        PercentSalaryHike: row.percentSalaryHike,
        PerformanceRating: row.performanceRating,
        RelationshipSatisfaction: row.relationshipSatisfaction,
        StockOptionLevel: row.stockOptionLevel,
        TotalWorkingYears: row.totalWorkingYears,
        TrainingTimesLastYear: row.trainingTimesLastYear,
        WorkLifeBalance: row.workLifeBalance,
        YearsAtCompany: row.yearsAtCompany,
        YearsInCurrentRole: row.yearsInCurrentRole,
        YearsSinceLastPromotion: row.yearsSinceLastPromotion,
        YearsWithCurrManager: row.yearsWithCurrManager,
        AVG_POS: 0,
        AVG_NEG: 0,
        BusinessTravel_Non_Travel: 0,
        BusinessTravel_Travel_Frequently: 0,
        BusinessTravel_Travel_Rarely: 0,
        MaritalStatus_Divorced: 0,
        MaritalStatus_Married: 0,
        MaritalStatus_Single: 0,
        JobRole_AESP: 0,
        JobRole_Corporate: 0,
        JobRole_Director: 0,
        JobRole_ESP: 0,
        JobRole_Manager: 0,
        JobRole_Sales: 0,
        JobRole : row.jobRole

        
      };

      if(row.businessTravel == "travel_rarely"){
        requestData.BusinessTravel_Travel_Rarely = 1;
      }
      else if(row.businessTravel == "travel_frequently"){
        requestData.BusinessTravel_Travel_Frequently = 1;
      }
      else{
        requestData.BusinessTravel_Non_Travel = 1;
      }

      if(row.maritalStatus == "married"){
        requestData.MaritalStatus_Married = 1;
      }
      else if(row.maritalStatus == "divorced"){
        requestData.MaritalStatus_Divorced = 1;
      }
      else{
        requestData.MaritalStatus_Single = 1;
      }

      if(row.gender == "male"){
        requestData.Gender = 1;
      }
      else{
        requestData.Gender = 0;
      }
      // requestData = JSON.parse(requestData);
      
      // console.log("THis is " + row);
      console.log("Stringify : ",  JSON.stringify(requestData));

      fetch("http://127.0.0.1:8000/getresult", {
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
        body: JSON.stringify(requestData)
      }).then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    ).then(res => {
        console.log("result ", res.data);
        
        navigate(`/hr/retention/employee/${row.name}`, { state: { employee: res.data } });
    }).catch(err => {
      console.log("err -> ", err);
    }));

      // Send the POST request
      // const response = await fetch("http://127.0.0.1:8000/getresult", {
      //   method: "post",
      //   mode: "cors", // no-cors, *cors, same-origin
      //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: "same-origin", // include, *same-origin, omit
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: "follow", // manual, *follow, error
      //   referrerPolicy: "no-referrer",
      //   body: JSON.stringify(requestData)
      // });

    //   if (response.ok) {
    //     response.json().then((data) => {
    //       console.log("New DData : " + data);
    //       navigate(`/hr/retention/employee/${row.name}`, { state: { employee: data } });
    //     });
        
    //   } else {
    //     const errorData = await response.json();
    //     console.error("Error:", errorData);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
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

  const data = React.useMemo(() => getStateFromLocalStorage(), []);

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