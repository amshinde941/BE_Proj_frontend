import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  return (
    <div className=" w-1/2 md:w-5/12 bg-white px-4 py-2 rounded-lg shadow">
      <Pie
        data={{
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [2478, 5267, 734, 784, 433],
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
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        }}
      />
    </div>
  );
};

export default PieChart;
