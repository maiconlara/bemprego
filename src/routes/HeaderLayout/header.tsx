import TextButton from "./text-button";
import logo from "../../assets/logo-text.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import ListItem from "./list-item";
import { useNavigate } from "react-router-dom";
import CandidateModal from "@/components/cadidate-modal";

const headerButtons = [
  {
    text: "Home",
    link: "home",
  },
  {
    text: "Planos",
    link: "plans",
  },
];
const adminOptions = [
  {
    text: "Dashboard",
    description: "Acesse seu dashboard",
    link: "dashboard",
  },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex max-w-full max-h-[100px] min-h-[100px] shadow w-full h-full sticky top-0 left-0 justify-center items-center transition-colors">
      <div className="flex flex-row items-center justify-between w-[90vw] xl:w-[78vw]">
        <div className="flex flex-row h-full items-center justify-center gap-12">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo}
            alt="logo"
            className="w-32 h-32 mr-10 cursor-pointer"
          />
          {headerButtons.map((item, index) => {
            return <TextButton key={index} text={item.text} link={item.link} />;
          })}
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="font-nunito cursor-pointer select-none">Admin</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="list-none z-50 grid grid-cols-1 w-[200px] px-2 py-2  ">
                  {adminOptions.map((option) => (
                    <ListItem
                      key={option.link}
                      title={option.text}
                      link={option.link}
                      description={option.description}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        <CandidateModal>
          <button className="flex rounded-full font-semibold text-white py-2 px-6 max-w-[176px] bg-ribbon-600 hover:bg-ribbon-700 transition-colors ">
            Buscar Empregos
          </button>
        </CandidateModal>
      </div>
    </div>
  );
};
export default Header;
