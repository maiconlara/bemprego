import Hero from "@/components/hero";
import { useTabTitle } from "../utils/hooks/useTabTitle";
import RotativeBanner from "@/components/rotative-banner";
import Plans from "@/components/plans";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-40 pb-24">
      <Hero />
      <RotativeBanner />
      <Plans />
    </div>
  );
};
export default Home;
