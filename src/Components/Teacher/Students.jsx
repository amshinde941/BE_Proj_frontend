import React from "react";
import { DropDown } from "../InputField";
import { PrimaryButton, SecondaryButton } from "../Button";
import { TitleHeader } from "../Header";
import { StudentData } from "../../Models/StudentData";
import { Table } from "../Table";

const options = [
  { value: "Class 1", label: "Class 1" },
  { value: "Class 2", label: "Class 2" },
  { value: "Class 3", label: "Class 3" },
  { value: "Class 4", label: "Class 4" },
];

const getData = () => {
  return [...StudentData];
};

const Students = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Roll No.",
        accessor: "rollNo",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Address",
        accessor: "address",
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
    <div className="flex gap-2 flex-col">
      <TitleHeader>Select Class</TitleHeader>
      <DropDown options={options} label={"Class"} />
      <Table columns={columns} data={data} />
      <PrimaryButton className="w-1/3 self-center">Add Student</PrimaryButton>
    </div>
  );
};

export default Students;
