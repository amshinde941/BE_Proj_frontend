import React from "react";
import { DropDown } from "../InputField";
import { PrimaryButton, SecondaryButton } from "../Button";
import { TitleHeader } from "../Header";
import { Teacherdata } from "../../Models/TeacherData";
import { Table } from "../Table";




const options = [
  { value: "Class 1", label: "Class 1" },
  { value: "Class 2", label: "Class 2" },
  { value: "Class 3", label: "Class 3" },
  { value: "Class 4", label: "Class 4" },
];

const getData = () => {
  return [...Teacherdata];
};

const SubjectTeacher = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Role",
        accessor: "role",
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
      <PrimaryButton className="w-1/3 self-center">Add Teacher</PrimaryButton>
    </div>
  );
};

export default SubjectTeacher;
