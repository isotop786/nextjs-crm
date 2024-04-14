"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);
  const chartData = {
    labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4','Product 5' ],
    datasets: [
      {
        label: '# of Sales',
        data: [11, 9, 13, 15,10,8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
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
        type: 'pie',
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

export default PieChart;
