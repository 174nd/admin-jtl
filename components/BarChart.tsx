import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(data: ChartData<"bar", (number | [number, number] | null)[]>) {

  return (
    <Bar className='w-full p-4' options={{
      // responsive: true,
      plugins: {
        legend: {position: 'top'},
      },
    }} data={data} />
  )
}
