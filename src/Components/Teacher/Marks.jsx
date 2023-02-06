import React from "react";
import { DropDown } from "../InputField";
import { PrimaryButton, SecondaryButton } from "../Button";
import { TitleHeader } from "../Header";
import { MarksData} from "../../Models/MarksData";
import { Table } from "../Table";

const options = [
  { value: "Class 1", label: "Class 1" },
  { value: "Class 2", label: "Class 2" },
  { value: "Class 3", label: "Class 3" },
  { value: "Class 4", label: "Class 4" },
];

const getData = () => {
  return [...MarksData];
};

const Marks = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Student Name",
        accessor: "name",
      },
      {
        Header: "Unit Test 1",
        accessor: "ut1",
      },
      {
        Header: "Unit Test 2",
        accessor: "ut2",
      },
      {
        Header: "Mid Semester",
        accessor: "midsem",
      },
      {
        Header: "End Semester",
        accessor: "endsem",
      },
      {
        Header: "Action",
        Cell: <SecondaryButton>Edit</SecondaryButton>,
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
      
    </div>
  );
};

export default Marks;