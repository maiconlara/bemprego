import { IconButton } from "@/components/ui/icon-button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { IconMenu } from "@tabler/icons-react";
import MobileMenu from "./mobile-menu";
import logo from "../../assets/logo-text.svg";

const Mobile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full px-6 pt-6 justify-between items-center lg:hidden">
         <img
                onClick={() => {
                  navigate("/");
                }}
                src={logo}
                alt="logo"
                className="w-48 h-auto cursor-pointer"
              />
      <Sheet>
        <SheetTrigger>
          <IconButton Icon={IconMenu} />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="max-w-screen flex h-full w-full flex-col gap-5 bg-white p-5 md:max-w-[425px]"
        >
          <div className="flex w-full items-center justify-between mb-10 pl-4">
            <div className="flex items-center gap-3">
              <img
                onClick={() => {
                  navigate("/");
                }}
                src={logo}
                alt="logo"
                className="w-32 h-auto cursor-pointer"
              />
            </div>
            <SheetClose className="text-ribbon-950"></SheetClose>
          </div>

          <MobileMenu />
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Mobile;
