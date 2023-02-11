import React, { useState } from "react";
import { Checkbox } from "../CheckBox";
import { SecondaryButton, TransparentButton, PrimaryButton } from "../Button";
import { Button } from "../Button/Button";
import { StudentsData } from "../../Models/StudentsData";
import { Table } from "../Table";

const getData = () => {
  return [...StudentsData];
};

const Appraisals = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: "Highest Rated Employees", checked: false },
    { id: 2, text: "Lowest Rated Employees", checked: false },
    { id: 3, text: "Highest Appraisals Ratings", checked: false },
    { id: 4, text: "Highest Feedback Given", checked: false },
  ]);

  const handleChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) => {
        if (checkbox.id === id) {
          checkbox.checked = !checkbox.checked;
        }
        return checkbox;
      })
    );
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
        Header: "Joiningdate",
        accessor: "joiningDate",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Action",
        Cell: <Button>View</Button>, 
      },
      {
        Header: "Feedback",
        Cell: <TransparentButton>Give</TransparentButton>,
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="m-10">

        {/* Filters */}
        <h1 className="text-2xl font-bold">Filters</h1>
        <hr className="my-2" />
        <h2>Sort By</h2>
        <div className="flex flex-wrap justify-between">
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="w-1/4 p-2">
              <label className="block text-gray-700 font-medium">
                <input type="checkbox" className="mr-2" />
                {checkbox.text}
              </label>
            </div>
          ))}
        </div>

        {/* Employee Table */}
        <h1 className="text-2xl font-bold my-4">Employee Table</h1>
        <hr className="my-2" />
        <div className="flex gap-2 flex-col">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Appraisals;
