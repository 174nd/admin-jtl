import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart(data: ChartData<"pie", number[], string>){

  return (
    <Pie className='p-4' data={data} />
  )
}
