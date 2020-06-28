import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const Chart = ({ newsList }) => {
  return (
    <div className="container">
      <ResponsiveContainer width="100%">
        <LineChart
          height={500}
          data={newsList}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="id" />
          <YAxis dataKey="votes" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="votes"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
