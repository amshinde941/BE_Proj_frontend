import React, { useState } from "react";
import { InputField } from "../../Components/InputField";
import { PrimaryButton } from "../Button";
import { Table } from "../Table";
import { EmployeeData } from "../../Models/EmployeeData";
import axios from "axios";

const getData = () => {
  return [...EmployeeData];
};

const AddEmployee = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [risk, setRisk] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [contact, setContact] = useState("");
  const [currentLeaves, setCurrentLeaves] = useState("");
  const [age, setAge] = useState("");
  const [distanceFromHome, setDistanceFromHome] = useState("");
  const [environmentSatisfaction, setEnvironmentSatisfaction] = useState("");
  const [gender, setGender] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [jobInvolvement, setJobInvolvement] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [jobSatisfaction, setJobSatisfaction] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [numCompaniesWorked, setNumCompaniesWorked] = useState("");
  const [overTime, setOverTime] = useState("");
  const [percentSalaryHike, setPercentSalaryHike] = useState("");
  const [performanceRating, setPerformanceRating] = useState("");
  const [relationshipSatisfaction, setRelationshipSatisfaction] = useState("");
  const [stockOptionLevel, setStockOptionLevel] = useState("");
  const [totalWorkingYears, setTotalWorkingYears] = useState("");
  const [trainingTimesLastYear, setTrainingTimesLastYear] = useState("");
  const [workLifeBalance, setWorkLifeBalance] = useState("");
  const [yearsAtCompany, setYearsAtCompany] = useState("");
  const [yearsInCurrentRole, setYearsInCurrentRole] = useState("");
  const [yearsSinceLastPromotion, setYearsSinceLastPromotion] = useState("");
  const [yearsWithCurrManager, setYearsWithCurrManager] = useState("");
  const [businessTravel, setBusinessTravel] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const handleAddEmployee = () => {
    // Create the employee data object
    const employeeData = {
      name,
      email,
      employeeId,
      jobRole,
      risk,
      location,
      department,
      contact,
      currentLeaves,
      age,
      distanceFromHome,
      environmentSatisfaction,
      gender,
      hourlyRate,
      jobInvolvement,
      jobLevel,
      jobSatisfaction,
      monthlyIncome,
      numCompaniesWorked,
      overTime,
      percentSalaryHike,
      performanceRating,
      relationshipSatisfaction,
      stockOptionLevel,
      totalWorkingYears,
      trainingTimesLastYear,
      workLifeBalance,
      yearsAtCompany,
      yearsInCurrentRole,
      yearsSinceLastPromotion,
      yearsWithCurrManager,
      businessTravel,
      maritalStatus,
      // Add other fields here
    };

    // Perform the necessary operations with the employee data
    // For example, make an API call to add the employee
    addEmployee(employeeData);
  };

  const addEmployee = async (employeeData) => {
    console.log(employeeData);
    try {
      console.log("hii");
      await axios.post("http://localhost:4000/employee/addnewemployee", employeeData);
      // Handle the success case
      console.log("Employee added successfully!");
    } catch (error) {
      // Handle the error case
      console.error("Error adding employee:", error);
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Employees",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "EMPID",
        accessor: "empid",
      },

      {
        Header: "Experience",
        accessor: "experience",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="m-10">

        {/* Add Employee Form */}
        <h1 className="text-2xl font-bold">Add Employee</h1>
        <hr className="my-3" />

        <div className="flex gap-4 flex-row">
          <div className="basis-1/3">
            <InputField label="Name" placeholder="Employee Name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Email" placeholder="Employee Email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Employee Id" placeholder="Employee Id"                value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Job Role" placeholder="Job Role"               value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Risk" placeholder="Risk"               value={risk}
              onChange={(e) => setRisk(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Location" placeholder="Location"               value={location}
              onChange={(e) => setLocation(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Department" placeholder="Department" 
            value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Contact" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Current Leaves" placeholder="Current Leaves" value={currentLeaves} onChange={(e) => setCurrentLeaves(e.target.value)} />
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Distance From Home" placeholder="Distance From Home" value={distanceFromHome} onChange={(e) => setDistanceFromHome(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Environment Satisfaction" placeholder="Environment Satisfaction" value={environmentSatisfaction} onChange={(e) => setEnvironmentSatisfaction(e.target.value)} />
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Gender" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Hourly Rate" placeholder="Hourly Rate" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Job Involvement" placeholder="Job Involvement" value={jobInvolvement} onChange={(e) => setJobInvolvement(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Job Level" placeholder="Job Level" value={jobLevel} onChange={(e) => setJobLevel(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Job Satisfaction" placeholder="Job Satisfaction" value={jobSatisfaction} onChange={(e) => setJobSatisfaction(e.target.value)}/>
          </div>
          <div className="basis-1/3"> 
            <InputField label="Monthly Income" placeholder="Monthly Income" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Number of Companies Worked" placeholder="Number of Companies Worked" value={numCompaniesWorked} onChange={(e) => setNumCompaniesWorked(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Over Time" placeholder="Over Time" value={overTime} onChange={(e) => setOverTime(e.target.value)} />
          </div>
          <div className="basis-1/3">
            <InputField label="Percent Salary Hike" placeholder="Percent Salary Hike" value={percentSalaryHike} onChange={(e) => setPercentSalaryHike(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Performance Rating" placeholder="Performance Rating" value={performanceRating} onChange={(e) => setPerformanceRating(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Relationship Satisfaction" placeholder="Relationship Satisfaction" value={relationshipSatisfaction} onChange={(e) => setRelationshipSatisfaction(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Stock Option Level" placeholder="Stock Option Level" value={stockOptionLevel} onChange={(e) => setStockOptionLevel(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Total Working Years" placeholder="Total Working Years" value={totalWorkingYears} onChange={(e) => setTotalWorkingYears(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Training Times Last Year" placeholder="Training Times Last Year" value={trainingTimesLastYear} onChange={(e) => setTrainingTimesLastYear(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Work Life Balance" placeholder="Work Life Balance" value={workLifeBalance} onChange={(e) => setWorkLifeBalance(e.target.value)} />
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Years At Company" placeholder="Years At Company" value={yearsAtCompany} onChange={(e) => setYearsAtCompany(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Years In Current Role" placeholder="Years In Current Role" value={yearsInCurrentRole} onChange={(e) => setYearsInCurrentRole(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Years Since Last Promotion" placeholder="Years Since Last Promotion" value={yearsSinceLastPromotion} onChange={(e) => setYearsSinceLastPromotion(e.target.value)}/>
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Years With Curr Manager" placeholder="Years With Curr Manager" value={yearsWithCurrManager} onChange={(e) => setYearsWithCurrManager(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Business Travel" placeholder="Business Travel" value={businessTravel} onChange={(e) => setBusinessTravel(e.target.value)}/>
          </div>
          <div className="basis-1/3">
            <InputField label="Marital Status" placeholder="Marital Status" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}/>
          </div>
        </div>

        <div className="text-center">
          <PrimaryButton className="mt-3" onClick={handleAddEmployee}> Add </PrimaryButton>
        </div>

        {/* All employee list */}
        <h1 className="text-2xl font-bold my-4">All Employees</h1>
        <hr className="my-3" />
        <div className="flex gap-2 flex-col">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
