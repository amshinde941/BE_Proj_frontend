import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const CircleChart = ({ value }) => {
  const data = [
    { value, color: '#E38627' },
    { value: 100 - value, color: '#eee' },
  ];

  return (
    <PieChart
      data={data}
      lineWidth={20}
      animate={true}
      animationDuration={500}
      animationEasing="ease-out"
      label={({ dataEntry }) => `${Math.round(dataEntry.value)}%`}
      labelStyle={{
        fontSize: '8px',
        fontFamily: 'sans-serif',
        fill: '#fff'
      }}
    />
  );
};

export default CircleChart;
