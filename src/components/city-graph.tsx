import { useCallback, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { ActiveShape } from "recharts/types/util/types";

interface Data {
  name: string;
  value: number;
}

export interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  percent: number;
  value: number;
  name: string;
}

const ChartActiveShape = ({
  cx,
  cy,
  endAngle,
  fill,
  innerRadius,
  midAngle,
  name,
  outerRadius,
  percent,
  startAngle,
  value,
}: RenderActiveShapeProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  const textStyle = { fontSize: "13px", fontWeight: 600 };
  const bordersColors = "#172a54";
  const titleColor = "#222222";
  const descriptionColor = "#444444";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={titleColor}
        style={textStyle}
      >
        {name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={bordersColors}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={bordersColors}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={bordersColors} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={titleColor}
        style={textStyle}
      >
        {`Total: ${value}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={descriptionColor}
        style={textStyle}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const CityGraph = ({ data }: { data: Data[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_: RenderActiveShapeProps, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={ChartActiveShape as ActiveShape<PieSectorDataItem>}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={"#1e408a"} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default CityGraph;
