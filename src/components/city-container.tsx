import CityGraph from "./city-graph";

interface CityData {
  city: string;
  count: number;
}

interface StateContainerProps {
  data: CityData[];
}



const CityContainer = ({ data }: StateContainerProps) => {

    const formattedData = data
    .slice(0, 5)
    .map((item) => {
        const name = item.city
        const value = item.count;
        return { name, value };
    })
    .sort((a, b) => b.value - a.value);


  return (
    <div className="flex flex-col col-span-1 row-span-2 lg:row-span-2 w-full h-full items-center justify-center  rounded-3xl border border-divider">
      <p className="w-full text-center uppercase font-bold tracking-tighter">Cidade dos candidatos</p>
      <CityGraph data={formattedData} />
    </div>
  );
};
export default CityContainer;
