import React from "react";
import { InputField } from "../../Components/InputField";
import { PrimaryButton } from "../Button";
import { Table } from "../Table";
import { EmployeeData } from "../../Models/EmployeeData";

const getData = () => {
  return [...EmployeeData];
};

const AddEmployee = () => {
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
            <InputField label="Name" placeholder="Employee Name" />
          </div>
          <div className="basis-1/3">
            <InputField label="Email" placeholder="Employee Email" />
          </div>
          <div className="basis-1/3">
            <InputField label="Employee Id" placeholder="Employee Id" />
          </div>
        </div>

        <div className="flex gap-4 flex-row mt-4">
          <div className="basis-1/3">
            <InputField label="Role" placeholder="Role" />
          </div>
          <div className="basis-1/3">
            <InputField label="Salary" placeholder="Salary" />
          </div>
          <div className="basis-1/3">
            <InputField
              type="date"
              label="Joining Date"
              placeholder="Enter Date"
            />
          </div>
        </div>

        <div className="text-center">
          <PrimaryButton className="mt-3"> Add </PrimaryButton>
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
