import React from "react";
import { InputField } from "../../Components/InputField";
import { PrimaryButton, SecondaryButton } from "../Button";

const AddEmployee = () => {
  return (
    <>
      <div className="m-10">
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Add Employee</h1>
          <hr className="my-2" />

          <InputField label="Name" placeholder="Employee Name" />
          <InputField label="Email" placeholder="Employee Email" />
          <InputField label="Employee Id" placeholder="Employee Id" />
          <InputField label="Role" placeholder="Role" />
          <InputField label="Salary" placeholder="Salary" />
          <InputField
            type="date"
            label="Joining Date"
            placeholder="Enter Date"
          />

          <PrimaryButton style={{ marginTop: "1rem" }}> Add </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
