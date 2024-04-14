import PlanCard from "./plan-card";
import { plans } from "@/lib/plans";

const Plans = () => {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center gap-6">
      <p className="text-4xl text-ribbon-800 font-bold">Planos e Preços</p>
      <p className="text-lg">Escolha o plano de sua preferencia</p>
      <div className="grid grid-cols-4 w-[90vw] xl:w-[78vw] h-full gap-6 mt-4">
        {plans.map((plan) => {
          return <PlanCard key={plan.title} title={plan.title} description={plan.description} features={plan.features} price={plan.price}/>;
        })}
      </div>
    </div>
  );
};
export default Plans;
