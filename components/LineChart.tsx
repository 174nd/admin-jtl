import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function LineChart(data: ChartData<"line", (number | [number, number] | null)[]>) {

  return (
    <Line className='p-4' options={{
      responsive: true,
      plugins: {legend: {position: 'top'}}
    }} data={data} />
  )
}
