import React from "react";
import { InputField } from "../../Components/InputField";
import { PrimaryButton, SecondaryButton } from "../Button";
import { CollegesData } from "../../Models/CollegesData";

const Recruitment = () => {
  return (
    <>
      <div className="m-10">

        {/* Recritment */}
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Recruitment</h1>
          <hr className="my-2" />

          <InputField label="College Name" placeholder="College Name" />
          <InputField label="Role" placeholder="Role" />
          <InputField label="Salary" placeholder="Salary" />
          <InputField
            type="date"
            label="Joining Date"
            placeholder="Enter Date"
          />
          <InputField
            type="date"
            label="Hiring Date"
            placeholder="Enter Date"
          />

              <div className="mt-5 bg-lightGreen p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
                <h1 className="text-center my-auto border-b-2 border-solid border-black mb-3">Add Selected Students</h1>
                <InputField label="Full Name" placeholder="Full Name" />
                <InputField label="Email" placeholder="Email" />
                <InputField label="Result Link" placeholder="Result Link" />
                <InputField label="Phone Number" placeholder="Phone Number" />
              </div>

              <div className="mt-5 bg-lightGreen p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
                <h1 className="text-center my-auto border-b-2 border-solid border-black w-full mb-3">Add On Hold Students</h1>
                <InputField label="Full Name" placeholder="Full Name" />
                <InputField label="Email" placeholder="Email" />
                <InputField label="Result Link" placeholder="Result Link" />
                <InputField label="Phone Number" placeholder="Phone Number" />
              </div>
           
          <PrimaryButton style={{ marginTop: "1rem" }}> Add </PrimaryButton>
        </div>


        {/* Added Colleges */}
        <h1 className="text-2xl font-bold ">Added Colleges</h1>
        <hr className="my-2" />
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          {CollegesData.map((college) => {
            return (
              <>
                <div>
                  <div
                    className="container"
                    style={{
                      marginBottom: "1px",
                      display: "flex",
                      flexDirection: "row",
                      padding: "20px",
                    }}
                  >
                    <div className="bg-lightGreen  p-8 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
                      <h3 className="text-sm font-medium ">{college.title}</h3>
                      <h3 className="text-sm font-medium">{college.role}</h3>
                      <h3 className="text-sm font-medium">{college.salary}</h3>
                      <h3 className="text-sm font-medium">
                        {college.joiningDate}
                      </h3>
                      <h3 className="text-sm font-medium">
                        {college.hiringDate}
                      </h3>

                      <SecondaryButton>
                      
                        View Selected Students
                      </SecondaryButton>
                      <SecondaryButton> View On Hold Students </SecondaryButton>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recruitment;
