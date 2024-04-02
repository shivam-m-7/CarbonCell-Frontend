import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "./Dashboard.css"
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import moment from 'moment';
import 'chartjs-adapter-date-fns';

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Population',
        data: [],
        fill: false,
        borderColor: 'rgb(171,229,103)',
        tension: 0.4
      }
    ]
  });
  const [chartOptions, setChartOptions] = useState(null);

  const renderChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  
    const data = {
      labels: populationData.map(item => item.Year),
      datasets: [
        {
          label: 'Population',
          data: populationData.map(item => item.Population),
          fill: false,
          borderColor: 'rgba(42,180,42,255)',
          tension: 0.4
        }
      ]
    };  
    setChartData(data);  
    const options = {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'year',
            displayFormats: {
              year: 'yyyy'
            },
            tooltipFormat: 'yyyy'
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10, 
            color:"rgba(255,255,255,0.6)"
          },
          grid: {
            color: 'rgba(211, 211, 211,0.2)'
          }
        },
        y: {
          min: 300000000,
          max: 335000000,
          beginAtZero: true,
          ticks: {
            color:"rgba(255,255,255,0.6)"
          },
          grid: {
            color: 'rgba(211, 211, 211,0.2)' // Set the color of the x-axis grid lines to white
          }
          
        }
      }
    };  
    setChartOptions(options);
const newChartInstance = new Chart(chartRef.current, {
  type: 'category', // Change the type to 'radar' for a radar chart
  data: chartData,
  options: options
});
    setChartInstance(newChartInstance);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setPopulationData(response.data.data);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (populationData) {
      renderChart();
    }
  }, [populationData]);

  if (!populationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='graphdata-container'>
      <h2>Population Graph</h2>
      <div className='graph-container'>
        <h5>Market Overview</h5>
        <hr className='horizontal-line'/>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PopulationGraph;