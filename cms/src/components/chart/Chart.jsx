import React from 'react'
import './Chart.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function Chart({ title, data, dataKeys, grid }) {
  return (
    <div className='maindiv'>
      <div className='title'>
        <h3 className='chartTitle text-center pt-3 pb-3 text-secondary'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4} >
          <LineChart data={data}>
            <XAxis dataKey='name' stroke='#0g0g0g' />
            <Line dataKey={dataKeys} stroke='#bbb' type='monotone' />
            <Tooltip />
            {grid && <CartesianGrid stroke='#efefef' strokeDasharray='10' />}

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

  )
}
