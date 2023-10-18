import React from 'react'
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
Chart.register(CategoryScale);

const Donutchart = () => {
    const data = {
        datasets: [
            {
                label:"overview monthly earning",
                data: [3,8,5],
                backgroundColor: ["rgb(251,22,112)","rgb(84,84,162)","rgb(241,238,238)"],
            }
        ]
    }
  return (
    < Doughnut data={data}
    style={{ maxHeight: '300px' }}
/>
  )
}

export default Donutchart