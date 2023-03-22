import React from "react";
import { InputField } from "../../Components/InputField";
import { PrimaryButton, SecondaryButton } from "../Button";
import { CollegesData } from "../../Models/CollegesData";

const Recruitment = () => {
  return (
    <>
      <div className="m-10">
        {/* Recruitment */}
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Recruitment</h1>
          <hr className="my-3" />

          <div className="flex gap-4 flex-row">
            <div className="basis-2/3">
              <InputField label="College Name" placeholder="College Name" />
            </div>
            <div className="basis-1/3">
              <InputField label="Role" placeholder="Role" />
            </div>
          </div>

          <div className="flex gap-4 flex-row">
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
            <div className="basis-1/3">
              <InputField
                type="date"
                label="Hiring Date"
                placeholder="Enter Date"
              />
            </div>
          </div>

          <div className="mt-5 bg-lightGreen p-4 rounded-md shadow hover:shadow-md cursor-pointer">
            <h1>Add Selected Students</h1>
            <hr className="my-3 border-solid border-black" />
            <div className="flex gap-4 flex-row mt-3">
              <div className="basis-1/5">
                <InputField label="Full Name" placeholder="Full Name" />
              </div>
              <div className="basis-1/5">
                <InputField label="Email" placeholder="Email" />
              </div>
              <div className="basis-1/5">
                <InputField label="Result Link" placeholder="Result Link" />
              </div>
              <div className="basis-1/5">
                <InputField label="Phone Number" placeholder="Phone Number" />
              </div>
              <div className="basis-1/6 text-center">+ button</div>
            </div>
          </div>

          <div className="mt-5 bg-lightGreen p-4 rounded-md shadow hover:shadow-md cursor-pointer">
            <h1>Add On Hold Students</h1>
            <hr className="my-3 border-solid border-black" />
            <div className="flex gap-4 flex-row mt-3">
              <div className="basis-1/5">
                <InputField label="Full Name" placeholder="Full Name" />
              </div>
              <div className="basis-1/5">
                <InputField label="Email" placeholder="Email" />
              </div>
              <div className="basis-1/5">
                <InputField label="Result Link" placeholder="Result Link" />
              </div>
              <div className="basis-1/5">
                <InputField label="Phone Number" placeholder="Phone Number" />
              </div>
              <div className="basis-1/6 text-center">+ button</div>
              {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
            </div>
          </div>

          <div className="text-center">
            <PrimaryButton className="mt-3"> Add </PrimaryButton>
          </div>
        </div>



        <div class="flex justify-center space-x-2">
  <button
    type="button"
    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
    Button
  </button>
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
                      padding: "40px",
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

                      <SecondaryButton> View Selected Students</SecondaryButton>
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
