import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { x: 'A1', y: 60},
    { x: 'A2', y: 60},
    { x: 'A3', y: 60},
    { x: 'A4', y: 60},
    { x: 'A5', y: 60},
    { x: 'A6', y: 60},
    { x: 'A7', y: 60},
    { x: 'A8', y: 60},
];

const Statistics = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 md:px-8 mt-10'>
            <h2 className='font-bold text-3xl text-center mb-4'>Assignment Analytics</h2>
            <h4 className='font-bold text-md text-center mb-6 text-purple-600'>Avg. Assignment Mark: 60.00</h4>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis dataKey="x" name="Assignment" />
                    <YAxis type="number" dataKey="y" name="Obtain Mark" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={data} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;