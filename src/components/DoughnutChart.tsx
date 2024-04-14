"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughNutChart = () => {
  const chartRef = useRef(null);
  const chartData = {
    labels: ['Project 1', 'Project 2', 'Project 3' ],
    datasets: [
      {
        label: '# of Sales',
        data: [75, 25,25],
         borderColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: chartData,
        options: {
          // Your options here
          maintainAspectRatio: false
          
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default DoughNutChart;
