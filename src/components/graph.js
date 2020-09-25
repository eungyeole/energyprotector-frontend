import React from 'react'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
    {
      name: "1월",
      uv: 4000,
    },
    {
      name: "2월",
      uv: 3000,
    },
    {
      name: "3월",
      uv: 2000,
    },
    {
        name: "4월",
        uv: 2000,
    },
    {
        name: "5월",
        uv: 2000,
    },
    {
        name: "6월",
        uv: 2000,
    },
    {
        name: "7월",
        uv: 2000,
    },
    {
        name: "8월",
        uv: 1000,
    },
    {
        name: "9월",
        uv: 2000,
    },
    {
        name: "10월",
        uv: 2000,
    },
    {
        name: "11월",
        uv: 2000,
    },
    {
        name: "12월",
        uv: 100,
    },
  ];
function Graph() {
    return(
            <BarChart
            width={800}
            height={350}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#28274c" />
            </BarChart>

    )
}
export default Graph;