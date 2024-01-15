import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Dataset = {
  categoryPercentage?: number;
  label?: string;
  data: Array<number>;
  backgroundColor?: string;
};
type Data = {
  labels: Array<string>;
  datasets: Array<Dataset>;
};
const Section2 = () => {
  const data: Data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        categoryPercentage: 0.5,
        label: "369",
        data: [10, 25, 50, 75, 33, 20, 80, 65, 71, 23, 11, 90],
        backgroundColor: "#8ea6ff",
      },
    ],
  };
  return (
    <div className="w-full p-10 border rounded-xl border-[#1e2441] bg-[#13182a] my-10">
      <p className="text-4xl">Session Actvity</p>
      <Bar data={data} />
    </div>
  );
};

export default Section2;
