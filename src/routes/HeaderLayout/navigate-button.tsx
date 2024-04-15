import { IconType } from "@/lib/icon-type";
import { useNavigate } from "react-router-dom";

export interface NavButtonProps {
  label: string;
  icon: IconType;
  link: string;
}
export const NavButton = ({ icon: Icon, label, link }: NavButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className="
        flex
        h-11
        w-full
        items-center
        justify-start
        gap-3
        rounded-2xl
        px-4
        focus:outline-none
        focus:ring-2
        focus:ring-complementary/80
        focus:ring-offset-2
        focus:ring-offset-background
        xl:h-10
        bg-transparent
        group
    "
      onClick={() => {
        navigate(`/${link}`);
      }}
    >
      <Icon
        className="
                      h-5
                      w-5
                     text-ribbon-900
                      transition-colors
                      duration-200
                      group-hover:text-ribbon-600
                "
      />
      <span
        className="
                      text-sm
                      font-medium
                      text-ribbon-950
                      transition-colors
                      duration-200
                      group-hover:text-ribbon-600
                  "
      >
        {label}
      </span>
    </button>
  );
};
