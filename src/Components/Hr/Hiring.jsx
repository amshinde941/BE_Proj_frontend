import React from 'react';
import { HistogramChart } from '../Charts';
import { Bar } from "react-chartjs-2";

const Hiring = () => {

  const yAxisValues = ['ML', 'Analysis', 'Summary', 'NLP', 'PHP', 'Node', 'React', 'Angular', 'Sales', 'Service Skills'];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mt-3">Hiring Dashboard</h1>
        <hr className="my-2" />

        <div className="flex justify-center">
          <div className="w-1/2 m-4 p-4 bg-white shadow-md flex flex-col justify-center items-center">
            <h2 className="text-center">Total number of indent positions</h2>
            <h2 className="text-center">138</h2>
          </div>
          <div className="w-1/2 m-4 p-4 bg-white shadow-md flex flex-col justify-center items-center">
            <h2 className="text-center">Number of Replacement</h2>
            <h2 className="text-center">230</h2>
          </div>
          <div className="w-1/2 m-4 p-4 bg-white shadow-md flex flex-col justify-center items-center">
            <h2 className="text-center">Revenue loss due to unified positions</h2>
            <h2 className="text-center">$ 230030</h2>
          </div>
          <div className="w-1/2 m-4 p-4 bg-white shadow-md flex flex-col justify-center items-center">
            <h2 className="text-center">Number of Indent beyond SLA</h2>
            <h2 className="text-center">179</h2>
          </div>
        </div>

        <h1 className="text-2xl font-bold mt-3">Indent Open by Skills</h1>
        <hr className="my-2" />
        <HistogramChart data={yAxisValues} />


        <div className="m-4 p-4 bg-white shadow-md">
          <h3 className="text-2xl font-bold">Indent Open By Job Level</h3>
          <hr className="my-2" />
          <div className="chart-container" style={{ height: "300px", width: "100%" }}>
            <Bar
              data={{
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                  {
                    label: "Indent by Job Level",
                    backgroundColor: ["#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd", "#3e95cd"],
                    data: [40, 77, 50, 33, 15],
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
                    max: 100,
                    ticks: {
                      stepSize: 20,
                      callback: function (value) {
                        return value;
                      },
                    },
                  },
                  x: {
                    title: {
                      display: true,
                      text: "Job Level",
                    },
                  },
                  // y2: {
                  //   title: {
                  //     // display: true,
                  //     text: "Indent",
                  //   },
                  // },
                },
              }}
            />
          </div>
        </div>


      </div>
    </>
  );
};

export default Hiring;