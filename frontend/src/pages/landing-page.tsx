import Hero from "@/components/hero";
import { useTabTitle } from "../utils/hooks/useTabTitle";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
    <Hero />
    </div>
  );
};
export default Home;