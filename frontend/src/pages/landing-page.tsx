import Hero from "@/components/hero";
import { useTabTitle } from "../utils/hooks/useTabTitle";
import RotativeBanner from "@/components/rotative-banner";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-28">
    <Hero />
    <RotativeBanner />
    </div>
  );
};
export default Home;