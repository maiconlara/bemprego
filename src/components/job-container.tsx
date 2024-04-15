import StateGraph from "./state-graph";

interface JobData {
  job: string;
  count: number;
}

interface JobContainerProps {
  data: JobData[];
}

const JobContainer = ({ data }: JobContainerProps) => {
  const formattedData = data
    .slice(0, 5)
    .map((item) => {
      const name = item.job;
      const value = item.count;
      return { name, value };
    })
    .sort((a, b) => b.value - a.value);

  return (
    <div className="flex flex-col col-span-2 row-span-1 relative w-full h-[300px] items-center justify-between pb-6 rounded-3xl border border-divider">
      <p className="w-full text-center uppercase font-bold tracking-tighter">
        Vagas escolhidas
      </p>
      <StateGraph data={formattedData} />
    </div>
  );
};
export default JobContainer;
