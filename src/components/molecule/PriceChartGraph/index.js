import { format, parseISO, subDays } from "date-fns";
import PropTypes from "prop-types";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import CustomTooltip from "./CustomTooltip";

//----Mock Data---
const data = [];
for (let x = 356; x >= 0; x = x - 3) {
  data.push({
    date: subDays(new Date(), x).toISOString().substr(0, 10),
    value: Math.random() * 100 + 200,
  });
}


/*
--------  PriceChartGraph Component -----
* @Description : 
*  PriceChartGraph component dependent on rechart library.
*/
export const PriceChartGraph = ({ width, height }) => {

  return (
    <React.Fragment>
      <ResponsiveContainer width={width} height={height}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ACFF00" stopOpacity={0.8} />
              <stop offset="30%" stopColor="#ACFF00" stopOpacity={0.6} />
              <stop offset="50%" stopColor="#ACFF00" stopOpacity={0.2} />
              <stop offset="75%" stopColor="#ACFF00" stopOpacity={0.05} />
              <stop offset="95%" stopColor="#ACFF00" stopOpacity={0.0000005} />
            </linearGradient>
          </defs>
          <Area
            dataKey="value"
            stroke="colors.secondary.500"
            fill="url(#gradientColor)"
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date.getDate() % 1 === 0) {
                return format(date, "MMM");
              }
              return "";
            }}
            style={{
              fontSize: "12px",
              borderTop: "1px solid 748282",
              paddingTop: "2px",
            }}
          />

          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
            style={{
              fontSize: "12px",
              borderTop: "1px solid #748282",
              paddingRight: "2px",
            }}
            domain={[100.0, 300.0]}
          />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

PriceChartGraph.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default PriceChartGraph;
