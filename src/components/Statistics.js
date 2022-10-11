import React, {useContext} from "react";
import {
  Area,
  Tooltip,
  AreaChart,
  XAxis,
  YAxis,
} from "recharts";
import { TopicContext } from "../layout/Main";

const Statistics = () => {
    let topics = useContext(TopicContext)

  return (
    <div className="w-fit mx-auto mt-20">
        <AreaChart
      width={400}
      height={400}
      data={topics}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#B53737" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#B53737" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name"/>
      <YAxis dataKey="total" />
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <Tooltip />
      <Area
        type="monotone"
        dataKey="total"
        stroke=""
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
    <h1 className="text-xl font-medium my-5 text-amber-700">Graph: Total questions vs Topics name</h1>
    </div>
  );
};

export default Statistics;
