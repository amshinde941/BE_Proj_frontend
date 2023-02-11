import React, { useState } from "react";
import { Checkbox } from "../CheckBox";
import { RetentionData } from "../../Models/RetentionData";
import { Button } from "../Button/Button";

const Retention = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: "Important / Non-Replacable Employees", checked: false },
    { id: 2, text: "High Risk Employees", checked: false },
    { id: 3, text: "Medium Risk Employees", checked: false },
    { id: 4, text: "Low Risk Employees", checked: false },
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

  return (
    <>
      <div className="m-10">
        {/* Filters  */}
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

        {/* Retention Information */}
        <h1 className="text-2xl font-bold my-4">Retention Information</h1>
        <hr className="my-2" />

        <div className="mt-5 bg-slate-50 p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
          {RetentionData.map((retention) => {
            return (
              <>
                
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <h2 className="text-sky-800 mb-3 text-xl">{retention.name}</h2>
                    <h6>Job Role: {retention.jobRole}</h6>
                    <h3>Experience: {retention.experience}</h3>
                    <h3>Location: {retention.location}</h3>
                    <h3>Current Salary: {retention.cur_sal}</h3>
                    <h3>Market Salary: {retention.market_sal}</h3>
                    <h3>Current Leaves: {retention.cur_leaves}</h3>
                    <h3>Manager Rating: {retention.rating}</h3>
                  </div>
                  <div class="col-span-1">
                    <p className="text-sky-800 mb-3 text-xl"> Reasons To Leave Job </p>
                    <h2>1.00 &lt;= Job Level &lt;= {retention.reasons.jobLevel}</h2>
                    <h2>1.00 &lt;= Job Satisfaction &lt;= {retention.reasons.jobSat}</h2>
                    <h2>1.00 &lt;= Role Satisfaction &lt;= {retention.reasons.curRole}</h2>
                    <h2>1.00 &lt;= Salary Satisfaction &lt;= {retention.reasons.salary}</h2>
                    <h2>1.00 &lt;= Location Satisfaction &lt;= {retention.reasons.location}</h2>
                    <h2>1.00 &lt;= Timings Satisfaction &lt;= {retention.reasons.timings}</h2>
                  </div>
                  <div class="col-span-1">
                    <p className="text-sky-800 mb-3 text-xl"> Retention Rate Of Particular Action </p>
                    <div className="grid grid-cols-2">
                    <span className="col-span-1 text-lg text-red-400">{retention.risk}</span>
                      <span className="col-span-1">
                        <Button>Take Action</Button>
                      </span>
                    </div>
                    <h2>Job Satisfaction: {retention.actions.jobLevel}</h2>
                    <h2>Increase in Role: {retention.actions.curRole}</h2>
                    <h2>Increase in Salary: {retention.actions.salary}</h2>
                    <h2>Change in Location: {retention.actions.location}</h2>
                    <h2>Change in Timings: {retention.actions.timings}</h2>
                  </div>
                </div>
                <hr className="my-2" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Retention;
