import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line, Scatter } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically register all components

const NeoChart = ({ neoData }) => {
  const [hazardousCount, setHazardousCount] = useState(0);
  const [nonHazardousCount, setNonHazardousCount] = useState(0);

  // Prepare data for graphs
  useEffect(() => {
    if (neoData.length > 0) {
      const hazardous = neoData.filter(neo => neo.is_potentially_hazardous_asteroid).length;
      setHazardousCount(hazardous);
      setNonHazardousCount(neoData.length - hazardous);
    }
  }, [neoData]);

  // Scatter Plot Data
  const scatterData = {
    datasets: [
      {
        label: 'NEOs',
        data: neoData.map(neo => ({
          x: neo.estimated_diameter.meters.estimated_diameter_max,
          y: neo.close_approach_data[0]?.miss_distance.kilometers,
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ['Hazardous', 'Non-Hazardous'],
    datasets: [
      {
        label: 'Count of NEOs',
        data: [hazardousCount, nonHazardousCount],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ['Hazardous', 'Non-Hazardous'],
    datasets: [
      {
        data: [hazardousCount, nonHazardousCount],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: neoData.map(neo => neo.name),
    datasets: [
      {
        label: 'Max Diameter of NEOs (m)',
        data: neoData.map(neo => neo.estimated_diameter.meters.estimated_diameter_max),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Asteroid Tracker</h1>

      {/* Filters */}
      <div className="flex justify-center mb-4">
        {/* You can add filter inputs here */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Scatter Plot */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Scatter Plot of NEOs</h2>
          <Scatter data={scatterData} options={{ responsive: true }} />
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Count of Hazardous vs Non-Hazardous NEOs</h2>
          <Bar data={barData} options={{ responsive: true }} />
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Hazardous NEO Distribution</h2>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>

        {/* Line Chart */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Max Diameter of NEOs Over Time</h2>
          <Line data={lineData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default NeoChart;
