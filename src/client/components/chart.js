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
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={newsList}
            syncId="anyId"
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
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
    </div>
  );
};
