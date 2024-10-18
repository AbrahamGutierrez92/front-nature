import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Activity',
      data: [100,200,452,60,65,400,1000],
      borderColor: 'rgb(8, 77, 61)',
      backgroundColor: 'rgba(20, 181, 143, 0.5)',
    },
  ],
};
const Lineas = () => {
 
  return (
    <>
    <div className="">
    <Line width="400px" options={options} data={data} />
    </div>
    </>
  )
};

export default Lineas;
