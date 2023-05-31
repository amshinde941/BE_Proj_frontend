import { useParams } from "react-router-dom";
import { RetentionData } from "../../Models/RetentionData";
import { PrimaryButton, SecondaryButton } from "../Button";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";



const EmployeeDetails = () => {

    // useEffect(() => {
    //     const slider = document.getElementById('salary-slider');
    //     const output = document.getElementById('salary-output');

    //     slider.addEventListener('input', function () {
    //         output.textContent = `${this.value}%`;
    //     });
    // }, []);

    const location = useLocation();
    const { state } = location;

    const employeeData = state && state.employee;

    const { name } = useParams();

    // Find the employee data based on the name parameter
    const employee = RetentionData.find((employee) => employee.name === name);

    if (!employee) {
        return <div>Employee not found</div>;
    }

    // Retrieve the employee details based on the employeeId

    return (
        <>
            <div>

                <div className="m-10" style={{ display: "flex", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                        {/* Display other details of the employee */}
                        <div style={{ background: "lightblue", padding: "10px" }}>
                            <h3 className="text-xl font-bold">Basic Details</h3>
                            <hr className="my-2" />

                            <div className="grid grid-cols-2 gap-4">
                                <p className="text-left font-bold">Experience:</p>
                                <p className="text-right">{employee.YearsAtCompany} years</p>
                                <hr />
                                <hr />


                                <p className="text-left font-bold">Job Role:</p>
                                <p className="text-right">{employee.jobRole}</p>
                                <hr />
                                <hr />

                                <p className="text-left font-bold">Location:</p>
                                <p className="text-right">{employee.location}</p>
                                <hr />
                                <hr />

                                <p className="text-left font-bold">Current Salary:</p>
                                <p className="text-right">{employee.MonthlyIncome}</p>
                                <hr />
                                <hr />

                                {/* <p className="text-left font-bold">Market Salary:</p>
                                <p className="text-right">{employee.market_sal}</p>
                                <hr />
                                <hr /> */}

                                <p className="text-left font-bold">Department:</p>
                                <p className="text-right">{employee.department}</p>
                                <hr />
                                <hr />

                                <p className="text-left font-bold">Risk:</p>
                                <p className="text-right">{employee.risk}</p>
                                <hr />
                                <hr />

                                <div className="col-span-1 flex items-center">
                                    <p className="font-bold">Reasons of Attritions:</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-right">= JobLevel &lt;= {employee.JobLevel}</p>
                                    <p className="text-right">= Job Satisfaction &lt;= {employee.JobSatisfaction}</p>
                                    <p className="text-right">= Salary &lt;= {employee.MonthlyIncome}</p>
                                    <p className="text-right">= Location &lt;= {employee.location}</p>
                                </div>
                                <hr />
                                <hr />
                            </div>




                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ background: "lightgreen", padding: "10px" }}>
                            <h3 className="text-xl font-bold">Potential Corrective Actions</h3>
                            <hr className="my-2" />

                            {/* <div class="flex items-center font-bold mb-2">
                                Salary Hike (%) :
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    class="w-full appearance-none bg-gray-300 h-2 rounded-lg"
                                    id="salary-slider"
                                />
                                <output class="text-gray-600" id="salary-output">0%</output>
                            </div>
                            <hr />

                            <div class="flex items-center justify-center mt-2 mb-2">
                                <label for="myCheckbox" class="text-gray-800">Offer Promotion</label>
                                <input type="checkbox" id="myCheckbox" class="ml-4 mt-1" />
                            </div>
                            <hr />

                            <div class="flex items-center justify-center mt-2 mb-2">
                                <label for="myCheckbox1" class="text-gray-800">Change Manager</label>
                                <input type="checkbox" id="myCheckbox1" class="ml-4 mt-1" />
                            </div>
                            <hr />

                            <div class="flex items-center justify-center mt-2 mb-2">
                                <label for="myCheckbox2" class="text-gray-800">Offer Work with Balance</label>
                                <input type="checkbox" id="myCheckbox2" class="ml-4 mt-1" />
                            </div>
                            <hr />

                            <div class="flex items-center justify-center mt-2 mb-2">
                                <label for="myCheckbox3" class="text-gray-800">Offer New Role</label>
                                <input type="checkbox" id="myCheckbox3" class="ml-4 mt-1" />
                            </div>
                            <hr />



                            <div class="flex justify-center mt-2">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Prevent Attrition</button>
                                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Reset</button>
                            </div> */}

                            {employeeData && (
                                <>
                                    <div className="mb-2">
                                        {/* Attrition value = {employeeData.attrition} */}
                                        {employeeData.attrition === 0 ? (
                                            <p>Not prone to attrition</p>
                                        ) : (
                                            <p>Prone to attrition</p>
                                        )}
                                    </div>
                                    <hr />

                                    <div className="mt-2 mb-2">
                                        <p>Factors affecting attrition:</p>
                                        <ul>
                                            {employeeData.factors.map((factor) => (
                                                <li key={factor}>* {factor}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <hr />

                                    <div className="mt-2 mb-2">
                                        <div>
                                            <p>Probabilities:</p>
                                            <p>Staying Percentage: {employeeData.probabilities.staying_percentage * 100}%</p>
                                            <p>Leaving Percentage: {employeeData.probabilities.leaving_percentage * 100}%</p>
                                        </div>
                                    </div>

                                </>


                            )}

                        </div>
                    </div>



                </div>

                <div className="flex justify-center mt-4">
                    <Link to={`/hr/retention`}>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        // onClick={handleBack}
                        >
                            Back
                        </button>
                    </Link>

                </div>

            </div>

        </>

    );
};

export default EmployeeDetails;