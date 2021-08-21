import React from 'react';
import Navbar from '../navbar';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# Manifestações',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: '# Atendimentos',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgb(54, 162, 235)',
        },
        {
            label: '# of Green Votes',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgb(75, 192, 192)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

export default function AttendanceXManifestation() {
    return (
        <div>
            <Navbar />
            <div className="container" >
                <div className='header'>
                    <h1 className='title'>Relatório de Atendimentos x Manifestações</h1>
                </div>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}
