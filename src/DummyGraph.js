import ApexCharts from 'react-apexcharts';
import React from 'react';

const DummyGraph = () => {
  const seriesData = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const options = {
    chart: {
      id: 'dummy-graph',
      toolbar: {
        autoSelected: 'brush',
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    annotations: {
      yaxis: [
        {
          y: 20,
          borderColor: '#999',
          label: {
            text: 'This is a test',
            style: {
              color: '#fff',
              background: '#00E396',
            },
          },
        },
        {
          y: 60,
          borderColor: '#999',
          label: {
            text: 'This is a test 2',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
          },
        },
        {
          y: 100,
          borderColor: '#999',
          label: {
            text: 'This is a test 3',
            style: {
              color: '#fff',
              background: '#FFF003',
            },
          },
        },
      ],
    },
  };

  return (
    <div style={{ padding: '5rem 0', maxWidth: '100rem' }}>
      <ApexCharts options={options} series={seriesData} type="line" height={350} />
    </div>
  );
};

export default DummyGraph;
