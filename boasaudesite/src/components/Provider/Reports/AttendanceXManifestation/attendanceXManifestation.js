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
    const [chartData, setChartData] = useState(null);

    if (chartData === null) {
        getReportData(token).then(p => {
            setChartData({
                labels: p.months,
                datasets: [
                    {
                        label: 'Atendimentos',
                        data: p.attendances,
                        backgroundColor: 'rgb(54, 162, 235)',
                    },
                    {
                        label: 'Manifestações',
                        data: p.manifestations,
                        backgroundColor: 'rgb(255, 99, 132)',
                    }
                ],
            });
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container" >
                <div className='text-center p-5'>
                    <h2 >Relatório de Atendimentos x Manifestações</h2>
                </div>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}
