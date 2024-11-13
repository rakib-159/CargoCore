import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { date: "Jun 23", time: 400, km: 600 },
  { date: "Jul 23", time: 450, km: 650 },
  { date: "Aug 23", time: 420, km: 610 },
  { date: "Sep 23", time: 460, km: 670 },
  { date: "Oct 23", time: 430, km: 620 },
  { date: "Nov 23", time: 350, km: 550 },
  { date: "Dec 23", time: 380, km: 580 },
  { date: "Jan 24", time: 420, km: 620 },
  { date: "Feb 24", time: 400, km: 600 },
  { date: "Mar 24", time: 410, km: 610 },
  { date: "Apr 24", time: 430, km: 630 },
  { date: "May 24", time: 420, km: 620 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#ffffff", padding: "10px", borderRadius: "5px" }}>
        <p><strong>{payload[0].value}</strong> Hours</p>
        <p><strong>{payload[1].value}</strong> Km</p>
      </div>
    );
  }
  return null;
};

const MyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorKm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area
          type="monotone"
          dataKey="time"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTime)"
          strokeDasharray="3 3"
        />
        <Area
          type="monotone"
          dataKey="km"
          stroke="#ff6b6b"
          fillOpacity={1}
          fill="url(#colorKm)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyChart;
