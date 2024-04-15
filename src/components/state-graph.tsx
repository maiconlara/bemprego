import { BarChart, Bar, YAxis, ResponsiveContainer , Tooltip } from "recharts";

interface Data {
  name: string;
  value: number;
}

interface Payload {
  payload: Data;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Payload[];
}

/**
 * Custom tooltip for the chart.
 * @param active - If the tooltip is active.
 * @param payload - Payload of the tooltip.
 */
const CustomTooltip = ({
  active = false,
  payload = [],
}: CustomTooltipProps) => {
  const { payload: payloadData } = payload[0] || {};

  if (active) {
    return (
      <div className="flex flex-col items-start p-4 rounded-xl bg-white text-sm font-bold">
        <p>{payloadData?.name}</p>
        <div className="flex flex-row items-center gap-1">
          <p className="font-medium">Total:</p>
          <p>{payloadData?.value}</p>
        </div>
      </div>
    );
  }

  return null;
};

const StateGraph = ({ data }: { data: Data[] }) => {


  return (
    <ResponsiveContainer width="100%" height="100%"> 
    <BarChart data={data} maxBarSize={40}>
      <YAxis style={{ fontSize: "12px", fontWeight: 500 }} />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="value" fill="#1e408a" maxBarSize={32} />
    </BarChart>
    </ResponsiveContainer>
  );
};
export default StateGraph;
