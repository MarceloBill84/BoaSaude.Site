import React, { useState } from 'react';
import Navbar from '../navbar';
import { Bar } from 'react-chartjs-2';
import useToken from '../../../../services/useToken';
import { toast } from 'react-toastify';
import * as Constants from '../../../../constants';

toast.configure();

const notifyWarning = (message) => {
    toast.warn(message, { position: toast.POSITION.TOP_CENTER, autoClose: 4000 })
}

const notifyError = (message) => {
    toast.error(message, { position: toast.POSITION.TOP_CENTER, autoClose: 4000 })
}

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

async function getReportData(token) {
    return fetch(Constants.ApiMIC + '/attendances/manifestations', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(data => {
        if (data.ok) {
            return data.json();
        }
        else {
            return data.json().then(p => {
                notifyWarning(p.Message);
            });
        }
    })
    .catch(error => {
        notifyError('Ops! Erro: ' + error.message);
    })
}

export default function AttendanceXManifestation() {
    const { token } = useToken();
    const [chartData, setChartData] = useState({});

    getReportData(token).then(p => {
        console.log(p);
        /*setChartData({
            labels: p.months,
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
        });*/
    });
    
    /*setChartData({
        labels: teste.months,
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
    });*/


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
