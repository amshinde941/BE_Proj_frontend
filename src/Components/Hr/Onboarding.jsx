import React from "react";
import { Table } from "../Table";
import { StudentsData } from "../../Models/StudentsData";
import { SecondaryButton } from "../Button";

const getData = () => {
  return [...StudentsData];
};

const Onboarding = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: "Students",
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
        Header: "Joiningdate",
        accessor: "joiningDate",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
     
    
      {
        Header: "Action",
        Cell: <SecondaryButton>View</SecondaryButton>,
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="m-10">
        <h1 className="text-2xl font-bold">Student Table</h1>
        <hr className="my-2" />

        <div className="flex gap-2 flex-col">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Onboarding;
