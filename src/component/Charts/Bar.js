import React from 'react';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
Chart.register(CategoryScale);


const Bargraph = () => {
    const data = {
        labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Seb", "Oct", "Nov", "Dec" ],
        datasets: [
            {
                label:"overview",
                data: [ 6,4,10,7,8,2,8,11,10,7.5,7,8 ],
                backgroundColor: ["rgb(246, 186, 245)","rgb(246, 186, 245)", "rgb(246, 186, 245)",
                "rgb(246, 186, 245)","rgb(246, 186, 245)","rgb(246, 186, 245)", "rgb(246, 186, 245)",
                "rgb(79, 6, 135)","rgb(246, 186, 245)","rgb(246, 186, 245)","rgb(246, 186, 245)","rgb(246, 186, 245)"],
                borderWidth: 1,
                borderColor: "white",
            }
        ]
    }
    return (
        <Bar data={data}
            style={{ maxHeight: '300px' }}
        />
    )
}

export default Bargraph;