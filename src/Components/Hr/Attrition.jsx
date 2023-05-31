import React from 'react';
import { BarChart } from '../Charts';
import { Bar } from "react-chartjs-2";
import { RetentionData } from "../../Models/RetentionData";
import { SecondaryButton } from "../Button";
import { Table } from "../Table";
import { Link } from "react-router-dom";

const getData = () => {
    return [...RetentionData];
};

const Attrition = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: "Full Name",
                accessor: "name",
            },
            {
                Header: "Role",
                accessor: "jobRole",
            },
            {
                Header: "Office",
                accessor: "location",
            },
            {
                Header: "Department",
                accessor: "department",
            },
            {
                Header: "Action",
                Cell: ({ row }) => (
                    <Link to={`/hr/retention/employee/${row.original.name}`}>
                        <SecondaryButton>View</SecondaryButton>
                    </Link>
                ),
            },
        ],
        []
    );

    const columns1 = React.useMemo(
        () => [
            {
                Header: "Full Name",
                accessor: "name",
            },
            {
                Header: "Role",
                accessor: "jobRole",
            },
            {
                Header: "Department",
                accessor: "department",
            },
            {
                Header: "Experience",
                accessor: "experience",
            },
        ],
        []
    );

    const data = React.useMemo(() => getData(), []);


    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">Attrition Dashboard</h1>
                <hr className="my-2" />

                <div className="flex justify-center">
                    <div className="w-1/2 m-4 p-4 bg-white shadow-md flex flex-col justify-center items-center">
                        <h2 className="text-center">Number of high risk employees</h2>
                        <h2 className="text-center">138</h2>
                    </div>
                    <div className="w-1/2 m-4 p-4 bg-white shadow-md flex flex-col justify-center items-center">
                        <h2 className="text-center">Cost of Attrition</h2>
                        <h2 className="text-center">$ 230030</h2>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-1/2 m-4 p-4 bg-white shadow-md">
                        <h3 className="text-2xl font-bold">Top 5 Factors Causing Attrition</h3>
                        <hr className="my-2" />

                        <div className="grid grid-cols-2 gap-4">
                            <p className="text-left font-bold">Job Satisfaction:</p>
                            <p className="text-right">90</p>
                            <hr />
                            <hr />

                            <p className="text-left font-bold">Monthly Income:</p>
                            <p className="text-right">75</p>
                            <hr />
                            <hr />

                            <p className="text-left font-bold">Job Level:</p>
                            <p className="text-right">60</p>
                            <hr />
                            <hr />

                            <p className="text-left font-bold">Year of Complaince:</p>
                            <p className="text-right">42</p>
                            <hr />
                            <hr />

                            <p className="text-left font-bold">Role Improvement:</p>
                            <p className="text-right">30</p>
                            <hr />
                            <hr />
                        </div>
                    </div>


                    <div className="w-1/2 m-4 p-4 bg-white shadow-md">
                        <h3 className="text-2xl font-bold">Average Tenure of an Employee by Departments</h3>
                        <hr className="my-2" />
                        <div className="chart-container" style={{ height: "300px", width: "100%" }}>
                            <Bar
                                data={{
                                    labels: ["Africa", "Asia", "Europe"],
                                    datasets: [
                                        {
                                            label: "Retention of years",
                                            backgroundColor: ["#3e95cd", "#3e95cd", "#3e95cd"],
                                            data: [4478, 5267, 3452],
                                        },
                                    ],
                                }}
                                options={{
                                    plugins: {
                                        legend: {
                                            labels: {
                                                font: {
                                                    size: 15,
                                                    family: "'Plus Jakarta Sans', 'sans-serif'",
                                                },
                                            },
                                        },
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: {
                                                stepSize: 4,
                                                callback: function (value) {
                                                    return value + " years";
                                                },
                                            },
                                        },
                                        x: {
                                            title: {
                                                display: true,
                                                text: "Continents",
                                            },
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: "Retention (years)",
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>



                <h1 className="text-2xl font-bold mt-3">High Risk Leavers</h1>
                <hr className="my-2" />
                <div className="flex gap-2 flex-col">
                    <Table columns={columns} data={data} />
                </div>

                <h1 className="text-2xl font-bold mt-3">Low Replacicibility Employee</h1>
                <hr className="my-2" />
                <div className="flex gap-2 flex-col">
                    <Table columns={columns1} data={data} />
                </div>

            </div>
        </>
    );
};

export default Attrition;
