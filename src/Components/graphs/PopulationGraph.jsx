import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import "./PopulationGraph.css"; // Import CSS file

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setPopulationData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="graph_styling">
      <h1 style={{color:'white'}}>Population Data for Different Nations</h1>
      <LineChart
        width={600} // Initial width
        height={300} // Initial height
        data={populationData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        style={{ border: "none", backgroundColor: "rgba(147, 118, 118, 0.19)", borderRadius: "10px", padding: "15px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Population" name="Population" stroke="green" />
      </LineChart>
    </div>
  );
};

export default PopulationGraph;
