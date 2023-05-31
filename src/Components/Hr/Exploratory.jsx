import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from "react-chartjs-2";
import CircleChart from '../Charts/CircleChart';

const Exploratory = () => {

    const value = 75;

    const data = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                data: [60, 40], // Sample values, modify as needed
                backgroundColor: ['#36a2eb', '#ff6384'], // Colors for each segment
            },
        ],
    };

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">Age Distibution</h1>
                <hr className="my-2" />

                <div className="flex">
                    <div className="card bg-green-200 p-4 m-2" style={{ flex: '1 1 33%' }}>
                        <Doughnut data={data} />
                    </div>
                    <div className="card bg-yellow-200 p-4 m-2" style={{ flex: '2 1 66%' }}>
                        <h3 className="text-2xl font-bold">Indent Open By Job Level</h3>
                        <hr className="my-2" />
                        <div className="chart-container" style={{ height: "300px", width: "100%" }}>
                            <Bar
                                data={{
                                    labels: ["10-30", "31-40", "41-50", "51-60"],
                                    datasets: [
                                        {
                                            label: "Age Distibution",
                                            backgroundColor: ["#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd"],
                                            data: [400, 700, 500, 200],
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
                                            min: 0,
                                            max: 1000,
                                            ticks: {
                                                stepSize: 200,
                                                callback: function (value) {
                                                    return value;
                                                },
                                            },
                                            title: {
                                                display: true,
                                                text: "Employee Count",
                                            }
                                        },
                                        x: {
                                            title: {
                                                display: true,
                                                text: "Age Range in Years",
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>






                <div className="flex">
                    <div className="card bg-green-200 p-4 m-2" style={{ flexBasis: '50%' }}>
                        <h3 className="text-2xl font-bold">Indent Open By Job Level</h3>
                        <hr className="my-2" />
                        <div className="chart-container" style={{ height: "300px", width: "100%" }}>
                            <Bar
                                data={{
                                    labels: ["Range 1", "Range 2", "Range 3", "Range 4"],
                                    datasets: [
                                        {
                                            label: "Age Distibution",
                                            backgroundColor: ["#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd"],
                                            data: [0, 0, 800, 200],
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
                                            min: 0,
                                            max: 1000,
                                            ticks: {
                                                stepSize: 200,
                                                callback: function (value) {
                                                    return value;
                                                },
                                            },
                                            title: {
                                                display: true,
                                                text: "Employee Count",
                                            }
                                        },
                                        x: {
                                            title: {
                                                display: true,
                                                text: "Range Scale 1-4",
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="card bg-yellow-200 p-4 m-2" style={{ flexBasis: '50%' }}>
                        <h3 className="text-2xl font-bold">Over-all Job Satisfaction</h3>
                        <hr className="my-2" />
                        <div className="chart-container" style={{ height: "300px", width: "100%" }}>
                            <Bar
                                data={{
                                    labels: ["Highly Satisfied", "Moderately Satisfied", "Moderately Unsatisfied", "Highly Unsatisfied"],
                                    datasets: [
                                        {
                                            label: "Technical",
                                            backgroundColor: "#3e95cd",
                                            data: [100, 200, 300, 400],
                                        },
                                        {
                                            label: "Non Technical",
                                            backgroundColor: "#ff6384",
                                            data: [400, 300, 200, 100],
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
                                            min: 0,
                                            max: 500,
                                            ticks: {
                                                stepSize: 100,
                                                callback: function (value) {
                                                    return value;
                                                },
                                            },
                                            title: {
                                                display: true,
                                                text: "Employee Count",
                                            },
                                        },
                                        x: {
                                            title: {
                                                display: true,
                                                text: "",
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>



                <div className="flex flex-col bg-white shadow-md mt-4 m-4 p-4">
                    <h3 className="text-2xl font-bold">Survey Summary</h3>
                    <hr className="my-2" />

                    <div className="grid grid-cols-3 gap-4">
                        <div className="card">
                            <h3>Q.1 - I enjoy great work life balance</h3>
                            <div className="chart-container">
                            <CircleChart value={value} />
                            </div>
                        </div>
                        <div className="card">
                            <h3>Q.2 - My manager is very helpful in my prsonal growth</h3>
                            <div className="chart-container">
                            <CircleChart value={value} />
                            </div>
                        </div>
                        <div className="card">
                            <h3>Q.3 - Appriasals are fair and reasonable with good feedback</h3>
                            <div className="chart-container">
                            <CircleChart value={value} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="card" style={{ justifySelf: "center" }}>
                            <h3>Q.4 - Organizations gives me good engagement activities</h3>
                            <div className="chart-container">
                            <CircleChart value={value} />
                            </div>
                        </div>
                        <div className="card">
                            <h3>Q.5 - I am being proud of associated with this brand</h3>
                            <div className="chart-container">
                            <CircleChart value={value} />
                            </div>
                        </div>
                    </div>
                </div>









            </div>
        </>
    );
};

export default Exploratory;