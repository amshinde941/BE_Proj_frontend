import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HistogramChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const renderChart = () => {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart if it exists
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Generate random background colors for each bar
      const backgroundColors = data.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16));

      // Create the chart
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data,
          datasets: [
            {
                label: "Indent by skills",
              data: data.map((value, index) => index + 1), // Use index as the count for each value
              backgroundColor: backgroundColors,
            },
          ],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
              max: 50,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    renderChart();

    // Clean up the chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default HistogramChart;
