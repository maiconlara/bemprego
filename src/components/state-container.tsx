import StateGraph from "./state-graph";

interface StateData {
  state: string;
  count: number;
}

interface StateContainerProps {
  data: StateData[];
}



const StateContainer = ({ data }: StateContainerProps) => {

    const formattedData = data
    .slice(0, 5)
    .map((item) => {
        const name = item.state
        const value = item.count;
        return { name, value };
    })
    .sort((a, b) => b.value - a.value);


  return (
    <div className="flex flex-col col-span-1 relative w-full h-[500px] items-center justify-between pb-6 rounded-3xl border border-divider">
      <p className="w-full text-center">Estado dos candidatos</p>
      <StateGraph data={formattedData} />
    </div>
  );
};
export default StateContainer;
