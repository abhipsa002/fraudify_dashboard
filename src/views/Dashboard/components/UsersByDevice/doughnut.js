import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
    labels: [
        'Mobile',
        'Desktop',
        'Tablet'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#F1F514',
            '#4B53A3',
            '#FB4949'
        ],
        hoverBackgroundColor: [
            '#F1F514',
            '#4B53A3',
            '#FB4949'
        ]
    }]
};

class DoughnutExample extends React.Component {

    render() {
        return (
            <div>
                <Doughnut data={data}/>
            </div>
        )
    }
}


export default DoughnutExample;
