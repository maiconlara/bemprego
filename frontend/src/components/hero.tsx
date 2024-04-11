import deal from "@/assets/deal.svg";
import { StarFilledIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-screen px-28">
      <div className="flex flex-row w-full items-center justify-center pt-24">
        <div className="flex flex-col w-full h-full items-start justify-start gap-6 mt-10">
          <div className="flex flex-row items-center justify-between px-6 w-[360px] h-10 bg-ribbon-100 rounded-full border border-ribbon-600">
            <StarFilledIcon className="w-5 h-5 text-yellow-500" />
            <p className="text-ribbon-600 font-bold">
              Campeã em plano de carreira
            </p>
            <StarFilledIcon className="w-5 h-5 text-yellow-500" />
          </div>
          <h1 className="text-ribbon-950 text-5xl font-bold leading-tight">
            Apresentamos <span className="text-ribbon-600">oportunidades</span>{" "}
            de ouro para iniciar sua{" "}
            <span className="text-ribbon-600">jornada</span> profissional.
          </h1>
          <p className="max-w-[660px] text-slate-400">
            Descubra oportunidades para a area que esta procurando, seja recem
            formado ou graduado. Apresentamos inúmeras vagas de
            empresas que parceiras que buscam formar ótimos profissionais.
          </p>
          
        </div>
        <div className="flex w-full items-center justify-center">
          <img src={deal} alt="logo" className="w-auto h-96" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
