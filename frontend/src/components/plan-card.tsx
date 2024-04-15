import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Feature } from "@/lib/plans";
import CandidateModal from "./cadidate-modal";

interface PlanCardProps {
  title: string;
  description: string;
  price: number;
  features: Feature[];
}

const PlanCard = ({ title, price, description, features }: PlanCardProps) => {
  const formatValue = (value: number) => value.toFixed(2).replace(".", ",");
  const planValue = formatValue(price);
  return (
    <Card className="w-full col-span-1 border-ribbon-600">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="flex flex-col gap-2">
          <span className=" text-2xl xl:text-3xl font-bold text-ribbon-950">
            R$ {planValue}
            <span className="text-lg text-black">/mês</span>
          </span>
          <span className="text-md text-gray-600 min-h-10">{description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span
                className={`flex h-2 w-2 translate-y-1 rounded-full ${
                  feature.isAvailable == true ? "bg-green-500" : "bg-red-600"
                }`}
              />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {feature.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="">
        <CandidateModal selectedPlan={title}>
          <button className="flex rounded-full font-semibold items-center justify-center text-white py-2 px-6 w-full bg-ribbon-600 hover:bg-ribbon-700 transition-colors ">
            Buscar vagas
          </button>
        </CandidateModal>
      </CardFooter>
    </Card>
  );
};
export default PlanCard;
