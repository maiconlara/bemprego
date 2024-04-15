import Hero from "@/components/hero";
import { useTabTitle } from "../utils/hooks/useTabTitle";
import RotativeBanner from "@/components/rotative-banner";
import Plans from "@/components/plans";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-40 pb-24">
      <Hero />
      <div className="flex flex-col w-[90vw] xl:w-[78vw] items-center justify-center gap-4">
    <p className="-mt-10 mb-10 uppercase tracking-tighter font-bold text-ribbon-900">Empresas parceiras:</p>
      <RotativeBanner />
      </div>
      <Plans />
    </div>
  );
};
export default Home;
