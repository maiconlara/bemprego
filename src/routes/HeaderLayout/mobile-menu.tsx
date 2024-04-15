import {
  IconHome,
  IconLayout,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";
import { NavButton, NavButtonProps } from "./navigate-button";
import RedirectButton from "./redirect-button";
import { useLocation } from "react-router-dom";

const navigationItems: NavButtonProps[] = [
  {
    label: "Home",
    icon: IconHome,
    link: "home",
  },
  {
    label: "Planos",
    icon: IconSparkles,
    link: "plans",
  },
];
const adminItems: NavButtonProps[] = [
  {
    label: "Dashboard",
    icon: IconLayout,
    link: "dashboard",
  },
  {
    label: "Candidatos",
    icon: IconUsers,
    link: "home",
  },
];

const MobileMenu = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div
      data-testid="main-nav-main-menu-section"
      className="flex w-full flex-col items-start justify-start gap-5"
    >
      {isHome && (
        <>
          <span className="pl-4 text-xs font-bold uppercase text-ribbon-950">
            menu geral
          </span>
          <div className="flex w-full flex-col items-start">
            {navigationItems.map((item) => (
              <RedirectButton key={item.link} {...item} />
            ))}
          </div>
        </>
      )}
      <span className="pl-4 text-xs font-bold uppercase text-ribbon-950 pt-4">
        admin
      </span>
      <div className="flex w-full flex-col items-start">
        {adminItems.map((item) => (
          <NavButton key={item.link} {...item} />
        ))}
      </div>
    </div>
  );
};
export default MobileMenu;
