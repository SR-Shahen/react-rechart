import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleLineChart = () => {
    const data = [
        {
            name: 'Exporter A',
            Price: 4000,
            Quantity: 2400,
            amt: 2400,
        },
        {
            name: 'Exporter B',
            Price: 3000,
            Quantity: 1398,
            amt: 2210,
        },
        {
            name: 'Exporter C',
            Price: 2000,
            Quantity: 9800,
            amt: 2290,
        },
        {
            name: 'Exporter D',
            Price: 2780,
            Quantity: 3908,
            amt: 2000,
        },
        {
            name: 'Exporter E',
            Price: 1890,
            Quantity: 4800,
            amt: 2181,
        },
        {
            name: 'Exporter F',
            Price: 2390,
            Quantity: 3800,
            amt: 2500,
        },
        {
            name: 'Exporter G',
            Price: 3490,
            Quantity: 4300,
            amt: 2100,
        },
    ];
    return (

        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'Price'}></Line>
            <Line dataKey={'Quantity'}></Line>
            <Tooltip></Tooltip>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>

        </LineChart>


    );
};

export default SimpleLineChart;