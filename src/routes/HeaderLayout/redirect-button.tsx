import { NavButtonProps } from "./navigate-button";

const RedirectButton = ({ icon: Icon, label, link }: NavButtonProps) => {
    return (
      <a href={`/#${link}`} className="w-full">
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
      </a>
    );
  };
  export default RedirectButton;