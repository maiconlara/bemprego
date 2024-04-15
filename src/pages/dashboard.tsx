import StateContainer from "@/components/state-container";
import { useIdbCandidates } from "@/utils/hooks/useIdbCandidates";
import { useState, useEffect } from "react";

interface StateCount {
  state: string;
  count: number;
}
const Dashboard = () => {
  const { data = [] } = useIdbCandidates();
  const [countByState, setCountByState] = useState<StateCount[]>([]);
  useEffect(() => {
    if (data.length === 0 || data === undefined) return;
    const count = data.reduce<Record<string, number>>((acc, candidate) => {
      if (acc[candidate.state]) {
        acc[candidate.state] += 1;
      } else {
        acc[candidate.state] = 1;
      }
      return acc;
    }, {});

    const countArray: StateCount[] = Object.entries(count).map(
      ([state, count]) => ({
        state,
        count,
      })
    );

    setCountByState(countArray);
  }, [data]);

  console.log(countByState);
  return (
    <div className="flex h-full w-[90vw] xl:w-[78vw] flex-col items-center justify-start gap-10  pt-10 pb-3  text-green-950 ">
      <div className="flex w-full flex-row ">
        <p className="font-poppins text-4xl font-medium">Dashboard</p>
      </div>
      <div className="grid grid-cols-3 w-full h-full gap-6">
        <StateContainer data={countByState} />
        <StateContainer data={countByState} />

      </div>
    </div>
  );
};
export default Dashboard;
